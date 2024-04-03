import PropTypes from 'prop-types';

const WatchList = ({ name}) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

WatchList.propTypes = {
  name: PropTypes.string.isRequired
}

export default WatchList;
