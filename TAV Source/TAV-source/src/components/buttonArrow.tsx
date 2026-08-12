/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Image, Stack, SystemStyleObject, Text } from "@chakra-ui/react";
import arrow from "@assets/image/arrow-up-right.png";

interface IButtonArrow {
  title: string;
  sx?: SystemStyleObject;
  sxText?: SystemStyleObject;
  onClick?: () => void;
}
const ButtonArrow = ({ ...props }: IButtonArrow) => {
  return (
    <Stack
      sx={{ ...props.sx }}
      direction={"row"}
      as="button"
      alignItems={"center"}
      bgColor={"#F5712A"}
      p={{ base: "10px", md: "20px" }}
      alignSelf={{ base: "center", md: "start" }}
      cursor={"pointer"}
      borderRadius={"1.5rem"}
      justifyContent={"space-between"}
      onClick={props.onClick}
    >
      <Text sx={{ ...props.sxText }} color={"white"}>
        {props.title}
      </Text>
      <Image src={arrow} />
    </Stack>
  );
};

export default ButtonArrow;
*/