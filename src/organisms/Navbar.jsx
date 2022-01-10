import {Navbar, Menu, Start, Item, Buttons, End} from "../ui/Navbar";
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {Button} from "../ui/Button";

export const Nav = () => {
    const auth = useAuth();

    const start = auth.token ? (
        <Start>
            <Item as="span">
                <Link to="/">Home</Link>
            </Item>

            <Item as="span">
                <Link to="/add">Add</Link>
            </Item>
        </Start>
    ) : null

    const buttons = auth.token ? (
        <Buttons>
            <Item as="span">
                Welcome, {auth.username}!
            </Item>
            <Item as="span">
                <Button className="is-link" onClick={() => auth.logout()}>
                    Logout
                </Button>
            </Item>
        </Buttons>
    ) : (
        <Buttons>
            <Item as="span">
                <Link className="button is-primary" to="/login">
                    Login
                </Link>
            </Item>

            <Item as="span">
                <Link className="button is-primary" to="/register">
                    Register
                </Link>
            </Item>
        </Buttons>
    );

    return (
        <Navbar>
            <Menu>
                {start}
                <End>{buttons}</End>
            </Menu>
        </Navbar>
    );
};
