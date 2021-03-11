import styled from 'styled-components';

const SendButton = styled.button`
    background-color: hsl(271, 36%, 24%);
    position: absolute;
    top: 5px;
    right: 7px;
    width: 23px;
    height: 23px;
    border: none;
    border-radius: 50%;
    outline: none;
    svg {
        color: white;
        transform: translateY(2px) scale(1.5);
    }
`;

export default SendButton;