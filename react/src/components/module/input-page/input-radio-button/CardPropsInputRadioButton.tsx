import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import Here from "@components/ui/text/Here";

const CardPropsInputRadioButton = () => {
  const listItem = [
    {
      label: "name",
      content: "This is the name attribute for the radio buttons. It groups the radio buttons together so only one can be selected at a time within this group.",
    },
    {
      label: "onChange",
      content: "This is the event handler function that is called whenever the selected radio button changes. It receives the change event as an argument.",
    },
    {
      label: "options",
      content: 'This is an array of objects, each representing a radio button option. Each object should have a "label" for the display text and a "value" for the radio button value.',
    },
    {
      label: "value",
      content: "This is the currently selected value of the radio button group. It determines which radio button is checked.",
    },
    {
      label: "HTMLProps",
      content: "It defines all properties (props) that an <input> element in HTML can accept. These include attributes like className, style, value, and event handlers like onChange, onFocus, etc.",
    },
    {
      label: "Inherit all props that ContainerInput have",
      content: (
        <>
          To see all available props that ContainerInput have you can see in <Here to={`/docs/prerequisite/helper-component?id=ContainerInputProps.tsx`} />{" "}
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

export default CardPropsInputRadioButton;
