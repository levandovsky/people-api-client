import {Navbar, Menu, Start, Item, Buttons, End} from "../ui/Navbar";
import {Link} from "react-router-dom";

export const Nav = () => (
    <Navbar>
        <Menu>
            <Start>
                <Item as="span">
                    <Link to="/">Home</Link>
                </Item>

                <Item as="span">
                    <Link to="/add">Add</Link>
                </Item>
            </Start>

            <End>
                <Buttons>
                    <Item as="span">
                        <Link className="button is-primary" to="/login">
                            Login
                        </Link>
                    </Item>
                </Buttons>
            </End>
        </Menu>
    </Navbar>
);
