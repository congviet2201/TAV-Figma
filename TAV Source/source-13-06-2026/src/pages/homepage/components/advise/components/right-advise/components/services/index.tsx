import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useLanguage } from "@components/LanguageContext";
import { DataAdviseService } from "@constants/data-homepage";

const Service = ({
  selectedServices,
  setSelectedServices,
}: {
  selectedServices: string[];
  setSelectedServices: (services: string[]) => void;
}) => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();

  return (
    <FormControl>
      <FormLabel
        htmlFor="none"
        pb={"15px"}
        fontSize="2rem"
        fontWeight="600"
        color={isDarkMode ? "black" : "white"}
      >
        {isLanguage === "vi"
          ? "Dịch vụ"
          : isLanguage === "en"
          ? "Service"
          : "サービス"}
      </FormLabel>
      <CheckboxGroup
        colorScheme="teal"
        value={selectedServices}
        onChange={(values) => setSelectedServices(values.map(String))}
      >
        <SimpleGrid columns={{ base: 2, md: 3 }} spacingY={"2rem"} spacingX={6}>
          {DataAdviseService.map((item, index) => (
            <Checkbox
              key={index}
              width={"fit-content"}
              value={item.value}
              spacing={"15px"}
              sx={{
                // css ô checkbox
                "& .chakra-checkbox__control": {
                  width: "22px",
                  height: "21px",
                  border: "2px solid gray",
                },
                // css dấu tít
                "& svg": {
                  fontSize: "1.4rem",
                  color: "red",
                },
                // css checkbox đc chọn
                "&[data-checked] .chakra-checkbox__control": {
                  border: "1px solid red",
                  background: "white",
                },
                "&[data-checked]:hover .chakra-checkbox__control": {
                  background: "transparent",
                },
              }}
            >
              <Text fontSize="18px" fontWeight={"400"}>
                {item.name}
              </Text>
            </Checkbox>
          ))}
        </SimpleGrid>
      </CheckboxGroup>
    </FormControl>
  );
};

export default Service;
