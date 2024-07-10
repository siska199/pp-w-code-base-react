import CardIntroComponent from "@components/cards/CardIntroComponent";
import Accordion from "@components/ui/Accordion";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroAccordion = () => {
  const listItemAccordion = [...Array(3)]?.map(() => ({
    label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio,`,
  }));

  const listExample = [
    {
      title: "Basic Usage",
      component: (
        <div className="px-10">
          <Accordion items={listItemAccordion} />
        </div>
      ),
    },
  ];

  return (
    <CardIntroComponent
      title={"Accordion"}
      subTitle=" An accordion consists of multiple sections or panels, each containing a header and associated content. The headers are usually displayed in a vertical stack, and clicking on a header expands the associated content while collapsing the others."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Accordion}
    />
  );
};

export default CardIntroAccordion;
