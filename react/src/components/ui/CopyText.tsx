import { IconCheck, IconClipboard, } from '@assets/icons';
import Container from './Container';
import { useEffect, useState } from 'react';
import Button from '@components/ui/Button';

type Props = {
    variant?: "hbc" | "hsc";
    text: string;
    classContainer?: string;
    classText?: string;
    classIcon?: string;
}

const CopyText = (props: Props) => {
    const { variant, text, classContainer, classText, classIcon } = props
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
        <Container variant={variant || "hsc"} gap={"small"} className={`${classContainer}`}>
            <p className={`${classText}`}>{text}</p>
            <Button variant='icon' className={`${classIcon}`}>
                {
                    isCopied ? <IconCheck className='icon-primary' /> : <IconClipboard onClick={handleCopyToClipboard} className='icon-primary w-[1rem]' />
                }
            </Button>
        </Container>
    )
}

export default CopyText