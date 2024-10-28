import LayoutType1 from "@components/layouts/LayoutType1";
import ExamplesPage from "@pages/ExamplesPage";
import LandingPage from "@pages/LandingPage";
import IntroductionPage from "@pages/docs/IntroductionPage";
import AccordionPage from "@pages/docs/components/AccordionPage";
import AlertPage from "@pages/docs/components/AlertPage";
import AvatarPage from "@pages/docs/components/AvatarPage";
import BadgePage from "@pages/docs/components/BadgePage";
import BreadcrumbPage from "@pages/docs/components/BreadcrumbPage";
import ButtonPage from "@pages/docs/components/ButtonPage";
import CardPage from "@pages/docs/components/CardPage";
import CarouselPage from "@pages/docs/components/CarouselPage";
import CopyTextPage from "@pages/docs/components/CopyTextPage";
import DropdownPage from "@pages/docs/components/DropdownPage";
import HelperMessagePage from "@pages/docs/components/HelperMessagePage";
import ImagePage from "@pages/docs/components/ImagePage";
import InputBasePage from "@pages/docs/components/InputBasePage";
import InputCheckboxPage from "@pages/docs/components/InputCheckboxPage";
import InputCurrencyPage from "@pages/docs/components/InputCurrencyPage";
import InputDatePage from "@pages/docs/components/InputDatePage";
import InputMultipleCheckboxPage from "@pages/docs/components/InputMultipleCheckboxPage";
import InputNPWPPage from "@pages/docs/components/InputNPWPPage";
import InputPercentagePage from "@pages/docs/components/InputPercentagePage";
import InputPhoneNumberPage from "@pages/docs/components/InputPhoneNumberPage";
import InputRadioButtonPage from "@pages/docs/components/InputRadioButtonPage";
import InputSelectPage from "@pages/docs/components/InputSelectPage";
import InputTextAreaPage from "@pages/docs/components/InputTextAreaPage";
import OTPPage from "@pages/docs/components/OTPPage";
import SkeletonPage from "@pages/docs/components/SkeletonPage";
import CSSFilePage from "@pages/docs/prerequisite/CSSFilePage";
import HelperFunctionPage from "@pages/docs/prerequisite/HelperFunctionPage";
import HookPage from "@pages/docs/prerequisite/HookPage";
import IconPage from "@pages/docs/prerequisite/IconPage";
import LibraryPage from "@pages/docs/prerequisite/LibraryPage";
import TailwindConfigPage from "@pages/docs/prerequisite/TailwindConfigPage";
import VariantPage from "@pages/docs/prerequisite/VariantPage";
import DividerPage from "@pages/docs/components/DividerPage";
import HelperComponentPage from "@pages/docs/prerequisite/HelperComponentPage";
import ProgressbarPage from "@pages/docs/components/ProgressbarPage";
import ProgressStepPage from "@pages/docs/components/ProgressStepPage";
import TablePage from "@pages/docs/components/TablePage";
import TabPage from "@pages/docs/components/TabPage";
import TooltipPage from "@pages/docs/components/TooltipPage";
import ModalPage from "@pages/docs/components/ModalPage";
import TimelinePage from "@pages/docs/components/TimelinePage";
import { createBrowserRouter } from "react-router-dom";
import ListPage from "@pages/docs/components/ListPage";
import InputFilePage from "@pages/docs/components/InputFilePage";

