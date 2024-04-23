import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const ChangeDolar = ({ onDolarDataSaved }) => {
    const [enteredDolar, setEnteredDolar] = useState("");

    const handleChangeDolar = (e) => {
        setEnteredDolar(e.target.value);
    };

    const submitDolarHandler = (e) => {
        e.preventDefault();
        onDolarDataSaved(enteredDolar);
        setEnteredDolar("");
    };

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    }

    return (

        <>
            <Button onClick={handleClick} > {showForm ? "Esconder" : "Actualizar valor"}</Button>
            {showForm &&
                <Card className="m.4 w-50" bg="success">
                    <Card.Body>
                        <Form className="text-white" onSubmit={submitDolarHandler}>

                            <Form.Group className="mb-3" controlId="dolarValue">
                                <Form.Label>Valor Dolar</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar el valor del Dolar"
                                    onChange={handleChangeDolar}
                                    value={enteredDolar}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Actualizar Valor
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>}
        </>
    );
};

ChangeDolar.propTypes = {
    onDolarDataSaved: PropTypes.func.isRequired,
};

export default ChangeDolar;