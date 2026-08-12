/* COMMENTED OUT FOR DUP PREVENTION */
/*import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import sun from "@assets/image/light.png";
import moon from "@assets/image/light1.png";
import Menu from "./components/menu";
import LanguageMoblie from "./components/languagemoblie";
import { useDarkModeContext } from "@components/DarkModeContext";

const HeaderResponsive = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isDarkMode, setIsDarkMode } = useDarkModeContext();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={
          <HamburgerIcon boxSize={20} color={isDarkMode ? "black" : "white"} />
        }
        onClick={() => {
          if (isOpen) onClose();
          else onOpen();
        }}
        variant="ghost"
        _hover={{ background: "none" }}
      />

      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={true}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent
          p={6}
          bg={isDarkMode ? "white" : "black"}
          h="100dvh"
          maxW="327px"
          overflowY="auto"
        >
          <IconButton
            icon={<CloseIcon color={isDarkMode ? "black" : "white"} />}
            aria-label="Close Menu"
            position="absolute"
            top={4}
            right={4}
            variant="ghost"
            fontSize="20px"
            onClick={onClose}
            mt={"20px"}
            mr={"10px"}
          />
          <Stack
            direction="column"
            width={"100%"}
            gap={5}
            mt={"20px"}
            ml={"5px"}
          >
            <Box
              bg={isDarkMode ? "#F5712A" : "#5f5f5f"}
              w="30px"
              h="20px"
              borderRadius="2rem"
              position="relative"
              onClick={toggleDarkMode}
              cursor="pointer"
              mb={"20px"}
              ml={"10px"}
            >
              <Image
                src={isDarkMode ? sun : moon}
                width="20px"
                height="20px"
                position="absolute"
                top="50%"
                left="50%"
                transform={`translate(${isDarkMode ? "10%" : "-100%"}, -50%)`}
                transition="transform 0.5s ease"
              />
            </Box>
            <Menu onClose={onClose} />
            <LanguageMoblie />
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderResponsive;
*/