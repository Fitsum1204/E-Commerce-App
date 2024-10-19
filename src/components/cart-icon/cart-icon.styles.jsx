import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from '../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    font-size: 9px;
    bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 8px;
    bottom: 8px;
  }
`;
