import { styled } from "styled-components";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactOptions() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k1q0z5e",
        "template_y77ttwp",
        form.current,
        "WaiJJofYVFrhqcvpo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <ContactOptionSection id="contacts">
      <h5>Vamos conversar?</h5>
      <h2>Contatos</h2>
      <Container>
        <Cards>
          <Card>
            <h4>E-mail</h4>
            <h6>nathanandrade20@gmail.com</h6>
            <button>
              <a
                href="mailto: nathanandrade20@gmail.com"
                target="_blank"
                rel="noreferrer">
                Envie um e-mail
              </a>
            </button>
          </Card>
          <Card>
            <h4>WhatsApp</h4>
            <h6>+123456789</h6>
            <button>
              <a
                href="https://api.whatsapp.com/send?phone=5583987241377"
                target="_blank"
                rel="noreferrer">
                Mande uma mensagem
              </a>
            </button>
          </Card>
        </Cards>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required></textarea>
          <button type="submit">Enviar mensagem</button>
        </form>
      </Container>
    </ContactOptionSection>
  );
}

const Card = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1.2rem;
  text-align: center;
  border-radius: 1.2rem;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  h6 {
    color: #777cf4;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;
  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border: none;
    input,
    textarea {
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid #777cf4;
      resize: none;
      color: #ffffff;
    }
    input:focus,
    textarea:focus {
      outline: none;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 5%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const ContactOptionSection = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;
