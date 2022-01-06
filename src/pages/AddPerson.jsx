import {PeopleApi} from "../services/api";
import {PersonForm} from "../components/PersonForm";
import {Card, CardContent, CardFooter, CardFooterItem, Content} from "../ui/Card";
import {useState} from "react";

export const AddPerson = ({onAdded, className}) => {
    const person = {name: "", lastname: "", age: ""};
    const [model, setModel] = useState(person);

    return (
        <Card>
            <CardContent>
                <Content>
                    <PersonForm
                        className={className}
                        person={person}
                        onUpdate={(update) => {
                            setModel(update);
                        }}
                    />
                </Content>
            </CardContent>

            <CardFooter>
                <CardFooterItem
                    as="a"
                    onClick={async () => {
                        const res = await PeopleApi.add(model);

                        if (res.errors) return console.warn("Bad payload");

                        onAdded(res);
                    }}
                >
                    Save
                </CardFooterItem>
            </CardFooter>
        </Card>
    );
};
