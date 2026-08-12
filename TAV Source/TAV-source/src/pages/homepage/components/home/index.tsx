/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { GetHomepage } from "@apis/homepage.api";
import { useEffect, useState } from "react";
import { IHome } from "@interfaces/IHomePage";
import "./style.css";
import { useVideoLoad } from "@components/VideoLoadContext";
import LazyVideo from "@components/LazyVideo";
import { getPosterUrl } from "@utils/mediaUtils";
import ScrollTopButton from "@components/scrollTop";

const Home = () => {
  const [dataApi, setDataApi] = useState<IHome[] | undefined>();
  const { setVideoLoaded } = useVideoLoad();
  const isMobile = useBreakpointValue({ base: true, xl: false });
  const getFileType = (src: string): "image" | "video" | "unknown" => {
    const cleanSrc = src.split("?")[0].toLowerCase();

    if (/\.(jpg|jpeg|png|gif|webp)$/.test(cleanSrc)) return "image";
    if (/\.(mp4|webm|ogg)$/.test(cleanSrc)) return "video";

    return "unknown";
  };

  useEffect(() => {
    const picture = dataApi?.[0]?.homePicture;
    if (!picture) return;

    const type = getFileType(picture);

    if (type === "image") {
      const img = document.createElement("img");
      img.src = picture;
      img.onload = () => setVideoLoaded(true);
    }
  }, [dataApi]);

  useEffect(() => {
    GetHomepage().then((res) => {
      setDataApi(res.data);
    });
  }, []);

  const renderMedia = () => {
    const picture = dataApi?.[0]?.homePicture;

    if (!picture) {
      return <div className="products-lazy-video-wrap home-hero-wrap" style={{ aspectRatio: "16/9", width: "100%" }} />;
    }

    const type = getFileType(picture);
    const poster = getPosterUrl(picture);

    if (type === "video") {
      return (
        <LazyVideo
          src={picture}
          poster={poster}
          aspectRatio={isMobile !== false ? "16/9" : "auto"}
          wrapStyle={isMobile !== false ? { width: "100%" } : { height: "100dvh", width: "100%" }}
          onPosterLoaded={() => setVideoLoaded(true)}
          onVideoLoaded={() => !poster && setVideoLoaded(true)}
        />
      );
    }

    if (type === "image") {
      return (
        <Image
          src={picture}
          width="100%"
          height="100dvh"
          objectFit="cover"
          position="absolute"
          top={0}
          left={0}
        />
      );
    }

    return <div className="products-lazy-video-wrap home-hero-wrap" style={{ aspectRatio: "16/9", width: "100%" }} />;
  };
  return (
    <Box
      id="galary"
      width="100%"
      height={"fit-content"}
      pt={{ base: "80px", xl: "0px" }}
    >
      {renderMedia()}
      {/* <video
        onLoadedData={() => {
          setTimeout(() => setVideoLoaded(true), 10000);
        }}
        src="https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2F0531_%20VIDEO%2016-9%20rut%20ngan%20.mp4?alt=media&token=0cb96c76-ca7d-48da-9d7c-8da18678b248"
        width="100%"
        height="100%"
        style={{ maxHeight: "100dvh", maxWidth: "100dvw" }}
        autoPlay
        loop
        muted
      /> * /}

      {/* <Stack
        gap={20}
        p={{ base: "20px", md: "50px" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-end" }}
        height={{ base: "100dvh", md: "100%" }}
        textAlign={{ base: "center", md: "left" }}
        width={"100%"}
      > * /}
      {/* <Text
          fontWeight={"600"}
          fontSize={{ base: "3.2rem", md: "4.8rem" }}
          maxW={"482px"}
          textTransform={"uppercase"}
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          color={"white"}
        >
          <Box
            dangerouslySetInnerHTML={{
              __html: dataApi?.[0]?.homeTitle?.[isLanguage] ?? "",
            }}
          /> * /}
      {/* {isLanguage === "vi" ? (
            <>
              biến ý tưởng thành{" "}
              <span style={{ color: "#F5712A" }}>
                trải nghiệm trực quan đột phá
              </span>{" "}
              với công nghệ <span style={{ color: "#F5712A" }}>3d</span>,
              <span style={{ color: "#F5712A" }}> ar/vr</span> tiên tiến
            </>
          ) : isLanguage === "en" ? (
            <>
              transform ideas into{" "}
              <span style={{ color: "#F5712A" }}>
                groundbreaking visual experiences
              </span>{" "}
              with advanced <span style={{ color: "#F5712A" }}>3d</span>,
              <span style={{ color: "#F5712A" }}> ar/vr</span> technology
            </>
          ) : (
            <>
              アイデアを{" "}
              <span style={{ color: "#F5712A" }}>
                革新的なビジュアル体験に変換
              </span>{" "}
              し、<span style={{ color: "#F5712A" }}>3D</span> および
              <span style={{ color: "#F5712A" }}> AR/VR</span>技術で
              <span style={{ color: "#F5712A" }}> 進化</span> を
            </>
          )} * /}
      {/* </Text> * /}
      {/* <ButtonArrow
          sx={{
            height: { base: "50px", md: "60px" },
          }}
          sxText={{
            fontSize: { base: "1.4rem", md: "1.6rem" },
            fontWeight: "400",
          }}
          title={
            isLanguage === "vi"
              ? "Tìm hiểu thêm"
              : isLanguage === "en"
              ? "Learn More"
              : "詳しく見る"
          }
        /> * /}
      {/* </Stack> * /}

      {/* scroll top * /}
      <ScrollTopButton />
    </Box>
  );
};

export default Home;
*/