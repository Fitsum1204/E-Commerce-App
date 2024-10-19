import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    width: 20%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;

    img {
      height: auto;
    }
  }
`;

export const BaseSpan = styled.span`
  width: 23%;

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    width: 20%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;

  /* Responsive Design */
  @media screen and (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;

  /* Adjust touch size on smaller screens */
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Value = styled.span`
  margin: 0 10px;

  /* Responsive Design */
  @media screen and (max-width: 480px) {
    margin: 0 5px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  /* Responsive Design */
  @media screen and (max-width: 480px) {
    padding-left: 0;
    margin-top: 10px;
    align-self: flex-end;
  }
`;
