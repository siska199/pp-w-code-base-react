
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsProgressStep = () => {
  const listItem = [
    {
        label: "activeStep",
        content: "Represents the index of the currently active step in the list. When provided, this step will be visually highlighted."
    },
    {
        label: "listStep",
        content: "An array of objects representing each step in the progress. Each object must contain at least a 'title' property, which can be either a string or a React node. Optionally, it can include a 'caption' property for additional descriptive content."
    },
    {
        label: "variant",
        content: "Specifies the layout orientation of the progress steps. Can be 'horizontal' or 'vertical'. Defaults to 'horizontal'."
    },
    {
        label: "type",
        content: "Specifies the visual style of each step item. Can be 'number', 'default', or 'dot'. Defaults to 'default'."
    },
    {
        label: "shapeItem",
        content: "Specifies the shape of the step indicator. Can be 'rounded' or 'circle'. Defaults to 'circle'."
    },
    {
        label: "customeClass",
        content: "An optional object containing custom CSS classes to override or extend the component's styles. It can include the following properties: 'spanIcon' for the step indicator, 'stepperWrapper' for the overall wrapper of the stepper, 'stepperIcon' for individual step icons, and 'stepperItem' for each step item."
    }
];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsProgressStep;
