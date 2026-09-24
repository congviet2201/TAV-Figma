import { Box, Image, Stack, Text } from "@chakra-ui/react";
// import {  DataServiceMenu } from "@constants/data-menu";
import { DataMenu } from "@constants/data-menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowDown3 from "@assets/image/arrow-down3.png";
import arrowDown2 from "@assets/image/arrow-down2.png";
import { useLanguage } from "@components/LanguageContext";
// import { DataMenuMain } from "@constants/data-service";
import arrowUp from "@assets/image/arrow-up-right1.png";
import arrowUp1 from "@assets/image/arrow-up-right.png";
import { useDarkModeContext } from "@components/DarkModeContext";
import { IService } from "@interfaces/IService";
import { GetService } from "@apis/homepage.api";
import ic3dmappding from "@assets/image/3dmapping.png";
import ic3drender from "@assets/image/3drender.png";
import ic3dmodel from "@assets/image/3dmodel.png";
import icvrartour from "@assets/image/vrartour.png";
import icinteractiveapp from "@assets/image/interactiveapp.png";
interface IMenu {
  onClose: any;
}

const Menu = ({ onClose }: IMenu) => {
  const [isIndexMenu, setIsIndexMenu] = useState<number | null>(null);
  const navigator = useNavigate();
  const { isLanguage } = useLanguage();
  const [isService, setIsService] = useState(false);
  const { isDarkMode } = useDarkModeContext();
  const [dataApi, setDataApi] = useState<IService[] | undefined>();
  const iconMap: Record<string, string> = {
    "3dmapping": ic3dmappding,
    "3drender": ic3drender,
    "3dmodel": ic3dmodel,
    "vr/artour": icvrartour,
    interactiveapp: icinteractiveapp,
  };

  useEffect(() => {
    GetService().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  return (
    <>
      {DataMenu.map((item, index) => (
        <Box
          key={index}
          width="100%"
          border={
            item.hasIcon && isIndexMenu === index ? "1px solid #aaaaaa" : "none"
          }
          borderRadius={"2rem"}
        >
          <Stack
            role="group"
            direction="row"
            cursor="pointer"
            justifyContent="space-between"
            alignItems="center"
            py="1.5rem"
            px="1rem"
            bg={
              item.hasIcon && isIndexMenu === index ? "#F5712A" : "transparent"
            }
            transition="background 0.4s ease"
            borderRadius="2rem"
            _hover={item.hasIcon ? { bg: "#F5712A" } : {}}
            onClick={() => {
              setIsIndexMenu((prev) => (prev === index ? null : index));
              if (item.hasIcon) {
                setIsService((prev) => (isIndexMenu === index ? !prev : true));
                // setIsService((prev) => !prev);
                navigator(item.link);
              } else {
                onClose();
                navigator(item.link);
              }
            }}
          >
            <Text
              _groupHover={item.hasIcon ? { color: "white" } : {}}
              color={
                item.hasIcon && isIndexMenu === index
                  ? "white"
                  : isDarkMode
                  ? "black"
                  : "white"
              }
              fontSize="1.8rem"
              fontWeight="400"
              transition="color 0.5s ease"
            >
              {item.title[isLanguage]}
            </Text>

            {item.hasIcon && (
              <Box position="relative" w="20px" h="10px">
                <Image
                  src={arrowDown2}
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  opacity={isIndexMenu === index ? 1 : 0}
                  transform="rotate(0deg)"
                  _groupHover={
                    isIndexMenu === index
                      ? {}
                      : {
                          opacity: 1,
                          transform: "rotate(180deg)",
                        }
                  }
                />
                <Image
                  src={isDarkMode ? arrowDown3 : arrowDown2}
                  transform={isDarkMode ? "none" : "rotate(180deg)"}
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  opacity={isIndexMenu === index ? 0 : 1}
                  _groupHover={
                    isIndexMenu === index
                      ? {}
                      : {
                          opacity: 0,
                          transform: "rotate(180deg)",
                        }
                  }
                />
              </Box>
            )}
          </Stack>

          {/* Submenu */}
          {item.link === "/services" && isService && (
            <Stack spacing="2rem" width="100%" pt="4rem">
              {dataApi?.map((item, index) => (
                <Stack
                  key={index}
                  borderRadius="md"
                  cursor="pointer"
                  direction="row"
                  gap="10px"
                  width="100%"
                  px={"10px"}
                  onClick={() => {
                    navigator("/services", {
                      state: { scrollTo: `${item.id}` },
                    });
                    onClose();
                  }}
                >
                  <Box
                    p={"10px"}
                    bg={"#F5712A"}
                    borderRadius={"12px"}
                    boxShadow="0 4px 10px rgba(245, 113, 42, 0.5)"
                    maxW={"60px"}
                    height={"fit-content"}
                  >
                    <Image
                      src={iconMap[item.id]}
                      width={"40px"}
                      height={"40px"}
                    />
                  </Box>
                  <Stack maxW={"197px"}>
                    <Text fontWeight="600" fontSize="1.8rem">
                      {item.title}
                    </Text>
                    <Text fontSize="1.2rem">
                      {item.descriptionMenu[isLanguage]}
                    </Text>
                  </Stack>
                </Stack>
              ))}
              <Stack
                p="1.5rem"
                bg={isDarkMode ? "#F0F0F0" : "#1e1e1e"}
                borderRadius="2rem"
              >
                <Text fontSize={"1.2rem"} fontWeight={"400"}>
                  {isLanguage === "vi"
                    ? "Chưa tìm thấy dịch vụ phù hợp với yêu cầu của bạn?"
                    : isLanguage === "en"
                    ? "Haven't found a service that matches your requirements?"
                    : "ご要望に合うサービスが見つかりませんか?"}
                </Text>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  py={"14px"}
                  justifyContent={"center"}
                  borderRadius={"2rem"}
                  bg={isDarkMode ? "white" : "black"}
                  gap={"5px"}
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
          )}
        </Box>
      ))}
    </>
  );
};

export default Menu;
