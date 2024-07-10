import CardSubMenu from "@components/cards/CardSubMenu";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoOTP = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behaviour",
      caption: (
        <p>
          The <code>InputOTP</code> component automatically validates the OTP input against the provided <code>correctOTP</code> prop and displays appropriate messages using the <code>alert</code> state. It manages focus dynamically to ensure a smooth user experience during input.
        </p>
      ),
    },

    {
      title: "Dependencies",
      caption: (
        <p>
          The <code>InputOTP</code> component relies on several dependencies and utility functions imported from external sources (
          <Filename name="Alert" to="/docs/components/alert" />
          <Filename name="Container" to="/docs/prerequisite/helper-component?id=Container.tsx" />,
          <Filename name="findLargestIndexWithValue" to="/docs/prerequisite/helper-function?id=findLargestIndexWithValue" />
          <Filename name="findSmallestIndexWithEmptyValue" to="/docs/prerequisite/helper-function?id=findSmallestIndexWithEmptyValue" />,
          <Filename name="TCustomeEventOnChange" to="/docs/prerequisite/types" />,
          <Filename name="React" importFrom="react" />,
          <Filename name="useRef" importFrom="react" />
          <Filename name="useEffect" importFrom="react" />
          , and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },

    {
      title: "OTP Formatting",
      caption: (
        <p>
          The <code>InputOTP</code> component handles the OTP input by managing individual input boxes for each digit. It ensures the correct format by dynamically updating the state and managing focus.
        </p>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};
export default CardAdditionalInfoOTP;
