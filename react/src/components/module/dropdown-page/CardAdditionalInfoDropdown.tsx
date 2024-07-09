
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoDropdown = () => {
  const listAdditionalInfo = [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The `DropdownBase` component toggles the visibility of its dropdown menu when the button is clicked. It supports keyboard navigation for accessibility, allowing users to navigate through options using arrow keys and select an option with the Enter key.
        </p>
      )
    },
    {
      title: "Dependencies",
      caption: (
        <div className="flex flex-col gap-4">
          <p>The `DropdownBase` component relies on the following dependencies:</p>
          <ul>
            <li>- React Hooks (`useState`, `useRef`): For managing state (dropdown visibility and active index) and referencing DOM elements.</li>
            <li>- `useOnClickOutside` hook: Enables closing the dropdown when clicking outside of it, enhancing user experience.</li>
            <li>- Utility functions (`cn`, `clsx`): Used for conditional class name handling and combining class names for styling.</li>
            <li>- Icons: Imports icons like `IconMoreVertical` and `IconChevronToggle` for visual indicators and interactions within the dropdown.</li>
          </ul>
          <p>These dependencies ensure proper functionality, user interaction handling, and customizable styling options for the `DropdownBase` component.</p>
        </div>
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
      caption: `
        The component uses a custom hook, \`useOnClickOutside\`, to handle clicks outside the dropdown. 
        This hook ensures that the dropdown closes when a user clicks outside of it. 
        It takes an object with a \`ref\` to the dropdown container, \`refExceptions\` for elements that should not trigger the outside click event (like the dropdown button), and a \`handler\` function to execute when an outside click is detected.
      `
    },
    {
      title: "Keyboard Accessibility",
      caption: `
        The component supports keyboard interactions. 
        - Pressing \`Enter\` selects the currently highlighted option.
        - Pressing \`ArrowDown\` moves the highlight to the next option.
        - Pressing \`ArrowUp\` moves the highlight to the previous option.
        This behavior is managed in the \`handleKeyDown\` function, which stops the default behavior and propagation of key events, and updates the \`activeIndex\` accordingly.
      `
    },
    {
      title: "Custom Styling",
      caption: `
        The \`customeClass\` prop allows for custom CSS class names for the container and the button. 
        - \`containerDropdown\`: A custom class for the dropdown container.
        - \`btnDropdown\`: A custom class for the dropdown button.
        If \`isDefaultStyle\` is set to true, the default styles are applied. Users can override these styles by providing their own class names via the \`customeClass\` prop.
      `
    },
    {
      title: "Options Structure",
      caption: `
        Each option in the \`options\` array can have the following properties:
        - \`label\`: The text or content to be displayed for the option.
        - \`className\`: (Optional) Custom class name for the option.
        - \`title\`: (Optional) A title that can be displayed above the option.
        
        Example:
        \`\`\`javascript
        const options = [
          { label: "Option 1", className: "custom-class-1", title: "Group 1" },
          { label: "Option 2", className: "custom-class-2" },
        ];
        \`\`\`
      `
    },
    {
      title: "Header Prop",
      caption: `
        The \`header\` prop allows for adding a header or additional information at the top of the dropdown menu. 
        This can be any React node and is useful for providing context or additional options to the user.
        
        Example:
        \`\`\`javascript
        const header = <div className="header-content">Header Content</div>;
        \`\`\`
      `
    },

  ];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

export default CardAdditionalInfoDropdown;
