import { FC, useState } from 'react'
import SideCartHeader from '../SideCartHeader'
import SideCartContent from '../SideCartContent'
import KitDiscountCard from '../KitDiscountCard'
import KitDiscountCardHeader from '../KitDiscountCardHeader'
import KitDiscountCardContent from '../KitDiscountCardContent'
import KitDiscountCardFooter from '../KitDiscountCardFooter'
import ListItems from '../ListItems'
import ProductItem from '../ProductItem'
import Typography from '../Typography'
import DiscountProgressBar from '../DiscountProgressBar'
import { ILineItem } from '../../types'
import { SideCartStyled, FlexTextWrapper } from './styles'
import { DISCOUNT_CONFIG } from '../../constants/discounts'
import { getProduct } from '../../constants/products'

const SideCart: FC = () => {
    const initialValue: ILineItem[] = []
    const [lineItems, setLineItems] = useState(initialValue)

    const subtotal = lineItems.reduce((reducer, item) => reducer + item.price, 0)

    const discountsEntries = Object.entries(DISCOUNT_CONFIG)
    const discountEntriesReverse = [...discountsEntries].reverse()
    const discountEntriesSorted = [...discountsEntries].sort()

    const minDiscount = discountEntriesSorted[0]
    const maxDiscount = discountEntriesSorted[discountEntriesSorted.length - 1]

    const discountApply = discountEntriesReverse.find(([limit, _]) => subtotal >= parseInt(limit))
    const nextDiscount =
        (discountApply
            ? discountEntriesSorted.find(([limit, _]) => parseInt(discountApply[0]) < parseInt(limit))
            : minDiscount) || maxDiscount

    const total = subtotal - (discountApply ? discountApply[1] : 0)

    const addProduct = (item: ILineItem) => () =>
        setLineItems(prev => {
            return [...prev, item]
        })

    const removeProduct = (id: string) => () =>
        setLineItems(prev => {
            return prev.filter(item => item.id !== id)
        })

    const removeLastProduct = () => () =>
        setLineItems(prev => {
            return prev.slice(0, -1)
        })

    const removeAllProducts = () => () =>
        setLineItems(prev => {
            return []
        })

    return (
        <SideCartStyled>
            <SideCartHeader
                title="My Bag"
                message1="Your order qualifies for free standard shipping."
                message2="Add $60 for free 2-day shipping."
            />
            <SideCartContent>
                <>
                    <KitDiscountCard>
                        <>
                            <KitDiscountCardHeader>
                                <>
                                    <Typography variant="subtitle1">BUILD YOUR KIT & SAVE</Typography>
                                    <Typography variant="body2">
                                        Spend ${nextDiscount[0]}, save ${nextDiscount[1]}
                                    </Typography>
                                    <DiscountProgressBar
                                        subtotal={subtotal}
                                        discounts={discountsEntries.map(item => +item[0])}
                                    />
                                </>
                            </KitDiscountCardHeader>
                            <KitDiscountCardContent>
                                <>
                                    {lineItems.length ? (
                                        <ListItems>
                                            <>
                                                {lineItems.map(item => (
                                                    <ProductItem key={`product-${item.id}`}>
                                                        <>
                                                            <Typography variant="body1">
                                                                {item.product} - ${item.price}
                                                            </Typography>
                                                            <button
                                                                aria-label="Remove item"
                                                                onClick={removeProduct(item.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </>
                                                    </ProductItem>
                                                ))}
                                            </>
                                        </ListItems>
                                    ) : null}
                                </>
                            </KitDiscountCardContent>
                            <KitDiscountCardFooter>
                                <>
                                    <FlexTextWrapper>
                                        <Typography variant="body1" weight={700}>
                                            Subtotal
                                        </Typography>
                                        <Typography variant="body2" size={18} weight={700}>
                                            ${subtotal}
                                        </Typography>
                                    </FlexTextWrapper>
                                    <FlexTextWrapper>
                                        <Typography variant="body1" weight={700}>
                                            Discount (Spend ${nextDiscount[0]}, save ${nextDiscount[1]})
                                        </Typography>
                                        <Typography variant="body2" size={18} weight={700}>
                                            ${subtotal - total}
                                        </Typography>
                                    </FlexTextWrapper>
                                    <FlexTextWrapper>
                                        <Typography variant="body1" weight={700}>
                                            Total
                                        </Typography>
                                        <Typography variant="body2" size={18} weight={700}>
                                            ${total}
                                        </Typography>
                                    </FlexTextWrapper>
                                    <br />
                                    <button onClick={addProduct(getProduct('T-Shirt Bra', 'bras', 55))}>
                                        Add one Bras 1
                                    </button>
                                    <button onClick={addProduct(getProduct('Wireless Bra', 'bras', 35))}>
                                        Add one Bras 2
                                    </button>
                                    <button onClick={addProduct(getProduct('Seamless Panties', 'paties', 12))}>
                                        Add one Underwear
                                    </button>
                                    <button onClick={removeLastProduct()}>Remove last product</button>
                                    <button onClick={removeAllProducts()}>Remove all products</button>
                                </>
                            </KitDiscountCardFooter>
                        </>
                    </KitDiscountCard>
                </>
            </SideCartContent>
        </SideCartStyled>
    )
}

export default SideCart
