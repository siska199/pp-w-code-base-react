/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const componentName = process.argv[2]; // Get component name from command line arguments

if (!componentName) {
  console.error('Please provide a component name');
  process.exit(1);
}

const componentsPath = path.join(dirname, 'src', 'components');
const pagesDocsComponentsPath = path.join(dirname, 'src', 'pages', 'docs', 'components'); // Adjusted path
const modulePath = path.join(componentsPath, 'module', `${componentName.toLowerCase()}-page`);


// Define the file templates
const pageTemplate = `
import CardIntro${componentName} from "@components/module/${componentName.toLowerCase()}-page/CardIntro${componentName}";
import CardProps${componentName} from "@components/module/${componentName.toLowerCase()}-page/CardProps${componentName}";
import CardUsage${componentName} from "@components/module/${componentName.toLowerCase()}-page/CardUsage${componentName}";
import CardAdditionalInfo${componentName} from "@components/module/${componentName.toLowerCase()}-page/CardAdditionalInfo${componentName}";

const ${componentName}Page = () => {
  return (
    <>
      <CardIntro${componentName} />
      <CardProps${componentName} />
      <CardUsage${componentName} />
      <CardAdditionalInfo${componentName} />
    </>
  );
}

export default ${componentName}Page;
`;

const introTemplate = `
import CardIntroComponent from "@components/cards/CardIntroComponent";
import ${componentName} from "@components/ui/${componentName}";

const CardIntro${componentName} = () => {

    const listExample = [
    {
      component: ""
    },

  ]
  return (
    <CardIntroComponent
      title={'${componentName}'}
      subTitle="Description of ${componentName}."
      listExample={listExample }
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = \`// Code for ${componentName}\`;

export default CardIntro${componentName};
`;

const propsTemplate = `
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const CardProps${componentName} = () => {
  const listItem = [
    {
      label: "prop1",
      content: "Description of prop1"
    },
    {
      label: "prop2",
      content: "Description of prop2"
    }
  ];

  return (
    <CardSubMenu title={'Props'}>
      <List items={listItem} />
    </CardSubMenu>
  );
}

export default CardProps${componentName};
`;

const usageTemplate = `
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';
import { generateDisplayComponent } from '@lib/utils/helper';

const CardUsage${componentName} = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of ${componentName}:</p>
      <CodeBlock codeString={generateDisplayComponent('${componentName}', displayUsage)} />
    </CardSubMenu>
  );
}

const displayUsage = \`// Usage example for ${componentName}\`;

export default CardUsage${componentName};
`;

const additionalInfoTemplate = `
import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";

const CardAdditionalInfo${componentName} = () => {
  const listAdditionalInfo = [
    {
      title: "Additional Info 1",
      caption: ""
    },
    {
      title: "Additional Info 2",
      caption: ""
    },
    etc
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

const info1 = \`// Additional info 1\`;
const info2 = \`// Additional info 2\`;

export default CardAdditionalInfo${componentName};
`;

export const updateRouterFile = (parentRoute, filePath) => {
  const routerPath = path.resolve(dirname, 'src/lib/router/index.tsx');
  const relativePath = filePath.replace('src/', '');
  const pageName = path.basename(filePath).replace(/^\w/, (c) => c.toUpperCase());
  const importPath = relativePath.replace(/\//g, '/').replace('pages/', '@pages/');

  // Read the router file
  let routerFileContent = fs.readFileSync(routerPath, 'utf8');

  // Create import statement
  const importStatement = `import ${pageName}Page from '${importPath}Page';\n`;

  // Check if the import already exists
  if (!routerFileContent.includes(importStatement)) {
    routerFileContent = routerFileContent.replace(
      'import { createBrowserRouter } from "react-router-dom";',
      `${importStatement}import { createBrowserRouter } from "react-router-dom";`
    );
  }

  // Generate the new route
  const newRoute = `
              {
                  path: '${pageName.toLowerCase()}',
                  element: <${pageName}Page />,
                  handle: {
                      id: '1-${pageName.toUpperCase()}'
                  }
              },
`;

  // Check if the parent route exists and add the new route as a child
  const parentRouteRegex = new RegExp(`(path: '${parentRoute}',[\\s\\S]*?children: \\[)([\\s\\S]*?)(\\])`, 'm');
  if (parentRouteRegex.test(routerFileContent)) {
    routerFileContent = routerFileContent.replace(
      parentRouteRegex,
      (match, p1, p2, p3) => `${p1}${p2}${newRoute}${p3}`
    );
  } else {
    console.error(`Parent path '${parentRoute}' not found in router configuration.`);
    return;
  }

  // Write the updated router file
  fs.writeFileSync(routerPath, routerFileContent, 'utf8');
  console.log(`Updated router file at ${routerPath}`);
};
updateRouterFile('components', `pages/docs/components/${componentName}`)

// Ensure the directories exist
fs.mkdirSync(pagesDocsComponentsPath, { recursive: true });
fs.mkdirSync(modulePath, { recursive: true });

// Write the files
fs.writeFileSync(path.join(pagesDocsComponentsPath, `${componentName}Page.tsx`), pageTemplate);
fs.writeFileSync(path.join(modulePath, `CardIntro${componentName}.tsx`), introTemplate);
fs.writeFileSync(path.join(modulePath, `CardProps${componentName}.tsx`), propsTemplate);
fs.writeFileSync(path.join(modulePath, `CardUsage${componentName}.tsx`), usageTemplate);
fs.writeFileSync(path.join(modulePath, `CardAdditionalInfo${componentName}.tsx`), additionalInfoTemplate);

// Read the existing content of index.tsx

// How to run this script:
// node g-menu-component-ui.js <ComponentName>

