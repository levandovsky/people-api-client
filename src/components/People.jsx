import {Person} from "./Person";

export const People = ({people, onDelete, onUpdate}) => {
    if (!people) {
        return <span>loading...</span>;
    }

    return people.map((person) => (
        <Person
            key={person._id}
            personId={person._id}
            person={person}
            onDelete={() => {
                onDelete(person._id);
            }}
            onUpdate={onUpdate}
        />
    ));
};
