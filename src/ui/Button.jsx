import "./Button.css";
import {classnames} from "../utils/Classnames";

const classMap = {
    primary: "primary",
};

const sizeMap = {
    small: "small",
    large: "large",
};

export const Button = ({className, variant, size, children}) => {
    const variantClass = classMap[variant];
    const sizeClass = sizeMap[size];
    return <button className={classnames("btn", variantClass, className, sizeClass)}>{children}</button>;
};
