import { GetService } from "@apis/homepage.api";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import { IService } from "@interfaces/IService";
import { useEffect, useState } from "react";
import ic3dmappding from "@assets/image/3dmapping.png";
import ic3drender from "@assets/image/3drender.png";
import ic3dmodel from "@assets/image/3dmodel.png";
import icvrartour from "@assets/image/vrartour.png";
import icinteractiveapp from "@assets/image/interactiveapp.png";

const Title = () => {
  const { isLanguage } = useLanguage();
  const handleScrollGallery = (item: string) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [dataApi, setDataApi] = useState<IService[] | undefined>();
  useEffect(() => {
    GetService().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  const iconMap: Record<string, string> = {
    "3dmapping": ic3dmappding,
    "3drender": ic3drender,
    "3dmodel": ic3dmodel,
    "vr/artour": icvrartour,
    interactiveapp: icinteractiveapp,
  };
  // const Data = [
  //   { title: "3D Mapping", id: "3dmapping" },
  //   { title: "3D Render", id: "3drender" },
  //   { title: "3D Model", id: "3dmodel" },
  //   { title: "VR/AR Tour", id: "vr/artour" },
  //   { title: "Interactive App", id: "interactiveapp" },
  // ];
  return (
    <Stack
      alignItems={{ sm: "start", "2xl": "end" }}
      width={"100%"}
      height={"100%"}
      direction={{ sm: "column", "2xl": "row" }}
      justifyContent={"space-between"}
      gap={"20px"}
    >
      <Stack gap={"20px"} maxW={"543px"}>
        <Text
          textTransform={"uppercase"}
          fontSize={{ base: "2.4rem", md: "4.8rem" }}
          fontWeight={"600"}
        >
          {isLanguage === "vi"
            ? "dịch vụ"
            : isLanguage === "en"
            ? "service"
            : "サービス"}
        </Text>
        <Text
          maxW={"1083px"}
          fontSize={{ base: "1.4rem", md: "1.6rem" }}
          fontWeight={"400"}
        >
          {isLanguage === "vi"
            ? "TAV cung cấp các giải pháp công nghệ trực quan nhằm nâng cao trải nghiệm khách hàng và hiệu quả tiếp thị bất động sản. Chúng tôi kết hợp giữa thiết kế kiến trúc, công nghệ 3D và phần mềm tương tác để giúp hiện thực hóa ý tưởng dự án một cách sống động và thuyết phục."
            : isLanguage === "en"
            ? "TAV provides intuitive technology solutions to enhance customer experience and real estate marketing effectiveness. We combine architectural design, 3D technology and interactive software to help bring project ideas to life in a compelling and vivid way."
            : "TAVは、顧客体験と不動産マーケティングの効果を高める直感的なテクノロジーソリューションを提供しています。建築設計、3Dテクノロジー、インタラクティブソフトウェアを融合させ、プロジェクトのアイデアを魅力的かつ鮮やかに実現します。"}
        </Text>
      </Stack>

      <Stack
        direction={"row"}
        display={{ base: "none", md: "flex" }}
        gap={"20px"}
        width={"100%"}
        justifyContent={"end"}
      >
        {dataApi?.map((item, index) => (
          <HStack
            // pb={"10px"}
            onClick={() => {
              handleScrollGallery(item.id);
            }}
            cursor={"pointer"}
            key={index}
            role="group"
            _hover={{
              color: "#F5712A",
            }}
          >
            <Box
              p={"10px"}
              bg={"#F5712A"}
              borderRadius={"12px"}
              boxShadow="0 4px 10px rgba(245, 113, 42, 0.5)"
            >
              <Image src={iconMap[item.id]} width={"30px"} />
            </Box>
            <Text
              key={index}
              fontSize={"1.6rem"}
              fontWeight={"400"}
              textTransform={"uppercase"}
              _groupHover={{
                color: "#F5712A",
                borderBottom: "1px solid #F5712A",
              }}
              borderBottom={"1px solid #E1E1E1"}
            >
              {item.title}
            </Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Title;
