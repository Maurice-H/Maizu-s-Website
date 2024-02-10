import { Box, Typography } from "@mui/material";
import RainbowSixSiege from "./RainbowSixSiege";
import Osu from "./Osu";
import RocketLeague from "./RocketLeague";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import style from "../CSS/GameHistory.module.css";

import "swiper/css/bundle";

function GameHistory() {
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
        <Typography sx={{ fontSize: "3.5rem" }}>
          Games I put most of my hours in
        </Typography>
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
              <RocketLeague />
            </SwiperSlide>
            <SwiperSlide>
              <Osu />
            </SwiperSlide>
            <SwiperSlide>
              <RainbowSixSiege />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default GameHistory;
