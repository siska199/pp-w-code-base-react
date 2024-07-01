import Badge from "@components/ui/Badge";
import Button from "@components/ui/Button";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";

const LibraryPage = () => {
  const listLibrary = [
    {
      title: 'Create your react project using vite',
      caption: <CodeBlock codeString={'npm create vite@latest'} />
    },
    {
      title: <>Install tailwind library, you can see the step in <Button label="here"  to={"https://tailwindcss.com/docs/guides/create-react-app"} target="_blank" /></>,
      caption: <Container gap="small">
        <p>Some file we need to configure while using tailwind: </p>
        <List
          items={[
            {
              label: "tailwind.config.js :",
              content: <>For tailwind configuration that we use for create some component you can see in  <Button label="here" to={"http://localhost:5173/docs/prerequisite/tailwind-config"} target="_blank" /></>
            },
            {
              label: "css file:",
              content: <>CSS file that we use  for create some component you can see in  <Button label="here" to={"http://localhost:5173/docs/prerequisite/css-file"} target="_blank" /></>
            },
          ]}
        />
      </Container>
    },
    {
      title: <>Install this below library because mostly component that created using <Button label="cva" to={"https://cva.style/docs/getting-started/installation"} target="_blank" /></>,
      caption: <>
        <CodeBlock codeString={`npm i class-variance-authority\r\nnpm i clsx\r\nnpm i tailwind-merge`} />
        <p>Make sure also you have <Badge label={'cn'} variant={"soft-gray"} /> function, you can see  the function <Button label="here"  to={"http://localhost:5173/docs/prerequisite/helper-function"} target="_blank" /></p>
      </>
    },
    {
      title: 'Install vite-tsconfig-paths for create absolute path',
      caption: <Container gap={"small"}>
        <CodeBlock codeString={'npm i vite-tsconfig-paths'} />

        <p>then, add <span className="italic">tsconfigPaths()</span> object plugins in file <Badge  label={'vite.config.js'} variant={"soft-gray"} /> </p>
        <CodeBlock fileName="vite.config.ts" codeString={`...\r\nplugins: [..., tsconfigPaths()],\r\n...`} />

        <p>last, add this below code in object compilerOptions in file <Badge label={'tsconfig.json'} variant={"soft-gray"} /> </p>
        <CodeBlock fileName="tsconfig.json" codeString={`...\r\n"baseUrl": "./src",\r\n"paths" : {\r\n    "@*": ["./*"],\r\n},\r\n...`} />

      </Container>
    },
    {
      title: 'Install vite-plugin-svgr plugin for easily using svg icon so you can dynamically change the color of svg icon without downloading the different color of the same icon',
      caption: <Container gap={"small"}>
        <CodeBlock codeString={'npm i vite-plugin-svgr'} />
        <p>then, add <span className="italic">svgr()</span> object plugins in file <Badge label={'vite.config.js'} variant={"soft-gray"} /> </p>
        <CodeBlock fileName="vite.config.ts" codeString={`...\r\nplugins: [..., svgr(),]\r\n...`} />
        <p>last, add this css in file <Badge label={'index.css'} variant={"soft-gray"} />. For icon with type outline you can dynamically change the color using class that have format <span className="italic">icon-[type]</span>, meanwhile
          while you want to dynamically change icon contained you can use class that have format <span className="italic">icon-[type]-fill</span></p>
        <CodeBlock fileName="styles/index.css" codeString={`.icon-white path { @apply stroke-white }\r\n.icon-white-fill path { @apply fill-white  }\r\n\r\n.icon-black path { @apply stroke-black }\r\n.icon-black-fill path { @apply fill-black  }\r\n\r\n.icon-gray path { @apply stroke-gray }\r\n.icon-gray-fill path { @apply fill-gray }\r\n\r\n.icon-primary path { @apply stroke-primary }\r\n.icon-primary-fill path { @apply fill-primary  }\r\n\r\n.icon-error path { @apply stroke-error }\r\n.icon-error-fill path {  @apply fill-error }\r\n\r\n.icon-warning path { @apply stroke-warning}\r\n.icon-warning-fill path { @apply fill-warning }\r\n\r\n.icon-success path { @apply  stroke-success}\r\n.icon-success-fill path { @apply  fill-success }`} />
        <p>Example usage:</p>
        <CodeBlock fileName="example.tsx" codeString={`import as IconCalender from '@assets/icons/calender.svg?react';\r\n...\r\n<IconCalender className='icon-primary'/>\r\n...`} />
      </Container>
    },
    {
      title: 'Install react-date-picker library for creating component InputDate',
      caption: <CodeBlock codeString={'npm i react-datepicker'} />
    },
    {
      title: 'Install react-syntax-highlighter library for creating CodeBlock component',
      caption: <CodeBlock codeString={'npm i react-syntax-highlighter'} />
    }
  ]
  return (
    <>
      <h4 className="font-bold">Library Installed</h4>
      <ProgressStep type="number" listStep={listLibrary} variant="vertical" />
    </>

  );
};

export default LibraryPage;