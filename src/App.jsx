import BookItem from './components/bookItem/Bookitem'
import books from './components/arrayBooks/ArrayBooks'


const App = () => {
  return (
    <div >
      <h2>Books Champion App</h2>
      <p>¡Quiero leer libros!</p>
      {books.map((book, index) => (
      <BookItem
      key={index}
        title={book.bookTitle}
        author={book.bookAuthor}
        rating={book.bookRating}
        pageCount={book.pageCount}
        imageUrl={book.imageUrl}
      />))}

    </div>
  );
}
export default App;
