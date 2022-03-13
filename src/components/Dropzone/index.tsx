import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { Container, DropzoneArea, IconUpload } from './styles'

export const Dropzone: React.FC = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])
  const { getInputProps, getRootProps } = useDropzone({ onDrop })
  return (
    <Container>
      <DropzoneArea {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />

        <IconUpload />
        <p>Imagem do estabelecimento</p>
      </DropzoneArea>
    </Container>
  )
}
