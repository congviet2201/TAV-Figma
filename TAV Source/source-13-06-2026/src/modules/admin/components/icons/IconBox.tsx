import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function IconBox(props: {
  icon: ReactNode | string;
  [x: string]: any;
}) {
  const { icon, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"50%"}
      {...rest}
    >
      {icon}
    </Flex>
  );
}
