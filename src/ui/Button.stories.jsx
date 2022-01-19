import {Button} from "./Button";

export default {
    name: "Components/Button",
    component: Button,
    parameters: {
        docs: {
            source: {
                type: "code",
            },
        },
    },
};

const RegularTemplate = (args) => (
    <Button variant={args.variant} size={args.size}>
        Button
    </Button>
);

export const Regular = RegularTemplate.bind({});

Regular.args = {
    variant: "primary",
    size: "",
};

export const Primary = () => <div>
    stuff
</div>;

export const Success = () => <Button className="is-success">Success</Button>;
