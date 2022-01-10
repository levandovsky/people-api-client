export const Field = ({label, ...rest}) => {
    const {name, type, placeholder, defaultValue} = rest;

    return (
        <div className="field">
            <label htmlFor={name}>{label || name}</label>

            <div className="control">
                <input
                    className="input"
                    type={type || "text"}
                    name={name}
                    placeholder={placeholder || name}
                    defaultValue={defaultValue}
                    {...rest}
                />
            </div>
        </div>
    );
};
