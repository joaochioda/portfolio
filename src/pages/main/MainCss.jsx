import styled from 'styled-components';

export const Div = styled.div`
    margin: 5px;
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
  padding-left: ${(props) => (props.width < 768 ? 0 : props.width / 2 - props.width / 4)}px;
  margin: ${(props) => (props.width < 768 ? '20' : 'none')}px;
  padding-bottom: 50px;
  display: flex;
  width: ${(props) => props.width / 2}px;
  max-height: 400px;
  flex-direction: column;
`;

export const RightCard = styled(Card)`
  padding-left: ${(props) => (props.width < 768 ? 0 : props.width / 2 - props.width / 10)}px
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
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
  padding-left: 20px;
  padding-top: 16px;
`;
