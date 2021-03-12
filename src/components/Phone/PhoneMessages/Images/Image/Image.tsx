import styled from 'styled-components';

interface IProps {
    sent: boolean
}

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin-${(props: IProps) => props.sent ? 'left' : 'right'}: 8px;
    border-radius: 12px;
`;

export default Image;