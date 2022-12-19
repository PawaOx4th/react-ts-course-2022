import React, { PropsWithChildren } from "react"
import { initialPerson, PersonContext } from "./personContext"

function PersonProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <PersonContext.Provider value={initialPerson}>
      {children}
    </PersonContext.Provider>
  )
}

export default PersonProvider
