/* eslint-disable @typescript-eslint/ban-ts-comment */

import CardVariousCompVariant from "@components/CardVariousCompVariant";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Alert from "@components/ui/Alert";
import Button from "@components/ui/Button";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";
import variantsAlert from "@lib/utils/variants/ui/variant-alert";
import { useState } from "react";

const CardIntroAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleToggleAlert = () => {
    setShowAlert(!showAlert);
  };

  const typeAlert = {
    error: "",
    success: "",
    warning: "",
    info: "",
    notification: "",
  };
  const listExample = [
    {
      title: "Type",
      component: (
        <CardVariousCompVariant<typeof variantsAlert.variant, "success" | "warning" | "error">
          variant={variantsAlert.variant}
          groups={["success", "warning", "error"]}
          Component={(variant, group) => (
            <Alert
              message={"s mollitia non itaque, natus, accusantiu"}
              type={group}
              // @ts-expect-error
              variant={variant}
              isFixed={false}
              show={true}
            />
          )}
          withBorder={false}
        />
      ),
    },
    {
      title: "With Icon",
      component: (
        <CardVariousCompVariant<typeof typeAlert, "success" | "warning" | "error" | "notification" | "info">
          variant={typeAlert}
          groups={["success", "warning", "error", "notification", "info"]}
          Component={(type) => (
            <Alert
              message={"s mollitia non itaque, natus, accusantiu"}
              type={type}
              isFixed={false}
              show={true}
              withIcon={true}
            />
          )}
          withGroupName={false}
          withBorder={false}
        />
      ),
    },
    {
      title: "With Icon Close",
      component: (
        <div className="flex flex-col gap-1">
          <Alert
            message={" s mollitia non itaque, natus, accusantium "}
            type="success"
            isFixed={false}
            show={true}
            withCloseBtn={true}
          />
        </div>
      ),
    },
    {
      title: "Show alert after click Button:",
      component: (
        <>
          <Button
            label={"Show Alert"}
            variant={"solid-white"}
            onClick={() => handleToggleAlert()}
          />
          <Alert
            type="success"
            withCloseBtn
            show={showAlert}
            onDismiss={handleToggleAlert}
            message={"mollitia non itaque, natus, accusantium tenetur deserunt maxime? Praesentium, veritatis!"}
          />
        </>
      ),
    },
  ];

  return (
    <CardIntroComponent
      title={"Alert"}
      subTitle="The Alert component is a UI element commonly used in web applications to display important information, warnings, or notifications to users. It typically appears as a message box or dialog that pops up on the screen, drawing the user's attention to a specific event or situation that requires their attention."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.Alert}
    />
  );
};

export default CardIntroAlert;
