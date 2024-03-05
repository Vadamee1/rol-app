import { COLUMNSRBATABLE } from "@/constants/create-rba/ColumnsTableEdit"
import { SectionOptions, SectionRBA, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"
import { Dispatch, SetStateAction, useCallback } from "react"
import { EditModal } from "../section/EditModal"
import { DeleteModal } from "../section/DeleteModal"
import { OptionsAccordion } from "../accordion/OptionsAccordion"

interface Props {
  sections: SectionWithAccordions[]
  sectionsWithAccordions: SectionWithAccordions[]
  userId: string | undefined
  setSections: Dispatch<SetStateAction<SectionOptions[]>>
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const RBATable = ({sectionsWithAccordions, userId, setSections, setSectionsWithAccordions, sections}: Props) => {

  const renderCell = useCallback((section: SectionWithAccordions, columnKey: React.Key) => {
    const cellValue = section[columnKey as keyof SectionWithAccordions]

    switch (columnKey) {
      case "section":
        return (
          <span>
            {section.name}
          </span>
        )
      case "actions":
        return (
          <div className="flex">
            <EditModal
              section={section}
              userId={userId}
              setSections={setSections}
              setSectionsWithAccordions={setSectionsWithAccordions}
            />
            <DeleteModal
              section={section}
              setSections={setSections}
              setSectionsWithAccordions={setSectionsWithAccordions}
              userId={userId}
            />
            <OptionsAccordion
              sectionId={section.id}
            />
          </div>
        )
      default:
        return cellValue;
    }
  }, [])

  return (
    <Table aria-label="Tabla de secciones">
      <TableHeader columns={COLUMNSRBATABLE}>
        {(column) => (
          <TableColumn key={column.uid}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={sectionsWithAccordions}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}