import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Nav = styled.div`
  background-color: white;
  min-height: 7rem;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: black;
  position: fixed;
  width: 100%;
  top: 0

`;

export const Div30 = styled.div`
  justify-content: space-between;
  display: flex;
  min-width: 320px;
  width: 30%;
  align-items: center;
`;

export const Hexagon = styled.div`
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  background: url("https://i.imgur.com/waDgcnc.jpg") no-repeat;
  background-size: cover;
  margin: 10px auto;
  height: 100px;
  width: 100px;
  stroke: teal;

`;

export const Div40 = styled.div`
  width: 40%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const But = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
`;

export const Div30Justify = styled(Div30)`
  justify-content: center;
`;

export const Label = styled.span`
  font-family: 'Mali', cursive;
  cursor: pointer;
  &:hover {
    color: purple;
  }
`;