import { ILineItem } from '../types'
import { nanoid } from 'nanoid'

export const getProduct = (name: string, productType: string, price: number) => {
    const newProduct: ILineItem = {
        id: nanoid(),
        product: name,
        productType: productType,
        price: price
    }
    return newProduct
}

export const TSHIRT_BRA: ILineItem = {
    id: nanoid(),
    product: 'T-Shirt Bra',
    productType: 'bras',
    price: 55
}

export const WIRELES_BRA: ILineItem = {
    id: nanoid(),
    product: 'Wireless Bra',
    productType: 'bras',
    price: 35
}

export const PANTIES: ILineItem = {
    id: nanoid(),
    product: 'Seamless Panties',
    productType: 'paties',
    price: 12
}
