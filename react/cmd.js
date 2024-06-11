import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2]; // Get component name from command line arguments

if (!componentName) {
    console.error('Please provide a component name');
    process.exit(1);
}

const componentsPath = path.join(__dirname, 'src', 'components');
const pagesPath = path.join(__dirname, 'src', 'pages');
const modulePath = path.join(componentsPath, 'module', `${componentName.toLowerCase()}-page`);
const uiPath = path.join(componentsPath, 'ui');

const toPascalCase = (string) => string.replace(/(^\w|-\w)/g, clearAndUpper);
const clearAndUpper = (text) => text.replace(/-/, '').toUpperCase();

// Define the file templates
const pageTemplate = `
import ${componentName}Intro from "@components/module/${componentName.toLowerCase()}-page/${componentName}Intro";
import ${componentName}Props from "@components/module/${componentName.toLowerCase()}-page/${componentName}Props";
import ${componentName}Usage from "@components/module/${componentName.toLowerCase()}-page/${componentName}Usage";
import ${componentName}AdditionalInfo from "@components/module/${componentName.toLowerCase()}-page/${componentName}AdditionalInfo";

const ${componentName}Page = () => {
  return (
    <>
      <${componentName}Intro />
      <${componentName}Props />
      <${componentName}Usage />
      <${componentName}AdditionalInfo />
    </>
  );
}

export default ${componentName}Page;
`;

const introTemplate = `
import CardIntro from "@components/cards/CardIntro";
import ${componentName} from "@components/ui/${componentName}";

const ${componentName}Intro = () => {
  return (
    <CardIntro
      title={'${componentName}'}
      subTitle="Description of ${componentName}."
      DisplayComponent={<${componentName} />}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = \`// Code for ${componentName}\`;

export default ${componentName}Intro;
`;

const propsTemplate = `
import CardSubMenu from "@components/cards/CardSubMenu";
import List from "@components/ui/List";

const ${componentName}Props = () => {
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

export default ${componentName}Props;
`;

const usageTemplate = `
import CardSubMenu from '@components/cards/CardSubMenu';
import CodeBlock from '@components/ui/CodeBlock';

const ${componentName}Usage = () => {
  return (
    <CardSubMenu title="Usage">
      <p>Example usage of ${componentName}:</p>
      <CodeBlock codeString={displayUsage} />
    </CardSubMenu>
  );
}

const displayUsage = \`// Usage example for ${componentName}\`;

export default ${componentName}Usage;
`;

const additionalInfoTemplate = `
import CardSubMenu from "@components/cards/CardSubMenu";
import CodeBlock from "@components/ui/CodeBlock";
import ProgressStep from "@components/ui/ProgressStep";

const ${componentName}AdditionalInfo = () => {
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

export default ${componentName}AdditionalInfo;
`;

// Ensure the directories exist
fs.mkdirSync(pagesPath, { recursive: true });
fs.mkdirSync(modulePath, { recursive: true });

// Write the files
fs.writeFileSync(path.join(pagesPath, `${componentName}Page.tsx`), pageTemplate);
fs.writeFileSync(path.join(modulePath, `${componentName}Intro.tsx`), introTemplate);
fs.writeFileSync(path.join(modulePath, `${componentName}Props.tsx`), propsTemplate);
fs.writeFileSync(path.join(modulePath, `${componentName}Usage.tsx`), usageTemplate);
fs.writeFileSync(path.join(modulePath, `${componentName}AdditionalInfo.tsx`), additionalInfoTemplate);

console.log(`${componentName} component files generated successfully.`);
