import styled from 'styled-components';
import dogImage1 from '../../../../../images/dog-image-1.jpg';
import dogImage2 from '../../../../../images/dog-image-2.jpg';
import dogImage3 from '../../../../../images/dog-image-3.jpg';
import Image from './Image/Image';

const dogImages = [
    {
        id: 1,
        image: dogImage1
    },
    {
        id: 2,
        image: dogImage2
    },
    {
        id: 3,
        image: dogImage3
    },
];

interface IProps {
    sent: boolean
}

const ImagesContainer = styled.div`
    display: flex;
    justify-content: flex-${(props: IProps) => props.sent ? 'end' : 'start'};
    margin-bottom: 8px;
`;

function Images({ sent }: IProps) {
    return (
        <ImagesContainer sent={sent}>
            {dogImages.map(dogImage => (
                <Image key={dogImage.id} src={dogImage.image} sent={sent} alt='' />
            ))}
        </ImagesContainer>
    )
}

export default Images;