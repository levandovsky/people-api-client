import {Person} from "./Person";

export const People = ({people, onDelete}) => {
    if (!people) {
        return <span>loading...</span>;
    }

    return people.map((person) => (
        <Person
            key={person._id}
            name={person.name}
            lastname={person.lastname}
            age={person.age}
            onDelete={() => {
                onDelete(person._id);
            }}
        />
    ));
};
