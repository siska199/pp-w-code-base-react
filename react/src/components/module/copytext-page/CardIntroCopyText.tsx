
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import CopyText from "@components/ui/CopyText";

const CardIntroCopyText = () => {

  const listExample = [
    {
      component: <div className="flex flex-col  justify-center">
        <CardVariantComp
          title={"Default"}
          Component={<CopyText text="Siska Apriana Rifianti the author of codebase199" />}
          customeClass={{
            container: "border-none [&>p]:min-w-[7rem] [&>p]:max-w-[7rem] !flex-row-reverse !p-0 !justif-start"
          }}
        />
        <CardVariantComp
          title={"Copy text without show the text"}
          Component={<div className="flex flex-col flex-grow">
            <CopyText classText='hidden' text="Copy this text without show it" />
          </div>}
          customeClass={{
            container: "border-none [&>p]:min-w-[7rem] [&>p]:max-w-[7rem] !flex-row-reverse !p-0 !justif-start"
          }}
        />
      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'CopyText'}
      subTitle="Description of CopyText."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `/* eslint-disable react/jsx-handler-names */
import { IconCheck, IconClipboard, } from '@assets/icons';
import Container from './Container';
import { useEffect, useState } from 'react';
import Button from '@components/ui/Button';
import variant from '@lib/utils/data/variant-color';

type Props = {
    layout?: "hbc" | "hsc";
    text: string;
    classContainer?: string;
    classText?: string;
    classIcon?: string;
}

const CopyText = (props: Props) => {
    const { layout, text, classContainer, classText, classIcon } = props
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 3000)
        }
    }, [isCopied])

    const handleCopyToClipboard = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                setIsCopied(true)
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                //set alert in here to notify user if success to copy the text
                document.execCommand('copy');
                setIsCopied(true)

            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            document.body.removeChild(textArea);
        }
    };


    return (
        <Container variant={layout || "hsc"} gap={"small"} className={\`\${ classContainer }\`}>
            <p className={\`\${ classText } \`}>{text}</p>
            <Button variant='plain' label={isCopied ? <IconCheck className='icon-primary' /> : <IconClipboard className='icon-primary w-[1rem]' />} className={\`\${ classIcon } \`} onClick={() => isCopied ? null : handleCopyToClipboard()} />

        </Container>
    )
}

export default CopyText`;

export default CardIntroCopyText;
