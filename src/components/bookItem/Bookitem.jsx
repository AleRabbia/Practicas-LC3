import { Card } from "react-bootstrap";

const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
    console.log("Valor de imageUrl:", imageUrl, title);


    return (
        <Card style={{ width: "11rem" }}>
            <Card.Img
                height={200}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{rating?.length} estrellas</div>
                <p>{pageCount} páginas</p>
            </Card.Body>
        </Card>
    );
};

export default BookItem;
