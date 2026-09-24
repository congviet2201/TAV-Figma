/**
 * Returns true if the URL is a Firebase Storage download URL.
 * Local assets, Cloudinary URLs, and any other CDN are excluded.
 */
export function isFirebaseStorageUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return url.startsWith("https://firebasestorage.googleapis.com/");
}

/**
 * Derives the thumbnail download URL for a Firebase Storage file that was
 * processed by the "Resize Images" extension.
 *
 * Default extension config:
 *   - Output location: a folder called "thumbnails" inside the same directory
 *     as the original file
 *   - File name: same as original with size suffix before extension
 *   - Access token: the extension preserves the same download token as the
 *     original, so we can swap the path while keeping the token query params
 *
 * Example:
 *   Original:  RENDER%203D%20WEBP%2Fimage.webp?alt=media&token=abc
 *   Thumbnail: RENDER%203D%20WEBP%2Fthumbnails%2Fimage_400x400.webp?alt=media&token=abc
 *
 * @param originalUrl  Full Firebase Storage download URL
 * @param size         Size string matching the extension config, e.g. "400x400"
 * @returns            Thumbnail URL, or the original URL if it is not a
 *                     Firebase Storage URL or the path cannot be parsed
 */
export function getThumbUrl(originalUrl: string, size: string = "400x400"): string {
  if (!isFirebaseStorageUrl(originalUrl)) {
    // Not a Firebase URL — return as-is (local asset, Cloudinary, etc.)
    return originalUrl;
  }

  try {
    const url = new URL(originalUrl);

    // Pathname: /v0/b/<bucket>/o/<encoded-object-path>
    const pathMatch = url.pathname.match(/^(\/v0\/b\/[^/]+\/o\/)(.+)$/);
    if (!pathMatch) return originalUrl;

    const prefix = pathMatch[1];       // "/v0/b/<bucket>/o/"
    const encodedPath = pathMatch[2];  // URL-encoded object path
    const decodedPath = decodeURIComponent(encodedPath);

    // Split into directory and filename
    const lastSlash = decodedPath.lastIndexOf("/");
    const dir = lastSlash >= 0 ? decodedPath.slice(0, lastSlash + 1) : "";
    const filename = lastSlash >= 0 ? decodedPath.slice(lastSlash + 1) : decodedPath;

    // Insert size suffix before the file extension — preserves the original
    // extension so existing .jpg / .png thumbnails still resolve correctly.
    // If the actual thumbnail file is .webp instead, ThumbImage falls back
    // to getThumbUrlWebp() on error.
    const dotIndex = filename.lastIndexOf(".");
    if (dotIndex === -1) return originalUrl;
    const thumbFilename =
      filename.slice(0, dotIndex) + `_${size}` + filename.slice(dotIndex);

    // Thumbnail lives in a "thumbnails/" subfolder next to the original
    const thumbPath = dir + "thumbnails/" + thumbFilename;

    // Rebuild the URL: keep the same base + query params (token is identical)
    url.pathname = prefix + encodeURIComponent(thumbPath).replace(/%2F/g, "%2F");
    return url.toString();
  } catch {
    return originalUrl;
  }
}

/**
 * Same as getThumbUrl but always outputs the .webp extension, for use as a
 * fallback when the original-extension thumbnail returns a 404.
 */
export function getThumbUrlWebp(originalUrl: string, size: string = "400x400"): string {
  if (!isFirebaseStorageUrl(originalUrl)) return originalUrl;

  try {
    const url = new URL(originalUrl);

    const pathMatch = url.pathname.match(/^(\/v0\/b\/[^/]+\/o\/)(.+)$/);
    if (!pathMatch) return originalUrl;

    const prefix = pathMatch[1];
    const encodedPath = pathMatch[2];
    const decodedPath = decodeURIComponent(encodedPath);

    const lastSlash = decodedPath.lastIndexOf("/");
    const dir = lastSlash >= 0 ? decodedPath.slice(0, lastSlash + 1) : "";
    const filename = lastSlash >= 0 ? decodedPath.slice(lastSlash + 1) : decodedPath;

    const dotIndex = filename.lastIndexOf(".");
    if (dotIndex === -1) return originalUrl;

    const thumbFilename = filename.slice(0, dotIndex) + `_${size}.webp`;
    const thumbPath = dir + "thumbnails/" + thumbFilename;

    url.pathname = prefix + encodeURIComponent(thumbPath).replace(/%2F/g, "%2F");
    return url.toString();
  } catch {
    return originalUrl;
  }
}

/**
 * Returns true if the given URL points to an image file (not a video).
 * Strips query params before testing the extension.
 */
export function isImageFile(src: string): boolean {
  const cleanSrc = src.split("?")[0];
  const decodedSrc = decodeURIComponent(cleanSrc);
  return /\.(jpg|jpeg|png|gif|webp)/i.test(decodedSrc);
}

/**
 * Derives the poster frame URL for a Firebase Storage video file.
 *
 * The generate-thumbnails script extracts the first frame of each video
 * and uploads it to a "thumbnails/" subfolder with the suffix "_poster.jpg",
 * preserving the original file's download token.
 *
 * Example:
 *   Original:  RENDER%203D%20WEBP%2Fvideo.mp4?alt=media&token=abc
 *   Poster:    RENDER%203D%20WEBP%2Fthumbnails%2Fvideo_poster.jpg?alt=media&token=abc
 *
 * Returns the original URL unchanged if:
 *  - It is not a Firebase Storage URL
 *  - The path cannot be parsed
 *  - The source is not a video file (returns empty string instead)
 */
export function getPosterUrl(videoUrl: string | null | undefined): string {
  if (!videoUrl) return "";
  if (!isFirebaseStorageUrl(videoUrl)) return "";

  // Only derive poster for video files
  const cleanUrl = videoUrl.split("?")[0];
  const decoded = decodeURIComponent(cleanUrl);
  if (!/\.(mp4|mov|webm|avi|mkv)$/i.test(decoded)) return "";

  try {
    const url = new URL(videoUrl);

    const pathMatch = url.pathname.match(/^(\/v0\/b\/[^/]+\/o\/)(.+)$/);
    if (!pathMatch) return "";

    const prefix = pathMatch[1];
    const encodedPath = pathMatch[2];
    const decodedPath = decodeURIComponent(encodedPath);

    const lastSlash = decodedPath.lastIndexOf("/");
    const dir = lastSlash >= 0 ? decodedPath.slice(0, lastSlash + 1) : "";
    const filename = lastSlash >= 0 ? decodedPath.slice(lastSlash + 1) : decodedPath;

    const dotIndex = filename.lastIndexOf(".");
    if (dotIndex === -1) return "";

    const posterFilename = filename.slice(0, dotIndex) + "_poster.webp";
    const posterPath = dir + "thumbnails/" + posterFilename;

    url.pathname = prefix + encodeURIComponent(posterPath).replace(/%2F/g, "%2F");
    return url.toString();
  } catch {
    return "";
  }
}
