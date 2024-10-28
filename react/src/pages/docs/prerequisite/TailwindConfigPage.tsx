import CardIntro from "@components/cards/CardIntro";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";
import Filename from "@components/ui/text/Filename";
import codeStringTailwindConfig from "@lib/utils/code-string/tailwind-config";

const TailwindConfigPage = () => {
  return (
    <Container gap={"base"}>
      <CardIntro
        title={'Tailwind config file'}
        subTitle={<>
          This Tailwind CSS configuration file <Filename name="(tailwind.config.js)"/> enhances the default Tailwind CSS theme with custom font weights, sizes, spacing utilities, and extended styles like new fonts, box shadows, and color palette modifications. It also specifies where Tailwind CSS should look for class definitions within the project files. These customizations enable consistent and flexible styling throughout the application, tailored to specific design requirements and preferences.
        </>}
      />
      <CodeBlock
        fileName="tailwind.config.js"
        customeStyle={{
          pre: {
            maxHeight: '50rem'
          }
        }}
        codeString={codeStringTailwindConfig.tailwind} />
    </Container>
  );
};

export default TailwindConfigPage;