import styled from 'styled-components';

interface IProps {
    sent: boolean
}

const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-${(props: IProps) => props.sent ? 'end' : 'start'};
    margin-bottom: 16px;
`;

export default MessagesContainer;