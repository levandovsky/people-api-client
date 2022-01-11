import {useState} from "react";
import {PeopleApi} from "../services/people-api";
import {PersonForm} from "./PersonForm";
import {Card, CardContent, CardFooter, CardFooterItem, Content} from "../ui/Card";

export const Person = ({person, onDelete, onUpdate}) => {
    const [saveEnabled, setSaveEnabled] = useState(false);
    const {name, lastname, age} = person;
    const [model, setModel] = useState({name, lastname, age});

    const toggleSaveEnabled = () => {
        setSaveEnabled(!saveEnabled);
    };

    const details = (
        <div className="details">
            <div className="fullname">
                Full name: {name} {lastname}
            </div>

            <div className="age">Age: {age}</div>

            <PersonForm
                person={person}
                disabled={!saveEnabled}
                onUpdate={(update) => {
                    setModel(update);
                }}
            />
        </div>
    );

    return (
        <div className="mb-3">
            <Card>
                <CardContent>
                    <Content>{details}</Content>
                </CardContent>

                <CardFooter>
                    <CardFooterItem
                        as={saveEnabled ? "a" : "span"}
                        onClick={async () => {
                            if (!saveEnabled) return;

                            await PeopleApi.update(person._id, model);
                            onUpdate(model);
                        }}
                    >
                        Save
                    </CardFooterItem>
                    <CardFooterItem as="a" onClick={toggleSaveEnabled}>
                        Edit
                    </CardFooterItem>
                    <CardFooterItem as="a" onClick={onDelete}>
                        Delete
                    </CardFooterItem>
                </CardFooter>
            </Card>
        </div>
    );
};
