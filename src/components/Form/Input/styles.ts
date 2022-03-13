import styled, { css } from 'styled-components'

interface ContainerProps {
  size: 'small' | 'medium' | undefined
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 25%;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 50%;
    `}

  display: flex;
  flex-direction: column;

  margin-bottom: 2.4rem;

  label {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};

    margin-bottom: 0.8rem;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;

  border-radius: 8px;
  border: 0;

  outline-color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.background};
`
