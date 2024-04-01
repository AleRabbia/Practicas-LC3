import PropTypes from 'prop-types';

const Product = ({ name }) => {
  return (
    <div>
      <li>{name}</li>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired, 
}

export default Product;
