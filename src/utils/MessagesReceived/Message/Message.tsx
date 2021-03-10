import styled from 'styled-components';

const MessageContainer = styled.div`
    font-size: 0.6rem;
    color: hsl(276, 55%, 52%);
    background-color: hsl(272, 41%, 93%);
    word-break: break-all;
    width: fit-content;
    max-width: 50%;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 10px;
    border-bottom-left-radius: 5px;
`;

interface IProps {
    message: String
}

function Message({ message }: IProps) {
    return (
        <MessageContainer>{message}</MessageContainer>
    )
}

export default Message;