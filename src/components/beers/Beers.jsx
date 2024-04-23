import PropTypes from 'prop-types';
import BeerItem from '../beerStyle/BeerItem';
import UpdateBeer from '../updateBeer/UpdateBeer';
import './Beers.css';
import { useState } from "react";

const Beers = ({ beers, dolarValue, onUpdate }) => {
    const [updateBeerId, setUpdateBeerId] = useState(null);

    const handleUpdateClick = (id) => {
        setUpdateBeerId(id);
    };

    return (
        <div className="beers-container">
            {beers.map((beer) => (
                <div key={beer.id}>
                    <BeerItem
                        id={beer.id}
                        name={beer.beerName}
                        price={beer.price * dolarValue}
                        style={beer.beerStyle}
                        available={beer.available}
                        imageUrl={beer.imageUrl}
                        onUpdate={() => handleUpdateClick(beer.id)}
                    />
                    {updateBeerId === beer.id && (
                        <UpdateBeer
                            key={`update-${beer.id}`}
                            beerId={beer.id}
                            beerData={beer}
                            onUpdate={onUpdate}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

Beers.propTypes = {
    beers: PropTypes.array.isRequired,
    dolarValue: PropTypes.number.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default Beers;
