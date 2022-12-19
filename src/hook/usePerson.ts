import { useContext } from "react"
import { PersonContext } from "./../context/personContext"
export function usePerson() {
  const person = useContext(PersonContext)

  if (!person) {
    throw new Error(
      "usePerson was used outside of its Provider or is undefined"
    )
  }

  return person
}
