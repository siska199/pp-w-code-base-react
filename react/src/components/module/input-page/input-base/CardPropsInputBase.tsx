import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import Here from "@components/ui/text/Here";

const CardPropsInputBase = () => {
  const listItem = [
    {
      label: "name",
      content: "A string representing the name of the input field.",
    },
    {
      label: "onChange",
      content: "A function that handles changes in the input field.",
      childs: [
        {
          label: "e",
          content: (
            <>
              <code>{`React.ChangeEvent<HTMLInputElement>`}</code> type event.
            </>
          ),
        },
      ],
    },
    {
      label: "HTMLProps",
      content: (
        <>
          It defines all properties (props) that an <code>{`<input> `}</code> element in HTML can accept. These include attributes like className, style, value, and event handlers like onChange, onFocus, etc.
        </>
      ),
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

export default CardPropsInputBase;
