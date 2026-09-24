import { Box, Stack, Image } from "@chakra-ui/react";
import { DataPartner } from "@constants/data-homepage";

const Content = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={{ base: 10, md: 20, lg: 1, xl: 10 }}
    >
      {DataPartner.map((item, index) => (
        <Box
          key={index}
          position="relative"
          role="group"
          width="150px"
          height="100px"
          pt={item.top}
          pl={item.left}
        >
          <Image
            src={item.img}
            width={item.width}
            height={item.height}
            objectFit="contain"
          />

          <Box
            position="absolute"
            top="0"
            left="0"
            width="150px"
            height="100px"
            background="gray"
            mixBlendMode="color"
            pointerEvents="none"
            opacity="1"
            transition="opacity 0.2s"
            _groupHover={{
              opacity: 0,
            }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default Content;
