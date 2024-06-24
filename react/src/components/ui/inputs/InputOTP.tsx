/* eslint-disable react/jsx-handler-names */
import Container from '@components/ui/Container';
import HelperMessage from '@components/ui/HelperMessage';
import { TCustomeEventOnChange } from '@types';
import React, { useEffect, useRef, useState } from 'react';

interface TProps{
    name: string;
    onChange: (e: TCustomeEventOnChange<boolean>) => void;
    numberOfDigits: number;
    correctOTP: string;
    errorMessage: string;

}

const InputOTP = (props: TProps) => {
    const { numberOfDigits, errorMessage, onChange, name, correctOTP, } = props;

    const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(""));
    const [otpError, setOtpError] = useState<string | undefined>(undefined);

    const otpBoxReference = useRef<Array<HTMLDivElement | null>>([]);

    function handleChange(value: string, index: number) {
        const newArr = [...otp];
        const isFirstInputEmpty = !((otpBoxReference?.current[0] as HTMLInputElement)?.value)
        if (isFirstInputEmpty && index !== 0) {
            otpBoxReference?.current[0]?.focus()
            newArr[0] = value;
            otpBoxReference?.current[1]?.focus()
        } else if (value && index < numberOfDigits - 1) {
            newArr[index] = value;
            otpBoxReference?.current[index + 1]?.focus()
        } else {
            newArr[index] = value;
        }
        setOtp(newArr);

    }

    const handleBackspaceAndEnter = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const value = (e?.target as HTMLInputElement)?.value
        if (e.key === "Backspace" && !value && index > 0) {
            otpBoxReference?.current[index - 1]?.focus()
        }
        if (e.key === "Enter" && !value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1]?.focus()
        }
    }

    useEffect(() => {
        const isValid = otp.join("") !== "" && otp.join("") === correctOTP
        setOtpError(isValid ? "" : errorMessage)
        onChange({
            target: {
                name,
                value: isValid
            }
        })
    }, [otp]);
    return (
        <Container gap={"small"}>
            <div className='flex gap-4'>
                {otp.map((digit, index) => (
                    <input key={index} value={digit} maxLength={1}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                        ref={(reference) => {
                            return otpBoxReference.current[index] = reference
                        }}
                        className={`border-gray-100 bg-gray-100 flex items-center justify-center text-center p-2 w-[2.5rem] h-[2.5rem] !outline-none `}
                    />
                ))}
            </div>
            {
                otp?.filter(data=>data).length===numberOfDigits && <HelperMessage message={otpError} variant='error' />

            }
        </Container>

    );

}


export default InputOTP;
