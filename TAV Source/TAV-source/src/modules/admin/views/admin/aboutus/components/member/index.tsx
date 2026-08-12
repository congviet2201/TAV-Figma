/* COMMENTED OUT FOR DUP PREVENTION */
/*import {
  DeleteStaff,
  GetStaff,
  PostStaff,
  UpdateStaff,
} from "@apis/homepage.api";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useToast,
  VStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { IMember } from "@interfaces/IAboutUs";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { useEffect, useState, useRef } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";

const Member = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataApi, setDataApi] = useState<IMember[] | undefined>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<IMember | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const brandColor = useColorModeValue("black", "white");
  // const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300MB
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const openEditModal = (item: IMember) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };
  useEffect(() => {
    GetStaff().then((res) => {
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

  
  const handleEdit = async () => {
    if (!currentItem) return;
    setIsLoading(true);

    try {
      let uploadedFileUrl = currentItem.image;
      if (selectedFile) {
        uploadedFileUrl = await uploadToFirebase(selectedFile);
      }
      const payload: IMember = {
        ...currentItem,
        image: uploadedFileUrl,
        name: { ...currentItem.name },
        position: { ...currentItem.position },
      };

      await UpdateStaff(currentItem._id ?? "", payload);
      toast({ title: "Cập nhật thành công", status: "success" });
      setIsEditing(false);
      handleClearImage();
      const res = await GetStaff();
      setDataApi(res.data);
    } catch (err) {
      console.error("Lỗi cập nhật:", err);
      toast({ title: "Cập nhật thất bại", status: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  const handleCreate = () => {
    setCurrentItem({
      image: "",
      name: { vi: "", en: "", ja: "" },
      position: { vi: "", en: "", ja: "" },
    });
    setIsCreating(true);
    setIsEditing(true);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert("File quá lớn! Vui lòng chọn file nhỏ hơn 300MB.");
      return;
    }
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
    if (!file) return;
  };

  const handleClearImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
  };
  
  const handleSaveNewService = async () => {
    if (!currentItem) return;
    setIsLoading(true);

    try {
      let uploadedFileUrl = currentItem.image;
      if (selectedFile) {
        uploadedFileUrl = await uploadToFirebase(selectedFile);
      }
      const payload: IMember = {
        ...currentItem,
        image: uploadedFileUrl,
        name: { ...currentItem.name },
        position: { ...currentItem.position },
      };

      await PostStaff(payload);
      toast({ title: "Tạo mới thành công", status: "success" });
      setIsEditing(false);
      setIsCreating(false);
      setImagePreview(null);
      handleClearImage();
      const res = await GetStaff();
      setDataApi(res.data);
    } catch (err) {
      toast({ title: "Tạo mới thất bại", status: "error" });
    } finally {
      setIsLoading(false);
      setIsEditing(false);
      setIsCreating(false);
      setCurrentItem(null);
      setImagePreview(null);
    }
  };
  const handleDelete = async (_id: string) => {
    try {
      await DeleteStaff(_id);
      toast({ title: "Xóa thành công", status: "success" });
      // Gọi lại API để cập nhật danh sách
      const res = await GetStaff();
      setDataApi(res.data);
    } catch (err) {
      console.error("Lỗi xóa:", err);
      toast({ title: "Xóa thất bại", status: "error" });
    }
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
      {isUploadingImage && isLoading && (
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
        {showForm ? "Members" : "Members"}
      </Button>
      {showForm && (
        <FormControl display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Button
            width={"fit-content"}
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
                <HStack width={"100%"} justify="space-between">
                  <Image
                    flex={1}
                    src={item.image}
                    width={"100px"}
                    objectFit="cover"
                  />
                  <VStack flex={3.5} spacing={2}>
                    <HStack>
                      <Text fontWeight="bold" fontSize={"15px"}>
                        VI:
                      </Text>
                      <Text fontWeight="bold" fontSize={"15px"}>
                        {item.name.vi}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="bold" fontSize={"15px"}>
                        EN:
                      </Text>
                      <Text fontWeight="bold" fontSize={"15px"}>
                        {item.name.en}
                      </Text>
                    </HStack>
                  </VStack>
                  <HStack flex={3.5} justifyContent={"center"}>
                    <Text fontWeight="bold" fontSize={"15px"}>
                      Position:
                    </Text>
                    <Text fontWeight="bold" fontSize={"15px"}>
                      {item.position.en}
                    </Text>
                  </HStack>

                  <HStack flex={0.5} spacing={2}>
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
              onClose={() => setIsEditing(false)}
              size="full"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontSize={"15px"} mb={"50px"}>
                  Cập nhật thông tin: {currentItem?.name.vi}
                </ModalHeader>
                <ModalCloseButton
                  onClick={() => {
                    setImagePreview(null);
                    setIsCreating(false);
                  }}
                />
                <ModalBody>
                  <ImageUploadBlock
                    label=""
                    currentImage={currentItem?.image}
                    preview={imagePreview}
                    onChange={handleImageChange}
                    onClear={handleClearImage}
                  />

                  <FormControl mt={"50px"}>
                    <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                      Tên (VI)
                    </FormLabel>
                    <Input
                      color={brandColor}
                      fontSize={"15px"}
                      value={currentItem?.name?.vi || ""}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                name: {
                                  ...prev.name,
                                  vi: e.target.value,
                                },
                              }
                            : prev
                        )
                      }
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                      Tên (EN)
                    </FormLabel>
                    <Input
                      color={brandColor}
                      fontSize={"15px"}
                      value={currentItem?.name?.en || ""}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                name: {
                                  ...prev.name,
                                  en: e.target.value,
                                },
                              }
                            : prev
                        )
                      }
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                      Vị trí (VI)
                    </FormLabel>
                    <Input
                      color={brandColor}
                      fontSize={"15px"}
                      value={currentItem?.position?.vi || ""}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                position: {
                                  ...prev.position,
                                  vi: e.target.value,
                                },
                              }
                            : prev
                        )
                      }
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                      Vị trí (EN)
                    </FormLabel>
                    <Input
                      color={brandColor}
                      fontSize={"15px"}
                      value={currentItem?.position?.en || ""}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                position: {
                                  ...prev.position,
                                  en: e.target.value,
                                },
                              }
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
                      setImagePreview(null);
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
        </FormControl>
      )}

      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelRef as React.RefObject<HTMLButtonElement>}
        onClose={() => setIsDeleteAlertOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="15px">Xác nhận xóa</AlertDialogHeader>

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
    </>
  );
};

export default Member;
*/