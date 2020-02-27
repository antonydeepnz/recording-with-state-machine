import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  position: relative;

  padding: 10px;

  height: 500px;
  width: 500px;
`

export default ({ children }) => {
  return(
    <Container>
        {...children}
    </Container>
  )
}