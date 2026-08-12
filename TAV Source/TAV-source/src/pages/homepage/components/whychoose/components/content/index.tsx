/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import { DataWhyChoose } from "@constants/data-homepage";

const Content = () => {
  const { isLanguage } = useLanguage();

  return (
    <Grid
      mt={"4rem"}
      px={{ base: "2rem", md: "5rem" }}
      gap={"2rem"}
      m="auto"
      templateColumns={{
        base: "repeat(2, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
    >
      {DataWhyChoose.map((item, index) => (
        <GridItem
          key={index}
          justifySelf={"center"}
          overflow={"hidden"}
          position="relative"
          background={{
            base:
              index % 2 === 0
                ? "linear-gradient(180deg, #FFFFFF 0%, #F5712A 200%)"
                : "linear-gradient(180deg, #F5712A 20%, #FFFFFF 200%)",
            xl:
              index % 2 === 0
                ? "linear-gradient(180deg, #FFFFFF 0%, #F5712A 80%)"
                : "linear-gradient(180deg, #F5712A 20%, #FFFFFF 100%)",
          }}
          boxShadow="0px 15px 25px -10px #F5712A40"
          borderRadius={{ base: "2rem", md: "5rem" }}
        >
          {/* <Box
            position="absolute"
            w="100%"
            h="100%"
            background={
              index % 2 === 0
                ? "linear-gradient(180deg, #FFFFFF 0%, #F5712A 80%)"
                : "linear-gradient(180deg, #F5712A 20%, #FFFFFF 100%)"
            }
            borderRadius="3rem"
          ></Box> * /}

          <Stack
            flexDirection={index % 2 === 0 ? "column" : "column-reverse"}
            position="relative"
            p={"20px"}
          >
            <Image
              src={item.img}
              width={{ base: "150px", md: "375px" }}
              height={{ base: "142px", md: "311px" }}
              objectFit={"cover"}
            />
            <Stack alignItems={{ base: "center", lg: "normal" }}>
              <Stack direction={"row"} gap={5} alignItems={"center"}>
                <Image
                  display={{ base: "none", lg: "block" }}
                  src={item.logo}
                />
                <Text
                  fontSize={{ base: "2rem", lg: "3.2rem" }}
                  fontWeight={"600"}
                  textTransform={"uppercase"}
                  color={"white"}
                  textAlign={"center"}
                >
                  {item.title[isLanguage]}
                </Text>
              </Stack>
              <Text
                display={{ base: "none", lg: "block" }}
                fontSize={"1.6rem"}
                color={"white"}
                fontWeight={"400"}
              >
                {item?.description?.[isLanguage ?? "vi"] ?? ""}
              </Text>
            </Stack>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Content;
*/