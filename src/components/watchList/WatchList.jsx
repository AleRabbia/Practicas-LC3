import PropTypes from 'prop-types';

const WatchList = ({ name }) => {
  return (
    <div>
      <li>{name}</li>
    </div>
  );
}

WatchList.propTypes = {
  name: PropTypes.string.isRequired
}

export default WatchList;
