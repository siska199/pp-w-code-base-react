
import CardIntro from "@components/cards/CardIntro";
import Alert from "@components/ui/Alert";
import Button from "@components/ui/Button";
import { useState } from "react";

const CardAlertIntro = () => {

  return (
    <CardIntro
      title={'Alert'}
      subTitle="The Alert component is a UI element commonly used in web applications to display important information, warnings, or notifications to users. It typically appears as a message box or dialog that pops up on the screen, drawing the user's attention to a specific event or situation that requires their attention."
      DisplayComponent={<DisplayAlert />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const DisplayAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleToggleAlert = () => {
    setShowAlert(!showAlert)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant={"white"} onClick={handleToggleAlert} >Show Alert</Button>
      <Alert variant="success" withCloseBtn show={showAlert} onDismiss={handleToggleAlert}>
        Sukses makan
      </Alert>
      <div className="flex flex-col gap-4">
        <p className="text-black font-medium text-body-medium">Example variant:</p>
        <Alert variant="notification" withCloseBtn={true} isFixed={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="info" withCloseBtn={true} isFixed={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="warning" isFixed={false} autoClose={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="error" isFixed={false} autoClose={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
        <Alert variant="success" isFixed={false} autoClose={false} show={true}>
          s mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!
        </Alert>
      </div>
    </div>
  )
}

const displayCodeBase = `
`;

export default CardAlertIntro;
