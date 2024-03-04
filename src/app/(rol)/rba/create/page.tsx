import { getSections } from "@/actions/rba/create/section/get-sections";
import { sectionOptions } from "@/actions/rba/options/sectionOptions";
import { auth } from "@/auth.config";
import { CreateRulesPage } from "@/components/rba/create";

export default async function CreateRBA () {

  const session = await auth()
  const userId = session?.user?.id

  const sections = await sectionOptions(userId)
  const sectionsWithAccordions = await getSections(userId)

  return (
    <>
      <div className="p-4">
        <p>Prmero, hay que crear un pequeño reglamento.</p>
        <div className="flex mt-5">
          <CreateRulesPage userId={userId} sectionOptions={sections} sectionsWithAccordions={sectionsWithAccordions}/>
        </div>
      </div>
    </>
  )
}
