import { styled } from "styled-components";
import ReviewItem from "./ReviewItem";
import reactimage from "../assets/react.png";

import reviewer1 from "../assets/reviews/reviewer1.jpg";
import reviewer2 from "../assets/reviews/reviewer2.jpg";
import reviewer3 from "../assets/reviews/reviewer3.jpg";
import reviewer4 from "../assets/reviews/reviewer4.jpg";
// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

export default function Reviews() {
  const reviewList = [
    {
      name: "Maria",
      image: reviewer1,
      post: "Estou muito satisfeita com o trabalho do Nathan! Ele foi extremamente profissional e talentoso na criação do meu site. Sua atenção aos detalhes e habilidades técnicas impressionaram. Além disso, ele foi ótimo em entender minhas necessidades e trazer minhas ideias à vida. Recomendo o trabalho do Nathan a todos!",
    },
    {
      name: "João",
      image: reviewer2,
      post: "Gostaria de agradecer ao Nathan pelo excelente trabalho que ele fez no desenvolvimento do meu site. Sua experiência em frontend é evidente em cada detalhe do design. Ele foi paciente em responder minhas perguntas e implementou todas as funcionalidades que eu queria. Estou muito feliz com o resultado final!",
    },
    {
      name: "Arthur",
      image: reviewer3,
      post: "Quero parabenizar o Nathan pelo excelente trabalho no desenvolvimento do meu site pessoal. Ele foi criativo e habilidoso na criação do design, garantindo uma experiência visualmente atraente e funcional. Além disso, ele foi altamente profissional, cumprindo os prazos e me mantendo informado sobre o progresso. ",
    },
    {
      name: "Larissa",
      image: reviewer4,
      post: "O Nathan superou minhas expectativas ao criar o site para minha empresa. Ele é um verdadeiro especialista em frontend, demonstrando um profundo conhecimento técnico e habilidades excepcionais. Além disso, ele foi sempre receptivo às minhas sugestões e fez ajustes de maneira ágil. Recomendo demais os serviços do Nathan!",
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
  padding-bottom: 2rem;

  .swiper-pagination-clickable .swiper-pagination-bullets {
    background: #777cf4;
  }
  .swiper-pagination-bullet-active {
    background: #5258f3;
  }
  .swiper {
    padding-bottom: 2rem;
    overflow: none;
  }
  .swiper-pagination {
    margin-bottom: -2rem;
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
