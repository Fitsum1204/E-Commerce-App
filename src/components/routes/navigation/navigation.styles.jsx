import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    height: 60px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 90px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 70px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding-top: 10px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 10px;
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
  }
`;
