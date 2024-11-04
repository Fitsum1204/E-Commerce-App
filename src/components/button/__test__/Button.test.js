import {render,screen} from '@testing-library/react'
import Button,{Button_Type_Classes} from '../Button'
import '@testing-library/jest-dom';

describe('Button test', ()=> {
    test('should render base button when noting is passed',()=> {
        render(<Button/>);
        //const buttonElement = screen.getByText(/Test/i);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('background-color:white')
    })
    test('should render google button when googlebutton  passed', () => {
        render(<Button buttonType={Button_Type_Classes.google}/>);
    
        const googleButtonElement = screen.getByRole('button');
        expect(googleButtonElement).toHaveStyle('  background-color: #357ae8');
      });
      test('should render invert button when invertbutton  passed', () => {
        render(<Button buttonType={Button_Type_Classes.inverted}/>);
    
        const googleButtonElement = screen.getByRole('button');
        expect(googleButtonElement).toHaveStyle('    background-color: black;');
      });
      
    test('should be disabled if isLoading is true', () => {
        render(<Button isLoading={true} />);
        const buttonElement = screen.getByRole('button'); // Assuming you have added a test id to your spinner
        expect(buttonElement).toBeDisabled();
      });
    


    test('should display spinner when loading', () => {
        render(<Button isLoading>Test</Button>);
        const spinner = screen.getByTestId('spinner'); // Assuming you have added a test id to your spinner
        expect(spinner).toBeInTheDocument();
      });
    
})