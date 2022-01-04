import {useState} from "react/cjs/react.development";

export const Person = ({name, lastname, age, onDelete}) => {
    const [detailsShown, setDetailsShown] = useState(false);

    const toggleDetails = () => {
        setDetailsShown(!detailsShown);
    };

    const details = (
        <div className="details">
            <div className="fullname">
                {name} {lastname}
            </div>

            <div className="age">{age}</div>
        </div>
    );

    const btnText = detailsShown ? "Hide" : "Show";

    return (
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
};
