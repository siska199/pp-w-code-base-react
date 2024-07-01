
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfoProgressStep = () => {
  const listAdditionalInfo =  [
    {
        title: "Icon for Completed Steps",
        caption: (
            <p>
                Completed steps are indicated by a checkmark icon. You can customize this icon by modifying the <code>IconCheckPS</code> component located within the main component code.
                To change the appearance of the checkmark icon, adjust the SVG path or attributes within the <code>IconCheckPS</code> component.
            </p>
        )
    },
    {
        title: "Supported Variants and Types",
        caption: (
            <div>
                    The component supports different variants and types:
                <List
                  items={[
                    {
                      label:'variant',
                      content:<>Controls the layout orientation of the progress steps. It can be set to <code>&rdquo;horizontal&rdquo;</code> (default) or <code>&rdquo;vertical&rdquo;</code>.</>
                    },
                    {
                      label:'type',
                      content:<>Defines the visual style of each step item. Supported values include <code>&rdquo;number&rdquo;</code>, <code>&rdquo;default&rdquo;</code> (generic styling), and <code>&rdquo;timeline&rdquo;</code>.</>
                    },
                    {
                      label:'shapeItem',
                      content:<>Specifies the shape of the step indicator. Options are <code>&rdquo;rounded&rdquo;</code> (default) and <code>&rdquo;circle&rdquo;</code>.</>
                    }
                  ]}
                />
            </div>
        )
    }
];


  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}


export default CardAdditionalInfoProgressStep;
