
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";

const CardAdditionalInfoProgressStep = () => {
  const listAdditionalInfo =  [
    {
      title: "Default Behavior",
      caption: (
        <p>
          The component renders a list of steps (&apos;listStep&apos;), where each step displays a title and optionally a caption. Steps can be oriented horizontally or vertically (&apos;variant&apos;), with customizable styles for step indicators (&apos;type&apos;) and shapes (&apos;shapeItem&apos;).
          Completed steps are marked with a checkmark icon by default. Users can define custom CSS classes (&apos;customeClass&apos;) to further personalize the component&apos;s appearance.
        </p>
      )
    },
    {
      title: "Dependencies",
      caption: (
        <div>
          The Alert component relies on several dependencies and utility functions imported from external sources (
          <Filename name="cn" to="/docs/prerequisite/helper-function?id=cn" />
          ). Ensure these dependencies are properly installed and imported for the component to function correctly.
        </div>
      ),
    },
    {
      title: "Supported Variants and Types",
      caption: (
        <div>
          The component supports different variants and types:
          <List
            items={[
              {
                label: 'variant',
                content: <>Controls the layout orientation of the progress steps. It can be set to <code>&rdquo;horizontal&rdquo;</code> (default) or <code>&rdquo;vertical&rdquo;</code>.</>
              },
              {
                label: 'type',
                content: <>Defines the visual style of each step item. Supported values include <code>&rdquo;number&rdquo;</code>, <code>&rdquo;default&rdquo;</code> (generic styling), and <code>&rdquo;dot&rdquo;</code>.</>
              },
              {
                label: 'shapeItem',
                content: <>Specifies the shape of the step indicator. Options are <code>&rdquo;rounded&rdquo;</code> (default) and <code>&rdquo;circle&rdquo;</code>.</>
              }
            ]}
          />
        </div>
      )
    },
];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoProgressStep;
