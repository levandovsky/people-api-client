import {PeopleApi} from "../services/api";
import {Input} from "./Input";

export const AddPerson = ({onAdded}) => {
    const submitHandler = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const [name, lastname, age] = form.values();

        const person = await PeopleApi.add({name, lastname, age});
        onAdded(person);
    };

    return (
        <form onSubmit={submitHandler}>
            <Input type="text" name="name" />
            <Input type="text" name="lastname" />
            <Input type="number" name="age" />

            <button type="submit">Add</button>
        </form>
    );
};
