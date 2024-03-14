import { CustomCard } from "@/components/custom/CustomCard"
import { Character } from "@/interfaces/characters/characters"
import { HeaderImage } from "./HeaderImage"
import { BodyContent } from "./BodyContent"
import { FooterButton } from "./FooterButton"
import { slantedText } from "@/config/fonts"

interface Props {
  character: Character | null
  isOwner: boolean
  userId: string
}

export const DetailCharacter = ({character, isOwner, userId}: Props) => {

  return (
    <div className="flex items-center justify-center h-full gap-4">
      {
        isOwner ? (
          <CustomCard
             header={<HeaderImage character={character}/>}
             body={<BodyContent character={character} />}
             footer={<FooterButton characterId={character?.id} userId={userId} />}
          />
        ) : (
          <CustomCard
            header={<HeaderImage character={character}/>}
            body={<BodyContent character={character} />}
          />
        )
      }
      <CustomCard
          className="h-full"
          header={<p>Descripción</p>}
          footer={
            character?.description ? (
              <p className="w-96 hyphens-auto	">{character?.description}</p>
            ) : (
              <p className={`flex w-96 h-full ${slantedText.className} justify-center`}>No hay descripción, agrega una.</p>
            )
          }
      />
    </div>
  )
}