
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoDropdown = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The DropdownBase component toggles the visibility of its dropdown menu when the button is clicked. It supports keyboard navigation for accessibility, allowing users to navigate through options using arrow keys and select an option with the Enter key.
        </p>
      )
    },
    {
      title: "Dependencies",
      caption: (
        <p>The Alert component relies on several dependencies and utility
          functions imported from external sources (
          <Filename name="IconMoreVertical" to="/docs/prerequisite/icon?name=IconMoreVertical" />,
          <Filename name="IconChevronToggle" to="/docs/prerequisite/helper-component?id=IconChevronToggle.tsx" />,
          <Filename name="useOnClickOutside" to="/docs/prerequisite/hook?id=useOnClickOutside" />,
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />,
          <Filename name="TOption" to="/docs/prerequisite/types" />,
          <Filename name="useRef" importFrom="react" />, and
          <Filename name="useState" importFrom="react" />). Ensure these
          dependencies are properly installed and imported for the component to
          function correctly.
        </p>
      )
    },
    {
      title: "Variants",
      caption: <div className="flex flex-col gap-4">
        <p>Each variant of the DropdownBase component demonstrates different configurations and features:</p>
        <List
          items={[
            {
              label: "Default",
              content: "Basic dropdown without additional features. No additional props needed."
            },
            {
              label: "Dividers",
              content: (
                <>
                  This variant adds dividers between groups of options within the dropdown menu. To implement this:
                  <div className="inline ">
                    <ul className="">
                      <li>- Use the className property in the options array to add specific CSS classes that define the styling for the dividers.</li>
                      <li>- Typically, you would add a bottom border (border-b) or other styling to visually separate different sections of options.</li>
                    </ul>
                  </div>
                </>
              )
            },
            {
              label: "Title",
              content: (
                <>
                  This variant allows displaying titles above groups of options in the dropdown menu. To implement this:
                  <div className="inline ">
                    <ul className="">
                      <li>- Include the title property in specific options of the options array.</li>
                      <li>- The title property should be a string or a React node that represents the title for that group of options.</li>
                    </ul>
                  </div>
                </>
              )
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

                </>
              )
            },
            {
              label: "Button Trigger",
              content: (
                <div className="inline ">
                  <p>This variant adds a trigger button to open the dropdown on click. To implement this:</p>
                  <ul className="">
                    <li>- Set the withButtonTriger prop to true in the DropdownBase component.</li>
                  </ul>
                </div>
              )
            }
          ]}
        />
        <p>
          Users can select the appropriate variant based on their specific requirements and customize further using props like `customeClass` and`header`.
        </p >
      </div >
    },
    {
      title: "Handling Click Outside",
      caption: <p>
        The component uses a custom hook, &apos;useOnClickOutside&apos;, to handle clicks outside the dropdown.
        This hook ensures that the dropdown closes when a user clicks outside of it.
        It takes an object with a &apos;ref&apos; to the dropdown container, &apos;refExceptions&apos; for elements that should not trigger the outside click event (like the dropdown button), and a &apos;handler&apos; function to execute when an outside click is detected.
      </p>
    },
    {
      title: "Keyboard Accessibility",
      caption: <div>
        The component supports keyboard interactions:
        <List
          items={[
            {
              content: 'Pressing \'Enter\' selects the currently highlighted option'
            },
            {
              content: 'Pressing \'ArrowDown\' moves the highlight to the next option.'
            },
            {
              content: ' Pressing \'ArrowUp\' moves the highlight to the previous option'
            }
          ]}
        />

        This behavior is managed in the &rsquo;handleKeyDown&rsquo; function, which stops the default behavior and propagation of key events, and updates the &rsquo;activeIndex&rsquo; accordingly.
      </div>
    },
  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoDropdown;
