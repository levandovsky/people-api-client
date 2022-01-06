import {Field} from "../organisms/Field";
import {Button} from "../ui/Button";

export const Login = () => {
    return (
        <form>
            <Field name="username" />
            <Field name="password" type="password" />

            <Button class="is-primary">Login</Button>
        </form>
    );
};
