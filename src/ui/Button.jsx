import {classnames} from "../utils/Classnames";
import {Element} from "./Element";

export const Button = ({className, ...props}) =>
    Element({as: "button", className: classnames("button", className), ...props});
