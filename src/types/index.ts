export interface ILineItem {
    id: string
    product: string
    productType: string
    price: number
}

export interface DiscountProgressConfig {
    [total: number]: number
}
