import FamilyMembers from "../familyMembers/FamilyMembers";

const Family = ({ persons }) => {
    return (
        <div>
            <h1>Miembros de la familia</h1>
            {persons.map((person, index) => (
                <FamilyMembers key={index} name={person.name} age={person.age} />
            ))}
        </div>
    );
};

export default Family;