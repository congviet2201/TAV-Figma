import { GetHomepage, UpdateHomepage } from "@apis/homepage.api";
import {
  Button,
  FormControl,
  Spinner,
  Text,
  VStack,
  useToast,
  Center,
} from "@chakra-ui/react";
import { IHome } from "@interfaces/IHomePage";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { useEffect, useState } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";
const Home = () => {
  const [dataApi, setDataApi] = useState<IHome[] | undefined>();
  const [showForm, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const toast = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300MB
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  useEffect(() => {
    GetHomepage().then((res) => {
      setDataApi(res.data);
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
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) {
      return toast({ title: "File quá lớn!", status: "error" });
    }
    setSelectedFile(file);
    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
  };

  const handleUpdate = async () => {
    if (!dataApi || dataApi.length === 0) return;
    setIsUploading(true);

    let imageUrl = dataApi[0].homePicture;
    if(selectedFile) {
      imageUrl = await uploadToFirebase(selectedFile);
    }
    const payload = {
      homeTitle: { vi: "", en: "", ja: "" },
      homePicture: imageUrl || dataApi[0].homePicture,
    };

    try {
      await UpdateHomepage(payload);
      toast({ title: "Cập nhật thành công!", status: "success" });
      setImagePreview(null);
      const res = await GetHomepage();
      setDataApi(res.data);
    } catch (err: unknown) {
      console.error("Lỗi cập nhật:", err);
      toast({ title: "Cập nhật thất bại.", status: "error" });
    } finally {
      setIsUploading(false);
    }
  };

  const handleClearImage = () => {
    setSelectedFile(null);
    setImagePreview("");
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
            <FormControl my={"50px"}>
              <ImageUploadBlock
                label="Chọn Video"
                currentImage={dataApi?.[0]?.homePicture}
                file={selectedFile}
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

export default Home;
