import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import List from "@components/ui/List";

const CardPropsInputPercentage = () => {
  const listItem = [
    {
      label: "onChange",
      content: "Handles input value changes with formatted updates and triggers the parent component callback function.",
    },
    {
      label: "value",
      content: "Represents the current value of the input field, formatted according to the specified rules.",
    },
    {
      label: "name",
      content: "Identifies the input field by its name, allowing it to be referenced uniquely in the parent component.",
    },
    {
      label: "maxValue",
      content: "Specifies the maximum allowable value for the percentage input. Values exceeding this limit are adjusted to this maximum value.",
    },
    {
      label: "minValue",
      content: "Specifies the minimum allowable value for the percentage input. Values below this limit are adjusted to this minimum value.",
    },
    {
      label: "HTMLProps",
      content: "Inherits all properties (props) that an <input> element in HTML can accept, such as className, style, value, placeholder, and event handlers like onChange.",
    },
    {
      label: "ContainerInput Props",
      content: (
        <>
          Inherits all props from the ContainerInput component, providing additional styling and functionality. For details on available props, refer to the <Button label="ContainerInput documentation" to={`/docs/prerequisite/helper-component?id=ContainerInput.tsx`} />.
        </>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Props"}>
      <List items={listItem} />
    </CardSubMenu>
  );
};

export default CardPropsInputPercentage;
