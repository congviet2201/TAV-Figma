/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Image, Stack, Text } from "@chakra-ui/react";
// import intro3 from "@assets/image/intro3.png";
// import video from "@assets/videos/introduceThrid.mp4";
import arrowDown4 from "@assets/image/arrow-down4.png";
import arrowDown5 from "@assets/image/arrow-down5.png";
import ButtonArrow from "@components/buttonArrow";
import { useLanguage } from "@components/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "@components/DarkModeContext";
import { GetIntroduce3 } from "@apis/homepage.api";
import { useEffect, useState } from "react";
import { IIntroduceThrid } from "@interfaces/IHomePage";

const IntroduceThrid = () => {
  const { isDarkMode } = useDarkModeContext();
  const { isLanguage } = useLanguage();
  const navigator = useNavigate();
  const [dataApi, setDataApi] = useState<IIntroduceThrid[] | undefined>();

  useEffect(() => {
    GetIntroduce3().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  const getFileType = (src: string): "image" | "video" | "unknown" => {
    const cleanSrc = src.split("?")[0].toLowerCase();

    if (
      cleanSrc.includes(".jpg") ||
      cleanSrc.includes(".jpeg") ||
      cleanSrc.includes(".png") ||
      cleanSrc.includes(".gif") ||
      cleanSrc.includes(".webp")
    ) {
      return "image";
    }

    if (
      cleanSrc.includes(".mp4") ||
      cleanSrc.includes(".webm") ||
      cleanSrc.includes(".ogg")
    ) {
      return "video";
    }

    return "unknown";
  };

  return (
    <Stack gap={5}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 10, lg: 20, "2xl": 40 }}
        width={"100%"}
        height={"fit-content"}
      >
        <Text
          fontWeight={"500"}
          fontSize={{ base: "2.4rem", md: "3.2rem" }}
          textAlign="justify"
          flex={1}
        >
          {dataApi?.[0].description?.[isLanguage]}
          {/* {isLanguage === "vi"
            ? "Với chuyên môn cao và tư duy thị giác hiện đại, chúng tôi đồng hành cùng đối tác để tạo ra những sản phẩm khác biệt – nơi công nghệ, thẩm mỹ và chiến lược thể hiện hòa quyện, góp phần nâng tầm giá trị dự án ngay từ cái nhìn đầu tiên."
            : isLanguage === "en"
            ? "With high expertise and a modern visual mindset, we collaborate with partners to create distinctive products – where technology, aesthetics, and strategy blend seamlessly, enhancing project value from the first glance."
            : "高度な専門知識と現代的なビジュアル思考で、私たちはパートナーと共に、テクノロジー、美学、戦略が融合した独自の製品を創造し、第一印象からプロジェクトの価値を高めます。"} * /}
        </Text>
        <Box flex={1.5}>
          <Box position={"relative"}>
            {getFileType(dataApi?.[0].picture || "") === "video" ? (
              <video
                src={dataApi?.[0].picture}
                // src={
                //   "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fngay-dem-laocai-compressed.mp4?alt=media&token=7e059c8e-510e-4386-bc74-e0eb55561755"
                // }
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "5rem",
                  pointerEvents: "none",
                }}
              />
            ) : (
              <Image
                src={dataApi?.[0].picture}
                objectFit="cover"
                width="100%"
                borderRadius="5rem"
              />
            )}

            <Box position={"absolute"} bottom={0} right={0} p="20px">
              <ButtonArrow
                onClick={() => {
                  navigator("/aboutus");
                }}
                sx={{
                  height: { base: "50px", md: "60px" },
                }}
                sxText={{ fontSize: { base: "1.4rem", md: "1.5rem" } }}
                title={
                  isLanguage === "vi"
                    ? "Khám phá thêm về chúng tôi"
                    : isLanguage === "en"
                    ? "Discover more about us"
                    : "私たちについてもっと知る"
                }
              />
            </Box>
          </Box>
        </Box>
      </Stack>
      <Image src={isDarkMode ? arrowDown5 : arrowDown4} width={"5%"} />
    </Stack>
  );
};

export default IntroduceThrid;
*/