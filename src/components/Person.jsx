import {useState} from "react";
import {PeopleApi} from "../services/api";
import {Input} from "./Input";
import {PersonForm} from "./PersonForm";
import {Card} from "./Card";

export const Person = ({personId, person, onDelete, onUpdate}) => {
    const [detailsShown, setDetailsShown] = useState(false);
    const {name, lastname, age} = person;

    const toggleDetails = () => {
        setDetailsShown(!detailsShown);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const [n, l, a] = form.values();
        const update = {name: n, lastname: l, age: a};
        await PeopleApi.update(personId, update);
        onUpdate(personId, update);
    };

    const details = (
        <div className="details">
            <div className="fullname">
                {name} {lastname}
            </div>

            <div className="age">{age}</div>

            <PersonForm person={person} submitHandler={submitHandler} btnText="update" />
        </div>
    );

    const btnText = detailsShown ? "Hide" : "Show";

    const personDisplay = (
        <div className="person">
            <div className="name">{name}</div>

            {detailsShown ? details : null}

            <div className="footer">
                <button onClick={toggleDetails}>{btnText} details</button>
            </div>

            <div className="delete">
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );

    return (
        <div className="mb-3">
            <Card>
                <div className="card-content">
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.{" "}
                        <a>@bulmaio</a>.
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </Card>
        </div>
    );
};
