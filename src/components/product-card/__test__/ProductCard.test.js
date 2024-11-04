import { fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ProductCard from '../ProductCard'
import { renderWithProviders } from "../../../utils/test/test.utils";

describe('Product card test',()=>{
    test('it should add the product item when product card button is clicked',()=>{
        const mockProduct = {
            id:1,
            imageUrl:'test',
            name:'A',
            price:10
        }
    const {store} = renderWithProviders(<ProductCard product={mockProduct}/>,{
        cart:{
            cartItems:[]
        }
    })
    const addToCartButtonElement = screen.getByText(/add to cart/i)
    fireEvent.click(addToCartButtonElement)
    expect(store.getState().cart.cartItems.length).toBe(1)
    })
})