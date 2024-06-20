import CopyText from '@components/ui/CopyText';
import ThreeDotMacBook from '@components/ui/ThreeDotMacBook';
import { TObject } from '@types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type TPropsCustomeStyle = {
  pre?: TObject;
  code?: TObject
}

const customStyle = (customeStyle?: TPropsCustomeStyle) => ({
  ...dark,
  'pre[class*="language-"]': {
    ...dark['pre[class*="language-"]'],
    background: 'black',
    maxHeight: "30rem",
    border: "none",
    fontSize: "16px",
    ...customeStyle?.pre
  },
  'code[class*="language-"]': {
    ...dark['code[class*="language-"]'],
    background: 'black',
    ...customeStyle?.pre
  },
})

interface TProps {
  codeString: string;
  customeStyle?: TPropsCustomeStyle;
  fileName?: string;
}

const CodeBlock = (props: TProps) => {
  const { codeString, fileName, customeStyle } = props
  return (
    <div className='relative  w-full '>
      <ThreeDotMacBook />
      <CopyText text={codeString} classText='hidden' classContainer={'absolute w-fit right-4 top-9 z-[5]'} />
      <SyntaxHighlighter language="javascript" style={customStyle(customeStyle)}>
        {
          fileName ? `
${codeString}`:codeString
      }

      </SyntaxHighlighter>
      {
        fileName && <div className='absolute top-6 bg-primary-100 text-primary-700 font-medium border rounded-br-lg p-1'>
          {fileName}
        </div>
      }

    </div>
  );
};

export default CodeBlock;
