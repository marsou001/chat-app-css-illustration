import styled from 'styled-components';

const MessageContainer = styled.div`
    font-size: 0.6rem;
    color: hsl(271, 15%, 43%);
    background-color: hsl(0, 0%, 100%);
    word-break: break-all;
    width: fit-content;    
    max-width: 50%;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 10px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 6px 16px -12px rgba(0, 0, 0, 0.4);
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