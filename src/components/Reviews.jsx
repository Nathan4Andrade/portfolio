import { styled } from "styled-components";
import ReviewItem from "./ReviewItem";
import reactimage from "../assets/react.png";
// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

export default function Reviews() {
  const reviewList = [
    {
      name: "Fulano",
      image: reactimage,
      post: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. ",
    },
    {
      name: "Fulano",
      image: reactimage,
      post: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. ",
    },
    {
      name: "Fulano",
      image: reactimage,
      post: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.",
    },
    {
      name: "Fulano",
      image: reactimage,
      post: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.",
    },
  ];
  return (
    <ReviewSection id="reviews">
      <h5>O que o pessoal tem achado do meu trabalho?</h5>
      <h2>Review de Clientes</h2>

      <Container>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}>
          {reviewList.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewItem
                name={review.name}
                image={review.image}
                post={review.post}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </ReviewSection>
  );
}

const Container = styled.div`
  width: 40%;

  .swiper-pagination-clickable .swiper-pagination-bullets {
    background: #777cf4;
  }
  .swiper-pagination-bullet-active {
    background: #5258f3;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
