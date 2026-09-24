import {
  CreateBlog,
  GetBlogCategories,
  GetBlogs,
  DeleteBlog,
  UpdateBlog,
} from "@apis/homepage.api";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
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
  Select,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  useToast,
  FormControl,
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
import { IBlog, IBlogCategory } from "@interfaces/IBlogs";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import { useEffect, useState, useRef } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";

const Blogs = () => {
  const [dataApi, setDataApi] = useState<IBlog[] | undefined>();
  const [dataApiCategory, setDataApiCategory] = useState<
    IBlogCategory[] | undefined
  >();
  const [selectedId, setSelectedId] = useState(dataApiCategory?.[0]?._id ?? "");
  const brandColor = useColorModeValue("black", "white");
  const [currentItem, setCurrentItem] = useState<IBlog | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [errors, setErrors] = useState<{
    author?: string;
    title?: { [key: string]: string };
    coverMedia?: string;
    blogCategory?: string;
    headerContent?: { [key: string]: string[] };
    data?: { [key: string]: string };
    subTitle?: { [key: string]: string };
  }>({});

  useEffect(() => {
    GetBlogs().then((res) => {
      setDataApi(res.data.data);
    });
    GetBlogCategories().then((res) => {
      setDataApiCategory(res.data);
    });
  }, []);

  useEffect(() => {
    if (dataApiCategory && dataApiCategory.length > 0 && !selectedId) {
      setSelectedId(dataApiCategory[0]._id ?? "");
    }
  }, [dataApiCategory, selectedId]);
  const openEditModal = (item: IBlog) => {
    setCurrentItem({ ...item });
    setIsEditing(true);
  };

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

  const validateForm = () => {
    const newErrors: any = {};

    if (!currentItem?.author?.trim()) {
      newErrors.author = "Tác giả không được để trống";
    }

    // Validate title
    const titleErrors: { [key: string]: string } = {};
    if (currentItem?.title) {
      Object.entries(currentItem.title).forEach(([lang, value]) => {
        if (!value?.trim()) {
          titleErrors[
            lang
          ] = `Tiêu đề ${lang.toUpperCase()} không được để trống`;
        }
      });
    }
    if (Object.keys(titleErrors).length > 0) {
      newErrors.title = titleErrors;
    }

    // Validate coverMedia for new items
    if (isCreating && !imageFile && !currentItem?.coverMedia) {
      newErrors.coverMedia = "Vui lòng chọn ảnh bìa";
    }

    // Validate blogCategory
    if (!selectedId) {
      newErrors.blogCategory = "Vui lòng chọn thể loại";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    setIsLoading(true);
    let imageUploadURL = currentItem.coverMedia;
    if (imageFile) {
      imageUploadURL = await uploadToFirebase(imageFile);
    }
    const payload = {
      ...currentItem,
      blogCategory: selectedId,
      coverMedia: imageUploadURL,
    };

    UpdateBlog(currentItem._id, payload)
      .then(() => {
        toast({ title: "Cập nhật thành công", status: "success" });
        handleClearImage();
        GetBlogs().then((res) => {
          setDataApi(res.data.data);
        });
        setIsEditing(false);
        setImageFile(null);
      })
      .catch(() => {
        toast({ title: "Cập nhật thất bại", status: "error" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleCreate = () => {
    setCurrentItem({
      coverMedia: "",
      title: {
        vi: "",
        en: "",
        ja: "",
      },
      author: "",
      createdAt: new Date().toISOString(),
      data: {
        vi: "",
        en: "",
        ja: "",
      },
      headerContent: {
        vi: [""],
        en: [""],
        ja: [""],
      },
      blogCategory: {
        name: { vi: "", en: "", ja: "" },
      },
      subTitle: {
        vi: "",
        en: "",
        ja: "",
      },
    });
    setIsCreating(true);
    setIsEditing(true);
  };

  const handleCreate1 = () => {
    if (!currentItem) return;

    const updatedItem = {
      ...currentItem,
      headerContent: {
        ...currentItem.headerContent,
        vi: [...(currentItem.headerContent.vi || []), ""],
        en: [...(currentItem.headerContent.en || []), ""],
        ja: [...(currentItem.headerContent.ja || []), ""],
      },
    };

    setCurrentItem(updatedItem);
  };

  const handleSaveNewBlog = async () => {
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
    let imageUploadURL;
    if (imageFile) {
      imageUploadURL = await uploadToFirebase(imageFile);
    }
    const payload = {
      ...currentItem,
      blogCategory: selectedId,
      coverMedia: imageUploadURL,
      // title: currentItem.title,
      // author: currentItem.author,

      // headerContent: currentItem.headerContent,
      // data: currentItem.data,
      // subTitle: currentItem.subTitle,
    };
    console.log("payload", payload);
    try {
      await CreateBlog(payload);
      setIsCreating(false);
      setIsEditing(false);
      setImageFile(null);
      setImagePreview(null);
      toast({ title: "Cập nhật thành công", status: "success" });
      setIsLoading(false);
      GetBlogs().then((res) => {
        setDataApi(res.data.data);
      });
    } catch (error) {
      toast({ title: "Cập nhật thất bại", status: "error" });
      console.log(error);
      setIsLoading(false);
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
    if (!file) return;
    setImageFile(file);
  };
  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  // const handleDeleteBlog = async (id: string) => {
  //   try {
  //     await DeleteBlog(id);

  //     toast({
  //       title: "Xoá thành công",
  //       description: `Blog với ID ${id} đã được xoá.`,
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     GetBlogs().then((res) => {
  //       setDataApi(res.data.data);
  //     });
  //     // setItemList((prev) => prev?.filter((item) => item._id !== id) ?? null);
  //   } catch (error) {
  //     console.error("Lỗi khi xoá:", error);
  //     toast({
  //       title: "Xoá thất bại",
  //       description: "Không thể xoá sản phẩm. Vui lòng thử lại.",
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };

  const onDeleteClick = (id: string) => {
    setItemToDelete(id);
    setIsDeleteAlertOpen(true);
  };

  const onDeleteConfirm = async () => {
    if (!itemToDelete) return;

    try {
      await DeleteBlog(itemToDelete);
      toast({
        title: "Xóa thành công",
        description: "Blog đã được xóa thành công.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      GetBlogs().then((res) => {
        setDataApi(res.data.data);
      });
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
      toast({
        title: "Xóa thất bại",
        description: "Không thể xóa blog. Vui lòng thử lại.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsDeleteAlertOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <>{isLoading && (
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
                {item.title.en}
              </Text>
              <HStack spacing={2}>
                <IconButton
                  icon={<EditIcon />}
                  aria-label="Edit"
                  colorScheme="blue"
                  onClick={() => {
                    openEditModal(item?._id ? item : ({} as IBlog));
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
          blockScrollOnMount={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"15px"}>Cập nhật nội dung</ModalHeader>

            <ModalCloseButton
              onClick={() => {
                setImagePreview("");
                setIsCreating(false);
                setErrors({});
              }}
            />
            <ModalBody>
              <FormControl isInvalid={!!errors.coverMedia}>
                <HStack mt={"40px"} mb={"50px"}>
                  <ImageUploadBlock
                    label="Ảnh:"
                    currentImage={currentItem?.coverMedia}
                    preview={imagePreview}
                    onChange={handleImageChange}
                    onClear={handleClearImage}
                  />
                </HStack>
                <FormErrorMessage>{errors.coverMedia}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.author}>
                <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                  Tác giả:
                </FormLabel>
                <HStack alignItems={"center"}>
                  <Input
                    color={brandColor}
                    sx={{ mb: 2 }}
                    fontSize={"15px"}
                    value={currentItem?.author}
                    onChange={(e) =>
                      setCurrentItem((prev) =>
                        prev ? { ...prev, author: e.target.value } : prev
                      )
                    }
                  />
                </HStack>
                <FormErrorMessage>{errors.author}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.title}>
                <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                  Tên:
                </FormLabel>
                {(["vi", "en", "ja"] as const).map((lang) => (
                  <HStack key={lang} alignItems={"center"} gap={0}>
                    <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                      {lang.toUpperCase()}:
                    </FormLabel>
                    <Input
                      color={brandColor}
                      sx={{ mb: 2 }}
                      fontSize={"15px"}
                      value={currentItem?.title[lang]}
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
                  </HStack>
                ))}
                <FormErrorMessage>
                  {errors.title && Object.values(errors.title)[0]}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.blogCategory}>
                <HStack alignItems="center" gap={0}>
                  <FormLabel fontSize="15px" fontWeight="bold">
                    Thể Loại:
                  </FormLabel>
                  <Select
                    width="fit-content"
                    fontSize="15px"
                    color={brandColor}
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                  >
                    {dataApiCategory?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name.vi}
                      </option>
                    ))}
                  </Select>
                </HStack>
                <FormErrorMessage>{errors.blogCategory}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.headerContent}>
                <HStack>
                  <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                    Chủ đề:
                  </FormLabel>
                  {isCreating && (
                    <Button
                      leftIcon={<AddIcon />}
                      colorScheme="green"
                      onClick={handleCreate1}
                      mb={4}
                    ></Button>
                  )}
                </HStack>

                {(["vi", "en", "ja"] as const).map((lang) => (
                  <Box key={lang}>
                    <FormLabel fontSize="15px" fontWeight="bold" minW="50px">
                      {lang.toUpperCase()}
                    </FormLabel>
                    {currentItem?.headerContent[lang]?.map((item, index) => (
                      <HStack key={index} alignItems="flex-start" gap={2}>
                        <Input
                          color={brandColor}
                          fontSize="15px"
                          value={item}
                          onChange={(e) => {
                            const newHeaderContent = [
                              ...(currentItem?.headerContent[lang] || []),
                            ];
                            newHeaderContent[index] = e.target.value;
                            setCurrentItem((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    headerContent: {
                                      ...prev.headerContent,
                                      [lang]: newHeaderContent,
                                    },
                                  }
                                : prev
                            );
                          }}
                        />
                        {errors.headerContent?.[lang]?.[index] && (
                          <FormErrorMessage>
                            {errors.headerContent[lang][index]}
                          </FormErrorMessage>
                        )}
                      </HStack>
                    ))}
                  </Box>
                ))}
              </FormControl>

              <FormControl isInvalid={!!errors.data}>
                <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                  Nội dung:
                </FormLabel>
                {(["vi", "en", "ja"] as const).map((lang) => (
                  <HStack key={lang} alignItems={"center"} gap={0}>
                    <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                      {lang.toUpperCase()}:
                    </FormLabel>
                    <Textarea
                      minH="200px"
                      color={brandColor}
                      sx={{ mb: 2 }}
                      fontSize={"15px"}
                      value={currentItem?.data[lang]}
                      onChange={(e) =>
                        setCurrentItem((prev) =>
                          prev
                            ? {
                                ...prev,
                                data: { ...prev.data, [lang]: e.target.value },
                              }
                            : prev
                        )
                      }
                    />
                  </HStack>
                ))}
                <FormErrorMessage>
                  {errors.data && Object.values(errors.data)[0]}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.subTitle}>
                <FormLabel fontSize={"15px"} fontWeight={"bold"} mt={"15px"}>
                  Tiêu đề phụ:
                </FormLabel>
                {(["vi", "en", "ja"] as const).map((lang) => (
                  <HStack key={lang} alignItems={"center"} gap={0}>
                    <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                      {lang.toUpperCase()}:
                    </FormLabel>
                    <Input
                      color={brandColor}
                      sx={{ mb: 2 }}
                      fontSize={"15px"}
                      value={currentItem?.subTitle[lang]}
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
                  </HStack>
                ))}
                <FormErrorMessage>
                  {errors.subTitle && Object.values(errors.subTitle)[0]}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                fontSize={"15px"}
                onClick={() => {
                  setIsEditing(false);
                  setIsCreating(false);
                  setImagePreview("");
                  setErrors({});
                }}
                mr={3}
              >
                Đóng
              </Button>
              {isCreating ? (
                <Button
                  fontSize={"15px"}
                  colorScheme="green"
                  onClick={handleSaveNewBlog}
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
            <AlertDialogHeader fontSize="15px">Xác nhận xóa</AlertDialogHeader>

            <AlertDialogBody fontSize="15px">
              Bạn có chắc chắn muốn xóa blog này không?
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
};

export default Blogs;
