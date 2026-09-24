import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import arrowBottom from "@assets/image/country/arrowBottom.png";
import { DataCountry } from "@constants/data-homepage";
import search from "@assets/image/country/search.png";
import { useEffect, useRef, useState } from "react";
import { IListCountry } from "@interfaces/IHomePage";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";

const PhoneNumber = ({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (value: string) => void;
}) => {
  const { isLanguage } = useLanguage();
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isDarkMode } = useDarkModeContext();
  const [selectedCountry, setSelectedCountry] = useState(DataCountry[0]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!phone) {
      setPhone(selectedCountry.phone);
    }
  }, []);

  const handleToggleList = () => {
    setShowList(!showList);
  };

  const handleSelectCountry = (country: IListCountry) => {
    setSelectedCountry(country);
    setShowList(false); // Ẩn list sau khi chọn
    if (!phone || !phone.startsWith(country.phone)) {
      setPhone(country.phone);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <FormControl>
      <FormLabel
        pb={"15px"}
        fontSize="2rem"
        fontWeight="600"
        color={isDarkMode ? "black" : "white"}
      >
        {isLanguage === "vi"
          ? "Số điện thoại"
          : isLanguage === "en"
          ? "Phone number"
          : "電話番号"}
      </FormLabel>
      <InputGroup>
        <Input
          value={phone}
          onChange={(e) => {
            const input = e.target.value;
            // Không cho phép xóa đầu mã quốc gia
            if (!input.startsWith(selectedCountry.phone)) return;
            setPhone(input);
          }}
          _placeholder={{ color: "gray.400" }}
          placeholder={`${selectedCountry.phone}...`}
          color={"rgb(133, 133, 133)"}
          pl="91px"
          height="50px"
          borderRadius="12px"
          background={isDarkMode ? "#F0F0F0" : "rgb(30, 30, 30)"}
          border={"none"}
          focusBorderColor={"none"}
          fontSize="1.6rem"
        />
        <InputLeftElement
          width="110px"
          height="100%"
          px="10px"
          cursor="pointer"
          onClick={() => {
            setSearchTerm(""), handleToggleList();
          }}
        >
          <Stack direction={"row"} alignItems="center" gap="1rem">
            <Image src={selectedCountry.img} alt={selectedCountry.name} />
            <Image src={arrowBottom} />
          </Stack>
        </InputLeftElement>
      </InputGroup>

      {showList && (
        <Box
          ref={wrapperRef}
          position="absolute"
          top="100%"
          mt="8px"
          maxH="314px"
          overflowY="auto"
          maxWidth="325px"
          bg={isDarkMode ? "white" : "black"}
          border="1px solid #ccc"
          borderRadius="2rem"
          zIndex="10"
          boxShadow="md"
          sx={{
            /* Scrollbar chiều dọc */
            "&::-webkit-scrollbar": {
              width: "6px",
            },
          }}
        >
          <Stack
            direction={"row"}
            px="20px"
            pt="10px"
            pb="5px"
            borderBottom={"1px solid #ccc"}
          >
            <Image src={search} />
            <Input
              placeholder="Search country..."
              fontSize="1.6rem"
              border="none"
              px="12px"
              py="8px"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Stack>
          <VStack align="start" spacing={5} p={"10px"}>
            {DataCountry.filter((country) =>
              country.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((country, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                gap="10px"
                w="full"
                px={2}
                py={1}
                cursor="pointer"
                onClick={() => {
                  handleSelectCountry(country), setSearchTerm("");
                }}
              >
                <Image src={country.img} />
                <Text fontSize="1.6rem">{country.name}</Text>
                <Text fontSize="1.6rem" color={"#858585"}>
                  ({country.phone})
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </FormControl>
  );
};

export default PhoneNumber;
