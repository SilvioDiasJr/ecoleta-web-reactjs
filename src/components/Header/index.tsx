import React from 'react'

import { useNavigate } from 'react-router-dom'

import logoImg from '@assets/logo.svg'

import { Container, GoBack, IconArrowLeft } from './styles'

interface Props {
  goBack?: boolean
}

export const Header: React.FC<Props> = ({ goBack }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <img src={logoImg} alt="Logo Ecoleta" />

      {goBack && (
        <GoBack onClick={() => navigate('/')}>
          <IconArrowLeft />
          <h1>Voltar para o início</h1>
        </GoBack>
      )}
    </Container>
  )
}
