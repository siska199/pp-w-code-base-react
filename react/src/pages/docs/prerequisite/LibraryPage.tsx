import Badge from "@components/ui/Badge";
import Button from "@components/ui/Button";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";
import Filename from "@components/ui/text/Filename";
import Here from "@components/ui/text/Here";

const LibraryPage = () => {
  const listLibrary = [
    {
      title: "Create your react project using vite",
      caption: <CodeBlock codeString={"npm create vite@latest"} />,
    },
    {
      title: (
        <>
          Install tailwind library, you can see the step in <Here to={"https://tailwindcss.com/docs/guides/create-react-app"} />
        </>
      ),
      caption: (
        <Container gap="small">
          <p>Some file we need to configure while using tailwind: </p>
          <List
            items={[
              {
                label: "tailwind.config.js :",
                content: (
                  <>
                    For tailwind configuration that we use for create some component you can see in <Here to={"http://localhost:5173/docs/prerequisite/tailwind-config"} />
                  </>
                ),
              },
              {
                label: "css file:",
                content: (
                  <>
                    CSS file that we use for create some component you can see in <Here to={"http://localhost:5173/docs/prerequisite/css-file"} />
                  </>
                ),
              },
            ]}
          />
        </Container>
      ),
    },
    {
      title: (
        <>
          Install this below library because mostly component that created using <Button label="cva" to={"https://cva.style/docs/getting-started/installation"} />
        </>
      ),
      caption: (
        <>
          <CodeBlock codeString={`npm i class-variance-authority\r\nnpm i clsx\r\nnpm i tailwind-merge`} />
          <p>
            Make sure also you have <Badge label={"cn"} variant={"soft-gray"} /> function, you can see the function <Here to={"http://localhost:5173/docs/prerequisite/helper-function"} />
          </p>
        </>
      ),
    },
    {
      title: "Install vite-tsconfig-paths for create absolute path",
      caption: (
        <Container gap={"small"}>
          <CodeBlock codeString={"npm i vite-tsconfig-paths"} />
          <p>
            then, add <span className="italic">tsconfigPaths()</span> object plugins in file <Filename name="vite.config.js" />{" "}
          </p>
          <CodeBlock fileName="vite.config.ts" codeString={`...\r\nplugins: [..., tsconfigPaths()],\r\n...`} />
          <p>
            last, add this below code in object compilerOptions in file <Filename name="tsconfig.json" />{" "}
          </p>
          <CodeBlock fileName="tsconfig.json" codeString={`...\r\n"baseUrl": "./src",\r\n"paths" : {\r\n    "@*": ["./*"],\r\n},\r\n...`} />
        </Container>
      ),
    },
    {
      title: "Install vite-plugin-svgr plugin for easily using svg icon so you can dynamically change the color of svg icon without downloading the different color of the same icon",
      caption: (
        <Container gap={"small"}>
          <CodeBlock codeString={"npm i vite-plugin-svgr"} />
          <p>
            add <span className="italic">svgr()</span> object plugins in file <Filename name="vite.config.js" />.{" "}
          </p>
          <CodeBlock fileName="vite.config.ts" codeString={`...\r\nplugins: [..., svgr(),]\r\n...`} />
          <p>
            then, add below code in file <Filename name="vite-env.d.ts" />.{" "}
          </p>
          <CodeBlock fileName="vite.config.ts" codeString={`...\r\n/// <reference types="vite-plugin-svgr/client" />\r\n...`} />
          <p>
            last, add this css in file <Filename name="index.css" />. For icon with type outline you can dynamically change the color using class that have format <span className="italic">icon-[type]</span>, meanwhile while you want to dynamically change icon contained you can use class that have
            format <span className="italic">icon-[type]-fill.</span> Here, type refers to color examples such as white, black, red, warning, success, or primary
          </p>
          <CodeBlock
            fileName="styles/index.css"
            codeString={`.icon-white path, .icon-white rect, .icon-white circle { @apply !stroke-white }\n\r.icon-white-fill path { @apply fill-white }\n\r.icon-black path, .icon-black rect { @apply stroke-black }\n\r.icon-black-fill path { @apply fill-black }\n\r.icon-gray path, .icon-gray rect { @apply stroke-gray }\n\r.icon-gray-fill path { @apply fill-gray }\n\r.icon-primary path, .icon-primary rect { @apply stroke-primary }\n\r.icon-primary-fill path { @apply fill-primary }\n\r.icon-error path, .icon-error rect { @apply stroke-error }\n\r.icon-error-fill path { @apply fill-error }\n\r.icon-warning path, .icon-warning rect { @apply !stroke-warning}\n\r.icon-warning-fill path { @apply fill-warning }\n\r.icon-success path, .icon-success rect { @apply stroke-success}\n\r.icon-success-fill path { @apply fill-success }`}
          />
          <p>Example usage:</p>
          <CodeBlock fileName="example.tsx" codeString={`import as IconCalender from '@assets/icons/calender.svg?react';\r\n...\r\n<IconCalender className='icon-primary'/>\r\n...`} />
        </Container>
      ),
    },
    {
      title: "Install react-date-picker library for creating component InputDate",
      caption: <CodeBlock codeString={"npm i react-datepicker"} />,
    },
    {
      title: "Install react-syntax-highlighter library for creating CodeBlock component",
      caption: <CodeBlock codeString={"npm i react-syntax-highlighter"} />,
    },
  ];
  return (
    <>
      <h4 className="font-bold">Library Installed</h4>
      <ProgressStep type="number" listStep={listLibrary} variant="vertical" />
    </>
  );
};

export default LibraryPage;
