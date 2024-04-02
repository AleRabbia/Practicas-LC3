import PropTypes from 'prop-types';

const Persons = ({ name }) => {
    
    return (
        <div>            
            <li>{name}</li>
            
        </div>
    )
}


Persons.propTypes = {
    name: PropTypes.string
}

export default Persons;