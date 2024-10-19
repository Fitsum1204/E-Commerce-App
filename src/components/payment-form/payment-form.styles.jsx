import styled from "styled-components";
import Button from '../button/Button';

export const PaymentFormContainer = styled.div`
  width: 100%;
  max-width: 600px;  /* Restrict maximum width */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;  /* Light background for box */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);  /* Subtle shadow */
  border-radius: 10px;  /* Rounded corners */
  margin: 50px auto;  /* Centered on the page */
  
  @media screen and (max-width: 768px) {
    padding: 15px;
    margin: 30px auto;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);  /* Slightly reduced shadow */
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    margin: 20px auto;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);  /* Further reduced shadow */
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100px;
  min-width: 500px;
  
  @media screen and (max-width: 768px) {
    min-width: 400px;
  }

  @media screen and (max-width: 480px) {
    min-width: 300px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 15px;
  }
`;
