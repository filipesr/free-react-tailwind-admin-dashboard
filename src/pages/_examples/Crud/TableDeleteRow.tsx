import { Product } from '@/types/product'
import { BsExclamationTriangle, BsTrash } from 'react-icons/bs'

interface TableDeleteRowProps {
  product: Product
  show: boolean
  setConfirm: (value: boolean) => void
}
const TableDeleteRow = ({
  product: { name },
  show = false,
  setConfirm
}: TableDeleteRowProps) => {
  return (
    <>
      <div
        className={`flex items-center justify-center w-full h-full bg-red-200  dark:border-strokedark bg-opacity-85 top-0 left-0 fixed  ${!show ? 'opacity-0 z-[-10]' : 'opacity-85 z-999'} transition-all duration-500 ease-in-out`}
      ></div>
      <div
        className={`absolute items-center text-danger w-full h-full rounded-lg border left-[50%] translate-x-[-50%] bg-red-200 shadow-default  ${!show ? 'opacity-0 z-[-10]' : 'opacity-100 z-9999'} transition-all duration-500 ease-in-out`}
      >
        <div className="text-lg flex items-center gap-2 py-1 px-2">
          <BsExclamationTriangle />
          Delete confirmation
        </div>
        <div className="px-10">
          Are you shure you want delete the product <strong>{name}</strong>?
        </div>
        <div className="text-sm px-10">This action cannot be undone!!</div>
        <div className="flex items-center absolute right-2 bottom-2 gap-2">
          <button
            onClick={() => setConfirm(true)}
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-danger py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <BsTrash />
            Confirm
          </button>
          <button
            onClick={() => setConfirm(false)}
            className="inline-flex items-center justify-center gap-2.5 rounded-md border-primary  text-white bg-slate-700 border py-2 px-10 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

export default TableDeleteRow
