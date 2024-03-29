import PropTypes from 'prop-types';

const BeerStyle = ({ beerStyle}) => {
    
    return (
        <div>            
            <h2>{beerStyle}</h2>
        </div>
    )
}


BeerStyle.propTypes = {
    beerStyle: PropTypes.string
}

export default BeerStyle;
