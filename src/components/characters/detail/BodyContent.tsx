import { Character } from "@/interfaces/characters/characters"

interface Props {
  character: Character | null
}

export const BodyContent = ({character}: Props) => {

  return (
    <div className="grid gap-1">
      <div className="flex gap-2 justify-between">
        <p>Apodo:</p>
        <p>{character?.nickname ? character.nickname : "-"}</p>
      </div>
      <div className="flex gap-2 justify-between">
        <p>Edad:</p>
        <p>{character?.age ? character.age : "-"}</p>
      </div>
      <div className="flex gap-2 justify-between">
        <p>Ocupación:</p>
        <p>{character?.occupation ? character.occupation : "-"}</p>
      </div>
      <div className="flex gap-2 justify-between">
        <p>Raza:</p>
        <p>{character?.race ? character.race : "-"}</p>
      </div>
      <div className="flex gap-2 justify-between">
        <p>Fandom:</p>
        <p>{character?.fandom ? character.fandom : "-"}</p>
      </div>
    </div>
  )
}