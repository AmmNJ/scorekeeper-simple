import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <InputGrid>
      {labelText}
      <input name={name} placeholder={placeholder} type="text" />
    </InputGrid>
  )
}

const InputGrid = styled.label`
  display: grid;
  gap: 4px;

  & input {
    border: 2px solid #bbb;
  }
`
