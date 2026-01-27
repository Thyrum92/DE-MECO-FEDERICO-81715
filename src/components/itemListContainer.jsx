import Container from 'react-bootstrap/Container';

function ItemListContainer(props) {

    const { text } = props;

    return (

        <>

            <Container className='d-flex align-items-center justify-content-center'>

                <h2 className="text-center my-5">{text}</h2>

            </Container>

        </>

    )
};

export default ItemListContainer;