import styled from 'styled-components'

import { FiArrowLeft } from 'react-icons/fi'

export const Container = styled.div`
  width: 100%;
  height: 13.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.5rem;
`

export const GoBack = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  h1 {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};
  }
`

export const IconArrowLeft = styled(FiArrowLeft)`
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.main};

  margin-right: 12px;
`
