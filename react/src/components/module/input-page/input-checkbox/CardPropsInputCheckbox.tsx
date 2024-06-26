
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardPropsInputCheckbox = () => {
  const listItem =  [
    {
      label: 'name',
      content: 'This prop is a string that specifies the name attribute of the checkbox input element. It is used to identify the checkbox in form submissions and for associating labels with the input.'
    },
    {
      label: 'onChange',
      content: 'This is a function that gets called whenever the value of the checkbox changes. It receives a React.ChangeEvent<HTMLInputElement> event as its argument.'
    },
    {
      label: 'label',
      content: 'This optional prop is a string that specifies the text to be displayed next to the checkbox. If not provided, the checkbox will be rendered without a label.'
    },
    {
      label: 'value',
      content: 'This prop specifies the value of the checkbox input. It can be of any type (any).'
    },
    {
      label: 'classNameContainer',
      content: 'This optional prop is a string that allows you to apply additional CSS classes to the container element that wraps the checkbox and label.'
    },
    {
      label: 'customeClassnameCheckbox',
      content: 'This is an optional object that allows you to apply custom CSS classes to different parts of the checkbox component. Currently, it supports: \n - container: Class name for the checkbox container.'
    },
    {
      label: 'checked',
      content: 'This prop is a boolean that determines whether the checkbox is checked or not.'
    },
    {
      label: '...attrsInput',
      content: 'This spread operator allows any other HTML props that are applicable to an input element to be passed to the checkbox input. These could include attributes like id, disabled, required, etc.'
    }
  ];


return (
  <CardSubMenu title={'Props'}>
    <List items={listItem} />
  </CardSubMenu>
);
}

export default CardPropsInputCheckbox;
