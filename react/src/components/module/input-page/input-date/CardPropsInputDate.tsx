import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import Here from "@components/ui/text/Here";

const CardPropsInputDate = () => {
  const listItem = [
    {
      label: "name",
      content: "The name attribute identifies the input field and is used to reference it in form submissions.",
    },
    {
      label: "value",
      content: "The value of the input field, which can be either a single Date object or an array of two Date objects for date range selection.",
    },
    {
      label: "onChange",
      content: "A callback function that handles changes to the input value. It takes an event object with the updated value.",
    },
    {
      label: "placeholder",
      content: "Optional text displayed in the input field when it is empty.",
    },
    {
      label: "iconPosition",
      content: "Determines the position of the calendar icon within the input field. It can be either 'start' or 'end'. The default value is 'start'.",
    },
    {
      label: 'Omit<Partial<ReactDatePickerProps>, "onChange" | "value">',
      content: (
        <p>
          This makes all properties of ReactDatePickerProps optional, except for the onChange and value properties which are explicitly defined in TProps. This ensures that the InputDate component can accept all optional properties of the DatePicker component, while maintaining control over the
          onChange and value properties to handle date selection and formatting appropriately. You can see all available props that component DatePicker have in <Here to={"/"} />
        </p>
      ),
    },
    {
      label: "HTMLProps",
      content: "t defines all properties (props) that an <input> element in HTML can accept. These include attributes like className, style, value, and event handlers like onChange, onFocus, etc.",
    },
    {
      label: "Inherit all props that ContainerInput have",
      content: (
        <>
          To see all available props that ContainerInput have you can see in <Here to={`/docs/prerequisite/helper-component?id=container-input.tsx`} />{" "}
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

export default CardPropsInputDate;
