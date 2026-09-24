import React, { useState } from "react";
import {
  Box,
  Button,
  // Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "@adminComponents/separator/Separator";
import DefaultAuth from "@modules/admin/layouts/auth/Default";
// Assets
import illustration from "@modules/admin/assets/img/auth/auth.png";
// import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { OptionDeployBe } from "@type/optionDeployBe";

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  // const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  // const textColorBrand = useColorModeValue("brand.500", "white");
  // const brandStars = useColorModeValue("brand.500", "brand.400");
  // const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  // const googleText = useColorModeValue("navy.700", "white");
  // const googleHover = useColorModeValue(
  //   { bg: "gray.200" },
  //   { bg: "whiteAlpha.300" }
  // );
  // const googleActive = useColorModeValue(
  //   { bg: "secondaryGray.300" },
  //   { bg: "whiteAlpha.200" }
  // );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        throw new Error("Sai thông tin đăng nhập");
      }

      const data = await res.json();

      // Lưu token vào localStorage
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);

      navigate("/admin/homepage");
    } catch (err: unknown) {
      toast({
        title: "Lỗi đăng nhập",
        description: `${err}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
  return (
    // <DefaultAuth illustrationBackground={illustration} image={illustration}>
    <DefaultAuth illustrationBackground={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="40px" mb="10px">
            Sign In
          </Heading>
          {/* <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your email and password to sign in!
          </Text> */}
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          {/* <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            bg={googleBg}
            color={googleText}
            fontWeight="500"
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
          >
            <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
            Sign in with Google
          </Button> */}
          <Flex align="center" mb="25px">
            <HSeparator />
            {/* <Text color="gray.400" mx="14px">
              or
            </Text> */}
            <HSeparator />
          </Flex>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Ngăn reload
              handleLogin(); // Gọi hàm đăng nhập
            }}
          >
            <FormControl>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="15px"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Tên đang nhập
                <Text fontSize={"15px"} color={"red"}>
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                variant="auth"
                fontSize="15px"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tài khoản"
                mb="24px"
                fontWeight="500"
                size="lg"
              />
              <FormLabel
                ms="4px"
                fontSize="15px"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password
                <Text fontSize={"15px"} color={"red"}>
                  *
                </Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isRequired={true}
                  fontSize="15px"
                  placeholder="password"
                  mb="24px"
                  size="lg"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="auth"
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={
                      (show
                        ? RiEyeCloseLine
                        : MdOutlineRemoveRedEye) as IconType
                    }
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              {/* <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox
                  id="remember-login"
                  colorScheme="brandScheme"
                  me="10px"
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <NavLink to="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password?
                </Text>
              </NavLink>
            </Flex> */}
              <Button
                isLoading={isLoading}
                fontSize="15px"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
                type="submit"
                onClick={() => {
                  handleLogin();
                }}
              >
                Sign In
              </Button>
            </FormControl>
          </form>

          {/* <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Not registered yet?
              <NavLink to="/auth/sign-up">
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Create an Account
                </Text>
              </NavLink>
            </Text>
          </Flex> */}
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
