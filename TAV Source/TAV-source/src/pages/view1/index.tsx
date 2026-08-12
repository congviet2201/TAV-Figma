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

/* ---- Helpers ---- * /

/** Detect bare URLs (http/https) in text and wrap them in clickable <a> tags. * /
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

type MediaDesc = { en: string; vi: string; ja: string };

const View1 = ({
  isOpen,
  onClose,
  mediaList = [],
  selectedImage,
  name,
  mediaDescriptions,
}: {
  isOpen: boolean;
  onClose: () => void;
  mediaList?: string[];
  selectedImage: string | null;
  name: string;
  mediaDescriptions?: Record<string, MediaDesc>;
}) => {
  const { isLanguage } = useLanguage();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const subPath = pathParts[2] || "";
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const isImageFile = (src: string) => {
    const cleanSrc = src.split("?")[0];
    const decodedSrc = decodeURIComponent(cleanSrc);
    return /\.(jpg|jpeg|png|gif|webp)/i.test(decodedSrc);
  };

  const [filteredMediaList, setFilteredMediaList] = useState<string[]>([]);

  // Derive the current media item's description (if any) for the active language.
  const currentMedia = filteredMediaList[currentIndex];
  const currentDesc = currentMedia
    ? mediaDescriptions?.[currentMedia]?.[isLanguage] ?? ""
    : "";

  useEffect(() => {
    const list = mediaList.filter(
      (item): item is string => typeof item === "string" && item.trim() !== ""
    );
    setFilteredMediaList(list);
    const startIndex = list.findIndex((item) => item === selectedImage);
    setCurrentIndex(startIndex >= 0 ? startIndex : 0);
    if (swiperRef.current && typeof swiperRef.current.slideTo === "function") {
      swiperRef.current.slideTo(startIndex >= 0 ? startIndex : 0, 0);
    }
  }, [selectedImage, mediaList]);

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

  // const currentMedia = filteredMediaList[currentIndex];
  // useEffect(() => {
  //   setIsLoading(true);
  // }, [currentMedia]);
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

  useEffect(() => {
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
            <Text color="white" fontSize="1.6rem" textTransform="uppercase">
              {subPath}: {name}
            </Text>

            <IconButton
              icon={<CloseIcon />}
              aria-label="Đóng"
              onClick={onClose}
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
          {filteredMediaList.length > 0 && (
            <Swiper
              modules={[Zoom]}
              zoom={true}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              style={{ width: "90vw", height: "80vh", borderRadius: "2rem" }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {filteredMediaList.map((media) => (
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
                        playsInline
                        controls
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
              bottom="65px"
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
          >
            <Button
              bg="none"
              _hover={{ bg: "none" }}
              color="white"
              fontSize="1.4rem"
              fontWeight="400"
              left={0}
              mb={10}
              onClick={goToPreviousProject}
              isDisabled={currentProjectIndex === 0}
            >
              Previous project
            </Button>

            <Stack direction="row" mb={10} gap={{ base: "10px", md: "2.5rem" }}>
              <Button
                bg="none"
                _hover={{ bg: "none" }}
                onClick={handlePrev}
                isDisabled={currentIndex === 0}
              >
                <Image src={arrowLeft} />
              </Button>
              <Text fontSize="1.6rem" color="white">
                {currentIndex + 1}/{filteredMediaList.length}
              </Text>
              <Button
                bg="none"
                _hover={{ bg: "none" }}
                onClick={handleNext}
                isDisabled={currentIndex === filteredMediaList.length - 1}
              >
                <Image src={arrowRight} />
              </Button>
            </Stack>

            <Button
              bg="none"
              _hover={{ bg: "none" }}
              color="white"
              fontSize="1.4rem"
              fontWeight="400"
              right={0}
              mb={10}
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

export default View1;
*/