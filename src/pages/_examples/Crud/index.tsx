import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import DefaultLayout from '@/layout/DefaultLayout'
import TableProduct from './TableProduct'
import { productData } from './data'
import { Product } from '@/types/product'

const ListPage = () => {
  const rowView = ({ id }: Product) => {
    console.log(`rowView(${id})`)
    return true
  }

  const rowEdit = ({ id }: Product) => {
    console.log(`rowEdit(${id})`)
    return true
  }

  const rowDelete = ({ id }: Product) => {
    console.log(`rowDelete(${id})`)
    return true
  }
  return (
    <DefaultLayout>
      <Breadcrumb pageName="ListPage" />

      <div className="flex flex-col gap-10">
        <TableProduct
          products={productData}
          rowView={rowView}
          rowEdit={rowEdit}
          rowDelete={rowDelete}
        />
      </div>
    </DefaultLayout>
  )
}

export default ListPage
