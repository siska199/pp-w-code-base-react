import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import CopyText from "@components/ui/CopyText";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroCopyText = () => {
  const listExample = [
    {
      component: (
        <div className="flex flex-col  justify-center">
          <CardVariantComp title={"Default"} Component={<CopyText text="Siska Apriana Rifianti the author of codebase199" />} withBorder={false} />
        </div>
      ),
    },
  ];
  return (
    <CardIntroComponent
      title={"Copy Text"}
      subTitle="The Copy Text component is a component that allows users to copy a specified text string to their clipboard. It includes visual feedback to indicate when the text has been successfully copied. This component is particularly useful in applications where users need to quickly copy text, such as sharing links or snippets of information."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.CopyText}
    />
  );
};

export default CardIntroCopyText;
