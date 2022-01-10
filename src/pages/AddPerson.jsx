import {PeopleApi} from "../services/people-api";
import {PersonForm} from "../components/PersonForm";
import {Card, CardContent, CardFooter, CardFooterItem, Content} from "../ui/Card";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const AddPerson = ({className}) => {
    const person = {name: "", lastname: "", age: ""};
    const [model, setModel] = useState(person);
    const onModelUpdate = (update) => setModel(update);
    const navigate = useNavigate();
    const onSave = async () => {
        const res = await PeopleApi.add(model);
        if (res.errors) return console.warn("Bad payload");
        navigate("/", {state: {added: res}});
    };

    return (
        <Card>
            <CardContent>
                <Content>
                    <PersonForm className={className} person={person} onUpdate={onModelUpdate} />
                </Content>
            </CardContent>

            <CardFooter>
                <CardFooterItem as="a" onClick={onSave}>
                    Save
                </CardFooterItem>
            </CardFooter>
        </Card>
    );
};
