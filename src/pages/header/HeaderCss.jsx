import styled, { keyframes } from 'styled-components';
import Button from '@material-ui/core/Button';

export const Nav = styled.div`
  background-color: #800080;
  display: flex;
  flex-direction: row;
  margin-left: -8px;
  font-size: 20px;
  color: black;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  transition: top 0.4s
`;

export const DivIconButton = styled.div`
  display:flex;
  width: 100px;
`;

export const Div30 = styled.div`

  @media (min-width: 768px) {
    justify-content: space-between;
    display: flex;
    min-width: 320px;
    width: 30%;
    align-items: center;
  }
  
`;

export const Div40 = styled.div`
@media (min-width: 768px) {
  width: 40%;
  align-items: center;
  display: flex;
  justify-content: center;
}
  margin: auto;
`;

export const But = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
`;

export const Div30Justify = styled(Div30)`
@media (max-width: 768px) {
  display: flex;
  align-items: center;
  width: 100px
}
  justify-content: center !important;
`;

const rotate = keyframes`
  from {
    transform: scale(1.0);
  }

  to {
    transform: scale(1.15);
  }
`;

export const Label = styled.span`
  font-family: 'Mali', cursive;
  color: white;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

export const Flag = styled(Label)`
&:hover {
  animation: ${rotate} 0.5s linear forwards;
}
`;
