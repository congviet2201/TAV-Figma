import { Stack, Text } from "@chakra-ui/react";
import { useLanguage } from "@components/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Get3DRender } from "@apis/homepage.api";
import type { I3DRender } from "@interfaces/IProduct";

const FOOTER_PROJECTS = ["Dasong Village - Hòa Bình", "Oceanfront - Nha Trang", "The Sensia - Vinh", "Đảo Kim Cương - Đà Nẵng"];

const RightContent = () => {
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();
  const [allProjects, setAllProjects] = useState<I3DRender[]>([]);

  useEffect(() => {
    Get3DRender().then((r) => setAllProjects(r.data || []));
  }, []);

  const handleProjectClick = (name: string) => {
    const item = allProjects.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      navigator("/products/3drender", {
        state: {
          image: item.media,
          subMedia: item.subMedia,
          name: item.name,
        },
      });
    } else {
      navigator("/products/3drender");
    }
  };

  return (
    <Stack
      justifyContent={{ base: "center", md: "space-between" }}
      direction={{ base: "row", xl: "column" }}
      width={"100%"}
      maxW={"554px"}
      gap={3}
    >
      <Stack direction={"row"} gap={{ base: 3, lg: 100 }}>
        <Stack gap={5} fontSize={"1.6rem"} fontWeight={"400"}>
          <Text fontWeight={"600"} fontSize={"1.8rem"}>
            {isLanguage === "vi"
              ? "Trang chủ"
              : isLanguage === "en"
              ? "Home"
              : "ホーム"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/");
            }}
          >
            {isLanguage === "vi"
              ? "Tổng quan"
              : isLanguage === "en"
              ? "Overview"
              : "概要"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/");
            }}
          >
            {isLanguage === "vi"
              ? "Nổi bật"
              : isLanguage === "en"
              ? "Highlights"
              : "注目"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/");
            }}
          >
            {isLanguage === "vi"
              ? "Giải pháp"
              : isLanguage === "en"
              ? "Solutions"
              : "ソリューション"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/");
            }}
          >
            {isLanguage === "vi"
              ? "Giá"
              : isLanguage === "en"
              ? "Pricing"
              : "価格"}
          </Text>
        </Stack>
        <Stack gap={5} fontSize={"1.6rem"} fontWeight={"400"}>
          <Text fontWeight={"600"} fontSize={"1.8rem"}>
            {isLanguage === "vi"
              ? "Công ty"
              : isLanguage === "en"
              ? "Company"
              : "会社"}{" "}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => navigator("/aboutus")}
          >
            {isLanguage === "vi"
              ? "Về chúng tôi"
              : isLanguage === "en"
              ? "About Us"
              : "私たちについて"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/");
            }}
          >
            {isLanguage === "vi"
              ? "Tin tức"
              : isLanguage === "en"
              ? "News"
              : "ニュース"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/", { state: { scrollTo: "advise" } });
            }}
          >
            {isLanguage === "vi"
              ? "Liên hệ"
              : isLanguage === "en"
              ? "Contact"
              : "お問い合わせ"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => navigator("/blogs")}
          >
            {isLanguage === "vi"
              ? "Bài viết"
              : isLanguage === "en"
              ? "Blog"
              : "ブログ"}
          </Text>
        </Stack>
      </Stack>

      <Stack direction={"row"} gap={{ base: 3, lg: 70 }}>
        <Stack gap={5} fontSize={"1.6rem"} fontWeight={"400"}>
          <Text fontWeight={"600"} fontSize={"1.8rem"}>
            {isLanguage === "vi"
              ? "Dịch vụ"
              : isLanguage === "en"
              ? "Services"
              : "サービス"}{" "}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/services", {
                state: { scrollTo: `${"vr/artour"}` },
              });
            }}
          >
            {isLanguage === "vi"
              ? "VR/AR Tour"
              : isLanguage === "en"
              ? "VR/AR Tour"
              : "VR/ARツアー"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/services", {
                state: { scrollTo: `${"3dmodel"}` },
              });
            }}
          >
            {isLanguage === "vi"
              ? "3D Modelling"
              : isLanguage === "en"
              ? "3D Modelling"
              : "3Dモデリング"}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "#F5712A" }}
            onClick={() => {
              navigator("/services", {
                state: { scrollTo: `${"3dmapping"}` },
              });
            }}
          >
            {isLanguage === "vi"
              ? "Project Mapping"
              : isLanguage === "en"
              ? "Project Mapping"
              : "プロジェクトマッピング"}
          </Text>
        </Stack>
        <Stack gap={5} fontSize={"1.6rem"} fontWeight={"400"}>
          <Text fontWeight={"600"} fontSize={"1.8rem"}>
            {isLanguage === "vi"
              ? "Dự án"
              : isLanguage === "en"
              ? "Projects"
              : "プロジェクト"}{" "}
          </Text>
          {FOOTER_PROJECTS.map((name) => (
            <Text
              key={name}
              cursor={"pointer"}
              _hover={{ color: "#F5712A" }}
              onClick={() => handleProjectClick(name)}
            >
              {name}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RightContent;
