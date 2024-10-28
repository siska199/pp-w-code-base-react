
import CardIntroComponent from "@components/cards/CardIntroComponent";
import ExampleTable from "@components/examples/ExampleTable";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroTable = () => {


  const listExample = [
    {
      component: <ExampleTable />
    },

  ]
  return (
    <CardIntroComponent
      title={'Table'}
      subTitle="A Table component is a crucial element in web and application development used to display data in a structured, tabular format. It typically consists of rows and columns, where each cell in the table can hold various types of data, including text, numbers, and even other HTML elements. "
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Table}
    />
  );
}


export default CardIntroTable;
