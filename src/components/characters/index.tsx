'use client'

import { Character } from "@/interfaces/characters/characters"
import { CreateCharacterCard } from "./create/CreateCharacterCard"
import { SingleCharacterCard } from "./show/SingleCharacterCard"
import { useState } from "react"

interface Props {
  userId: string
  characters: Character[]
}

export const Characters = ({userId, characters}: Props) => {

  const [charactersState, setCharacters] = useState(characters)

  return (
    <div className="md:flex gap-5">
      <div className="basis-1/2 mb-5">
        <CreateCharacterCard userId={userId} setCharacter={setCharacters}/>
      </div>
      <div className="grid justify-center md:grid-cols-3 basis-1/2 md:justify-between gap-5">
        {
          charactersState.map((character) => (
            <div key={character.id}>
              <SingleCharacterCard character={character} userId={userId}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}