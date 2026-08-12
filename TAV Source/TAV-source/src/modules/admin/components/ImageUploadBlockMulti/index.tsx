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
  files?: File[];
  previews?: string[];
  currentImage?: string;
  preview?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: (index: number) => void;
}

const ImageUploadBlockMulti: React.FC<ImageUploadBlockProps> = ({
  label,
  currentImage,
  previews,
  onChange,
  onClear,
  files,
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
        multiple
        color={brandColor}
        onChange={onChange}
        sx={{ mb: 2 }}
        width="fit-content"
      />
      {previews?.map((preview, index) => {
        const isVideo = files?.[index]?.type?.startsWith("video");

        return (
          <Box
            key={index}
            sx={{ position: "relative", mt: 2, display: "inline-block", mr: 4 }}
          >
            <IconButton
              onClick={() => onClear(index)}
              sx={{
                zIndex: 1,
                position: "absolute",
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
                src={preview}
                width="200px"
                controls
                playsInline
                style={{ borderRadius: 8 }}
              />
            ) : (
              <img
                src={preview}
                alt={`Preview ${index}`}
                style={{
                  width: "200px",
                  borderRadius: 8,
                }}
              />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default ImageUploadBlockMulti;
*/