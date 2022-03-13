import React from 'react'

import { useForm } from 'react-hook-form'

import { Header } from '@components/Header'
import { Dropzone } from '@components/Dropzone'

import { Container, Content, Form, Wrapper } from './styles'
import { InputForm } from '@components/Form/Input'

export const RegisterEntities: React.FC = () => {
  const { control } = useForm()
  return (
    <Container>
      <Wrapper>
        <Header goBack />
        <Content>
          <h1>Cadastro do ponto de coleta</h1>

          <Dropzone />

          <Form>
            <h1>Dados</h1>

            <InputForm
              name="name"
              label="Nome da entidade"
              type="text"
              control={control}
            />

            <InputForm
              name="email"
              label="Email"
              type="email"
              control={control}
            />

            <InputForm
              name="whatsapp"
              label="whatsapp"
              type="whatsapp"
              control={control}
              typeSize="medium"
            />
          </Form>
        </Content>
      </Wrapper>
    </Container>
  )
}
