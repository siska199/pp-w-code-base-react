
import CardIntroComponent from "@components/cards/CardIntroComponent";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroInputCheckbox = () => {

  const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'Input Checkbox'}
      subTitle="A checkbox is a graphical element that allows users to select or deselect options in user interfaces. It consists of a small box that can be checked or unchecked to indicate the user's choice. Checkboxes are commonly used in forms and settings menus to enable users to make multiple selections efficiently."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputCheckbox}
    />
  );
}


export default CardIntroInputCheckbox;
