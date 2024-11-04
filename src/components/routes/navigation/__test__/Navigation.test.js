import { screen ,fireEvent} from "@testing-library/react";
import * as reactRedux from 'react-redux'
import Navigation from "../Navigation";
import { renderWithProviders } from "../../../../utils/test/test.utils";
import { signOutStart } from "../../../../store/user/user.action";
import '@testing-library/jest-dom'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));
describe('Navigation Test' ,()=>{
    test('it should render Sign in and not sign out link link ifthere is no currentuser',()=>{
        renderWithProviders(<Navigation/>,{
         preloadedState:{
            user:{
                currentUser:null,
            }
         }   
        })
        const signInLinkElement = screen.getByText(/sign in/i);
        expect(signInLinkElement).toBeInTheDocument()

        const signOutLinkElement = screen.queryByText(/sign out/i);
        expect(signOutLinkElement).toBeNull()
    })
    test('it should  render Sign Out and not sign in  link ifthere is a currentuser',()=>{
        renderWithProviders(<Navigation/>,{
         preloadedState:{
            user:{
                currentUser:{}
            }
         }   
        })
        const signOutLinkElement = screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument()
        const signInLinkElement = screen.queryByText(/sign in/i);
        expect(signInLinkElement).toBeNull()
    })

    test('It should render cart dropdown if isCartOpen is true', () => {
        renderWithProviders(<Navigation />, {
          preloadedState: {
            cart: {
              isCartOpen: true,
              cartItems: [],
            },
          },
        });
        const dropdownTextElement = screen.getByText('Your cart is empty')
        expect(dropdownTextElement).toBeInTheDocument();
      });

       test('It should not render a cart dropdown if isCartOpen is false', () => {
        renderWithProviders(<Navigation />, {
          preloadedState: {
            cart: {
              isCartOpen: false,
              cartItems: [],
            },
          },
        });
    
        expect(screen.queryByText('Your cart is empty')).toBeNull();
      });
      
      test('It should dispatch signOutStart action when clicking on the Sign Out link', async () => {
        const mockDispatch = jest.fn();
        reactRedux.useDispatch.mockReturnValue(mockDispatch);
    
        renderWithProviders(<Navigation />, {
          preloadedState: {
            user: {
              currentUser: {},
            },
          },
        });
    
        expect(screen.getByText(/SIGN OUT/i)).toBeInTheDocument();
    
         fireEvent.click(screen.getByText(/SIGN OUT/i));
    
        expect(mockDispatch).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(signOutStart());
    
        mockDispatch.mockClear();
      }); 
})