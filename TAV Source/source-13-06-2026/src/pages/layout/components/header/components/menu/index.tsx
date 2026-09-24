import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { DataMenu } from "@constants/data-menu";
import { useEffect, useRef, useState } from "react";
import arrowDown from "@assets/image/arrow-down.png";
import arrowDown1 from "@assets/image/arrow-down1.png";
import arrowDown2 from "@assets/image/arrow-down2.png";
import { DataLanguage } from "@constants/data-language";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage, LangCode } from "@components/LanguageContext";
import Service from "./components/service";
import { useDarkModeContext } from "@components/DarkModeContext";
import { GetService } from "@apis/homepage.api";
import { IService } from "@interfaces/IService";

const Menu = () => {
  const location = useLocation();
  const { isLanguage, setIsLanguage } = useLanguage();
  const [isService, setIsService] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLangList, setIsLangList] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();
  const serviceButtonRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkModeContext();
  const [dataApi, setDataApi] = useState<IService[] | undefined>();

  useEffect(() => {
    GetService().then((res) => {
      setDataApi(res.data);
    });
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (langRef.current && !langRef.current.contains(target)) {
        setIsLangList(false);
      }

      if (
        serviceRef.current &&
        !serviceRef.current.contains(target) &&
        serviceButtonRef.current &&
        !serviceButtonRef.current.contains(target)
      ) {
        setIsService(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Stack direction={"row"} gap={{ md: "0.8px", lg: "3rem" }}>
      {DataMenu.map((item, index) => {
        // const isActive = item.link === location.pathname;
        const isActive = item.activePath
          ? location.pathname.startsWith(item.activePath)
          : location.pathname === item.link;

        const isHovering = index === hoveredIndex;

        return (
          <Box position="relative" key={index}>
            <Box
              ref={item.link === "/services" ? serviceButtonRef : undefined}
              onClick={() => {
                // if (
                //   item.link === "/services" &&
                //   location.pathname === "/services"
                // ) {
                //   setIsService(!isService);
                // } else {
                // setIsService(false);
                navigator(item.link);
                // }
              }}
              onMouseEnter={() => {
                if (item.link === "/services") {
                  setIsService(true);
                  setHoveredIndex(index);
                } else {
                  setIsService(false);
                  setHoveredIndex(index);
                }
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              cursor="pointer"
              role="group"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Text
                  fontWeight="400"
                  fontSize={{ md: "1.6rem", lg: "1.8rem" }}
                  color={
                    isActive || isHovering
                      ? "#F5712A"
                      : isDarkMode
                      ? "black"
                      : "white"
                  }
                >
                  {item.title[isLanguage]}
                </Text>
                {item.hasIcon && (
                  <Image
                    src={
                      isActive || isHovering
                        ? arrowDown1
                        : isDarkMode
                        ? arrowDown
                        : arrowDown2
                    }
                    transform={
                      !isDarkMode && !(isActive || isHovering)
                        ? "rotate(180deg)"
                        : "none"
                    }
                    width={
                      !isDarkMode && !(isActive || isHovering) ? "12px" : "none"
                    }
                    height={
                      !isDarkMode && !(isActive || isHovering) ? "7px" : "none"
                    }
                  />
                )}
              </Stack>
              <Box
                h="1px"
                w="100%"
                mt="3px"
                bg={isActive ? "#F5712A" : "transparent"}
                transition="0.2s"
              />
            </Box>

            {item.link === "/services" && isService && (
              <Box onMouseLeave={() => setIsService(false)} ref={serviceRef}>
                <Service dataApi={dataApi} />
              </Box>
            )}
          </Box>
        );
      })}

      {/* Language selector */}
      <Box position="relative" ref={langRef}>
        <Box
          cursor="pointer"
          role="group"
          onClick={() => setIsLangList(!isLangList)}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Text
              fontWeight="400"
              _groupHover={{ color: "#F5712A" }}
              fontSize="1.8rem"
              color={isDarkMode ? "black" : "white"}
            >
              {isLanguage.toUpperCase()}
            </Text>
            {isDarkMode ? (
              <Image
                src={arrowDown}
                _groupHover={{
                  content: `url(${arrowDown1})`,
                  transform: "none",
                }}
                width="12px"
                height="7px"
              />
            ) : (
              <Image
                src={arrowDown2}
                transform="rotate(180deg)"
                width="12px"
                height="7px"
                _groupHover={{
                  content: `url(${arrowDown1})`,
                  transform: "none",
                }}
              />
            )}
          </Stack>
        </Box>
        {isLangList && (
          <Stack
            position="absolute"
            bg={isDarkMode ? "white" : "black"}
            w="max-content"
            pt="1rem"
            px="1rem"
            mt="3rem"
            borderRadius="2rem"
            border={"1px solid #1e1e1e"}
          >
            {DataLanguage.map((item, index) => (
              <Stack
                borderRadius="md"
                cursor="pointer"
                onClick={() => {
                  setIsLanguage(item.name as LangCode);
                  localStorage.setItem("language", item.name);
                }}
                direction="row"
                key={index}
                gap={10}
                alignItems="center"
                pb="1rem"
              >
                <Image src={item.img} />
                <Text fontSize="1.8rem" fontWeight="400">
                  {item.title}
                </Text>
              </Stack>
            ))}
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default Menu;
