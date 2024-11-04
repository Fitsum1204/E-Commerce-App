import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from '../CartIcon'

describe('Cart-icon',()=>{
    test('use preloaded state to render ',()=> {
        const initialCartItems = [
            {id:1,name:'Item A',imageUrl:'test',price:10,quantity:10},
            {id:2,name:'Item A',imageUrl:'test',price:10,quantity:7},
            {id:2,name:'Item A',imageUrl:'test',price:10,quantity:3},
        ];
        renderWithProviders(<CartIcon />,{
            preloadedState:{
                cart:{
                 cartItems:initialCartItems   
                }
            }
        })
        const cartItemElement = screen.getByText('20');//20 is quantity sum 
        expect(cartItemElement).toBeInTheDocument()
    })
})