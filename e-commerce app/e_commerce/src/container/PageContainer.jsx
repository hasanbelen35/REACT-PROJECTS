import React from 'react'
import { Container } from 'reactstrap'

export default function PageContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
