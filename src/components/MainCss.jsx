import styled, { keyframes }from 'styled-components';

export const Div = styled.div`
    margin: 5px;
`;

export const TopText = styled.div`
    padding-top: 250px;
    color: red;
    min-height: 100px;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   -webkit-background-clip: text;
  color: transparent;
`;

export const Card = styled.div`
  padding-top: 150px;
  padding-left: 100px;
  display: flex;
  width: 700px;
  max-height: 400px;
`;

export const RightCard = styled(Card)`
  @media (max-width: 768px) {
    padding-left: 230px;
  }
  padding-left: 430px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  margin-top: 32px;
  filter: invert(8%) sepia(94%) saturate(5115%) hue-rotate(297deg) brightness(96%) contrast(106%);
`;

export const Title = styled.span`
font-family: 'Press Start 2P', cursive;
  font-size: 32px;
  color: #800080;
`;

export const Description = styled.span`
font-family: 'Mali', cursive;
  font-size: 20px;
  
  padding-top: 16px;
`;