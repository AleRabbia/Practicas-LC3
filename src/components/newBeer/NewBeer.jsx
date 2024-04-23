import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const NewBeer = ({ onBeerDataSaved }) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredStyle, setEnteredStyle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredAvailable, setEnteredAvailable] = useState("");
  const [enteredImageUrl, setEnteredImageUrl] = useState("");



  const handleChangeName = (e) => {
    setEnteredName(e.target.value);
  };

  const changeStyleHandler = (event) => {
    setEnteredStyle(event.target.value);
  };

  const changePriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const changeAvailableHandler = (event) => {
    setEnteredAvailable(event.target.value);
  };

  const changeImageUrlHandler = (event) => {
    setEnteredImageUrl(event.target.value);
  };

  const submitBeerHandler = (event) => {
    event.preventDefault();
    const beerData = {
      beerName: enteredName,
      beerStyle: enteredStyle,
      price: enteredPrice,
      available: enteredAvailable,
      imageUrl: enteredImageUrl,
    };

    onBeerDataSaved(beerData);
    setEnteredName("");
    setEnteredStyle("");
    setEnteredPrice("");
    setEnteredAvailable("");
    setEnteredImageUrl("");
  };
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  }
  return (

    <>
      <Button onClick={handleClick}>{showForm ? "Esconder" : "Agregar cerveza"}</Button>
      {showForm &&
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
                      value={enteredName}
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
                      value={enteredStyle}
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
                      //max={5}
                      min={1}
                      onChange={changePriceHandler}
                      value={enteredPrice}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="available">
                    <Form.Label>Disponible</Form.Label>
                    <Form.Select onChange={changeAvailableHandler} value={enteredAvailable}>
                      <option value="true">Sí</option>
                      <option value="false">No</option>
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
                    value={enteredImageUrl}
                  />
                </Form.Group>
              </Row>
              <Row className="justify-content-end">
                <Col md={3} className="d-flex justify-content-end">
                  <Button variant="primary" type="submit">
                    Agregar cerveza
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>}
    </>
  );
};


NewBeer.propTypes = {
  onBeerDataSaved: PropTypes.func.isRequired,
};

export default NewBeer;