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
import Card${componentName}Intro from "@components/module/${componentName.toLowerCase()}-page/Card${componentName}Intro";
import Card${componentName}Props from "@components/module/${componentName.toLowerCase()}-page/Card${componentName}Props";
import Card${componentName}Usage from "@components/module/${componentName.toLowerCase()}-page/Card${componentName}Usage";
import Card${componentName}AdditionalInfo from "@components/module/${componentName.toLowerCase()}-page/Card${componentName}AdditionalInfo";

const ${componentName}Page = () => {
  return (
    <>
      <Card${componentName}Intro />
      <Card${componentName}Props />
      <Card${componentName}Usage />
      <Card${componentName}AdditionalInfo />
    </>
  );
}

export default ${componentName}Page;
`;

const introTemplate = `
import CardIntroComponent from "@components/cards/CardIntroComponent";
import ${componentName} from "@components/ui/${componentName}";

const Card${componentName}Intro = () => {
  return (
    <CardIntroComponent
      title={'${componentName}'}
      subTitle="Description of ${componentName}."
      DisplayComponent={<${componentName} />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = \`// Code for ${componentName}\`;

export default Card${componentName}Intro;
`;

const propsTemplate = `
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const Card${componentName}Props = () => {
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

export default Card${componentName}Props;
`;

const usageTemplate = `
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const Card${componentName}Usage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of ${componentName}:</p>
      <CodeBlock codeString={displayUsage} />
    </CardSubMenu>
  );
}

const displayUsage = \`// Usage example for ${componentName}\`;

export default Card${componentName}Usage;
`;

const additionalInfoTemplate = `
import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";

const Card${componentName}AdditionalInfo = () => {
  const listAdditionalInfo = [
    {
      title: "Additional Info 1",
      caption: <CodeBlock codeString={info1} />
    },
    {
      title: "Additional Info 2",
      caption: <CodeBlock codeString={info2} />
    }
  ];

  return (
    <CardSubMenu title={'Additional Info'}>
      <ProgressStep type="number" listStep={listAdditionalInfo} variant="vertical" />
    </CardSubMenu>
  );
}

const info1 = \`// Additional info 1\`;
const info2 = \`// Additional info 2\`;

export default Card${componentName}AdditionalInfo;
`;

// Ensure the directories exist
fs.mkdirSync(pagesDocsComponentsPath, { recursive: true });
fs.mkdirSync(modulePath, { recursive: true });

// Write the files
fs.writeFileSync(path.join(pagesDocsComponentsPath, `${componentName}Page.tsx`), pageTemplate);
fs.writeFileSync(path.join(modulePath, `Card${componentName}IntroComponent.tsx`), introTemplate);
fs.writeFileSync(path.join(modulePath, `Card${componentName}Props.tsx`), propsTemplate);
fs.writeFileSync(path.join(modulePath, `Card${componentName}Usage.tsx`), usageTemplate);
fs.writeFileSync(path.join(modulePath, `Card${componentName}AdditionalInfo.tsx`), additionalInfoTemplate);

// Read the existing content of index.tsx

// How to run this script: 

