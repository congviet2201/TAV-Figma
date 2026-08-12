/* COMMENTED OUT FOR DUP PREVENTION */
/*import { GetBoardsDirectors } from "@apis/homepage.api";
import { Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
// import { DataLeader } from "@constants/data-aboutus";
import { ILeader } from "@interfaces/IAboutUs";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Leader = () => {
  const { isLanguage } = useLanguage();
  const [dataApi, setDataApi] = useState<ILeader[] | undefined>();
  useEffect(() => {
    GetBoardsDirectors().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  return (
    <Stack
      mx={"auto"}
      width={"100%"}
      height={"100%"}
      maxW={"192rem"}
      px={{ base: "20px", md: "50px" }}
      py={{ base: "20px", md: "100px" }}
    >
      <Text
        fontSize={{ base: "2.4rem", md: "4.8rem" }}
        fontWeight={"600"}
        textTransform={"uppercase"}
      >
        {isLanguage === "vi"
          ? "ban lãnh đạo"
          : isLanguage === "en"
          ? "Board of Directors"
          : "取締役会"}
      </Text>
      <Text pt={"20px"} pb={"50px"} color={"#696969"} fontSize={"1.6rem"}>
        {isLanguage === "vi"
          ? "Hình ảnh ban lãnh đạo TAV"
          : isLanguage === "en"
          ? "Image of TAV leadership"
          : "TAVリーダーシップのイメージ"}
      </Text>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {dataApi?.map((item, index) => (
          <SwiperSlide key={index}>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Image src={item.image} borderRadius={"5rem"} w={"500px"} />
              <Stack
                alignItems={"center"}
                width={"100%"}
                fontSize={"2.4rem"}
                textTransform={"uppercase"}
                fontWeight={"600"}
              >
                <Text>{item.name[isLanguage]}</Text>
                <Text>{item.position[isLanguage]}</Text>
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default Leader;
*/