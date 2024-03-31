import PropTypes from 'prop-types';

const WatchList = ({ title }) => {
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }
  
  WatchList.propTypes = {
    title: PropTypes.string.isRequired
  }
  
  export default WatchList;