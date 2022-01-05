export const Input = ({label, type, placeholder, name, defaultValue}) => (
    <div className="field">
        <label htmlFor={name}>{label || name}</label>

        <div className="control">
            <input className="input" type={type || "text"} name={name} placeholder={placeholder || name} defaultValue={defaultValue} />
        </div>
    </div>
);
