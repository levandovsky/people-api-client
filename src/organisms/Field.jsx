export const Field = ({label, onChange, ...rest}) => {
    const {name, type, placeholder, defaultValue, max, disabled} = rest;
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
                    max={max}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};
