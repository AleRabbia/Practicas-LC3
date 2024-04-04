import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const WatchList = ({ name, director, rating, poster }) => {
  console.log(poster);
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img
      height={200}
      variant="top"
      src={poster !== "" ? poster : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Director: {director}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>       
      </Card.Body>
    </Card>
  );
}

WatchList.propTypes = {
  name: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired
};

export default WatchList;

