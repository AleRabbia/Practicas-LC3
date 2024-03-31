import PropTypes from 'prop-types';

const Product = ({ name, a,b }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Director: {a}</p>
      <p>Rating: {b}</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired, 
  a: PropTypes.string.isRequired,
  b: PropTypes.isRequired
}

export default Product;
