import {Input} from "./Input";

export const PersonForm = ({person, submitHandler, btnText}) => {
    const {name, lastname, age} = person;

    return (
        <form onSubmit={submitHandler}>
            <Input name="name" defaultValue={name} />
            <Input name="lastname" defaultValue={lastname} />
            <Input name="age" type="number" defaultValue={age} />

            <button type="submit">{btnText}</button>
        </form>
    );
};
