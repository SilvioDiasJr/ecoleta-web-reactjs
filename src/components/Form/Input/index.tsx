import React, { InputHTMLAttributes } from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { Container, Input } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  control: Control
  type?: string
  error?: FieldError | undefined
  typeSize?: 'small' | 'medium' | undefined
}

export const InputForm: React.FC<InputProps> = ({
  name,
  label,
  control,
  type,
  error,
  typeSize,
  ...rest
}) => {
  return (
    <Container size={typeSize}>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            name={name}
            id={name}
            type={type}
            autoComplete="off"
            onChange={onChange}
            value={value || ''}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  )
}
