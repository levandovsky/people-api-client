import {useEffect, useState} from "react";
import {Field} from "../organisms/Field";

export const PersonForm = ({person, onUpdate, className, disabled}) => {
    const [name, setName] = useState(person.name);
    const [lastname, setLastname] = useState(person.lastname);
    const [age, setAge] = useState(person.age);

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeLastName = (e) => {
        setLastname(e.target.value);
    };

    const changeAge = (e) => {
        setAge(e.target.value);
    };

    useEffect(() => {
        onUpdate({
            name,
            lastname,
            age,
        });
    }, [name, lastname, age]);

    return (
        <form className={className || ""}>
            <Field name="name" defaultValue={name} disabled={disabled} onChange={changeName} />
            <Field name="lastname" defaultValue={lastname} disabled={disabled} onChange={changeLastName} />
            <Field name="age" type="number" disabled={disabled} defaultValue={age} max="100" onChange={changeAge} />
        </form>
    );
};
