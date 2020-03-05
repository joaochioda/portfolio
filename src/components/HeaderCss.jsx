import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Div = styled.div`
    max-width: 1111px;
    height: 2em;
    width: 100%;
    display:flex;
    background-color: #702079;
`;

export const But = styled(Button)`
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
`;

export const Joao = styled.div`
width: 100%;
background-color: #702079;
@media (min-width: 600px) {
  display:none;
}
`;

export const Guilherme = styled.div`
display:none;
@media (min-width: 600px) {
  display:block;
}
`;

export const Nav = styled.nav`
  background-color:'white';
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Teste = styled.li`
    background-color: green;
    flex-direction: column;
 
`;
export const Ul = styled.ul`
    justify-content: space-between;
    width: 100vw;
    display: inherit;
    margin: 0em;
    padding: 0em;
   
`;

export const Li = styled.li`
    list-style: none;
    min-width: 200px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    position: relative;
    border-bottom: 2px solid #E67438;
    content: "";
    transition: border-bottom 0.6s linear;
    &:hover {
        border-bottom: 10px solid #E67438;
      }
`;
