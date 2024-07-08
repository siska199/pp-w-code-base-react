
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
    {
      label: "customeClass",
      content: "An optional object containing custom class names for various elements. Each property allows customization of a specific part of the component:",
      childs: [
        {
          label: "container",
          content: "Class name for the main container of the timeline.",
        },
        {
          label: "containerStep",
          content: "Class name for each step container.",
        },
        {
          label: "containerContent",
          content: "Class name for the content container within each step.",
        },
        {
          label: "containerIcon",
          content: "Class name for the icon container within each step.",
        },
        {
          label: "lineBorder",
          content: "Class name for the line border element connecting the steps.",
        },
      ],
    },
    {
      label: "customeIcon",
      content: "An optional custom icon to replace the default icon (IconCalender). It can be a React node.",
    },
  ];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsTimeline;
