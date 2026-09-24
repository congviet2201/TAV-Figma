import { GetIntroduce, UpdateIntroduce } from "@apis/homepage.api";
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
  Center,
} from "@chakra-ui/react";
import { IIntroduce } from "@interfaces/IAboutUs";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { useEffect, useState } from "react";
import { uploadFile } from "../../../../../../../firebaseConnect/firebaseUpload";
const Home = () => {
  const [dataApi, setDataApi] = useState<IIntroduce[] | undefined>();
  const [showForm, setShowForm] = useState(false);
  const brandColor = useColorModeValue("black", "white");
  const [imageFile1, setImageFile1] = useState<File | null>(null);
  const [imagePreview1, setImagePreview1] = useState<string | null>(null);
  const [imageFile2, setImageFile2] = useState<File | null>(null);
  const [imagePreview2, setImagePreview2] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  useEffect(() => {
    GetIntroduce().then((res) => {
      setDataApi(res.data.data.aboutUs);
    });
  }, []);

  const uploadToFirebase = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setIsUploadingImage(true);
      uploadFile(
        file,
        null,
        (url) => {
          setIsUploadingImage(false);
          resolve(url);
        },
        (err) => {
          setIsUploadingImage(false);
          reject(err);
        }
      );
    });
  };
  const handleChangeField = (
    field: "title" | "subTitle",
    lang: "vi" | "en" | "ja",
    value: string
  ) => {
    if (!dataApi) return;
    const updated = {
      ...dataApi[0],
      [field]: {
        ...dataApi[0][field],
        [lang]: value,
      },
    };
    setDataApi([updated]);
  };

  const handleChangeContent = (
    lang: "vi" | "en" | "ja",
    value: string,
    index: number
  ) => {
    if (!dataApi) return;
    const updatedContent = [...dataApi[0].content];
    updatedContent[index] = {
      ...updatedContent[index],
      [lang]: value,
    };
    const updated = {
      ...dataApi[0],
      content: updatedContent,
    };
    setDataApi([updated]);
  };

  const handleImageChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile1(file);
    const preview = URL.createObjectURL(file);
    setImagePreview1(preview);
    setSelectedFile(file);
  };

  const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile2(file);
    const preview = URL.createObjectURL(file);
    setImagePreview2(preview);
    setSelectedVideo(file);
  };

  const handleUpdate = async () => {
    if (!dataApi) return;
    let coverUrl = dataApi[0].cover;
    let videoUrl = dataApi[0].video;
    if (selectedFile) {
      coverUrl = await uploadToFirebase(selectedFile);
    }
    if (selectedVideo) {
      videoUrl = await uploadToFirebase(selectedVideo);
    }
    setIsUploading(true);
    const payload = {
      ...dataApi[0],
      cover: coverUrl ?? dataApi[0].cover,
      video: videoUrl ?? dataApi[0].video,
    };

    try {
      await UpdateIntroduce(payload);
      toast({ title: "Cập nhật thành công!", status: "success" });
      setImageFile1(null);
      setImagePreview1(null);
      setImageFile2(null);
      setImagePreview2(null);
      const res = await GetIntroduce();
      setDataApi(res.data.data.aboutUs);
    } catch (err) {
      toast({ title: `Cập nhật thất bại. ${err}`, status: "error" });
    } finally {
      setIsUploading(false);
    }
  };

  const handleClearImage1 = () => {
    setSelectedFile(null);
    setImagePreview1(null);
  };
  const handleClearImage2 = () => {
    setSelectedVideo(null);
    setImagePreview2(null);
  };

  return (
    <>
      {(isUploading || isUploadingImage) && (
        <Center
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg="rgba(255,255,255,0.3)"
          zIndex={9998}
        >
          <Spinner size="xl" color="green.500" />
          <Text ml={4} fontSize="lg" color="green.500">
            Đang xử lý...
          </Text>
        </Center>
      )}
      <Button
        fontSize={"15px"}
        onClick={() => setShowForm((prev) => !prev)}
        mb={4}
      >
        {showForm ? "Home" : "Home"}
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
              Title:
            </FormLabel>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                VI:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.title?.vi || ""}
                onChange={(e) =>
                  handleChangeField("title", "vi", e.target.value)
                }
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
                onChange={(e) =>
                  handleChangeField("title", "en", e.target.value)
                }
              />
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={0} mb={"30px"}>
              <FormLabel fontSize={"15px"} mb={0}>
                JA:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.title?.ja || ""}
                onChange={(e) =>
                  handleChangeField("title", "ja", e.target.value)
                }
              />
            </Stack>
            <ImageUploadBlock
              label="Chọn Ảnh"
              currentImage={dataApi?.[0]?.cover}
              preview={imagePreview1}
              file={imageFile1}
              onChange={handleImageChange1}
              onClear={handleClearImage1}
            />
            <FormLabel fontSize={"15px"} fontWeight={"bold"} mt={"30px"}>
              Subtitle:
            </FormLabel>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                VI:
              </FormLabel>
              <Input
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.subTitle?.vi || ""}
                onChange={(e) =>
                  handleChangeField("subTitle", "vi", e.target.value)
                }
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
                onChange={(e) =>
                  handleChangeField("subTitle", "en", e.target.value)
                }
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
                onChange={(e) =>
                  handleChangeField("subTitle", "ja", e.target.value)
                }
              />
            </Stack>
            <FormLabel fontSize="15px" fontWeight="bold">
              Content:
            </FormLabel>

            {dataApi?.[0]?.content?.map((item, index) => (
              <Box key={index} mb={4}>
                <Stack alignItems="center" direction="row" gap={2}>
                  <FormLabel fontSize="15px" mb={0}>
                    VI:
                  </FormLabel>
                  <Input
                    fontSize="15px"
                    color={brandColor}
                    value={item.vi}
                    onChange={(e) =>
                      handleChangeContent("vi", e.target.value, index)
                    }
                  />
                </Stack>
                <Stack alignItems="center" direction="row" gap={2} mt={2}>
                  <FormLabel fontSize="15px" mb={0}>
                    EN:
                  </FormLabel>
                  <Input
                    fontSize="15px"
                    color={brandColor}
                    value={item.en}
                    onChange={(e) =>
                      handleChangeContent("en", e.target.value, index)
                    }
                  />
                </Stack>
                <Stack alignItems="center" direction="row" gap={2} mt={2}>
                  <FormLabel fontSize="15px" mb={0}>
                    JA:
                  </FormLabel>
                  <Input
                    fontSize="15px"
                    color={brandColor}
                    value={item.ja}
                    onChange={(e) =>
                      handleChangeContent("ja", e.target.value, index)
                    }
                  />
                </Stack>
              </Box>
            ))}

            <ImageUploadBlock
              label="Chọn Video"
              currentImage={dataApi?.[0]?.video}
              file={imageFile2}
              preview={imagePreview2}
              onChange={handleImageChange2}
              onClear={handleClearImage2}
            />

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

export default Home;
