import { GetIntroduce1, UpdateIntroduce1 } from "@apis/homepage.api";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Spinner,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { IIntroduceFirst } from "@interfaces/IHomePage";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { useEffect, useState } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";
const First = () => {
  const [dataApi, setDataApi] = useState<IIntroduceFirst[] | undefined>();
  const [showForm, setShowForm] = useState(false);
  const brandColor = useColorModeValue("black", "white");
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300MB
  const [imageFileLarge, setImageFileLarge] = useState<File | null>(null);
  const [imagePreviewLarge, setImagePreviewLarge] = useState<string | null>(
    null
  );
  const [imageFileLight, setImageFileLight] = useState<File | null>(null);
  const [imagePreviewLight, setImagePreviewLight] = useState<string | null>(
    null
  );
  const [imageFileSmall, setImageFileSmall] = useState<File | null>(null);
  const [imagePreviewSmall, setImagePreviewSmall] = useState<string | null>(
    null
  );
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
  const handleImageChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) {
      return toast({ title: "File quá lớn!", status: "error" });
    }
    const preview = URL.createObjectURL(file);
    setImagePreviewLarge(preview);
    setImageFileLarge(file);
  };

  const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) {
      return toast({ title: "File quá lớn!", status: "error" });
    }
    setImagePreviewLight(URL.createObjectURL(file));
    setImageFileLight(file);
  };

  const handleImageChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) {
      return toast({ title: "File quá lớn!", status: "error" });
    }
    setImagePreviewSmall(URL.createObjectURL(file));
   setImageFileSmall(file);
  };
  const handleClearImage1 = () => {
    setImageFileLarge(null);
    setImagePreviewLarge("");
  };
  const handleClearImage2 = () => {
    setImageFileLight(null);
    setImagePreviewLight("");
  };
  const handleClearImage3 = () => {
    setImageFileSmall(null);
    setImagePreviewSmall("");
  };
  useEffect(() => {
    GetIntroduce1().then((res) => {
      setDataApi(res.data);
    });
  }, []);
  const handleChangeTitle = (lang: "vi" | "en" | "ja", value: string) => {
    if (!dataApi) return;
    const newData = [...dataApi];
    newData[0].title[lang] = value;
    setDataApi(newData);
  };

  const handleUpdate = async () => {
    if (!dataApi || dataApi.length === 0) return;
    setIsUploading(true);

    let imageLargeURL = dataApi[0].logoLarge;
    let imageLightURL = dataApi[0].logoLight;
    let imageSmallURL = dataApi[0].logoSmall;
    if (imageFileLarge) {
      imageLargeURL =await uploadToFirebase(imageFileLarge);
    }
    if (imageFileLight) {
      imageLightURL =await uploadToFirebase(imageFileLight);
    }
    if (imageFileSmall) {
      imageSmallURL =await uploadToFirebase(imageFileSmall);
    }

    const payload = {
      title: dataApi[0].title,
      logoLarge: imageLargeURL || dataApi[0].logoLarge,
      logoLight: imageLightURL || dataApi[0].logoLight,
      logoSmall: imageSmallURL || dataApi[0].logoSmall,
    };

    UpdateIntroduce1(payload)
      .then(() => {
        toast({ title: "Cập nhật thành công!", status: "success" });
        setImagePreviewLarge(null);
        setImagePreviewLight(null);
        setImagePreviewSmall(null);
        return GetIntroduce1();
      })
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => {
        toast({
          title: "Cập nhật thất bại.",
          description: err.message,
          status: "error",
        });
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  // const handleUpdate = () => {
  //   if (!dataApi || dataApi.length === 0) return;
  //   const form = new FormData();
  //   form.append("title", JSON.stringify(dataApi?.[0].title));
  //   if (imageFileLarge) {
  //     form.append("logoLarge", imageFileLarge);
  //   } else {
  //     form.append("logoLarge", dataApi[0].logoLarge);
  //   }
  //   if (imageFileLight) {
  //     form.append("logoLight", imageFileLight);
  //   } else {
  //     form.append("logoLight", dataApi[0].logoLight);
  //   }
  //   if (imageFileSmall) {
  //     form.append("logoSmall", imageFileSmall);
  //   } else {
  //     form.append("logoSmall", dataApi[0].logoSmall);
  //   }
  //   setIsUploading(true);
  //   UpdateIntroduce1(form)
  //     .then(() => {
  //       alert("Cập nhật thành công!");
  //       setImageFileLarge(null);
  //       setImageFileLight(null);
  //       setImageFileSmall(null);
  //       setImagePreviewLarge(null);
  //       setImagePreviewLight(null);
  //       setImagePreviewSmall(null);
  //       return GetIntroduce1();
  //     })
  //     .catch((err) => {
  //       setImageFileLarge(null);
  //       setImageFileLight(null);
  //       setImageFileSmall(null);
  //       setImagePreviewLarge(null);
  //       setImagePreviewLight(null);
  //       setImagePreviewSmall(null);
  //       console.error("Lỗi cập nhật:", err);
  //       alert("Cập nhật thất bại.");
  //     })
  //     .finally(() => {
  //       setIsUploading(false);
  //     });
  // };
  return (
    <Box>
      <Button
        fontSize={"15px"}
        onClick={() => setShowForm((prev) => !prev)}
        mb={4}
      >
        {showForm ? "First" : "First"}
      </Button>
      {isUploading ? (
        <VStack gap={4} mt={10}>
          <Spinner size="xl" color="teal.500" />
          <Text fontSize="lg">Đang update, vui lòng chờ...</Text>
        </VStack>
      ) : (
        showForm && (
          <FormControl display={"flex"} flexDirection={"column"} gap={"10px"}>
            <FormLabel mt={4} fontWeight={"bold"} fontSize={"15px"}>
              LinkGIF
            </FormLabel>
            <ImageUploadBlock
              label="Default"
              currentImage={dataApi?.[0]?.logoLarge}
              preview={imagePreviewLarge}
              file={imageFileLarge}
              onChange={handleImageChange1}
              onClear={handleClearImage1}
            />
            <ImageUploadBlock
              label="Light"
              currentImage={dataApi?.[0]?.logoLight}
              preview={imagePreviewLight}
              file={imageFileLight}
              onChange={handleImageChange2}
              onClear={handleClearImage2}
            />
            <ImageUploadBlock
              label="Mobile"
              currentImage={dataApi?.[0]?.logoSmall}
              preview={imagePreviewSmall}
              file={imageFileSmall}
              onChange={handleImageChange3}
              onClear={handleClearImage3}
            />

            <FormLabel fontSize={"15px"} fontWeight={"bold"}>
              Description
            </FormLabel>
            <Stack alignItems={"center"} direction={"row"} gap={0}>
              <FormLabel fontSize={"15px"} mb={0}>
                VI:
              </FormLabel>
              <Textarea
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
              <Textarea
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
              <Textarea
                fontSize={"15px"}
                color={brandColor}
                value={dataApi?.[0]?.title?.ja || ""}
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

export default First;
