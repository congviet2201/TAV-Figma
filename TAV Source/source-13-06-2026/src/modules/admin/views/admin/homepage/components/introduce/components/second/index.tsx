import {
  DeleteIntroduce2,
  GetIntroduce2,
  PostIntroduce2,
  UpdateIntroduce2,
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
  Stack,
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
} from "@chakra-ui/react";
import { IIntroduceSecond } from "@interfaces/IHomePage";
import { useEffect, useState, useRef } from "react";

const Second = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataApi, setDataApi] = useState<IIntroduceSecond[] | undefined>();
  const toast = useToast();
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<IIntroduceSecond | null>(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const brandColor = useColorModeValue("black", "white");
  const openEditModal = (item: IIntroduceSecond) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };
  const handleEdit = () => {
    if (!currentItem) return;
    UpdateIntroduce2(currentItem).then(() => {
      toast({ title: "Cập nhật thành công", status: "success" });
      setDataApi((prev) =>
        prev?.map((el) => (el._id === currentItem._id ? currentItem : el))
      );
      setIsEditing(false);
    });
  };

  useEffect(() => {
    GetIntroduce2().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  const handleDelete = async (_id: string) => {
    try {
      await DeleteIntroduce2(_id);
      toast({ title: "Xóa thành công", status: "success" });
      // Gọi lại API để cập nhật danh sách
      const res = await GetIntroduce2();
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

  const handleCreate = () => {
    setCurrentItem({
      title: {
        vi: "",
        en: "",
        ja: "",
      },
      amount: 0,
      description: {
        vi: "",
        en: "",
        ja: "",
      },
    });
    setIsCreating(true);
    setIsEditing(true);
  };
  const handleSaveNewService = async () => {
    if (!currentItem) return;
    PostIntroduce2(currentItem)
      .then(() => {
        toast({ title: "Tạo mới thành công", status: "success" });

        setIsEditing(false);
        setIsCreating(false);
        GetIntroduce2().then((res) => {
          setDataApi(res.data);
        });
      })
      .catch(() => {
        toast({ title: "Tạo mới thất bại", status: "error" });
      });
  };
  return (
    <Box>
      <Button
        fontSize={"15px"}
        onClick={() => setShowForm((prev) => !prev)}
        mb={4}
      >
        {showForm ? "Second" : "Second"}
      </Button>
      {showForm && (
        <Box p={4}>
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
              <Box
                key={item._id}
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
              >
                <HStack justify="space-between">
                  <Box fontSize={"15px"}>
                    <Text>Title:</Text>
                    <Box pl={"1rem"}>
                      <Text fontWeight="bold">{item.title.vi}</Text>
                      <Text fontWeight="bold">{item.title.en}</Text>
                      <Text fontWeight="bold">{item.title.ja}</Text>
                    </Box>
                    <Text>Description:</Text>
                    <Box pl={"1rem"}>
                      <Text fontWeight="bold">{item.description.vi}</Text>
                      <Text fontWeight="bold">{item.description.en}</Text>
                      <Text fontWeight="bold">{item.description.ja}</Text>
                    </Box>
                    <Stack direction="row">
                      <Text>Số lượng: </Text>
                      <Text fontWeight="bold">{item.amount}</Text>
                    </Stack>
                  </Box>
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
                      onClick={() => onDeleteClick(item._id ?? "")}
                    />
                  </HStack>
                </HStack>
              </Box>
            ))}
            <Modal
              isOpen={isEditing}
              onClose={() => setIsEditing(false)}
              size={"full"}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontSize={"15px"}>Cập nhật nội dung</ModalHeader>
                <ModalCloseButton
                  onClick={() => {
                    setIsCreating(false);
                  }}
                />
                <ModalBody>
                  {(["vi", "en", "ja"] as const).map((lang) => (
                    <Box key={`title-${lang}`} mb={4}>
                      <FormControl>
                        <FormLabel fontSize="15px">
                          Tiêu đề ({lang.toUpperCase()})
                        </FormLabel>
                        <Input
                          fontSize="15px"
                          color={brandColor}
                          value={currentItem?.title?.[lang] || ""}
                          onChange={(e) =>
                            setCurrentItem((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    title: {
                                      ...prev.title,
                                      [lang]: e.target.value,
                                    },
                                  }
                                : prev
                            )
                          }
                        />
                      </FormControl>
                    </Box>
                  ))}

                  {(["vi", "en", "ja"] as const).map((lang) => (
                    <Box key={`desc-${lang}`} mb={4}>
                      <FormControl>
                        <FormLabel fontSize="15px">
                          Mô tả ({lang.toUpperCase()})
                        </FormLabel>
                        <Input
                          fontSize="15px"
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
                      </FormControl>
                    </Box>
                  ))}

                  <FormControl>
                    <FormLabel fontSize={"15px"}>Số lượng</FormLabel>
                    <Input
                      fontSize="15px"
                      color={brandColor}
                      type="number"
                      value={currentItem?.amount ?? ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                amount: value === "" ? "" : Number(value),
                              }
                            : prev
                        );
                      }}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button
                    fontSize={"15px"}
                    onClick={() => {
                      setIsEditing(false);
                      setIsCreating(false);
                    }}
                    mr={3}
                  >
                    Đóng
                  </Button>
                  {isCreating ? (
                    <Button
                      fontSize={"15px"}
                      colorScheme="green"
                      onClick={handleSaveNewService}
                    >
                      Tạo mới
                    </Button>
                  ) : (
                    <Button
                      fontSize={"15px"}
                      colorScheme="blue"
                      onClick={handleEdit}
                    >
                      Cập nhật
                    </Button>
                  )}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </VStack>
        </Box>
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
    </Box>
  );
};
export default Second;
