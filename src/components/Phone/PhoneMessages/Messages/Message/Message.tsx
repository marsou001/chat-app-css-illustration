import styled from 'styled-components';

interface IProps {
    sent: boolean
}

interface MessageProps extends IProps {
    message: string
}

const MessageContainer = styled.div`
    font-size: 0.6rem;
    color: ${(props: IProps) => props.sent ? 'hsl(271, 15%, 43%)' : 'hsl(276, 55%, 52%)'};
    background-color: ${(props: IProps) => props.sent ? 'hsl(0, 0%, 100%)' : 'hsl(272, 41%, 93%)'};
    word-break: break-all;
    width: fit-content;
    max-width: 50%;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 10px;
    border-bottom-${(props: IProps) => props.sent ? 'right' : 'left'}-radius: 5px;
`;

function Message({ sent, message }: MessageProps) {
    return (
        <MessageContainer sent={sent}>{message}</MessageContainer>
    )
}

export default Message;