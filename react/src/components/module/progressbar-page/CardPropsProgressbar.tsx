
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsProgressbar = () => {
  const listItem = [
    {
        label: "value",
        content: "Represents the current value of the progress bar."
    },
    {
        label: "valueTotal",
        content: "Optional. Represents the total value used to calculate the percentage of the progress bar filled. Default value is 100."
    },
    {
        label: "customeClass",
        content: "Optional object containing custom CSS classes for different parts of the progress bar component: container, containerProgressbar, progressbar, containerLabel, label."
    },
    {
        label: "size",
        content: "Optional. Specifies the size variant of the progress bar. Currently, only 'base' size is defined in this component."
    },
    {
        label: "variant",
        content: "Specifies different layout variants/styles for the progress bar: base, trailing-label, title-label, top-floating-label, bottom-floating-label, within-progress-bar, steps."
    },
];


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsProgressbar;
