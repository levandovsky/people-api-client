import {createElement} from "react";

export const Element = ({as, ...props}) => createElement(as, {...props});
