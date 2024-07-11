
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsProgressbar = () => {
    const listItem = [
        {
            label: "value",
            content: <>Represents the current value of the progress bar.</>
        },
        {
            label: "valueTotal",
            content: <>Optional. Represents the total value used to calculate the percentage of the progress bar filled. Default value is 100.</>
        },
        {
            label: "customeClass",
            content: <>Optional object containing custom CSS classes for different parts of the progress bar component: container, containerProgressbar, progressbar, containerLabel, label.</>
        },
        {
            label: "size",
            content: <>Optional. Specifies the size variant of the progress bar. Currently, only &apos;base&apos; size is defined in this component.</>
        },
        {
            label: "variant",
            content: <>Specifies different layout variants/styles for the progress bar: base, trailing-label, title-label, top-floating-label, bottom-floating-label, within-progress-bar, steps.</>
        },
        {
            label: "Progressbar Component",
            content: <>A React component that displays a progress bar with customizable styles based on the variant prop. It calculates the percentage filled based on the value and valueTotal props.</>
        },
        {
            label: "labelComp",
            content: <>Component that dynamically renders a label based on the variant prop. It may show a badge if the variant is &apos;top-floating-label&apos; or &apos;bottom-floating-label&apos;.</>
        },
        {
            label: "CSS Classes (cn Function)",
            content: <>The &apos;cn&apos; function, likely from a utility library, is used to conditionally apply Tailwind CSS classes or custom classes based on the props and state of the component.</>
        }
    ];
    


  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardPropsProgressbar;
