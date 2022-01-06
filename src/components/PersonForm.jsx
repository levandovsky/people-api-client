import {useEffect, useState} from "react";
import {Field} from "../organisms/Field";

export const PersonForm = ({person, onUpdate, className, disabled}) => {
    const [name, setName] = useState(person.name);
    const [lastname, setLastname] = useState(person.lastname);
    const [age, setAge] = useState(person.age);

    useEffect(() => {
        onUpdate({
            name,
            lastname,
            age,
        });
    }, [name, lastname, age]);

    return (
        <form className={className || ""}>
            <Field
                name="name"
                defaultValue={name}
                disabled={disabled}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <Field
                name="lastname"
                defaultValue={lastname}
                disabled={disabled}
                onChange={(e) => {
                    setLastname(e.target.value);
                }}
            />
            <Field
                name="age"
                type="number"
                disabled={disabled}
                defaultValue={age}
                max="100"
                onChange={(e) => {
                    setAge(e.target.value);
                }}
            />
        </form>
    );
};
