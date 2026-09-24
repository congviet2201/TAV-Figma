import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig"; // Adjust the import path as necessary

export const uploadFile = (
  file: File,
  onProgress?: ((percent: number) => void) | null,
  onDone?: (url: string) => void,
  onError?: (error: Error) => void
): void => {
  const storageRef = ref(storage, `demoUpload/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (onProgress) onProgress(Math.round(percent));
    },
    (error) => onError?.(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(onDone).catch(onError);
    }
  );
};