import { Product } from '@/types/product'
import { BsTrash } from 'react-icons/bs'

interface ButtonRowDeleteProps {
  product: Product
  rowDelete: (product: Product) => void
}
const ButtonRowDelete = ({ product, rowDelete }: ButtonRowDeleteProps) => {
  const { id } = product
  const handleDelete = () => {
    console.log(`ButtonRowDelete.rowDelete(${id})`)
    return rowDelete(product)
  }

  return (
    <button onClick={handleDelete} className="text-danger">
      <BsTrash />
    </button>
  )
}

export default ButtonRowDelete
