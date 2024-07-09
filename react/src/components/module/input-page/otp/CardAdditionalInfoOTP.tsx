
import CardSubMenu from "@components/cards/CardSubMenu";
import Button from "@components/ui/Button";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoOTP = () => {
  const listAdditionalInfo = [

    {
      title: "HelperMessage Component Usage",
      caption: <p>The `InputOTP` component uses the `HelperMessage` component imported from &rsquo;@components/ui/HelperMessage&rsquo; to display error messages. Make sure the `HelperMessage` component is imported and configured with appropriate props for styling and error messaging functionality. You can see the component <Button label="here" to="/docs/components/helper-message" /></p>
    },
    {
      title: "Event Handling and Focus Management",
      caption: "The `InputOTP` component handles keyboard events (`onChange` and `onKeyUp`) for OTP input and manages input focus dynamically using `useRef` and DOM manipulation. Ensure that event handlers (`handleChange` and `handleBackspaceAndEnter`) are correctly implemented and tested for your application's usability."
    },
    {
      title: "State Management with Hooks",
      caption: "State management in the `InputOTP` component utilizes `useState` to manage OTP input (`otp`) and error state (`otpError`). Ensure that state updates (`setOtp` and `setOtpError`) are handled correctly to maintain component integrity and update UI based on user input and validation results."
    }
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}
export default CardAdditionalInfoOTP;
