/* COMMENTED OUT FOR DUP PREVENTION */
/*import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  IconButton,
  Image,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface ImageUploadBlockProps {
  label: string;
  currentImage?: string;
  file?: File | null;
  preview?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const ImageUploadBlock: React.FC<ImageUploadBlockProps> = ({
  label,
  currentImage,
  preview,
  onChange,
  onClear,
  file,
}) => {
  const brandColor = useColorModeValue("black", "white");
  const getFileType = (src: string): "image" | "video" | "unknown" => {
    const cleanSrc = decodeURIComponent(src.split("?")[0]).toLowerCase();

    if (
      cleanSrc.includes(".jpg") ||
      cleanSrc.includes(".jpeg") ||
      cleanSrc.includes(".png") ||
      cleanSrc.includes(".gif") ||
      cleanSrc.includes(".webp")
    ) {
      return "image";
    }

    if (
      cleanSrc.includes(".mp4") ||
      cleanSrc.includes(".webm") ||
      cleanSrc.includes(".ogg")
    ) {
      return "video";
    }

    return "unknown";
  };
  const isVideo = file?.type?.startsWith("video");
  const fileType = currentImage ? getFileType(currentImage) : "unknown";
  return (
    <Stack alignItems="center" direction="row" gap={"50px"}>
      <FormLabel fontSize="15px" mb={0}>
        {label}
      </FormLabel>

      {fileType === "image" && (
        <Image
          src={currentImage}
          alt={`${label} preview`}
          objectFit="cover"
          width="100px"
          transform={{ md: "scale(1.7)" }}
        />
      )}

      {fileType === "video" && (
        <Box width="300px">
          <video
            src={currentImage}
            playsInline
            controls
            style={{
              borderRadius: 8,
            }}
          />
        </Box>
      )}

      <Input
        type="file"
        color={brandColor}
        onChange={onChange}
        sx={{ mb: 2 }}
        width="fit-content"
      />
      {preview && (
        <Box sx={{ position: "relative", mt: 2, display: "inline-block" }}>
          <IconButton
            onClick={onClear}
            sx={{
              position: "absolute",
              zIndex: 1,
              top: 4,
              right: 4,
              backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
            aria-label="clear media"
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          {isVideo ? (
            <video
              width="200px"
              playsInline
              controls
              style={{ borderRadius: 8 }}
            >
              <source src={preview} type={file?.type || "video/mp4"} />
              Trình duyệt không hỗ trợ video.
            </video>
          ) : (
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "200px",
                borderRadius: 8,
              }}
            />
          )}
        </Box>
      )}
    </Stack>
  );
};

export default ImageUploadBlock;
*/