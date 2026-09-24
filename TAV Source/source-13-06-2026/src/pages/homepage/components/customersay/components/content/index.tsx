import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useLanguage } from "@components/LanguageContext";
import { DataCustomerSay } from "@constants/data-homepage";

const Content = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={{ base: "20px", xl: "100px" }}
      width={"fit-content"}
      mx={"auto"}
    >
      {DataCustomerSay.map((item, index) => {
        const isLastOddItem =
          index === DataCustomerSay.length - 1 &&
          DataCustomerSay.length % 2 === 1;
        return (
          <GridItem
            colSpan={isLastOddItem ? { base: 1, md: 2, xl: 1 } : 1}
            key={index}
            position="relative"
            background={
              isDarkMode ? "rgba(240, 240, 240, 1)" : "rgb(30, 30, 30)"
            }
            textAlign={"center"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"fit-content"}
            p={"20px"}
            borderRadius={"20px"}
            mx={"auto"}
          >
            <Image src={item.img} boxSize="80px" borderRadius="full" objectFit="cover" />
            <Text
              fontSize={{ base: "2rem", xl: "2.4rem" }}
              color={"#F5712A"}
              fontWeight={"600"}
            >
              {item.name}
            </Text>
            <Text
              fontSize={{ base: "1.6rem", xl: "1.8rem" }}
              fontWeight={"600"}
            >
              {item.position}
            </Text>
            <Text
              fontSize={{ base: "1.4rem", xl: "1.6rem" }}
              fontWeight={"400"}
              maxW={"277px"}
            >
              {item.content[isLanguage]}
            </Text>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Content;
