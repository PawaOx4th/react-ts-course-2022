import React, { useContext } from "react"
import { PersonContext } from "../context/personContext"
import { usePerson } from "../hook/usePerson"

type Props = {
  message: string
  message2?: string
}

function Header({ message, message2 }: Props) {
  const person = usePerson()
  return (
    <>
      <h1>{message}</h1>
      <strong>{person.name}</strong>
    </>
  )
}

export default Header
