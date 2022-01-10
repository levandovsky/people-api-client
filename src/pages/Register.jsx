import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Field} from "../organisms/Field";
import {Auth} from "../services/auth";
import {Button} from "../ui/Button";
import {Card, CardContent, CardHeader, CardHeaderTitle, Content} from "../ui/Card";

export const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) return;

        const res = await Auth.register(username, password);

        if (res.error) {
            setError(res.error);
            return;
        }
        setError(null);
        navigate("/login");
    };

    return (
        <Card as="form" onSubmit={handleSubmit}>
            <CardHeader>
                <CardHeaderTitle>Register</CardHeaderTitle>
            </CardHeader>

            <CardContent>
                <Content>
                    <Field onChange={onUsernameChange} name="username" required />
                    <Field onChange={onPasswordChange} name="password" type="password" required minLength={8} />

                    <Button className="is-primary" type="submit" disabled={!username || !password}>
                        Register
                    </Button>

                    <div style={{color: "red"}}>{error}</div>
                </Content>
            </CardContent>
        </Card>
    );
};
