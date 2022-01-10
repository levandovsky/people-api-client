import {classnames} from "../utils/Classnames";
import {Element} from "./Element";

export const Content = ({children}) => <div className="content">{children}</div>;

export const CardContent = ({children}) => <div className="card-content">{children}</div>;

export const CardFooter = ({className, ...props}) =>
    Element({as: "footer", className: classnames("card-footer", className), ...props});

export const CardFooterItem = ({...props}) => Element({className: "card-footer-item", ...props});

export const CardHeader = ({className, ...props}) =>
    Element({as: "header", className: classnames("card-header", className), ...props});

export const CardHeaderTitle = ({as = "span", className, ...props}) =>
    Element({as, className: classnames("card-header-title", className), ...props});

export const Card = ({...props}) => Element({as: "div", className: "card", ...props});
