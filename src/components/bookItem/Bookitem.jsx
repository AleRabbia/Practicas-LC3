const BookItem = () => {
    const bookTitle = "100 años de soledad";
    const bookAuthor = "Gabriel García Marquez";
    const bookRating = Array(5).fill("*");
    const bookPages = 410;
    return (
        <div>
            <h2>{bookTitle}</h2>
            <h3>{bookAuthor}</h3>
            <div>{bookRating.length} estrellas</div>
            <p>{bookPages} páginas</p>
        </div>
    );
};
export default BookItem;

