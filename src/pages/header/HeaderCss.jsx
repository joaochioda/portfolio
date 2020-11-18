import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

export const Nav = styled.div`
  background-color: #001f3f;
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
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Div30 = styled.div`

  @media (min-width: 768px) {
    justify-content: space-between;
    display: flex;
    min-width: 320px;
    width: 30%;
    align-items: center;
    padding-left: 10px;
  }
  display: none;
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

export const ListItemCustom = styled(ListItem)`
  padding-top: 32px;
`;

export const But = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
`;

export const Div30Justify = styled(Div30)`
@media (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
}
display: flex;
align-items: center;
`;

export const Label = styled.span`
  font-family: 'Mali', cursive;
  color: white;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

export const Flag = styled.div`
@media (min-width: 768px) {
  .maincontainer {
    position: relative;
    width: 46px;
    height: 33px;
  }
  
  .thecard {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    margin: 0;
  }
  
  .thefront {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: red;
    color: purple;
  }
  
  .theback {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: gray;
    color: purple;
    transform: rotateY(180deg);
  }
  
  .thecard:hover {
    transform: rotateY(180deg)
  }
  .mobile {
    display:none;
  }
}
@media (max-width: 768px) {
  .maincontainer {
    display:none;
  }
}
cursor: pointer;
margin: 0 10px 0 10px;
`;

export const Icon = styled.div`
@media (max-width: 768px) {
 display: none;
}
filter: ${(props) => (props.white ? 'invert(98%) sepia(2%) saturate(4%) hue-rotate(287deg) brightness(116%) contrast(100%)' : '')};
margin: 0 10px 0 10px;
cursor: pointer;
&:hover {
  filter: invert(87%) sepia(0%) saturate(504%) hue-rotate(138deg) brightness(81%) contrast(83%);
}
`;
