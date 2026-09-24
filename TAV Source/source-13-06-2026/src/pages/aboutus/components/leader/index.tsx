import { GetBoardsDirectors } from "@apis/homepage.api";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import FadeImage from "@components/FadeImage";
import { DataLeader } from "@constants/data-aboutus";
import { ILeader } from "@interfaces/IAboutUs";
import { useEffect, useState } from "react";

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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
        {(dataApi && dataApi.length > 0 ? dataApi : (DataLeader as any[]))?.map((item, index) => (
          <Stack key={index} justifyContent={"center"} alignItems={"center"}>
            <FadeImage
              src={item.image || item.img}
              priority
              wrapStyle={{ borderRadius: "5rem", width: "100%", maxWidth: "500px", aspectRatio: "3/4" }}
              style={{ borderRadius: "5rem", width: "100%", height: "100%", objectFit: "cover" }}
            />
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
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Leader;
