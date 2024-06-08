import CopyText from '@components/ui/CopyText';
import ThreeDotMacBook from '@components/ui/ThreeDotMacBook';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customStyle = {
  ...dark,
  'pre[class*="language-"]': {
    ...dark['pre[class*="language-"]'],
    background: 'black',
    maxHeight: "30rem",
    border: "none",
    fontSize: "16px"
  },
  'code[class*="language-"]': {
    ...dark['code[class*="language-"]'],
    background: 'black',
  },

};

interface TProps {
  codeString: string;
}

const CodeBlock = (props: TProps) => {
  const { codeString } = props
  return (
    <div className='relative  w-full '>
      <ThreeDotMacBook />
      <CopyText text={codeString} classText='hidden' classContainer={'absolute w-fit right-4 top-10 z-[5]'} />
      <SyntaxHighlighter language="javascript" style={customStyle}>
        {codeString}
      </SyntaxHighlighter>

    </div>
  );
};

export default CodeBlock;
