import styled from 'styled-components'

import { FiLogIn } from 'react-icons/fi'
import { shade } from 'polished'

import backgroundImg from '@assets/background.png'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${backgroundImg});
  background-size: cover;
`

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
`

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 13.4rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    z-index: 1;
  }
`

export const Information = styled.div`
  h1 {
    font-size: 5.4rem;
    line-height: 6.4rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 24px;
  }

  p {
    width: 44.8rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};

    margin-bottom: 40px;
  }
`

export const RegisterContainer = styled.div`
  width: 36rem;
  height: 7.2rem;

  display: flex;

  border-radius: 8px;
`

export const ButtonRegister = styled.button`
  flex: 1;
  height: 100%;

  border: 0;
  border-radius: 0 8px 8px 0;

  cursor: pointer;

  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main};

  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => shade(0.1, theme.colors.main)};
  }
`

export const IconContainer = styled.div`
  width: 7.2rem;
  height: 7.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px 0 0 8px;

  background-color: ${({ theme }) => theme.colors.main_dark};
`

export const IconLogin = styled(FiLogIn)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`