const docRouter = {
  path: "docs",
  handle: {
    id: "1-I0",
  },
  children: [
    {
      index: true,
      element: <IntroductionPage />,
    },
    {
      path: "prerequisite",
      handle: {
        id: "1-PR1",
      },
      children: [
        {
          path: "library",
          element: <LibraryPage />,
          handle: {
            id: "2-L0",
          },
        },

        {
          path: "tailwind-config",
          element: <TailwindConfigPage />,
          handle: {
            id: "2-TC1",
          },
        },

        {
          path: "css-file",
          element: <CSSFilePage />,
          handle: {
            id: "2-CF2",
          },
        },

        {
          path: "icon",
          element: <IconPage />,
          handle: {
            id: "2-I3",
            showRightSidebar: false,
          },
        },

        {
          path: "helper-function",
          element: <HelperFunctionPage />,
          handle: {
            id: "2-HF4",
          },
        },

        {
          path: "variant",
          element: <VariantPage />,
          handle: {
            id: "2-V5",
          },
        },

        {
          path: "hook",
          element: <HookPage />,
          handle: {
            id: "2-H5",
          },
        },

        {
          path: "helper-component",
          element: <HelperComponentPage />,
          handle: {
            id: "2-HC6",
          },
        },
      ],
    },
    {
      path: "components",
      handle: {
        id: "0-C0",
      },
      children: [
        {
          path: "accordion",
          element: <AccordionPage />,
          handle: {
            id: "1-AC0",
          },
        },
        {
          path: "alert",
          element: <AlertPage />,
          handle: {
            id: "1-AL1",
          },
        },
        {
          path: "avatar",
          element: <AvatarPage />,
          handle: {
            id: "1-AV2",
          },
        },
        {
          path: "badge",
          element: <BadgePage />,
          handle: {
            id: "1-BA3",
          },
        },
        {
          path: "button",
          element: <ButtonPage />,
          handle: {
            id: "1-BU5",
          },
        },

        {
          path: "breadcrumb",
          element: <BreadcrumbPage />,
          handle: {
            id: "1-BR4",
          },
        },

        {
          path: "copy-text",
          element: <CopyTextPage />,
          handle: {
            id: "1-CT7",
          },
        },

        {
          path: "dropdown",
          element: <DropdownPage />,
          handle: {
            id: "1-DR8",
          },
        },

        {
          path: "helper-message",
          element: <HelperMessagePage />,
          handle: {
            id: "1-HM9",
          },
        },

        {
          path: "image",
          element: <ImagePage />,
          handle: {
            id: "1-IM10",
          },
        },

        {
          path: "card",
          element: <CardPage />,
          handle: {
            id: "1-C19",
          },
        },

        {
          path: "skeleton",
          element: <SkeletonPage />,
          handle: {
            id: "1-S20",
          },
        },

        {
          path: "carousel",
          element: <CarouselPage />,
          handle: {
            id: "1-C21",
          },
        },
        {
          path: "input",
          handle: {
            id: "1-IN11",
          },
          children: [
            {
              path: "base",
              element: <InputBasePage />,
              handle: {
                id: "2-B0",
              },
            },
            {
              path: "currency",
              element: <InputCurrencyPage />,
              handle: {
                id: "2-CU3",
              },
            },
            {
              path: "npwp",
              element: <InputNPWPPage />,
              handle: {
                id: "2-N5",
              },
            },

            {
              path: "otp",
              element: <OTPPage />,
              handle: {
                id: "2-O6",
              },
            },
            {
              path: "percentage",
              element: <InputPercentagePage />,
              handle: {
                id: "2-P7",
              },
            },

            {
              path: "phone-number",
              element: <InputPhoneNumberPage />,
              handle: {
                id: "2-PN8",
              },
            },

            {
              path: "date",
              element: <InputDatePage />,
              handle: {
                id: "2-D4",
              },
            },

            {
              path: "checkbox",
              element: <InputCheckboxPage />,
              handle: {
                id: "2-C1",
              },
            },

            {
              path: "multiple-checkbox",
              element: <InputMultipleCheckboxPage />,
              handle: {
                id: "2-MC2",
              },
            },

            {
              path: "radio-button",
              element: <InputRadioButtonPage />,
              handle: {
                id: "2-RB9",
              },
            },

            {
              path: "select",
              element: <InputSelectPage />,
              handle: {
                id: "2-S10",
              },
            },

            {
              path: "text-area",
              element: <InputTextAreaPage />,
              handle: {
                id: "2-TA11",
              },
            },

            {
              path: "upload",
              element: <InputFilePage />,
              handle: {
                id: "2-U12",
              },
            },
          ],
        },
        {
          path: "divider",
          element: <DividerPage />,
          handle: {
            id: "1-D22",
          },
        },
        {
          path: "list",
          element: <ListPage />,
          handle: {
            id: "1-L13",
          },
        },
        {
          path: "progressbar",
          element: <ProgressbarPage />,
          handle: {
            id: "1-PB14",
          },
        },
        {
          path: "progress-step",
          element: <ProgressStepPage />,
          handle: {
            id: "1-PS15",
          },
        },
        {
          path: "table",
          element: <TablePage />,
          handle: {
            id: "1-T16",
          },
        },
        {
          path: "tab",
          element: <TabPage />,
          handle: {
            id: "1-T17",
          },
        },
        {
          path: "tooltip",
          element: <TooltipPage />,
          handle: {
            id: "1-T18",
          },
        },
        {
          path: "modal",
          element: <ModalPage />,
          handle: {
            id: "1-M16",
          },
        },
        {
          path: "timeline",
          element: <TimelinePage />,
          handle: {
            id: "1-T19",
          },
        },
      ],
    },
  ],
};

const router = createBrowserRouter([
  {
    path: "",
    errorElement: "Not found",
    element: <LayoutType1 />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        handle: {
          showSidebar: false,
          showRightSidebar: false,
        },
      },
      docRouter,
      {
        path: "examples",
        element: <ExamplesPage />,
        handle: {
          showSidebar: false,
          showRightSidebar: false,
        },
      },
    ],
  },
]);

export default router;
