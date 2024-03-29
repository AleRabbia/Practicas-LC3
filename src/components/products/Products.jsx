import PropTypes from 'prop-types';

const Product = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired 
}

export default Product;
