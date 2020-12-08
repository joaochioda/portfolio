import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

export const CarouselDiv = styled.div`
@media (min-width: 768px) {
  width: 75%;
}
  margin: auto;
  padding-top: 100px;
`;

const ChipMargin = styled(Chip)`
  margin-right: 5px;
`;

export const ChipJs = styled(ChipMargin)`
  color: yellow !important;
  border-color: yellow !important;
`;

export const ChipHtml = styled(ChipMargin)`
  color: orange !important;
  border-color: orange !important;
`;

export const ChipCss = styled(ChipMargin)`
  color: #34deeb !important;
  border-color: #34deeb !important;
`;

export const ChipReact = styled(ChipMargin)`
  color: #80ccff !important;
  border-color: #80ccff !important;
`;

export const ChipFlutter = styled(ChipMargin)`
  color: #80ccff !important;
  border-color: #80ccff !important;
`;

export const ChipSpring = styled(ChipMargin)`
  color: #009933 !important;
  border-color: #009933 !important;
`;

export const ChipNode = styled(ChipMargin)`
  color: #00e600 !important;
  border-color: #00e600 !important;
`;

export const ChipPostgres = styled(ChipMargin)`
  color: #ccccff !important;
  border-color: #ccccff !important;
`;
