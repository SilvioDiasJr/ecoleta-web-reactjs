import { FiUpload } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  width: 60.8rem;
  height: 30.4rem;

  border-radius: 8px;

  padding: 3.2rem;

  background: ${({ theme }) => theme.colors.secondary};
`

export const DropzoneArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px dashed ${({ theme }) => theme.colors.main};
  border-radius: 8px;

  p {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.title};
  }
`

export const IconUpload = styled(FiUpload)`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.main};

  margin-bottom: 16px;
`
