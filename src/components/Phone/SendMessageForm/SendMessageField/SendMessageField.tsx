import styled from 'styled-components';

const SendMessageField = styled.input`
    font-size: 0.6rem;    
    width: 100%;
    padding: 12px 18px;
    border: none;
    border-radius: 30px;    
    outline: none;
    box-sizing: border-box;
    &::placeholder {
        color: hsl(206, 6%, 79%);
    }
`;

export default SendMessageField;