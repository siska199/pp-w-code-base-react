import CardIntro from "@components/cards/CardIntro";
import Badge from "@components/ui/Badge";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import codeStringHook from "@lib/utils/code-string/hook";
import { TItemList } from "@types";

const HookPage = () => {

  const listHook = [
    {
      title: 'useFormattedInput',
      caption: generateCaptionListItemHook({
        description: 'This hook is designed to handle formatted input fields, such as phone numbers, credit card numbers, or any other input that requires a specific pattern.',
        list: {
          items: [
            {
              label: "Dependencies:",
              content: 'useRef from React'
            },
            {
              label: "Parameters:",
              content: "onChange, formatPattern, and value"
            },
            {
              label: 'Returns:',
              content: 'An object containing inputRef and handleOnChangeFormattedValue.'
            },
            {
              label: 'Functionality:',
              content: '',
              childs: [
                {
                  label: 'formatValue',
                  content: 'Formats the input value according to the provided pattern.'
                },
                {
                  label: 'handleOnChangeFormattedValue',
                  content: 'Handles changes to the input value, ensuring it follows the specified format and adjusts the cursor position accordingly.'
                }
              ]
            }
          ]
        },
        codeBlock: {
          filename: 'src/hooks/useFormattedInput.tsx',
          codeString: codeStringHook.useFormattedInput
        },
        useCase: 'This hook is useful in forms where specific input formatting is required, ensuring user input adheres to a defined pattern and improving user experience.'
      })
    },
    {
      title: 'useOnClickOutside',
      caption: generateCaptionListItemHook({
        description: 'This hook detects and handles clicks outside of a specified element, which is useful for dropdowns, modals, or any component that should close when the user clicks outside of it.',
        list: {
          items: [
            {
              label: "Dependencies:",
              content: 'RefObject, useEffect from React, and a helper function isEmptyValue.'
            },
            {
              label: "Parameters:",
              content: "handler, ref, and optionally refExceptions"
            },
            {
              label: 'Returns:',
              content: 'None (side-effect only).'
            },
            {
              label: 'Functionality:',
              content: '',
              childs: [
                {
                  label: 'handleClickOutside',
                  content: 'Adds event listeners for mousedown and touchstart. Calls handler when a click is detected outside of the specified ref, excluding any optional exceptions.'
                }
              ]
            }
          ]
        },
        codeBlock: {
          codeString: codeStringHook.useOnClickOutside,
          filename: 'src/hooks/useOnClickOutside.tsx',
        },
        useCase: 'Ideal for managing UI components that need to be dismissed when a user interacts outside their boundaries, such as dropdown menus or modal dialogs.'
      })
    },
    {
      title: 'useTable',
      caption: generateCaptionListItemHook({
        description: 'This hook is for managing table data, columns, and settings in a React component, encapsulating logic related to data fetching and state management for tables.',
        list: {
          items: [
            {
              label: "Dependencies:",
              content: 'useEffect, useState from React.'
            },
            {
              label: "Parameters:",
              content: "initialColumn, initialData, and initialSetting"
            },
            {
              label: 'Returns:',
              content: 'An object containing setting, columns, setData, data, and handleOnChange.'
            },
            {
              label: 'Functionality:',
              content: '',
              childs: [
                {
                  label: 'Manages state for data and setting.',
                  content: ''
                },
                {
                  label: 'handleOnChange',
                  content: 'Fetches data (simulated with a timeout in this example) and updates state.'
                },
                {
                  label: 'Memoizes columns',
                  content: 'Prevents unnecessary re-renders.'
                }
              ]
            }
          ]
        },
        codeBlock: {
          filename: 'src/hooks/useTable.tsx',
          codeString: codeStringHook.useTable
        },
        useCase: 'Perfect for table components in a web application where managing and updating table data, pagination, and column definitions dynamically is required.'
      })
    }
  ];

  return (
    <Container gap={"small"}>
      <CardIntro
        title={'Hook'}
        subTitle={`The codebase you provided makes use of three custom hooks in React, each with specific functionality and use cases. Here's an overview of each hook and its general purpose:`}
      />
      <ProgressStep type="number" listStep={listHook} variant="vertical" />
    </Container>
  );
};

interface TParamsGenerateItemHook {
  description: string;
  list: {
    items: TItemList[]
  };
  codeBlock: {
    codeString: string;
    filename: string;
  };
  useCase: string;
}

const generateCaptionListItemHook = (params: TParamsGenerateItemHook) => <Container gap={"small"}>
  <p>{params?.description}</p>
  <List
    title={'Key Points'}
    {...params?.list}
  />
  <CodeBlock
    {...params?.codeBlock}
  />
  <Container gap={"tiny"}>
    <Badge label={"Use Case"} variant={"soft-warning"} />
    <p className="indent-6">{params?.useCase}</p>
  </Container>
</Container>

export default HookPage;