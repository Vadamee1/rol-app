import { COLUMNSRBATABLE } from "@/constants/create-rba/ColumnsTableEdit"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react"
import { Dispatch, SetStateAction, useCallback } from "react"
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5"

interface Props {
  sectionsWithAccordions: SectionOptions[]
}

export const RBATable = ({sectionsWithAccordions}: Props) => {

  const renderCell = useCallback((section: SectionOptions, columnKey: React.Key) => {
    const cellValue = section[columnKey as keyof SectionOptions]

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
            <Tooltip content="Editar sección">
              <Button isIconOnly variant="light"  color="warning">
                <IoPencilOutline/>
              </Button>
            </Tooltip>
            <Tooltip content="Eliminar sección">
              <Button isIconOnly variant="light" color="danger">
                <IoTrashOutline/>
              </Button>
            </Tooltip>
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