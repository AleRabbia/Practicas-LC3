import PropTypes from 'prop-types';

const FamilyMembers = ({ name, age }) => {

    return (
        <div>
            <h3>Nombre: {name}</h3>
            <h3>Edad: {age}</h3>

        </div>
    )
}


FamilyMembers.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default FamilyMembers;