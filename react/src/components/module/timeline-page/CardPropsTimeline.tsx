
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import { TItemList } from "@types";

const CardPropsTimeline = () => {
  const listItem: TItemList[] = [
    {
      label: "variant",
      content: "Specifies the variant style of the timeline. It can be 'v1' or 'v2'. Defaults to 'v1'.",
    },
    {
      label: "listStep",
      content: "An array of objects representing each step or event in the timeline. Each object contains:",
      childs: [
        {
          label: "title",
          content: "Title of the step/event. It can be a string or a React node.",
        },
        {
          label: "subtitle",
          content: "Optional subtitle of the step/event. It can be a string or a React node. Only used in 'v1' variant.",
        },
        {
          label: "description",
          content: "Optional description of the step/event. It can be a string or a React node.",
        },
      ],
    },
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsTimeline;
