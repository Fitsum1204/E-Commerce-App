import styled from "styled-components";
import { BaseButton, GoogleSignINButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignINButton}, ${InvertedButton} {
    margin-top: auto;
  }

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 300px;
    right: 20px;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 180px;
    height: 280px;
    right: 10px;
    padding: 10px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;

  /* Responsive font size */
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  /* Responsive height */
  @media screen and (max-width: 768px) {
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    height: 180px;
  }
`;
