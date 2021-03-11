import styled from 'styled-components';
import Header from './Header/Header';
import Paragraph from './Paragraph/Paragraph';

const HeroMessageContainer = styled.div`
    text-align: center;
    width: 80%;
    max-width: 300px;
    @media (min-width: 768px) {
        text-align: left;
        max-width: 400px;
    }
`;

function HeroMessage() {
    return (
        <HeroMessageContainer>
            <Header>Simple booking</Header>
            <Paragraph>
                Stay in touch with our dog walkers through the chat interface.
                This makes it easy to discuss arrangements and make bookings.
                Once the walk has been completed, you can rate your walker and
                book again all through the chat.
            </Paragraph>
        </HeroMessageContainer>
    )
}

export default HeroMessage;