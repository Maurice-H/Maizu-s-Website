import { Box, Typography } from "@mui/material";
import Career from "./Career";
import Hobbys from "./Hobbys";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import style from "../CSS/GameHistory.module.css";

import "swiper/css/bundle";

function AboutMe() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "flexstart",
          alignItems: "center",
          height: "90vh",
          width: "100vw",
          marginTop: "5%",
        }}
      >
        <Typography sx={{ fontSize: "3.5rem" }}>About Me</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "flexstart",
            justifyContent: "flexstart",
            alignItems: "flexstart",
            height: "70vh",
            width: "55vw",
            backgroundImage: "linear-gradient(#0F1035, #2F8288, #0F1035)",
            border: "outset #D7E5E6 2px",
            borderRadius: "20px",
          }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            fadeEffect={{ crossFade: true }}
            rewind={true}
            speed={1000}
            effect={"fade"}
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            className={style.swiper}
          >
            <SwiperSlide>
              <Career />
            </SwiperSlide>
            <SwiperSlide>
              <Hobbys />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default AboutMe;
