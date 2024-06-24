
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoInputPercentage = () => {
  const listAdditionalInfo = [
    {
      title: "ContainerInput Props",
      caption: "This component wraps the input element and provides additional styling and functionality.",
    },
    {
      title: "handleOnChangeFormatedValue Function",
      caption: "Formats the input value to allow only digits and a single decimal point, restricting input to a valid percentage (0-100).",
    },
    {
      title: "IconPercentage Component",
      caption: <div>An icon component imported from &rsquo@assets/icons&rsquo and displayed at the end of the input field within &rsquoContainerInput&rsquo. You can see the icon <Button label={"here"} to={`/docs/prerequisite/icon?name=IconPercentage`}/></div>,
    }
  ];
  

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoInputPercentage;
