import { Product } from '@/types/product'
import TableRow from './TableRow'

interface TableProductProps {
  products: Product[]
  rowView: (product: Product) => boolean
  rowEdit: (product: Product) => boolean
  rowDelete: (product: Product) => boolean
}
const TableProduct = ({
  products,
  rowView,
  rowEdit,
  rowDelete
}: TableProductProps) => {
  const handleView = (product: Product) => {
    console.log(`TableProduct.rowView(${product.id})`)
    return rowView(product)
  }

  const handleEdit = (product: Product) => {
    console.log(`TableProduct.rowEdit(${product.id})`)
    return rowEdit(product)
  }

  const handleDelete = (product: Product) => {
    console.log(`TableProduct.rowDelete(${product.id})`)
    return rowDelete(product)
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
        <div className="col-span-1 flex items-center w-full justify-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {products.map((product, key) => (
        <TableRow
          product={product}
          key={key}
          rowView={handleView}
          rowEdit={handleEdit}
          rowDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default TableProduct
