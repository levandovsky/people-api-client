import {PeopleApi} from "../services/api";
import {PersonForm} from "./PersonForm";

export const AddPerson = ({onAdded, className}) => {
    const person = {name: "", lastname: "", age: ""};

    const submitHandler = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const [name, lastname, age] = form.values();

        const added = await PeopleApi.add({name, lastname, age});
        onAdded(added);
    };

    return <PersonForm className={className} person={person} submitHandler={submitHandler} btnText="Add" />;
};
