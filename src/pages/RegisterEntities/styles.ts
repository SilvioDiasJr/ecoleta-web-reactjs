import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 12rem;

  background: ${({ theme }) => theme.colors.background};
`

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 73.6rem;

  padding: 6.4rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.card_background};

  > h1 {
    width: 27rem;

    font-size: 3.6rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-weight: 700;
    line-height: 4.6rem;
    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 6.4rem;
  }
`

export const Form = styled.form`
  > h1 {
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};

    margin: 6.4rem 0 4rem;
  }
`
