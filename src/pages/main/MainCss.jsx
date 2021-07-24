import styled from 'styled-components';

export const Div = styled.div`
    margin: 5px;
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-self: center;
  grid-row-gap: 60px;
  @media (min-width: 1066px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1590px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 2122px) {
    grid-template-columns: repeat(4, 1fr);
  }
  .card {
    justify-self: center;
  }
`;

export const TopText = styled.div`
    padding-top: 150px;
    padding-bottom: 100px;
    color: #800080;
    min-height: 100px;
    display: flex;
    align-items: center;
    maring: auto;
    justify-content: center;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    @media (min-width: 768px) {
      color: transparent;
      background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   -webkit-background-clip: text;
    }
`;

export const Card = styled.div`

@media (min-width: 768px) {
  margin-left: calc(100% / 4);
}
  padding-bottom: 50px;
  display: flex;
  max-height: 400px;
  flex-direction: column;
`;

export const RightCard = styled(Card)`

@media (min-width: 768px) {
  padding-left:calc(100% / 10);
}
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.div`
  margin-top: 32px;
  filter: invert(22%) sepia(72%) saturate(730%) hue-rotate(253deg) brightness(89%) contrast(90%)
`;

export const Title = styled.span`
@media (min-width: 768px) {
font-family: 'Press Start 2P', cursive;
  font-size: 32px;
  color: #800080;
}

font-size: 48px;
color: #800080;
`;

export const Description = styled.span`
color: #800080;
@media (min-width: 768px) {
  font: 600 20px 'Nunito', sans-serif;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 100px;
}
  width: 400px;
  font-size: 24px;
  padding-left: 20px;
  padding-top: 16px;
`;

export const SendMeEmail = styled.div`
@media (min-width: 768px) {
font: 600 'Nunito', sans-serif;
font-size: 58px;
color: #800080;
margin: 150px 20px 20px;
text-align: center;
}

font-size: 28px;
color: #800080;
margin: 20px 20px 20px 20px;
font
`;
