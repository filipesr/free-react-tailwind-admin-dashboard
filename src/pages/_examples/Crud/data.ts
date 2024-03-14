import { Product } from '@/types/product'
import ProductOne from '@/images/product/product-01.png'
import ProductTwo from '@/images/product/product-02.png'
import ProductThree from '@/images/product/product-03.png'
import ProductFour from '@/images/product/product-04.png'

export const productData: Product[] = [
  {
    id: 1,
    image: ProductOne,
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: 296,
    sold: 22,
    profit: 45
  },
  {
    id: 2,
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: 546,
    sold: 12,
    profit: 125
  },
  {
    id: 3,
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: 443,
    sold: 64,
    profit: 247
  },
  {
    id: 4,
    image: ProductFour,
    name: 'HP Probook 450',
    category: 'Electronics',
    price: 499,
    sold: 72,
    profit: 103
  }
]
