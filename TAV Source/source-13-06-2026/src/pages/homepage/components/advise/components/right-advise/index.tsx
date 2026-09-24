import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import PhoneNumber from "./components/phonenumber";
import Service from "./components/services";
import ButtonContact from "./components/buttoncontact";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { OptionDeployBe } from "@type/optionDeployBe";

const RightAdvise = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    const newErrors = {
      fullName:
        fullName.trim() === ""
          ? isLanguage === "vi"
            ? "Tên không được bỏ trống"
            : isLanguage === "en"
            ? "Name is required"
            : ""
          : "",
      email:
        email.trim() === ""
          ? isLanguage === "vi"
            ? "Email không được bỏ trống"
            : isLanguage === "en"
            ? "Email is required"
            : ""
          : !isValidEmail(email)
          ? isLanguage === "vi"
            ? "Email không đúng định dạng"
            : isLanguage === "en"
            ? "Invalid email format"
            : ""
          : "",
      message:
        message.trim() === ""
          ? isLanguage === "vi"
            ? "Nội dung không được bỏ trống"
            : isLanguage === "en"
            ? "Message is required"
            : ""
          : "",
    };
    console.log(newErrors);
    setErrors(newErrors);

    // Nếu có lỗi thì không gửi API
    const hasError = Object.values(newErrors).some((msg) => msg !== "");
    if (hasError) return;

    const contactData = {
      name: fullName,
      email: email,
      phone: phone,
      message: message,
      consultationType: selectedServices,
    };

    try {
      const response = await fetch(`${OptionDeployBe.DEPLOY_DEPLOY}api/tuvan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      await response.json();
      toast({
        title:
          isLanguage === "vi"
            ? "Gửi thành công!"
            : isLanguage === "en"
            ? "Successfully sent!"
            : "送信成功！",
        description:
          isLanguage === "vi"
            ? "Chúng tôi sẽ liên hệ với bạn sớm nhất."
            : isLanguage === "en"
            ? "We'll contact you as soon as possible."
            : "できるだけ早くご連絡いたします。",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      setFullName("");
      setEmail("");
      // setPhone("");
      setMessage("");
      setSelectedServices([]);
      // setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Lỗi khi gửi contact:", error);
      toast({
        title:
          isLanguage === "vi"
            ? "Gửi thất bại!"
            : isLanguage === "en"
            ? "Failed to send!"
            : "送信失敗！",
        description:
          isLanguage === "vi"
            ? "Vui lòng thử lại sau."
            : isLanguage === "en"
            ? "Please try again later."
            : "後でもう一度お試しください。",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Stack alignItems={"center"} width={"100%"} gap={"20px"}>
      <Text
        textTransform={"uppercase"}
        fontSize={{ base: "2.4rem", md: "4.8rem" }}
        fontWeight={"600"}
      >
        {isLanguage === "vi"
          ? "Đăng ký nhận tư vấn"
          : isLanguage === "en"
          ? "Sign up for consultation"
          : "相談に申し込む"}
      </Text>

      <FormControl isInvalid={!!errors.fullName}>
        <FormLabel
          pb={"15px"}
          fontSize="2rem"
          fontWeight="600"
          color={isDarkMode ? "black" : "white"}
        >
          {isLanguage === "vi"
            ? "Tên liên hệ"
            : isLanguage === "en"
            ? "Contact Name"
            : "連絡先名"}
        </FormLabel>
        <Input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={
            isLanguage === "vi" ? "Tên" : isLanguage === "en" ? "Name" : "名前"
          }
          _placeholder={{ color: "gray.400" }}
          color={"rgb(133, 133, 133)"}
          borderRadius={"7px"}
          px={"20px"}
          fontSize="1.6rem"
          height={"50px"}
          background={isDarkMode ? "#F0F0F0" : "rgb(30, 30, 30)"}
          border={"none"}
          focusBorderColor={"none"}
        />
        {errors && (
          <Text color="red.500" fontSize="1.4rem" mt="5px">
            {errors.fullName}
          </Text>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel
          pb={"15px"}
          fontSize="2rem"
          fontWeight="600"
          color={isDarkMode ? "black" : "white"}
        >
          {isLanguage === "vi"
            ? "Email"
            : isLanguage === "en"
            ? "Email"
            : "メール"}
        </FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color={"rgb(133, 133, 133)"}
          placeholder="example@gmail.com"
          borderRadius={"7px"}
          _placeholder={{ color: "gray.400" }}
          px={"20px"}
          fontSize="1.6rem"
          height={"50px"}
          background={isDarkMode ? "#F0F0F0" : "rgb(30, 30, 30)"}
          border={"none"}
          focusBorderColor={"none"}
        />
        {errors.email && (
          <Text color="red.500" fontSize="1.4rem" mt="5px">
            {errors.email}
          </Text>
        )}
      </FormControl>

      <PhoneNumber phone={phone} setPhone={setPhone} />

      <FormControl isInvalid={!!errors.message}>
        <FormLabel
          pb={"15px"}
          fontSize="2rem"
          fontWeight="600"
          color={isDarkMode ? "black" : "white"}
        >
          {isLanguage === "vi"
            ? "Lời nhắn"
            : isLanguage === "en"
            ? "Message"
            : "メッセージ"}
        </FormLabel>
        <Textarea
          _placeholder={{ color: "gray.400" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          color={"rgb(133, 133, 133)"}
          placeholder={
            isLanguage === "vi"
              ? "Chúng tôi có thể giúp gì cho bạn"
              : isLanguage === "en"
              ? "How can we help you?"
              : "どのようにお手伝いしましょうか？"
          }
          borderRadius="7px"
          height="133px"
          background={isDarkMode ? "#F0F0F0" : "rgb(30, 30, 30)"}
          border={"none"}
          focusBorderColor={"none"}
          px="20px"
          py="14px"
          fontSize="1.6rem"
        />
        {errors.message && (
          <Text color="red.500" fontSize="1.4rem" mt="5px">
            {errors.message}
          </Text>
        )}
      </FormControl>

      <Service
        selectedServices={selectedServices}
        setSelectedServices={setSelectedServices}
      />

      <ButtonContact onClick={handleSubmit} isLoading={isLoading} />
    </Stack>
  );
};

export default RightAdvise;
