import PropTypes from 'prop-types';
import { Card, CardBody, Button } from 'react-bootstrap';
import "./BeerItem.css";

const BeerItem = ({ id, name, style, price, available, imageUrl, onUpdate }) => {
    const handleUpdateClick = () => {
        onUpdate({
            id: id,
            beerName: name,
            beerStyle: style,
            price: price,
            available: available,
            imageUrl: imageUrl
        });
    };

    return (
        <div>
            <Card>
                <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                    <Card.Img
                        className={available ? "" : "grayscale-image"}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        variant='top'
                        src={imageUrl !== "" ? imageUrl : "https://cervezadimenna.com.ar/wp-content/uploads/2022/04/Sour-Ale.png"}
                    />
                </div>
                <CardBody>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{style}</Card.Subtitle>
                    <div>Precio $ {price}</div>
                    <div>Disponible: {available ? "Sí" : "No"}</div>
                    <Button variant="primary" onClick={handleUpdateClick}>Actualizar</Button>
                </CardBody>
            </Card>
        </div>
    );
};

BeerItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    style: PropTypes.string,
    available: PropTypes.bool,
    imageUrl: PropTypes.string,
    onUpdate: PropTypes.func.isRequired,
};

export default BeerItem;
