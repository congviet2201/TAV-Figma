/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import { useNavigate } from "react-router-dom";
import arrowRight from "@assets/image/arrowRight3.png";
import { useEffect, useState } from "react";
import { IService } from "@interfaces/IService";
import { GetService } from "@apis/homepage.api";
import { useVideoLoad } from "@components/VideoLoadContext";

const ItemService = () => {
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();
  const [dataApi, setDataApi] = useState<IService[] | undefined>();
  const { setVideoLoaded } = useVideoLoad();

  useEffect(() => {
    GetService().then((res) => {
      setDataApi(res.data);
    });
  }, []);
  // const Data = [ id video title description{vi,en,ja} ]

  return (
    <Stack
      borderRadius={"50px"}
      overflow={"hidden"}
      gap={0}
      border={"1px solid rgb(81, 81, 81)"}
    >
      {dataApi?.map((item, index) => (
        <Box
          position={"relative"}
          key={index}
          id={item.id}
          onClick={() => {
            navigator(`/products/${item.id}`);
          }}
          cursor={"pointer"}
        >
          <Box
            position={"absolute"}
            right={"3.5%"}
            top={"50%"}
            bgColor={"#F5712A"}
            p={"5px"}
            borderRadius={"10rem"}
            zIndex={2}
          >
            <Image src={arrowRight} />
          </Box>

          <Box
            height={{ base: "500px", md: "800px" }}
            as="video"
            width={"100%"}
            src={item.video}
            objectFit="cover"
            autoPlay
            muted
            loop
            onLoadedData={() => setVideoLoaded(true)}
          />
          <Stack
            height={"100%"}
            position="absolute"
            left={0}
            top={0}
            p={"50px"}
            justifyContent={"space-between"}
          >
            <Text
              maxW={"350px"}
              fontSize={{ base: "1.4rem", md: "1.6rem" }}
              fontWeight={"400"}
              color="white"
              borderRadius="md"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            >
              {item?.description?.[isLanguage ?? "vi"] ?? ""}
            </Text>
            <Text
              fontSize={{ base: "3.2rem", md: "4.8rem" }}
              fontWeight="600"
              color="#F5712A"
              borderRadius="md"
              textTransform={"uppercase"}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            >
              {item.title}
            </Text>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default ItemService;
*/