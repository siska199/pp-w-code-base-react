/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const route = process.argv[2]; // Get the route from command line arguments
const componentName = process.argv[3]; // Get the component name from command line arguments

if (!route || !componentName) {
  console.error('Please provide both the route and component name');
  process.exit(1);
}

// Convert the first letter of componentName to lowercase for the variant name
const variantName = componentName.charAt(0).toLowerCase() + componentName.slice(1) + 'Variants';

const componentsPath = path.join(dirname, route);

const componentTemplate = `
import { cn } from "@lib/utils/helper";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";

interface TProps extends HTMLProps<HTMLDivElement>, VariantProps<typeof ${variantName}> {
}

const ${componentName} = (props: TProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={cn(${variantName}({ className }))}
            {...otherProps}
        >
            {/* Add your component implementation here */}
        </div>
    )
}

const ${variantName} = cva(
    '',
    {
        variants: {
            variant: {
                // Define your variants here
            },
            // Add more variant options here
        },
        compoundVariants: [
            // Define compound variants here
        ],
        defaultVariants: {
            // Define default variants here
        }
    }
)

export default ${componentName};
`;

// Ensure the directory exists
fs.mkdirSync(componentsPath, { recursive: true });

// Write the component file
fs.writeFileSync(path.join(componentsPath, `${componentName}.tsx`), componentTemplate);

console.log(`Component ${componentName} has been created at ${componentsPath}`);


// How to run this script:
// node g-component.js <path example src/components/ui> <ComponentName>