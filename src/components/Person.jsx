const Button = (props) => {
    const {name, age} = props;

    const handleClick = () => {
        alert(`Persons name is: ${name}`);
    };

    if (age < 18) return null;

    return <button onClick={handleClick}>Show Name</button>;
};

export const Person = ({name, lastname, age}) => {
    const condition = age > 18;
    const ageMessage = condition ? age : "Age is less than 18";
    const color = condition ? "red" : "blue";

    return (
        <div className="person">
            <div className="fullname">
                {name} {lastname}
            </div>

            <div className="age" style={{color}}>{ageMessage}</div>

            <div className="footer">
                <Button name={name} age={age} />
            </div>
        </div>
    );
};
