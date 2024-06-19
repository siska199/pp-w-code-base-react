
import CardIntroComponent from "@components/cards/CardIntroComponent";
import OTP from "@components/ui/OTP";

const CardIntroOTP = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'OTP'}
      subTitle="Description of OTP."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for OTP`;

export default CardIntroOTP;
