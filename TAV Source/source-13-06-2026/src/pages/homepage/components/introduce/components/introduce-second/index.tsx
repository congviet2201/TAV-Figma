import { GetIntroduce2 } from "@apis/homepage.api";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
// import { DataIntroduceSecond } from "@constants/data-homepage";
import { IIntroduceSecond } from "@interfaces/IHomePage";
import { useEffect, useState } from "react";

const IntroduceSecond = () => {
  const { isLanguage } = useLanguage();
  const [dataApi, setDataApi] = useState<IIntroduceSecond[] | undefined>();

  useEffect(() => {
    GetIntroduce2().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  return (
    <Grid
      width="100%"
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={{ base: "2rem", "2xl": "15rem" }}
    >
      {dataApi?.map((item, index) => {
        const isLastOddItem =
          index === dataApi.length - 1 && dataApi.length % 2 === 1;

        return (
          <GridItem
            colSpan={isLastOddItem ? { base: 1, md: 2, xl: 1 } : 1}
            display="flex"
            justifyContent="center"
            key={index}
          >
            <Stack
              gap={5}
              maxWidth={"33rem"}
              alignItems={{ base: "center", xl: "flex-start" }}
              justifyContent={"space-between"}
            >
              <Text
                border={"1px solid #F5712A"}
                borderRadius={"1rem"}
                width={"fit-content"}
                px={"1rem"}
                py={"0.5rem"}
                fontSize={{ base: "1.8rem", md: "2rem" }}
                fontWeight={"600"}
                textAlign={"center"}
              >
                {item.title[isLanguage]}
              </Text>
              <Text
                fontSize={{ base: "4.8rem", md: "12.8rem" }}
                color={"#F5712A"}
                fontWeight={"600"}
              >
                {item.amount}+
              </Text>
              <Text
                fontSize={{ base: "1.4rem", md: "1.6rem" }}
                fontWeight={"400"}
                textAlign={{ base: "center", md: "start" }}
              >
                {item?.description?.[isLanguage ?? "vi"] ?? ""}
              </Text>
            </Stack>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default IntroduceSecond;
