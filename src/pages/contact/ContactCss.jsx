import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const TextFieldCustom = styled(TextField)`
background: white;
margin: auto;
width: 100%;
@media (min-width: 768px) {
width: 50%;
}
`;

export const FormCustom = styled.form`
@media (min-width: 768px) {
display: flex;
align-items: center;
flex-direction: column;
}
`;

export const ButtonDiv = styled.div`
display: flex;
margin-top: 32px;
justify-content: center;
margin-bottom: 100px;
`;
