import styled from 'styled-components';

const Main = styled.div`
    background-image: linear-gradient(to top, hsl(264, 100%, 61%), hsl(293, 100%, 63%));
    position: absolute;
    top: -400px;
    left: -50vw;
    width: 100vw;
    height: 800px;
    border-radius: 50vw;
    z-index: -1;    
    @media (min-width: 992px) {
        left: -140px;
        width: 400px;        
    }
    @media (min-width: 1200px) {
        left: -250px;
        width: 600px;        
        height: 900px;
    }
`;

function Shape() {
    return (
        <Main />
    )
}

export default Shape;