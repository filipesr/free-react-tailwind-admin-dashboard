import { Product } from '@/types/product'
import { BsEye, BsPencil } from 'react-icons/bs'
import ButtonRowDelete from './ButtonRowDelete'
import { useState } from 'react'
import TableDeleteRow from './TableDeleteRow'
import TableEditRow from './TableEditRow'

interface TableRowProps {
  product: Product
  rowView: (product: Product) => boolean
  rowEdit: (product: Product) => boolean
  canEdit: boolean
  rowDelete: (product: Product) => boolean
  canDelete: boolean
}

enum eAction {
  'LIST',
  'DELETING',
  'DELETED',
  'EDITING',
  'EDITED',
  'SAVING',
  'SAVED'
}

const TableRow = ({
  product,
  rowView,
  rowEdit,
  canEdit = true,
  rowDelete,
  canDelete = true
}: TableRowProps) => {
  const [action, setAction] = useState(eAction.LIST)
  const deleted = action === eAction.DELETED
  const deleting = action === eAction.DELETING
  const editing = action === eAction.EDITING

  const { id, image, name, category, price, sold, profit } = product

  const log = (action: string) => console.log(`TableRow.${action}(${id})`)
  const handleView = () => {
    log('rowView')
    return rowView(product)
  }
  const handleEdit = () => {
    log('rowEdit')
    setAction(eAction.EDITING)
    // return rowEdit(product)
  }
  const handleSaveConfirm = (value: boolean) => {
    log('rowSaveConfirm')
    setAction(value && rowEdit(product) ? eAction.SAVED : eAction.LIST)
    return rowEdit(product)
  }
  const handleDelete = () => {
    log('rowDelete')
    setAction(eAction.DELETING)
  }
  const handleDeleteConfirm = (value: boolean) => {
    log('rowDeleteConfirm')
    setAction(value && rowDelete(product) ? eAction.DELETED : eAction.LIST)
  }

  return (
    <div
      className={`grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5 ${deleted ? 'opacity-0 hidden' : 'opacity-100 visible'} transition-all duration-500`}
    >
      <TableEditRow
        product={product}
        setConfirm={handleSaveConfirm}
        show={editing}
      />
      <TableDeleteRow
        product={product}
        setConfirm={handleDeleteConfirm}
        show={deleting}
      />
      <div className="col-span-3 flex items-center">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-12.5 w-15 rounded-md">
            <img src={image} alt="Product" />
          </div>
          <p className="text-sm text-black dark:text-white">{name}</p>
        </div>
      </div>
      <div className="col-span-2 hidden items-center sm:flex">
        <p className="text-sm text-black dark:text-white">{category}</p>
      </div>
      <div className="col-span-1 flex items-center">
        <p className="text-sm text-black dark:text-white">${price}</p>
      </div>
      <div className="col-span-1 flex items-center">
        <p className="text-sm text-black dark:text-white">{sold}</p>
      </div>
      <div className="col-span-1 flex items-center">
        <p className="text-sm text-meta-3">${profit}</p>
      </div>
      <div className="col-span-1 flex items-center">
        <div className="flex items-center space-x-3.5 w-full justify-center">
          <button onClick={handleView} className="">
            <BsEye />
          </button>
          {canEdit && (
            <button onClick={handleEdit} className="">
              <BsPencil />
            </button>
          )}
          {canDelete && (
            <ButtonRowDelete product={product} rowDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TableRow
