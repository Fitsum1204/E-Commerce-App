import styled from "styled-components";
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Ensures text stays centered */
  white-space: nowrap; /* Prevents text from breaking into multiple lines */

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    min-width: 95px;
    height: 45px;
    font-size: 13px;
    padding: 0 20px;
    line-height: 45px;  /* Adjust line-height to match button height */
  }

  @media screen and (max-width: 480px) {
    min-width: 50px;
    height: 40px;
    font-size: 12px;
    padding: 0 15px;
    line-height: 40px;  /* Adjust line-height to match button height */
  }
`;

export const GoogleSignINButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border:none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
