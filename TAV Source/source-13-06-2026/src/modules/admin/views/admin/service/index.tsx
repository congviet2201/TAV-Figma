import {
  GetService,
  PostService,
  UpdateService,
  DeleteService,
} from "@apis/homepage.api";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useColorModeValue,
  useToast,
  VStack,
  FormErrorMessage,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { IService } from "@interfaces/IService";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { useEffect, useState, useRef } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";

export default function Settings() {
  const toast = useToast();
  const brandColor = useColorModeValue("black", "white");
  const [dataApi, setDataApi] = useState<IService[] | undefined>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<IService | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300MB
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [errors, setErrors] = useState<{
    id?: string;
    title?: string;
    description?: { [key: string]: string };
    descriptionMenu?: { [key: string]: string };
    subTitle?: { [key: string]: string };
  }>({});

  const uploadToFirebase = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);
      uploadFile(
        file,
        null,
        (url) => {
          setIsLoading(false);
          resolve(url);
        },
        (err) => {
          setIsLoading(false);
          reject(err);
        }
      );
    });
  };
  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) return alert("File quá lớn!");
    setIconPreview(URL.createObjectURL(file));

    setIconFile(file);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) return alert("File quá lớn!");
    setImagePreview(URL.createObjectURL(file));

    setImageFile(file);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) return alert("File quá lớn!");
    setVideoPreview(URL.createObjectURL(file));

    setVideoFile(file);
  };

  const handleSaveNewService = async () => {
    if (!validateForm()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!currentItem) return;

    setIsLoading(true);

    let iconUploadURL;
    let imageUploadURL;
    let videoUploadURL;
    if (iconFile) {
      iconUploadURL = await uploadToFirebase(iconFile);
    }

    if (imageFile) {
      imageUploadURL = await uploadToFirebase(imageFile);
    }

    if (videoFile) {
      videoUploadURL = await uploadToFirebase(videoFile);
    }
    const payload = {
      id: currentItem.id,
      title: currentItem.title,
      subTitle: currentItem.subTitle,
      description: currentItem.description,
      descriptionMenu: currentItem.descriptionMenu,
      isShowInProducts: currentItem.isShowInProducts,
      icon: iconUploadURL,
      image: imageUploadURL,
      video: videoUploadURL,
    };
    console.log("data send: ", payload);

    try {
      await PostService(payload);
      toast({ title: "Tạo mới thành công", status: "success" });

      setIsEditing(false);
      setIsCreating(false);
      setIconPreview(null);
      setImagePreview(null);
      setVideoPreview(null);
      await GetService().then((res) => {
        setDataApi(res.data);
      });
    } catch (error) {
      console.error("Error creating service:", error);
      toast({ title: "Tạo mới thất bại", status: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!validateForm()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!currentItem || !currentItem._id) return;

    let iconUploadURL = currentItem.icon;
    let imageUploadURL = currentItem.image;
    let videoUploadURL = currentItem.video;
    if (iconFile) {
      iconUploadURL = await uploadToFirebase(iconFile);
    }

    if (imageFile) {
      imageUploadURL = await uploadToFirebase(imageFile);
    }

    if (videoFile) {
      videoUploadURL = await uploadToFirebase(videoFile);
    }
    setIsLoading(true);

    const payload = {
      title: currentItem.title,
      subTitle: currentItem.subTitle,
      description: currentItem.description,
      descriptionMenu: currentItem.descriptionMenu,
      isShowInProducts: currentItem.isShowInProducts,
      icon: iconUploadURL,
      image: imageUploadURL,
      video: videoUploadURL,
    };

    try {
      const res = await UpdateService(currentItem._id, payload);
      toast({ title: "Cập nhật thành công", status: "success" });
      console.log("Cập nhật thành công:", res.data);
      GetService().then((res) => {
        setDataApi(res.data);
      });
      setIsEditing(false);
      setIconPreview(null);
      setImagePreview(null);
      setVideoPreview(null);
    } catch (error) {
      console.error("Error updating service:", error);
      toast({ title: "Cập nhật thất bại", status: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  const openEditModal = (item: IService) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };
  useEffect(() => {
    GetService().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  const handleClearIcon = () => {
    setIconFile(null);
    setIconPreview("");
  };

  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  const handleClearVideo = () => {
    setVideoFile(null);
    setVideoPreview("");
  };
  const validateForm = () => {
    const newErrors: any = {};

    if (!currentItem?.id?.trim()) {
      newErrors.id = "ID không được để trống";
    }

    if (!currentItem?.title?.trim()) {
      newErrors.title = "Tiêu đề không được để trống";
    }

    // Validate description
    const descriptionErrors: { [key: string]: string } = {};
    if (currentItem?.description) {
      Object.entries(currentItem.description).forEach(([lang, value]) => {
        if (!value?.trim()) {
          descriptionErrors[
            lang
          ] = `Mô tả ${lang.toUpperCase()} không được để trống`;
        }
      });
    }
    if (Object.keys(descriptionErrors).length > 0) {
      newErrors.description = descriptionErrors;
    }

    // Validate descriptionMenu
    const descriptionMenuErrors: { [key: string]: string } = {};
    if (currentItem?.descriptionMenu) {
      Object.entries(currentItem.descriptionMenu).forEach(([lang, value]) => {
        if (!value?.trim()) {
          descriptionMenuErrors[
            lang
          ] = `Mô tả menu ${lang.toUpperCase()} không được để trống`;
        }
      });
    }
    if (Object.keys(descriptionMenuErrors).length > 0) {
      newErrors.descriptionMenu = descriptionMenuErrors;
    }

    // Validate subTitle
    const subTitleErrors: { [key: string]: string } = {};
    if (currentItem?.subTitle) {
      Object.entries(currentItem.subTitle).forEach(([lang, value]) => {
        if (!value?.trim()) {
          subTitleErrors[
            lang
          ] = `Tiêu đề phụ ${lang.toUpperCase()} không được để trống`;
        }
      });
    }
    if (Object.keys(subTitleErrors).length > 0) {
      newErrors.subTitle = subTitleErrors;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDelete = async (id: string) => {
    try {
      await DeleteService(id);

      toast({
        title: "Xoá thành công",
        description: `Service với ID ${id} đã được xoá!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      GetService().then((res) => {
        setDataApi(res.data);
      });
    } catch (error) {
      console.error("Lỗi khi xoá:", error);
      toast({
        title: "Xoá thất bại",
        description: "Không thể xoá Service. Vui lòng thử lại.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCreate = () => {
    setCurrentItem({
      id: "",
      image: "",
      icon: "",
      video: "",
      title: "",
      description: { vi: "", en: "", ja: "" },
      descriptionMenu: { vi: "", en: "", ja: "" },
      subTitle: { vi: "", en: "", ja: "" },
      isShowInProducts: false,
    });
    setIsCreating(true);
    setIsEditing(true);
  };

  const onDeleteClick = (id: string) => {
    setItemToDelete(id);
    setIsDeleteAlertOpen(true);
  };

  const onDeleteConfirm = () => {
    if (itemToDelete) {
      handleDelete(itemToDelete);
      setIsDeleteAlertOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <>
      {isLoading && (
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
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="green"
          onClick={handleCreate}
          mb={4}
        >
          Tạo mới
        </Button>
        <VStack spacing={4} align="stretch">
          {dataApi?.map((item) => (
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <HStack justify="space-between">
                <Text fontSize={"15px"} fontWeight="bold">
                  {item.title}
                </Text>
                <HStack spacing={2}>
                  <IconButton
                    icon={<EditIcon />}
                    aria-label="Edit"
                    colorScheme="blue"
                    onClick={() => {
                      openEditModal(item);
                    }}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete"
                    colorScheme="red"
                    onClick={() => onDeleteClick(item?._id ?? "")}
                  />
                </HStack>
              </HStack>
            </Box>
          ))}
          <Modal
            isOpen={isEditing}
            onClose={() => {
              setIsCreating(false);
              setIsEditing(false);
            }}
            size="full"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontSize={"15px"}>
                Cập nhật nội dung: {currentItem?.title}
              </ModalHeader>
              <ModalCloseButton
                onClick={() => {
                  setVideoPreview("");
                  setImagePreview("");
                  setIconPreview("");
                  setIsCreating(false);
                  setErrors({});
                }}
              />
              <ModalBody>
                <FormControl mb={4} isInvalid={!!errors.id}>
                  <FormLabel fontWeight={"bold"} fontSize={"15px"}>
                    id
                  </FormLabel>
                  <Input
                    fontSize={"15px"}
                    color={brandColor}
                    type="text"
                    value={currentItem?.id || ""}
                    onChange={(e) =>
                      setCurrentItem((prev) =>
                        prev
                          ? {
                              ...prev,
                              id: e.target.value,
                            }
                          : prev
                      )
                    }
                  />
                  <FormErrorMessage>{errors.id}</FormErrorMessage>
                </FormControl>
                <FormControl mb={4} isInvalid={!!errors.title}>
                  <FormLabel fontWeight={"bold"} fontSize={"15px"}>
                    Title
                  </FormLabel>
                  <Input
                    fontSize={"15px"}
                    color={brandColor}
                    type="text"
                    value={currentItem?.title || ""}
                    onChange={(e) =>
                      setCurrentItem((prev) =>
                        prev
                          ? {
                              ...prev,
                              title: e.target.value,
                            }
                          : prev
                      )
                    }
                  />
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>

                {(["vi", "en", "ja"] as const).map((lang) => (
                  <FormControl
                    key={`title-${lang}`}
                    mb={4}
                    isInvalid={!!errors.description?.[lang]}
                  >
                    <FormLabel fontWeight={"bold"} fontSize={"15px"}>
                      Mô tả Service ({lang.toUpperCase()})
                    </FormLabel>
                    <Input
                      fontSize={"15px"}
                      color={brandColor}
                      value={currentItem?.description?.[lang] || ""}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                description: {
                                  ...prev.description,
                                  [lang]: e.target.value,
                                },
                              }
                            : prev
                        )
                      }
                    />
                    <FormErrorMessage>
                      {errors.description?.[lang]}
                    </FormErrorMessage>
                  </FormControl>
                ))}

                {(["vi", "en", "ja"] as const).map((lang) => (
                  <FormControl
                    key={`desc-${lang}`}
                    mb={4}
                    isInvalid={!!errors.descriptionMenu?.[lang]}
                  >
                    <FormLabel fontWeight={"bold"} fontSize={"15px"}>
                      Mô tả Service Menu ({lang.toUpperCase()})
                    </FormLabel>
                    <Input
                      fontSize={"15px"}
                      color={brandColor}
                      value={currentItem?.descriptionMenu?.[lang] || ""}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                descriptionMenu: {
                                  ...prev.descriptionMenu,
                                  [lang]: e.target.value,
                                },
                              }
                            : prev
                        )
                      }
                    />
                    <FormErrorMessage>
                      {errors.descriptionMenu?.[lang]}
                    </FormErrorMessage>
                  </FormControl>
                ))}
                {(["vi", "en", "ja"] as const).map((lang) => (
                  <FormControl
                    key={`desc-${lang}`}
                    mb={4}
                    isInvalid={!!errors.subTitle?.[lang]}
                  >
                    <FormLabel fontWeight={"bold"} fontSize={"15px"}>
                      Mô tả Service HomePage ({lang.toUpperCase()})
                    </FormLabel>
                    <Input
                      fontSize={"15px"}
                      color={brandColor}
                      value={currentItem?.subTitle?.[lang] || ""}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                subTitle: {
                                  ...prev.subTitle,
                                  [lang]: e.target.value,
                                },
                              }
                            : prev
                        )
                      }
                    />
                    <FormErrorMessage>
                      {errors.subTitle?.[lang]}
                    </FormErrorMessage>
                  </FormControl>
                ))}
                <FormControl mt={"40px"} mb={"60px"}>
                  <ImageUploadBlock
                    label="Chọn Ảnh Icon"
                    currentImage={currentItem?.icon}
                    preview={iconPreview}
                    file={iconFile}
                    onChange={handleIconChange}
                    onClear={handleClearIcon}
                  />
                </FormControl>
                <FormControl mb={"30px"}>
                  <ImageUploadBlock
                    label="Chọn Ảnh"
                    currentImage={currentItem?.image}
                    file={imageFile}
                    preview={imagePreview}
                    onChange={handleImageChange}
                    onClear={handleClearImage}
                  />
                </FormControl>
                <FormControl mb={4}>
                  <ImageUploadBlock
                    label="Chọn Video"
                    currentImage={currentItem?.video}
                    file={videoFile}
                    preview={videoPreview}
                    onChange={handleVideoChange}
                    onClear={handleClearVideo}
                  />
                </FormControl>
                <FormControl display="flex" alignItems="center" mb={4}>
                  <FormLabel
                    htmlFor="show-in-products"
                    fontWeight={"bold"}
                    fontSize={"15px"}
                    mb="0"
                  >
                    Hiển thị trong Product
                  </FormLabel>
                  <Switch
                    id="show-in-products"
                    isChecked={currentItem?.isShowInProducts || false}
                    onChange={(e) =>
                      setCurrentItem((prev) =>
                        prev
                          ? { ...prev, isShowInProducts: e.target.checked }
                          : prev
                      )
                    }
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  fontSize={"15px"}
                  onClick={() => {
                    setIsEditing(false);
                    setIsCreating(false);
                    setVideoPreview("");
                    setImagePreview("");
                    setIconPreview("");
                    setErrors({});
                  }}
                  mr={3}
                >
                  Hủy
                </Button>
                {isCreating ? (
                  <Button
                    fontSize={"15px"}
                    colorScheme="green"
                    onClick={handleSaveNewService}
                    isLoading={isLoading}
                  >
                    Tạo mới
                  </Button>
                ) : (
                  <Button
                    fontSize={"15px"}
                    colorScheme="blue"
                    onClick={handleEdit}
                    isLoading={isLoading}
                  >
                    Cập nhật
                  </Button>
                )}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>

        <AlertDialog
          isOpen={isDeleteAlertOpen}
          leastDestructiveRef={cancelRef as React.RefObject<HTMLButtonElement>}
          onClose={() => setIsDeleteAlertOpen(false)}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="15px">
                Xác nhận xóa
              </AlertDialogHeader>

              <AlertDialogBody fontSize="15px">
                Bạn có chắc chắn muốn xóa mục này không?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={() => setIsDeleteAlertOpen(false)}
                  fontSize="15px"
                >
                  Hủy
                </Button>
                <Button
                  colorScheme="red"
                  onClick={onDeleteConfirm}
                  ml={3}
                  fontSize="15px"
                >
                  Xóa
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </>
  );
}
