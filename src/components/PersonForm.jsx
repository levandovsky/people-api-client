import {Button} from "../ui/Button";
import {Input} from "./Input";

export const PersonForm = ({person, submitHandler, btnText, className}) => {
    const {name, lastname, age} = person;

    return (
        <form className={className || ""} onSubmit={submitHandler}>
            <Input name="name" defaultValue={name} />
            <Input name="lastname" defaultValue={lastname} />
            <Input name="age" type="number" defaultValue={age} />

            <Button type="submit">{btnText}</Button>
        </form>
    );
};
