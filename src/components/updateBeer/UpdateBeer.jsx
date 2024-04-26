import { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const UpdateBeer = ({ beerId, beerData, onUpdate }) => {
    const [beerName, setBeerName] = useState("");
    const [beerStyle, setBeerStyle] = useState("");
    const [beerPrice, setBeerPrice] = useState("");
    const [beerAvailable, setBeerAvailable] = useState("");
    const [beerImageUrl, setBeerImageUrl] = useState("");
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Cargar los datos de la cerveza seleccionada cuando cambie beerData o beerId
        if (beerData && beerId === beerData.id) {
            setBeerName(beerData.beerName);
            setBeerStyle(beerData.beerStyle);
            setBeerPrice(beerData.price);
            setBeerAvailable(beerData.available);
            setBeerImageUrl(beerData.imageUrl);
            setShowForm(true);
        }
    }, [beerData, beerId]);

    const handleChangeName = (e) => {
        setBeerName(e.target.value);
    };

    const changeStyleHandler = (event) => {
        setBeerStyle(event.target.value);
    };

    const changePriceHandler = (event) => {
        setBeerPrice(event.target.value);
    };

    const changeAvailableHandler = (event) => {
        setBeerAvailable(event.target.value);
    };

    const changeImageUrlHandler = (event) => {
        setBeerImageUrl(event.target.value);
    };

    const submitBeerHandler = (event) => {
        event.preventDefault();
        const updatedBeerData = {
            id: beerId,
            beerName: beerName,
            beerStyle: beerStyle,
            price: beerPrice,
            available: beerAvailable,
            imageUrl: beerImageUrl,
        };

        onUpdate(updatedBeerData);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };
    return (
        <>
        <Button onClick={toggleForm}>{showForm ? "Esconder" : "Actualizar"}</Button>
            {showForm && (
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={submitBeerHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="beerName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar nombre"
                                    onChange={handleChangeName}
                                    value={beerName}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="beerStyle">
                                <Form.Label>Estilo</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar estilo"
                                    onChange={changeStyleHandler}
                                    value={beerStyle}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingrese el valor"
                                    min={1}
                                    onChange={changePriceHandler}
                                    value={beerPrice}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="available">
                                <Form.Label>Disponible</Form.Label>
                                <Form.Select
                                    onChange={changeAvailableHandler}
                                    value={beerAvailable}
                                >
                                    <option value={true}>Sí</option>
                                    <option value={false}>No</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="bookImageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar url de imagen"
                                onChange={changeImageUrlHandler}
                                value={beerImageUrl}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Guardar cambios
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>)}</>
    );
};

UpdateBeer.propTypes = {
    beerId: PropTypes.number.isRequired,
    beerData: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default UpdateBeer;
