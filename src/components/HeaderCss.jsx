import styled from 'styled-components';

export const Div = styled.div`
    max-width: 1111px;
    height: 2em;
    width: 100%;
    display:flex;
    background-color: #702079;
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

export const Ul = styled.ul`
    justify-content: space-between;
    width: 100%;
    display: inherit;
    margin: 0em;
    padding: 0em;
`;
