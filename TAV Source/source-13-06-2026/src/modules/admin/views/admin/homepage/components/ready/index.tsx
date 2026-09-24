import { GetHomeReady, UpdateHomeReady } from "@apis/homepage.api";
import {
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
import { IHomeReady } from "@interfaces/IHomePage";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { uploadFile } from "@firebaseConnect/firebaseUpload";
import { useEffect, useState } from "react";
const Ready = () => {
  const brandColor = useColorModeValue("black", "white");
  const [dataApi, setDataApi] = useState<IHomeReady[] | undefined>();
  const [showForm, setShowForm] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300MB
  useEffect(() => {
    GetHomeReady().then((res) => {
      setDataApi(res.data);
    });
  }, []);
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
  const handleChangeTitle = (lang: "vi" | "en" | "ja", value: string) => {
    if (!dataApi) return;
    const newData = [...dataApi];
    newData[0].title[lang] = value;
    setDataApi(newData);
  };
  const handleChangeTitleSub = (lang: "vi" | "en" | "ja", value: string) => {
    if (!dataApi) return;
    const newData = [...dataApi];
    newData[0].subTitle[lang] = value;
    setDataApi(newData);
  };
  // const handleUpdate = () => {
  //   if (!dataApi || dataApi.length === 0) return;
  //   const form = new FormData();
  //   form.append("title", JSON.stringify(dataApi?.[0].title));
  //   form.append("subTitle", JSON.stringify(dataApi?.[0].subTitle));
  //   if (imageFile) {
  //     form.append("media", imageFile);
  //   }
  //   setIsUploading(true);
  //   for (let pair of form.entries()) {
  //     console.log(`${pair[0]}:`, pair[1]);
  //   }
  //   UpdateHomeReady(form)
  //     .then(() => {
  //       alert("Cập nhật thành công!");
  //       setImageFile(null);
  //       setImagePreview(null);
  //       return GetHomeReady();
  //     })
  //     .then((res) => {
  //       setDataApi(res.data);
  //     })
  //     .catch((err) => {
  //       setImageFile(null);
  //       setImagePreview(null);
  //       console.error("Lỗi cập nhật:", err.response?.data || err.message);
  //       alert("Cập nhật thất bại.");
  //     })
  //     .finally(() => {
  //       setIsUploading(false);
  //     });
  // };
  const handleUpdate = async () => {
    if (!dataApi || dataApi.length === 0) return;
    setIsUploading(true);

    let fileUploadURL = dataApi[0].media;
    if(imageFile) {
      fileUploadURL = await uploadToFirebase(imageFile);
    }
    const payload = {
      title: dataApi[0].title,
      subTitle: dataApi[0].subTitle,
      media: fileUploadURL ,
    };


    try {
      await UpdateHomeReady(payload);
      toast({ title: "Cập nhật thành công!", status: "success" });
      setImagePreview(null);
      const res = await GetHomeReady();
      setDataApi(res.data);
    } catch (err: unknown) {
      toast({ title: "Cập nhật thất bại.", status: "error" });
      console.error("Lỗi cập nhật:", err);
    } finally {
      setIsUploading(false);
    }
  };
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
    setImageFile(file);
  };
  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  return (
    <>
      <Button
        fontSize={"15px"}
        onClick={() => setShowForm((prev) => !prev)}
        mb={4}
      >
        {showForm ? "Ready" : "Ready"}
      </Button>

      {isUploading ? (
        <VStack gap={4} mt={10}>
          <Spinner size="xl" color="teal.500" />
          <Text fontSize="lg">Đang update, vui lòng chờ...</Text>
        </VStack>
      ) : (
        showForm && (
          <FormControl display={"flex"} flexDirection={"column"} gap={"10px"}>
            <FormLabel fontSize={"15px"} fontWeight={"bold"}>
              Title Main
            </FormLabel>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                VI:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.title?.vi || ""}
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
                value={dataApi?.[0]?.title?.en || ""}
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
                value={dataApi?.[0]?.title?.ja || ""}
                onChange={(e) => handleChangeTitle("ja", e.target.value)}
              />
            </Stack>

            <FormLabel fontSize={"15px"} fontWeight={"bold"}>
              Title Sub
            </FormLabel>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                VI:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.subTitle?.vi || ""}
                onChange={(e) => handleChangeTitleSub("vi", e.target.value)}
              />
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                EN:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.subTitle?.en || ""}
                onChange={(e) => handleChangeTitleSub("en", e.target.value)}
              />
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                JA:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.subTitle?.ja || ""}
                onChange={(e) => handleChangeTitleSub("ja", e.target.value)}
              />
            </Stack>

            <FormControl my={"50px"}>
              <ImageUploadBlock
                label="Chọn Video"
                currentImage={dataApi?.[0]?.media}
                file={imageFile}
                preview={imagePreview}
                onChange={handleImageChange}
                onClear={handleClearImage}
              />
            </FormControl>

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
    </>
  );
};

export default Ready;
