
import CardIntroComponent from "@components/cards/CardIntroComponent";

const CardIntroInputTextArea = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'InputTextArea'}
      subTitle="
A TextArea component is a multi-line input field used in web and mobile applications to allow users to enter larger amounts of text. Unlike a standard text input, it supports line breaks and can be resized by the user for better readability. TextAreas are commonly used for comments, feedback, and detailed text entries."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for InputTextArea`;

export default CardIntroInputTextArea;
