import {
  GetRenderCG,
  GetRenderCGType,
  UpdateProduct,
  CreateProduct,
  GetProductByService
} from "@apis/homepage.api";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
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
  Select,
  Stack,
  Switch,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
  FormControl,
  Spinner,
  Center,
  Text,
} from "@chakra-ui/react";
import { I3DRender, IRenderType, IRenderType1 } from "@interfaces/IProduct";
import ImageUploadBlock from "@modules/admin/components/ImageUploadBlock";
import ImageUploadBlockMulti from "@modules/admin/components/ImageUploadBlockMulti";
import { useEffect, useState } from "react";
import { uploadFile } from "@firebaseConnect/firebaseUpload";

interface IProduct {
  currentItem1: I3DRender[] | null;
  setCurrentItem1: React.Dispatch<React.SetStateAction<I3DRender[] | null>>;
  isEditing1: boolean;
  setIsEditing1: React.Dispatch<React.SetStateAction<boolean>>;
  isCreating: boolean;
  setIsCreating: (value: boolean) => void;
  refetchData: () => void;
  setItemList: React.Dispatch<React.SetStateAction<I3DRender[] | null>>;
  isBulkCreating: boolean;
  setIsBulkCreating: (value: boolean) => void;
}

const InfoProduct: React.FC<IProduct> = ({
  currentItem1,
  setCurrentItem1,
  isEditing1,
  setIsEditing1,
  isCreating,
  setIsCreating,
  refetchData,
  setItemList,
  isBulkCreating,
  setIsBulkCreating,
}) => {
  const brandColor = useColorModeValue("black", "white");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile1, setImageFile1] = useState<File[]>([]);
  const [imagePreview1, setImagePreview1] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const [dataApiRenderCG, setDataApiRenderCG] = useState<
    IRenderType | undefined
  >();
  const [dataApiRenderCGType, setDataApiRenderCGType] = useState<
    IRenderType1 | undefined
  >();
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300MB
  const [bulkFiles, setBulkFiles] = useState<File[]>([]);
  const [bulkPreviews, setBulkPreviews] = useState<string[]>([]);
  const [bulkAutoIncrement, setBulkAutoIncrement] = useState<boolean>(true);

  useEffect(() => {
    if (isBulkCreating) {
      setBulkFiles([]);
      setBulkPreviews([]);
      setBulkAutoIncrement(true);
    }
  }, [isBulkCreating]);

  useEffect(() => {
    GetRenderCG().then((res) => {
      setDataApiRenderCG(res.data);
    });
    GetRenderCGType().then((res) => {
      setDataApiRenderCGType(res.data);
    });
  }, []);
  const emptyOption = {
    _id: "",
    name: { vi: "Không", en: "Không", ja: "Không" },
  };
  const updatedOptions = [emptyOption, ...(dataApiRenderCGType ?? [])];
  const emptyOption1 = {
    _id: "",
    name: "Project",
  };
  const updatedOptions1 = [
    emptyOption1,
    ...(dataApiRenderCG ? [dataApiRenderCG] : []),
  ];

  const getFileType = (src: string): "image" | "video" | "unknown" => {
    try {
      const url = new URL(src);
      const pathname = decodeURIComponent(url.pathname).toLowerCase();

      const match = pathname.match(/\.(jpg|jpeg|png|gif|webp|mp4|webm|ogg)/);
      if (!match) return "unknown";

      const ext = match[1];

      if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
      if (["mp4", "webm", "ogg"].includes(ext)) return "video";

      return "unknown";
    } catch {
      return "unknown";
    }
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

  const uploadMultipleToFirebase = async (files: File[]): Promise<string[]> => {
    const uploadPromises = files.map((file, index) =>
      uploadToFirebase(file).then((url) => ({ url, index }))
    );
    const results = await Promise.all(uploadPromises);
    return results.sort((a, b) => a.index - b.index).map((r) => r.url);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > MAX_FILE_SIZE) {
      return toast({ title: "File quá lớn!", status: "error" });
    }

    setImagePreview(URL.createObjectURL(file)); // giữ preview nếu cần

    setImageFile(file);
  };

  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    const previews = files.map((f) => URL.createObjectURL(f));
    setImagePreview1(previews); // giữ preview nếu cần

    setImageFile1(files);
  };

  const handleClearImage1 = (index: number) => {
    setImageFile1((prev) => prev.filter((_, i) => i !== index));
    setImagePreview1((prev) => prev.filter((_, i) => i !== index));
  };

  const handleBulkFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return toast({ title: `File "${file.name}" quá lớn!`, status: "error" });
      }
    }
    const previews = files.map((f) => URL.createObjectURL(f));
    setBulkPreviews((prev) => [...prev, ...previews]);
    setBulkFiles((prev) => [...prev, ...files]);
  };

  const handleClearBulkFile = (index: number) => {
    setBulkFiles((prev) => prev.filter((_, i) => i !== index));
    setBulkPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveNewProduct = async () => {
    if (!currentItem1) return;
    setIsLoading(true);

    const item = currentItem1[0];

    let mainFileUrl;
    if (imageFile) {
      mainFileUrl = await uploadToFirebase(imageFile);
    }
    let subFileUrl: string[] = [];
    if (imageFile1.length > 0) {
      subFileUrl = await uploadMultipleToFirebase(imageFile1);
    }

    const specialFields =
      item.service._id === "6837c64289fc431d04f97d90"
        ? {
            ...(item.indexShow && { indexShow: item.indexShow }),
            ...(item.subServices?._id && { subServices: item.subServices._id }),
            ...(item.subServiceOption?._id && {
              subServiceOption: item.subServiceOption._id,
            }),
          }
        : {};
    const payload = {
      name: item.name,
      media: mainFileUrl, // URL từ Firebase
      description: item.description,
      service: item.service._id,
      subMedia: subFileUrl,
      ...specialFields,
    };

    if (item.service._id === "6837c64289fc431d04f97d90") {
      if (item.indexShow) payload.indexShow = item.indexShow;
      if (item.subServices?._id) payload.subServices = item.subServices._id;
      if (item.subServiceOption?._id)
        payload.subServiceOption = item.subServiceOption._id;
    }

    try {
      await CreateProduct(payload);
      setIsCreating(true);
      setIsEditing1(false);
      await GetProductByService(item.service._id).then((res) => {
        setItemList(res.data.data || []);
      });
      refetchData();
      setImageFile(null);
      setImagePreview(null);
      setImageFile1([]);
      setImagePreview1([]);
      setIsLoading(false);
      toast({ title: "Thêm mới sản phẩm thành công", status: "success" });
    } catch (error) {
      console.error("Lỗi thêm mới sản phẩm:", error);
      toast({ title: "Thêm mới thất bại!", status: "error" });
      setIsLoading(false);
    }
  };

  const handleBulkSaveNewProduct = async () => {
    if (!currentItem1 || bulkFiles.length === 0) {
      toast({ title: "Vui lòng chọn ít nhất một file!", status: "warning" });
      return;
    }
    setIsLoading(true);
    const item = currentItem1[0];

    const uploadedUrls = await uploadMultipleToFirebase(bulkFiles);

    const specialFields =
      item.service._id === "6837c64289fc431d04f97d90"
        ? {
            ...(item.indexShow && { indexShow: item.indexShow }),
            ...(item.subServices?._id && { subServices: item.subServices._id }),
            ...(item.subServiceOption?._id && {
              subServiceOption: item.subServiceOption._id,
            }),
          }
        : {};

    try {
      const createPromises = uploadedUrls.map((url, index) => {
        const name = bulkAutoIncrement ? `${item.name} ${index + 1}` : item.name;
        const payload = {
          name,
          media: url,
          description: item.description,
          service: item.service._id,
          ...specialFields,
        };
        return CreateProduct(payload);
      });

      await Promise.all(createPromises);

      setIsBulkCreating(false);
      setIsCreating(false);
      setIsEditing1(false);
      await GetProductByService(item.service._id).then((res) => {
        setItemList(res.data.data || []);
      });
      refetchData();
      setBulkFiles([]);
      setBulkPreviews([]);
      setIsLoading(false);
      toast({ title: `Đã tạo ${uploadedUrls.length} sản phẩm thành công`, status: "success" });
    } catch (error) {
      console.error("Lỗi tạo hàng loạt:", error);
      toast({ title: "Tạo hàng loạt thất bại!", status: "error" });
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!currentItem1 || !currentItem1[0]) return;
    setIsLoading(true);
    const item = currentItem1[0];

    let mainFileUrl = item.media;
    if (imageFile) {
      mainFileUrl = await uploadToFirebase(imageFile);
    }

    // subMedia đã được cập nhật khi xóa ảnh trên UI
    let subMediaUrls = item.subMedia || [];
    if (imageFile1.length > 0) {
      const uploadedUrls = await uploadMultipleToFirebase(imageFile1);
      subMediaUrls = [...subMediaUrls, ...uploadedUrls];
    }

    const specialFields =
      item.service._id === "6837c64289fc431d04f97d90"
        ? {
            ...(item.indexShow && { indexShow: item.indexShow }),
            ...(item.subServices?._id && { subServices: item.subServices._id }),
            ...(item.subServiceOption?._id && {
              subServiceOption: item.subServiceOption._id,
            }),
          }
        : {};

    const payload = {
      name: item.name,
      media: mainFileUrl,
      description: item.description,
      service: item.service._id,
      subMedia: subMediaUrls,
      ...specialFields,
    };

    console.log("data send: ", payload);
    try {
      await UpdateProduct(item._id, payload);
      toast({ title: "Cập nhật thành công", status: "success" });
      setIsEditing1(false);
      await GetProductByService(item.service._id).then((res) => {
        setItemList(res.data.data || []);
      });
      handleClearImage();
      setImageFile1([]);
      setImagePreview1([]);
      refetchData();
    } catch (err: unknown) {
      console.error("Lỗi cập nhật:", err);
      toast({ title: "Cập nhật thất bại", status: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async (url: string) => {
    const updated = currentItem1?.[0]?.subMedia.filter((img) => img !== url);
    if (updated) {
      setCurrentItem1((prev) => {
        if (!prev || prev.length === 0) return prev;
        const updatedItem = { ...prev[0], subMedia: updated };
        return [updatedItem];
      });
    }
  };
  console.log(currentItem1);
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
      <Modal
        isOpen={isEditing1}
        onClose={() => setIsEditing1(false)}
        size="full"
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"15px"}>Cập nhật nội dung:</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setIsCreating(false);
              setIsBulkCreating(false);
            }}
          />
          <ModalBody>
            {/* <FormControl isInvalid={!!errors.name}> */}
            <FormControl>
              <HStack alignItems={"center"} gap={0}>
                <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                  Tên dự án:
                </FormLabel>
                <Input
                  width={"fit-content"}
                  fontSize={"15px"}
                  color={brandColor}
                  value={currentItem1?.[0]?.name || ""}
                  onChange={(e) => {
                    const updated = [...(currentItem1 || [])];
                    updated[0] = {
                      ...updated[0],
                      name: e.target.value,
                    };
                    setCurrentItem1(updated);
                  }}
                />
              </HStack>
              {/* <FormErrorMessage>{errors.name}</FormErrorMessage> */}
            </FormControl>
            {!isBulkCreating ? (
              <FormControl>
                <HStack alignItems={"center"} gap={0} my={"30px"}>
                  <ImageUploadBlock
                    label="Media chính:"
                    currentImage={currentItem1?.[0].media}
                    preview={imagePreview}
                    file={imageFile}
                    onChange={handleImageChange}
                    onClear={handleClearImage}
                  />
                </HStack>
              </FormControl>
            ) : (
              <>
                <HStack alignItems={"center"} gap={0} my={"30px"}>
                  <ImageUploadBlockMulti
                    label="Media:"
                    files={bulkFiles}
                    previews={bulkPreviews}
                    onChange={handleBulkFileChange}
                    onClear={handleClearBulkFile}
                  />
                </HStack>
                <HStack alignItems="center" gap={0} mb={"20px"}>
                  <FormLabel fontSize="15px" fontWeight="bold" mb={0}>
                    Tự động tăng tên:
                  </FormLabel>
                  <Switch
                    isChecked={bulkAutoIncrement}
                    onChange={(e) => setBulkAutoIncrement(e.target.checked)}
                  />
                </HStack>
              </>
            )}
            <VStack alignItems={"flex-start"} gap={0}>
              <FormLabel fontSize="15px" fontWeight="bold" minW="60px" mt="2">
                Mô tả:
              </FormLabel>
              <VStack align="stretch" spacing={0} width={"100%"}>
                {(["vi", "en", "ja"] as const).map((lang) => (
                  <FormControl
                    key={lang}
                    // isInvalid={!!errors.description?.[lang]}
                  >
                    <HStack gap={0}>
                      <FormLabel
                        fontSize="15px"
                        fontWeight="bold"
                        minW="60px"
                        mt="2"
                      >
                        {lang.toUpperCase()}:
                      </FormLabel>
                      <Textarea
                        placeholder={`Mô tả (${lang.toUpperCase()})`}
                        fontSize="15px"
                        color={brandColor}
                        value={currentItem1?.[0]?.description?.[lang] || " "}
                        onChange={(e) => {
                          const updated = [...(currentItem1 || [])];
                          const current = updated[0] || {};
                          updated[0] = {
                            ...current,
                            description: {
                              ...(current.description || {}),
                              [lang]: e.target.value,
                            },
                          };
                          setCurrentItem1(updated);
                        }}
                      />
                    </HStack>
                  </FormControl>
                ))}
              </VStack>
            </VStack>

            {currentItem1?.[0]?.service?._id === "6837c64289fc431d04f97d90" && (
              <HStack alignItems={"center"} gap={0}>
                <FormLabel fontSize={"15px"} fontWeight={"bold"}>
                  indexShow Dự Án:
                </FormLabel>

                <Input
                  type="number"
                  width={"fit-content"}
                  fontSize={"15px"}
                  color={brandColor}
                  value={
                    currentItem1?.[0]?.indexShow === null ||
                    currentItem1?.[0]?.indexShow === undefined
                      ? ""
                      : currentItem1?.[0]?.indexShow
                  }
                  onChange={(e) => {
                    const val = e.target.value;
                    const updated = [...(currentItem1 || [])];

                    updated[0] = {
                      ...updated[0],
                      indexShow: val === "" ? null : parseInt(val, 10),
                    };

                    setCurrentItem1(updated);
                  }}
                />
              </HStack>
            )}

            {currentItem1?.[0]?.service?._id === "6837c64289fc431d04f97d90" && (
              <HStack alignItems="center" gap={0}>
                <FormLabel fontSize="15px" fontWeight="bold">
                  Loại:
                </FormLabel>
                <Select
                  width="fit-content"
                  fontSize="15px"
                  color={brandColor}
                  value={currentItem1?.[0]?.subServices?._id ?? ""}
                  onChange={(e) => {
                    const updated = [...(currentItem1 || [])];
                    updated[0] = {
                      ...updated[0],
                      subServices: {
                        ...(updated[0].subServices || {}),
                        _id: e.target.value,
                      },
                    };
                    setCurrentItem1(updated);
                  }}
                >
                  {updatedOptions1?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                  {/* <option value={dataApiRenderCG?._id ?? ""}>
                  {dataApiRenderCG?.name ?? ""}
                </option>
                <option value=" ">Project</option> */}
                </Select>
              </HStack>
            )}

            {currentItem1?.[0]?.service?._id === "6837c64289fc431d04f97d90" && (
              <HStack alignItems="center" gap={0}>
                <FormLabel fontSize="15px" fontWeight="bold">
                  Loại RenderCG:
                </FormLabel>
                <Select
                  width="fit-content"
                  fontSize="15px"
                  color={brandColor}
                  value={currentItem1?.[0]?.subServiceOption?._id ?? ""}
                  onChange={(e) => {
                    const selectedId = e.target.value;
                    const selectedOption = dataApiRenderCGType?.find(
                      (item) => item._id === selectedId
                    );
                    if (!selectedOption) return;
                    const updated = [...(currentItem1 || [])];
                    updated[0] = {
                      ...updated[0],
                      subServiceOption: selectedOption,
                    };
                    setCurrentItem1(updated);
                  }}
                >
                  {updatedOptions?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name.vi}
                    </option>
                  ))}
                </Select>
              </HStack>
            )}

            {!isBulkCreating && (
              <>
                <HStack alignItems={"center"} gap={0}>
                  <ImageUploadBlockMulti
                    label="Media phụ:"
                    files={imageFile1}
                    previews={imagePreview1}
                    onChange={handleImageChange1}
                    onClear={handleClearImage1}
                  />
                </HStack>

                <Stack direction="row" gap={0} flexWrap="wrap">
                  {currentItem1?.[0]?.subMedia?.map((item, index) => (
                    <Box key={index} p={2} borderBottomWidth="1px">
                      <Box position="relative" width="100px" height="100px">
                        <IconButton
                          icon={<DeleteIcon />}
                          aria-label="Delete"
                          colorScheme="red"
                          size="sm"
                          position="absolute"
                          top="0"
                          right="0"
                          zIndex="1"
                          onClick={() => handleDelete(item ?? "")}
                        />
                        {getFileType(item) === "image" ? (
                          <Image
                            src={item}
                            width="100px"
                            height="100px"
                            objectFit="cover"
                          />
                        ) : (
                          <Box
                            as="video"
                            src={item}
                            width="100px"
                            height="100px"
                            objectFit="cover"
                            autoPlay
                            muted
                            loop
                          />
                        )}
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              fontSize={"15px"}
              onClick={() => {
                setIsEditing1(false);
                setIsCreating(false);
                setIsBulkCreating(false);
              }}
              mr={3}
            >
              Đóng
            </Button>
            {isBulkCreating ? (
              <Button
                fontSize={"15px"}
                colorScheme="green"
                isLoading={isLoading}
                onClick={handleBulkSaveNewProduct}
              >
                Tạo tất cả
              </Button>
            ) : isCreating ? (
              <Button
                fontSize={"15px"}
                colorScheme="green"
                isLoading={isLoading}
                onClick={handleSaveNewProduct}
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
    </>
  );
};

export default InfoProduct;
