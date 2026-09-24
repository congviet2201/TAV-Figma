import { Box, Image, Stack, Text } from "@chakra-ui/react";
// import { DataMenuMain } from "@constants/data-service";
import arrowUp from "@assets/image/arrow-up-right1.png";
import arrowUp1 from "@assets/image/arrow-up-right.png";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useNavigate } from "react-router-dom";
import { IService } from "@interfaces/IService";
import ic3dmappding from "@assets/image/3dmapping.png";
import ic3drender from "@assets/image/3drender.png";
import ic3dmodel from "@assets/image/3dmodel.png";
import icvrartour from "@assets/image/vrartour.png";
import icinteractiveapp from "@assets/image/interactiveapp.png";

interface IServiceProps {
  dataApi?: IService[];
}

const Service = ({ dataApi }: IServiceProps) => {
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();
  const { isDarkMode } = useDarkModeContext();

  const iconMap: Record<string, string> = {
    "3dmapping": ic3dmappding,
    "3drender": ic3drender,
    "3dmodel": ic3dmodel,
    "vr/artour": icvrartour,
    interactiveapp: icinteractiveapp,
  };

  const leftItems = dataApi?.slice(0, 2);
  const rightItems = dataApi?.slice(2);
  return (
    <Box
      width={"fit-content"}
      position="absolute"
      left={"-120px"}
      mt={"2rem"}
      p="2rem"
      borderRadius="2rem"
      boxShadow="md"
      zIndex={10}
      background={isDarkMode ? "white" : "black"}
      border={"1px solid #b4b4b4"}
    >
      <Stack
        direction={{ md: "column", xl: "row" }}
        spacing={{ md: 0, xl: "2rem" }}
        gap={"26.9px"}
      >
        {/* Bên trái */}
        <Stack spacing="26.9px" flex="1" justifyContent={"center"}>
          {leftItems?.map((service, index) => (
            <Stack
              key={index}
              direction="row"
              spacing="1rem"
              onClick={() => {
                navigator("/services", {
                  state: { scrollTo: `${service.id}` },
                });
              }}
              cursor={"pointer"}
            >
              <Box
                p={"10px"}
                bg={"#F5712A"}
                borderRadius={"12px"}
                boxShadow="0 4px 10px rgba(245, 113, 42, 0.5)"
              >
                <Image src={iconMap[service.id]} width={"40px"} />
              </Box>
              <Stack spacing="1rem" justifyContent={"center"}>
                <Text fontWeight="600" fontSize="1.4rem">
                  {service?.title}
                </Text>
                <Text fontSize="1.2rem">
                  {service.descriptionMenu[isLanguage]}
                </Text>
              </Stack>
            </Stack>
          ))}

          {/* Button liên hệ tư vấn */}
          <Stack
            direction={"row"}
            p="1.5rem"
            bg={isDarkMode ? "#F0F0F0" : "#1e1e1e"}
            borderRadius="2rem"
            alignItems={"center"}
            display={{ md: "none", xl: "flex" }}
            width={"393px"}
            height={"80px"}
          >
            <Text
              fontSize={"1.2rem"}
              color={isDarkMode ? "rgba(53, 53, 53, 1)" : "rgb(185, 185, 185)"}
              fontWeight={"400"}
              w={"104px"}
            >
              {isLanguage === "vi"
                ? "Chưa tìm thấy dịch vụ phù hợp với yêu cầu của bạn?"
                : isLanguage === "en"
                ? "Haven't found a service that matches your requirements?"
                : "ご要望に合うサービスが見つかりませんか?"}
            </Text>
            <Stack
              direction={"row"}
              alignItems={"center"}
              width={"249px"}
              py={"14px"}
              justifyContent={"center"}
              borderRadius={"2rem"}
              bg={isDarkMode ? "white" : "rgba(0, 0, 0, 1)"}
              cursor={"pointer"}
              gap={"5px"}
              height={"50px"}
              onClick={() => {
                navigator("/", { state: { scrollTo: "advise" } });
              }}
            >
              <Text fontSize={"1.6rem"} fontWeight={"400"}>
                {isLanguage === "vi"
                  ? "Liên hệ để nhận tư vấn"
                  : isLanguage === "en"
                  ? "Contact for advice"
                  : "アドバイスについてはお問い合わせください"}
              </Text>
              <Image src={isDarkMode ? arrowUp : arrowUp1} />
            </Stack>
          </Stack>
        </Stack>

        {/* Bên phải */}
        <Stack
          spacing="26.9px"
          justifyContent={"center"}
          flex="1"
          width={"351px"}
        >
          {rightItems?.map((service, index) => (
            <Stack
              key={index}
              direction="row"
              spacing="1rem"
              onClick={() => {
                navigator("/services", {
                  state: { scrollTo: `${service.id}` },
                });
              }}
              cursor={"pointer"}
            >
              <Box
                p={"10px"}
                bg={"#F5712A"}
                borderRadius={"12px"}
                boxShadow="0 4px 10px rgba(245, 113, 42, 0.5)"
              >
                <Image src={iconMap[service.id]} width={"40px"} />
              </Box>
              <Stack spacing="1rem" justifyContent={"center"}>
                <Text fontWeight="600" fontSize="1.4rem">
                  {service.title}
                </Text>
                <Text fontSize="1.2rem">
                  {service.descriptionMenu[isLanguage]}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          p="1.5rem"
          bg={isDarkMode ? "#F0F0F0" : "#1e1e1e"}
          borderRadius="2rem"
          alignItems={"center"}
          width={"393px"}
          display={{ md: "flex", xl: "none" }}
        >
          <Text
            fontSize={"1.2rem"}
            fontWeight={"400"}
            color={"black"}
            w={"104px"}
          >
            {isLanguage === "vi"
              ? "Chưa tìm thấy dịch vụ phù hợp với yêu cầu của bạn?"
              : isLanguage === "en"
              ? "Haven't found a service that matches your requirements?"
              : "ご要望に合うサービスが見つかりませんか?"}
          </Text>
          <Stack
            direction={"row"}
            alignItems={"center"}
            width={"249px"}
            py={"14px"}
            justifyContent={"center"}
            borderRadius={"2rem"}
            bg={"white"}
            gap={"5px"}
          >
            <Text fontSize={"1.6rem"} fontWeight={"400"} color={"black"}>
              {isLanguage === "vi"
                ? "Liên hệ để nhận tư vấn"
                : isLanguage === "en"
                ? "Contact for advice"
                : "アドバイスについてはお問い合わせください"}
            </Text>
            <Image src={arrowUp} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Service;
