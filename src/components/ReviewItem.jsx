/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export default function ReviewItem({ name, image, post }) {
  return (
    <Review>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{post}</p>
    </Review>
  );
}
const Review = styled.div`
  background-color: #777cf4;
  padding: 2rem;
  text-align: center;
  border-radius: 2rem;
  img {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
  }
`;
