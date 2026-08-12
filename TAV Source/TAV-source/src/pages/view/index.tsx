/* COMMENTED OUT FOR DUP PREVENTION */
/*import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  chakra,
  IconButton,
  Button,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState, ReactNode } from "react";
import arrowLeft from "@assets/image/arrowLeft2.png";
import arrowRight from "@assets/image/arrowRight2.png";
import { datamenuproduct } from "@constants/data-product";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import { useLanguage } from "@components/LanguageContext";

type MediaDesc = { en: string; vi: string; ja: string };

const linkify = (text: string): ReactNode => {
  const urlRe = /(https?:\/\/[^\s<]+[^\s<.,;:!?)])(?=[\s<.,;:!?)]|$)/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = urlRe.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <chakra.a
        key={parts.length}
        href={m[0]}
        target="_blank"
        rel="noopener noreferrer"
        color="orange.300"
        textDecoration="underline"
      >
        {m[0]}
      </chakra.a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
};

const View = ({
  isOpen,
  onClose,
  imageUrl,
  subMedia = [],
  name,
  mediaDescriptions,
}: {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  subMedia?: string[];
  name: string;
  mediaDescriptions?: Record<string, MediaDesc>;
}) => {
  const { isLanguage } = useLanguage();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const subPath = pathParts[2] || "";
  const navigate = useNavigate();
  const [mediaList, setMediaList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const isImageFile = (src: string) => {
    const cleanSrc = src.split("?")[0];
    const decodedSrc = decodeURIComponent(cleanSrc);
    return /\.(jpg|jpeg|png|gif|webp)/i.test(decodedSrc);
  };
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const list = [imageUrl, ...subMedia].filter(
        (item): item is string => !!item
      );
      setMediaList(list);
      setCurrentIndex(0);
    }
  }, [isOpen, imageUrl, subMedia]);

  const currentMedia = mediaList[currentIndex];
  const currentDesc = currentMedia
    ? mediaDescriptions?.[currentMedia]?.[isLanguage] ?? ""
    : "";

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const currentProjectIndex = datamenuproduct.findIndex(
    (item) => item.link === location.pathname
  );

  const goToPreviousProject = () => {
    if (currentProjectIndex > 0) {
      navigate(datamenuproduct[currentProjectIndex - 1].link);
    }
  };

  const goToNextProject = () => {
    if (currentProjectIndex < datamenuproduct.length - 1) {
      navigate(datamenuproduct[currentProjectIndex + 1].link);
    }
  };

  // const currentMedia = mediaList[currentIndex];
  useEffect(() => {
    // setIsLoading(true);
    if (swiperRef.current && typeof swiperRef.current.slideTo === "function") {
      swiperRef.current.slideTo(currentIndex, 0);
    }
  }, [currentIndex]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay />
      <ModalContent
        bg="black"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <ModalBody
          p={0}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            position="absolute"
            left={0}
            top={"5%"}
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            minW={"200px"}
          >
            <Text
              color={"white"}
              fontSize={"1.6rem"}
              textTransform={"uppercase"}
            >
              {subPath}: {name}
            </Text>
            <IconButton
              icon={<CloseIcon />}
              aria-label="Đóng"
              onClick={() => {
                // setCurrentIndex(0);
                onClose();
              }}
              zIndex={10}
              color="white"
              bg="none"
              fontSize="2rem"
              _hover={{ bg: "gray.700" }}
            />
          </Stack>
          {/* {isLoading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="white"
              size="xl"
              position="absolute"
              zIndex={10}
            />
          )} * /}
          {mediaList.length > 0 && (
            <Swiper
              modules={[Zoom]}
              zoom={true}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              style={{ width: "90vw", height: "80vh", borderRadius: "2rem" }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {mediaList.map((media) => (
                <SwiperSlide key={media}>
                  {isImageFile(media) ? (
                    <Box
                      className="swiper-zoom-container"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80vh",
                      }}
                    >
                      <img
                        src={media}
                        alt={name}
                        style={{
                          maxHeight: "80vh",
                          maxWidth: "90vw",
                          borderRadius: "2rem",
                          border: "1px solid rgba(53, 53, 53, 1)",
                          objectFit: "contain",
                          margin: "auto",
                        }}
                        // onLoad={() => setIsLoading(false)}
                      />
                    </Box>
                  ) : (
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80vh",
                      }}
                    >
                      <chakra.video
                        src={media}
                        controls
                        playsInline
                        autoPlay
                        loop
                        muted
                        maxH="80vh"
                        maxW="90vw"
                        borderRadius="2rem"
                        border="1px solid rgba(53, 53, 53, 1)"
                        objectFit="contain"
                        // onLoadedData={() => setIsLoading(false)}
                      />
                    </Box>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {currentDesc && (
            <Box
              position="absolute"
              bottom="85px"
              left="50%"
              transform="translateX(-50%)"
              maxW="75%"
              bg="rgba(0, 0, 0, 0.72)"
              color="white"
              py={3}
              borderRadius="lg"
              textAlign="center"
              zIndex={5}
            >
              <Text fontSize="1.6rem" fontWeight={600} lineHeight="1.5" sx={{ a: { color: "orange.300", textDecoration: "underline" } }}>
                {linkify(currentDesc)}
              </Text>
            </Box>
          )}
          <Stack
            position="absolute"
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            minW={"200px"}
            bottom={0}
            mb={10}
          >
            <Button
              bg={"none"}
              _hover={{ bg: "none" }}
              color={"white"}
              fontSize={"1.4rem"}
              fontWeight={"400"}
              onClick={goToPreviousProject}
              isDisabled={currentProjectIndex === 0}
            >
              Previous project
            </Button>
            <Stack direction={"row"} gap={{ base: "10px", md: "2.5rem" }}>
              <Button
                bg={"none"}
                _hover={{ bg: "none" }}
                onClick={handlePrev}
                isDisabled={currentIndex === 0}
              >
                <Image src={arrowLeft} />
              </Button>
              <Text fontSize={"1.6rem"} color={"white"}>
                {currentIndex + 1}/{mediaList.length}
              </Text>
              <Button
                bg={"none"}
                _hover={{ bg: "none" }}
                onClick={handleNext}
                isDisabled={currentIndex === (mediaList?.length ?? 0) - 1}
              >
                <Image src={arrowRight} />
              </Button>
            </Stack>
            <Button
              bg={"none"}
              _hover={{ bg: "none" }}
              color={"white"}
              fontSize={"1.4rem"}
              fontWeight={"400"}
              onClick={goToNextProject}
              isDisabled={currentProjectIndex === datamenuproduct.length - 1}
            >
              Next project
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default View;
*/