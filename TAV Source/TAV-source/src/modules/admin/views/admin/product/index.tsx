/* COMMENTED OUT FOR DUP PREVENTION */
/*import {
  Get3DMapping,
  Get3DModel,
  Get3DRender,
  Get3DRenderCG,
  GetInteractiveApp,
  GetService,
} from "@apis/homepage.api";
import arrowLeft1 from "@assets/image/arrowLeft.png";
import arrowLeft2 from "@assets/image/arrowLeft2.png";
import arrowRight1 from "@assets/image/arrowRight.png";
import arrowRight2 from "@assets/image/arrowRight2.png";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
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
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import { I3DRender } from "@interfaces/IProduct";
import { IService } from "@interfaces/IService";
import { useEffect, useState, useRef } from "react";
import InfoProduct from "./components/info_product";
import { DeleteProduct } from "@apis/homepage.api";
// import {UpdateProduct} from "@apis/homepage.api"
export default function Overview() {
  const toast = useToast();
  const arrowLeft = useColorModeValue(arrowLeft1, arrowLeft2);
  const arrowRight = useColorModeValue(arrowRight1, arrowRight2);
  const [dataApi, setDataApi] = useState<IService[] | undefined>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isEditing1, setIsEditing1] = useState<boolean>(false);
  const [itemList, setItemList] = useState<I3DRender[] | null>(null);
  const [currentItem1, setCurrentItem1] = useState<I3DRender[] | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [dataApi3DMapping, setDataApi3DMapping] = useState<
    I3DRender[] | undefined
  >();
  const [dataApi3DRender, setDataApi3DRender] = useState<
    I3DRender[] | undefined
  >();
  const [dataApiInteractiveApp, setDataApiInteractiveApp] = useState<
    I3DRender[] | undefined
  >();
  const [dataApi3DModel, setDataApi3DModel] = useState<
    I3DRender[] | undefined
  >();
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string>("");
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedRenderType, setSelectedRenderType] = useState<
    "render3d" | "render3dCG"
  >("render3d");
  const [dataApi3DRenderCG, setDataApi3DRenderCG] = useState<
    I3DRender[] | undefined
  >();
  const [isBulkCreating, setIsBulkCreating] = useState<boolean>(false);
  const fetchData = async () => {
    try {
      const allproduct = await GetService();
      setDataApi(allproduct.data);

      const mapping3d = await Get3DMapping();
      setDataApi3DMapping(mapping3d.data.data);

      const render3d = await Get3DRender();
      const render3dCG = await Get3DRenderCG();
      setDataApi3DRender(render3d.data || []);
      setDataApi3DRenderCG(render3dCG.data.data || []);

      const model3d = await Get3DModel();
      setDataApi3DModel(model3d.data.data);

      const interactiveapp = await GetInteractiveApp();
      setDataApiInteractiveApp(interactiveapp.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const openEditModal1 = (itemId: string) => {
    const selectedProducts1 = itemList?.filter((p) => p?._id === itemId) ?? [];

    if (selectedProducts1.length > 0) {
      setCurrentItem1(selectedProducts1);
      setIsEditing1(true);
    } else {
      console.warn("Không tìm thấy sản phẩm phù hợp");
    }
  };
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(9);
  const displayedItems = (() => {
    if (selectedItemId === "6837c64289fc431d04f97d90") {
      if (selectedRenderType === "render3d") {
        return (
          itemList?.filter((item) =>
            dataApi3DRender?.some((r) => r._id === item._id)
          ) ?? []
        );
      } else if (selectedRenderType === "render3dCG") {
        return (
          itemList?.filter((item) =>
            dataApi3DRenderCG?.some((r) => r._id === item._id)
          ) ?? []
        );
      }
    }
    return itemList ?? [];
  })();

  const paginatedItems = displayedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openEditModal = (itemId: string) => {
    const allData = [
      ...(Array.isArray(dataApi3DMapping) ? dataApi3DMapping : []),
      ...(Array.isArray(dataApi3DRender) ? dataApi3DRender : []),
      ...(Array.isArray(dataApi3DRenderCG) ? dataApi3DRenderCG : []),
      ...(Array.isArray(dataApi3DModel) ? dataApi3DModel : []),
      ...(Array.isArray(dataApiInteractiveApp) ? dataApiInteractiveApp : []),
    ];

    const selectedProducts = allData.filter((p) => p.service?._id === itemId);

    if (selectedProducts.length > 0) {
      setItemList(selectedProducts);
      setIsEditing(true);
    } else {
      console.warn("Không tìm thấy sản phẩm phù hợp");
    }
  };
  // const getFileType = (src: string): "image" | "video" | "unknown" => {
  //   const cleanSrc = src.split("?")[0].toLowerCase();

  //   if (/\.(jpg|jpeg|png|gif|webp)$/.test(cleanSrc)) return "image";
  //   if (/\.(mp4|webm|ogg)$/.test(cleanSrc)) return "video";

  //   return "unknown";
  // };
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

  const handleCreate = () => {
    setCurrentItem1([
      {
        _id: "",
        service: {
          title: itemList?.[0].service.title ?? "",
          _id: itemList?.[0].service._id ?? "",
        },
        description: { en: "", vi: "", ja: "" },
        indexShow: 0,
        name: "",
        media: "",
        subServices: {
          name: { en: "", vi: "", ja: "" },
        },
        subMedia: [],
        subServiceOption: {
          name: { en: "", vi: "", ja: "" },
        },
      },
    ]);
    setIsCreating(true);
    setIsEditing1(true);
  };

  const handleBulkCreate = () => {
    handleCreate();
    setIsBulkCreating(true);
  };

  const handleDelete = async (id: string) => {
    setItemToDelete(id);
    setIsDeleteAlertOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await DeleteProduct(itemToDelete);

      toast({
        title: "Xoá thành công",
        description: `Sản phẩm với ID ${itemToDelete} đã được xoá.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchData();
      // Xoá item khỏi danh sách hiển thị
      setItemList(
        (prev) => prev?.filter((item) => item._id !== itemToDelete) ?? null
      );
    } catch (error) {
      console.error("Lỗi khi xoá:", error);
      toast({
        title: "Xoá thất bại",
        description: "Không thể xoá sản phẩm. Vui lòng thử lại.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsDeleteAlertOpen(false);
      setItemToDelete("");
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <VStack spacing={4} align="stretch">
        {dataApi
          ?.filter((item) => item.isShowInProducts)
          .map((item) => (
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
                      openEditModal(item?._id ?? "");
                      setSelectedItemId(item?._id ?? "");
                    }}
                  />
                  {/* <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete"
                    colorScheme="red"
                    onClick={() => handleDelete(item?._id ?? "")}
                  /> * /}
                </HStack>
              </HStack>
            </Box>
          ))}
        <Modal
          isOpen={isEditing}
          onClose={() => {
            setIsEditing(false);
            setCurrentPage(1);
            setSelectedRenderType("render3d");
            setItemList(null);
            setCurrentItem1(null);
          }}
          size="5xl"
          blockScrollOnMount={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"15px"}>Cập nhật nội dung</ModalHeader>

            <ModalCloseButton
              onClick={() => {
                setIsEditing(false);
                setCurrentPage(1);
                setItemList(null);
                setCurrentItem1(null);
                setSelectedRenderType("render3d");
              }}
            />
            <ModalBody>
              <Stack direction={"row"} gap={"10px"}>
                <Button
                  width={"fit-content"}
                  leftIcon={<AddIcon />}
                  colorScheme="green"
                  onClick={handleCreate}
                  mb={4}
                >
                  Tạo mới
                </Button>
                <Button
                  width={"fit-content"}
                  leftIcon={<AddIcon />}
                  colorScheme="orange"
                  onClick={handleBulkCreate}
                  mb={4}
                >
                  Tải lên hàng loạt
                </Button>
                {selectedItemId === "6837c64289fc431d04f97d90" ? (
                  <>
                    <Button
                      width={"fit-content"}
                      colorScheme={
                        selectedRenderType === "render3d" ? "green" : "gray"
                      }
                      onClick={() => {
                        setCurrentPage(1);
                        setSelectedRenderType("render3d");
                      }}
                      mb={4}
                    >
                      Projects
                    </Button>
                    <Button
                      width={"fit-content"}
                      colorScheme={
                        selectedRenderType === "render3dCG" ? "green" : "gray"
                      }
                      onClick={() => {
                        setCurrentPage(1);
                        setSelectedRenderType("render3dCG");
                      }}
                      mb={4}
                    >
                      RenderCG
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </Stack>

              <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                gap={4}
              >
                {paginatedItems?.map((item) => (
                  <GridItem
                    key={item._id}
                    p={2}
                    borderWidth="1px"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    {getFileType(item.media) === "image" ? (
                      <Image
                        src={item.media}
                        width="100%"
                        height="150px"
                        objectFit="cover"
                        borderRadius="md"
                        mb={2}
                      />
                    ) : (
                      <Box
                        as="video"
                        src={item.media}
                        width="100%"
                        height="150px"
                        objectFit="cover"
                        autoPlay
                        muted
                        loop
                        borderRadius="md"
                        mb={2}
                      />
                    )}
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      mb={2}
                      textAlign="center"
                    >
                      {item.name}
                    </Text>
                    <HStack spacing={2}>
                      <IconButton
                        icon={<EditIcon />}
                        aria-label="Edit"
                        colorScheme="blue"
                        onClick={() => {
                          openEditModal1(item?._id ?? "");
                          setIsCreating(false);
                        }}
                        size="sm"
                      />
                      <IconButton
                        icon={<DeleteIcon />}
                        aria-label="Delete"
                        colorScheme="red"
                        onClick={() => handleDelete(item?._id ?? "")}
                        size="sm"
                      />
                    </HStack>
                  </GridItem>
                ))}
              </Grid>
              <HStack justifyContent="center" mt={4}>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  isDisabled={currentPage === 1}
                >
                  <Image src={arrowLeft} />
                </Button>
                <Text>
                  <Text>
                    {currentPage} /{" "}
                    {Math.ceil((displayedItems.length || 0) / itemsPerPage)}
                  </Text>
                </Text>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      prev < Math.ceil((itemList?.length || 0) / itemsPerPage)
                        ? prev + 1
                        : prev
                    )
                  }
                  isDisabled={
                    currentPage >=
                    Math.ceil((displayedItems.length || 0) / itemsPerPage)
                  }
                >
                  <Image src={arrowRight} />
                </Button>
              </HStack>
            </ModalBody>
            <ModalFooter>
              <Button
                fontSize={"15px"}
                onClick={() => {
                  setIsEditing(false);
                  setCurrentPage(1);
                  setItemList(null);
                  setCurrentItem1(null);
                  setSelectedRenderType("render3d");
                }}
                mr={3}
              >
                Đóng
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <InfoProduct
          currentItem1={currentItem1}
          setCurrentItem1={setCurrentItem1}
          isEditing1={isEditing1}
          setIsEditing1={setIsEditing1}
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          refetchData={fetchData}
          setItemList={setItemList}
          isBulkCreating={isBulkCreating}
          setIsBulkCreating={setIsBulkCreating}
        />
      </VStack>

      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelRef as any}
        onClose={() => {
          setIsDeleteAlertOpen(false);
          setItemToDelete("");
        }}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="15px">Xác nhận xóa</AlertDialogHeader>

            <AlertDialogBody fontSize="15px">
              Bạn có chắc chắn muốn xóa sản phẩm này không?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                fontSize="15px"
                onClick={() => {
                  setIsDeleteAlertOpen(false);
                  setItemToDelete("");
                }}
              >
                Hủy
              </Button>
              <Button
                colorScheme="red"
                fontSize="15px"
                onClick={confirmDelete}
                ml={3}
              >
                Xóa
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
*/