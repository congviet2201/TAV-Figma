/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Box } from "@chakra-ui/react";
// import { DataListImg } from "@constants/data-aboutus";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { useEffect, useState } from "react";
import { IListImg } from "@interfaces/IAboutUs";
import { GetIntroduce } from "@apis/homepage.api";
import FadeImage from "@components/FadeImage";

const ListImg = () => {
  const [dataApi, setDataApi] = useState<IListImg[] | undefined>();
  useEffect(() => {
    GetIntroduce().then((res) => {
      setDataApi(res.data.data.aboutUs);
    });
  }, []);

  const images = dataApi?.[0]?.image;

  return (
    images && images.length > 0 ? (
      <Swiper
        key={images.length}
        slidesPerView={"auto"}
        className="swiperAboutus"
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((item: any, index: number) => (
          // {DataListImg.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              width="838px"
              height={{ base: "234px", md: "446px" }}
              overflow="hidden"
            >
              <FadeImage src={item} noLazy wrapStyle={{ width: "100%", height: "100%", borderRadius: "0", "--tav-border-radius-media": "0" } as React.CSSProperties} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : null
  );
};

export default ListImg;
*/