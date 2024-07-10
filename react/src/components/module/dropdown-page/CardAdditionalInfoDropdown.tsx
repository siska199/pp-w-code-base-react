import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import List from "@components/ui/List";
import LabelWithModal from "@components/ui/modal/LabelWithModal";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoDropdown = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: <p>The DropdownBase component toggles the visibility of its dropdown menu when the button is clicked. It supports keyboard navigation for accessibility, allowing users to navigate through options using arrow keys and select an option with the Enter key.</p>,
    },
    {
      title: "Dependencies",
      caption: (
        <p>
          The Alert component relies on several dependencies and utility functions imported from external sources (
          <Filename name="IconMoreVertical" to="/docs/prerequisite/icon?name=IconMoreVertical" />,
          <Filename name="IconChevronToggle" to="/docs/prerequisite/helper-component?id=IconChevronToggle.tsx" />,
          <Filename name="useOnClickOutside" to="/docs/prerequisite/hook?id=useOnClickOutside" />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="TOption" to="/docs/prerequisite/types" />,
          <Filename name="useRef" importFrom="react" />, and
          <Filename name="useState" importFrom="react" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </p>
      ),
    },
    {
      title: "Variants",
      caption: (
        <div className="flex flex-col gap-4">
          <p>Each variant of the DropdownBase component demonstrates different configurations and features:</p>
          <List
            items={[
              {
                label: "Default",
                content: "Basic dropdown without additional features. No additional props needed.",
              },
              {
                label: <>Dividers</>,
                content: (
                  <>
                    This variant adds dividers between groups of options within the dropdown menu. To implement this:
                    <div className="inline ">
                      <ul className="">
                        <li>- Use the className property in the options array to add specific CSS classes that define the styling for the dividers.</li>
                        <li>- Typically, you would add a bottom border (border-b) or other styling to visually separate different sections of options.</li>
                      </ul>
                    </div>
                    Example code to acieve this dropdown you can see{" "}
                    <LabelWithModal
                      label={"here"}
                      content={
                        <CodeBlock
                          customeStyle={{
                            pre: { maxHeight: "auto" },
                          }}
                          codeString={
                            "const listOptionDivider = [\r\n  {\r\n    label: <> Newsletter <Badge label={2} size={'small'} variant={'solid-primary'} shape={'circle'} /></>,\r\n    value: 'Siska',\r\n    className: 'justify-between'\r\n  },\r\n  {\r\n    label: 'Purchase',\r\n    value: 'Siska'\r\n  },\r\n  {\r\n    label: <>Download <Badge size={'small'} label={2} variant={'solid-white'} shape={'circle'} /></>,\r\n    value: 'Siska',\r\n    className: 'justify-between'\r\n  },\r\n  {\r\n    label: 'Team Account',\r\n    className: 'border-b py-3',\r\n    value: 'Siska'\r\n  },\r\n  {\r\n    label: <>Upgrade License <Badge size={'small'} label='Pro' variant={'soft-primary'} /> </>,\r\n    className: 'border-b py-3',\r\n    value: 'Siska'\r\n  },\r\n  {\r\n    label: <><IconSetting />Account Settings</>,\r\n    value: 'Siska'\r\n  },\r\n  {\r\n    label: <><IconLogout />Sign Out</>,\r\n    value: 'Siska',\r\n    className: 'text-error'\r\n  }\r\n];\r\n\r\nconst handleOnClick = (data: TOptionDropdown) => {\r\n  console.log('name: ', data);\r\n};\r\n\r\n<DropdownBase\r\n  label={'Action'}\r\n  options={listOptionDivider}\r\n  onClick={handleOnClick}\r\n/>\r\n"
                          }
                        />
                      }
                    />
                  </>
                ),
              },
              {
                label: <>Title</>,
                content: (
                  <>
                    This variant allows displaying titles above groups of options in the dropdown menu. To implement this:
                    <div className="inline ">
                      <ul className="">
                        <li>- Include the title property in specific options of the options array.</li>
                        <li>- The title property should be a string or a React node that represents the title for that group of options.</li>
                      </ul>
                    </div>
                    Example code to acieve this dropdown you can see{" "}
                    <LabelWithModal
                      label={"here"}
                      content={
                        <CodeBlock
                          codeString={
                            "const listOptionTitle = [\r\n  {\r\n    title: 'Setting',\r\n    label: <><IconNotification /> Newsletter</>,\r\n    value: 'Siska',\r\n  },\r\n  {\r\n    label: <><IconReceipt />Purchase</>,\r\n    value: 'Siska',\r\n  },\r\n  {\r\n    label: <><IconDownload /> Download</>,\r\n    value: 'Siska',\r\n    className: '',\r\n  },\r\n  {\r\n    label: <><IconUsers />Team Account</>,\r\n    value: 'Siska',\r\n    className: 'border-b',\r\n  },\r\n  {\r\n    title: 'Contact',\r\n    label: <>Contact Support</>,\r\n    value: 'Siska',\r\n    className: '',\r\n  },\r\n];\r\n\r\nconst handleOnClick = (data: TOptionDropdown) => {\r\n  console.log('name: ', data);\r\n};\r\n\r\n<DropdownBase\r\n  label={'Action'}\r\n  options={listOptionDivider}\r\n  onClick={handleOnClick}\r\n/>\r\n"
                          }
                        />
                      }
                    />
                  </>
                ),
              },
              {
                label: "Header",
                content: (
                  <>
                    This variant allows integrating a custom header component at the top of the dropdown menu. To implement this:
                    <div className="inline ">
                      <ul className="">
                        <li>- Use the header prop in the DropdownBase component to pass a React node representing the custom header.</li>
                        <li>- The header component can include any content such as images, text, or additional controls to provide context or enhance the dropdown&apos;s functionality.</li>
                      </ul>
                    </div>
                    Example code to acieve this dropdown you can see{" "}
                    <LabelWithModal
                      label={"here"}
                      content={
                        <CodeBlock
                          customeStyle={{
                            pre: { maxHeight: "auto" },
                          }}
                          codeString={
                            "const listOption = [\r\n  {\r\n    label: 'Newsletter', value: 'Siska'\r\n  },\r\n  {\r\n    label: 'Purchase', value: 'Siska'\r\n  },\r\n  {\r\n    label: 'Downloads', value: 'Siska'\r\n  },\r\n  {\r\n    label: 'Team Account', value: 'Siska'\r\n  }\r\n];\r\n\r\nconst handleOnClick = (data: TOptionDropdown) => {\r\n  console.log('name: ', data);\r\n};\r\n\r\n<DropdownBase\r\n  label={'Action'}\r\n  options={listOption}\r\n  onClick={handleOnClick}\r\n  header={<div className='flex gap-2 items-center w-full '>\r\n    <Image className=' rounded-full w-[2rem] h-[2rem]  border-gray-300' src={'https://i.pinimg.com/564x/d6/b0/b6/d6b0b67ba61773c5f163111ede88740a.jpg'} />\r\n    <div className='flex flex-col flex-grow '>\r\n      <p className=''>Sign in as</p>\r\n      <p className='text-black'>James site</p>\r\n    </div>\r\n  </div>}\r\n/>\r\n"
                          }
                        />
                      }
                    />
                  </>
                ),
              },
              {
                label: "Button Trigger",
                content: (
                  <>
                    <div className="inline ">
                      <p>This variant adds a trigger button to open the dropdown on click. To implement this:</p>
                      <ul className="">
                        <li>- Set the withButtonTriger prop to true in the DropdownBase component.</li>
                      </ul>
                    </div>
                    Example code to acieve this dropdown you can see{" "}
                    <LabelWithModal
                      label={"here"}
                      content={
                        <CodeBlock
                          customeStyle={{
                            pre: { maxHeight: "auto" },
                          }}
                          codeString={
                            "const listOption = [\r\n  {\r\n    label: 'Newsletter', value: 'Siska'\r\n  },\r\n  {\r\n    label: 'Purchase', value: 'Siska'\r\n  },\r\n  {\r\n    label: 'Downloads', value: 'Siska'\r\n  },\r\n  {\r\n    label: 'Team Account', value: 'Siska'\r\n  }\r\n];\r\n\r\nconst handleOnClick = (data: TOptionDropdown) => {\r\n  console.log('name: ', data);\r\n};\r\n\r\n<DropdownBase\r\n  withButtonTriger={true}\r\n  isDefaultStyle={false}\r\n  options={listOption}\r\n  onClick={handleOnClick}\r\n/>\r\n"
                          }
                        />
                      }
                    />
                  </>
                ),
              },
            ]}
          />
          <p>Users can select the appropriate variant based on their specific requirements and customize further using props like `customeClass` and`header`.</p>
        </div>
      ),
    },
    {
      title: "Handling Click Outside",
      caption: (
        <p>
          The component uses a custom hook, &apos;useOnClickOutside&apos;, to handle clicks outside the dropdown. This hook ensures that the dropdown closes when a user clicks outside of it. It takes an object with a &apos;ref&apos; to the dropdown container, &apos;refExceptions&apos; for elements
          that should not trigger the outside click event (like the dropdown button), and a &apos;handler&apos; function to execute when an outside click is detected.
        </p>
      ),
    },
    {
      title: "Keyboard Accessibility",
      caption: (
        <div>
          The component supports keyboard interactions:
          <List
            items={[
              {
                content: "Pressing 'Enter' selects the currently highlighted option",
              },
              {
                content: "Pressing 'ArrowDown' moves the highlight to the next option.",
              },
              {
                content: " Pressing 'ArrowUp' moves the highlight to the previous option",
              },
            ]}
          />
          This behavior is managed in the &rsquo;handleKeyDown&rsquo; function, which stops the default behavior and propagation of key events, and updates the &rsquo;activeIndex&rsquo; accordingly.
        </div>
      ),
    },
  ];

  return (
    <CardSubMenu title={"Additional Info"}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
};

export default CardAdditionalInfoDropdown;
