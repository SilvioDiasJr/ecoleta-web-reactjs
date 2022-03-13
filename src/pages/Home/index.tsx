import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Header } from '@components/Header'

import peopleImg from '@assets/people.png'

import {
  ButtonRegister,
  Container,
  Content,
  IconContainer,
  IconLogin,
  Information,
  RegisterContainer,
  Wrapper
} from './styles'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>
          <Information>
            <h1>Seu marketplace de coleta de resíduos.</h1>

            <p>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </p>

            <RegisterContainer>
              <IconContainer>
                <IconLogin />
              </IconContainer>

              <ButtonRegister onClick={() => navigate('/register')}>
                Cadastre um ponto de coleta
              </ButtonRegister>
            </RegisterContainer>
          </Information>
          <img
            src={peopleImg}
            alt="Imagem de duas pessoas descartando o lixo corretamente"
          />
        </Content>
      </Wrapper>
    </Container>
  )
}
