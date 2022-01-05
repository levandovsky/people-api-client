export const Content = ({children}) => <div className="content">{children}</div>;

export const CardContent = ({children}) => <div className="card-content">{children}</div>;

export const Card = ({children, className}) => <div className={`card ${className || ""}`}>{children}</div>;
