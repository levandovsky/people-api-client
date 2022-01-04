export const Input = ({label, type, placeholder, name}) => (
    <div className="field">
        <label htmlFor={name}>{label || name}</label>

        <div className="input-wrapper">
            <input type={type} name={name} placeholder={placeholder || name} />
        </div>
    </div>
);
