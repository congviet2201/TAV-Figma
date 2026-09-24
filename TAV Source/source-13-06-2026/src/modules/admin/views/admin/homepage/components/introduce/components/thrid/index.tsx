import { GetIntroduce3, UpdateIntroduce3 } from "@apis/homepage.api";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { IIntroduceThrid } from "@interfaces/IHomePage";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { useEffect, useState } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";

const Thrid = () => {
  const [dataApi, setDataApi] = useState<IIntroduceThrid[] | undefined>();
  const [showForm, setShowForm] = useState(false);
  const brandColor = useColorModeValue("black", "white");
  const toast = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300MB

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file && file.size > MAX_FILE_SIZE) {
  //     alert("File quá lớn! Vui lòng chọn file nhỏ hơn 300MB.");
  //     return;
  //   }
  //   if (file) {
  //     const preview = URL.createObjectURL(file);
  //     setImageFile(file);
  //     setImagePreview(preview);
  //   }
  // };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) {
      return toast({ title: "File quá lớn!", status: "error" });
    }

    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
    setImageFile(file)

    
  };
    const uploadToFirebase = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setIsUploading(true);
      uploadFile(
        file,
        null,
        (url) => {
          setIsUploading(false);
          resolve(url);
        },
        (err) => {
          setIsUploading(false);
          reject(err);
        }
      );
    });
  };
  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview("");
  };
  useEffect(() => {
    GetIntroduce3().then((res) => {
      setDataApi(res.data);
    });
  }, []);
  const handleChangeTitle = (lang: "vi" | "en" | "ja", value: string) => {
    if (!dataApi) return;
    const updated = {
      ...dataApi[0],
      description: {
        ...dataApi[0].description,
        [lang]: value,
      },
    };
    setDataApi([updated]);
  };

  // const handleUpdate = () => {
  //   if (!dataApi || dataApi.length === 0) return;
  //   const form = new FormData();
  //   form.append("description", JSON.stringify(dataApi[0].description));
  //   if (imageFile) {
  //     form.append("picture", imageFile);
  //   } else {
  //     form.append("picture", dataApi[0].picture);
  //   }
  //   setIsUploading(true);
  //   UpdateIntroduce3(form)
  //     .then(() => {
  //       alert("Cập nhật thành công!");
  //       setImageFile(null);
  //       setImagePreview(null);
  //       return GetIntroduce3();
  //     })
  //     .then((res) => {
  //       setDataApi(res.data);
  //     })
  //     .catch((err) => {
  //       setImageFile(null);
  //       setImagePreview(null);
  //       console.error("Lỗi cập nhật:", err);
  //       alert("Cập nhật thất bại.");
  //     })
  //     .finally(() => {
  //       setIsUploading(false);
  //     });
  // };

  const handleUpdate = async () => {
    if (!dataApi || dataApi.length === 0) return;
    setIsUploading(true);

    let fileThirdURL = dataApi[0].picture;
    if(imageFile) {
      fileThirdURL = await uploadToFirebase(imageFile);
    }
    const payload = {
      description: dataApi[0].description,
      picture: fileThirdURL || dataApi[0].picture,
    };

    try {
      await UpdateIntroduce3(payload);
      toast({ title: "Cập nhật thành công!", status: "success" });
      setImagePreview(null);
      const res = await GetIntroduce3();
      setDataApi(res.data);
    } catch (err: unknown) {
      toast({
        title: "Cập nhật thất bại.",
        // description: err,
        description: (err as Error).message || "Có lỗi xảy ra",
        status: "error",
      });
      setImagePreview(null);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box>
      <Button
        fontSize={"15px"}
        onClick={() => setShowForm((prev) => !prev)}
        mb={4}
      >
        {showForm ? "Thrid" : "Thrid"}
      </Button>
      {isUploading ? (
        <VStack gap={4} mt={10}>
          <Spinner size="xl" color="teal.500" />
          <Text fontSize="lg">Đang update, vui lòng chờ...</Text>
        </VStack>
      ) : (
        showForm && (
          <FormControl display={"flex"} flexDirection={"column"} gap={"10px"}>
            <ImageUploadBlock
              label="Chọn Video"
              currentImage={dataApi?.[0]?.picture}
              preview={imagePreview}
              file={imageFile}
              onChange={handleImageChange}
              onClear={handleClearImage}
            />

            <FormLabel fontSize={"15px"} fontWeight={"bold"}>
              Description
            </FormLabel>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                VI:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.description?.vi || ""}
                onChange={(e) => handleChangeTitle("vi", e.target.value)}
              />
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                EN:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.description?.en || ""}
                onChange={(e) => handleChangeTitle("en", e.target.value)}
              />
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                JA:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.description?.ja || ""}
                onChange={(e) => handleChangeTitle("ja", e.target.value)}
              />
            </Stack>
            <Button
              fontSize={"15px"}
              colorScheme="teal"
              width={"100px"}
              onClick={handleUpdate}
            >
              Cập nhật
            </Button>
          </FormControl>
        )
      )}
    </Box>
  );
};

export default Thrid;
