import {Element} from "./Element";
import {classnames} from "../utils/Classnames";

export const Start = ({className, ...rest}) =>
    Element({as: "div", className: classnames("navbar-start", className), ...rest});

export const End = ({className, ...rest}) =>
    Element({as: "div", className: classnames("navbar-end", className), ...rest});

export const Item = ({as, className, ...rest}) =>
    Element({as, className: classnames("navbar-item", className), ...rest});

export const Buttons = ({className, ...rest}) =>
    Element({as: "div", className: classnames("buttons", className), ...rest});

export const Menu = ({className, ...rest}) =>
    Element({as: "div", className: classnames("navbar-menu", className), ...rest});

export const Navbar = ({className, ...rest}) =>
    Element({as: "nav", className: classnames("navbar", className), ...rest});
