/* COMMENTED OUT FOR DUP PREVENTION */
/*import { GetIntroduce, UpdateIntroduce } from "@apis/homepage.api";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  HStack,
  IconButton,
  Image,
  Spinner,
  Text,
  VStack,
  useToast
} from "@chakra-ui/react";
import { IListImg } from "@interfaces/IAboutUs";
import ImageUploadBlockMulti from "@modules/admin/components/ImageUploadBlockMulti";
import { useEffect, useState } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";
const ListImg = () => {
  const [dataApi, setDataApi] = useState<IListImg[] | undefined>();
  const [showForm, setShowForm] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);

  useEffect(() => {
    GetIntroduce().then((res) => {
      setDataApi(res.data.data.aboutUs);
    });
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviews(previews);
    setFiles(files);
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
  const uploadMultipleToFirebase = async (files: File[]): Promise<string[]> => {
    const uploadPromises = files.map((file) => uploadToFirebase(file));
    return Promise.all(uploadPromises);
  };
  const handleClear = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdate = async () => {
    if (!dataApi || dataApi.length === 0) return;
    const currentImages = dataApi[0].image;
  let newImageUrls: string[] = [];
  if (files.length > 0) {
    newImageUrls = await uploadMultipleToFirebase(files);
  }
      const allImages = [...currentImages, ...newImageUrls];

  const payload = {
    ...dataApi[0],
    image: allImages,
  };



    console.log("data", imagesToDelete);

    setIsUploading(true);
    UpdateIntroduce(payload)
      .then(() => {
        toast({ title: "Cập nhật thành công", status: "success" });
        setFiles([]);
        setPreviews([]);
        setImagesToDelete([]);
        return GetIntroduce();
      })
      .then((res) => {
        setDataApi(res.data.data.aboutUs);
      })
      .catch((err) => {
        toast({ title: `Cập nhật thất bại: ${err}`, status: "error" });
        setFiles([]);
        setPreviews([]);
        alert("Cập nhật thất bại.");
      })
      .finally(() => {
        setIsUploading(false);
      });
  };
  // const handleDelete = (url: string) => {
  //   const updated = dataApi?.[0]?.image.filter((img) => img !== url);
  //   if (updated) {
  //     setDataApi([{ image: updated }]);
  //     setImagesToDelete((prev) => [...prev, url]);
  //     alert(imagesToDelete);
  //   }
  // };

  const handleDelete = (url: string) => {
  const updated = dataApi?.[0]?.image.filter((img) => img !== url);
  if (updated) {
    setDataApi([{ image: updated }]);
    setImagesToDelete((prev) => {
      const newArr = [...prev, url];
      return newArr;
    });
  }
};
  return (
    <>
      <Button
        fontSize={"15px"}
        onClick={() => setShowForm((prev) => !prev)}
        mb={4}
      >
        {showForm ? "ListImg" : "ListImg"}
      </Button>
      {isUploading ? (
        <VStack gap={4} mt={10}>
          <Spinner size="xl" color="teal.500" />
          <Text fontSize="lg">Đang update, vui lòng chờ...</Text>
        </VStack>
      ) : (
        showForm && (
          <FormControl display={"flex"} flexDirection={"column"} gap={"10px"}>
            <ImageUploadBlockMulti
              label="Chọn Ảnh:"
              files={files}
              previews={previews}
              onChange={handleChange}
              onClear={handleClear}
            />
            <Button
              fontSize={"15px"}
              colorScheme="teal"
              width={"100px"}
              onClick={handleUpdate}
            >
              Cập nhật
            </Button>
            <VStack spacing={4} align="stretch">
              {dataApi?.[0].image?.map((item) => (
                <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                  <HStack justify="space-between">
                    <Image src={item} width={"200px"} />
                    <HStack spacing={2}>
                      <IconButton
                        icon={<DeleteIcon />}
                        aria-label="Delete"
                        colorScheme="red"
                        onClick={() => handleDelete(item)}
                      />
                    </HStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </FormControl>
        )
      )}
    </>
  );
};

export default ListImg;
*/