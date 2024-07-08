/* eslint-disable react/jsx-handler-names */
import Alert from '@components/ui/Alert';
import Container from '@components/ui/Container';
import { findLargestIndexWithValue } from '@lib/utils/helper';
import { TCustomeEventOnChange } from '@types';
import React, { useEffect, useRef, useState } from 'react';

interface TProps {
    name: string;
    onChange: (e: TCustomeEventOnChange<boolean>) => void;
    numberOfDigits: number;
    correctOTP: string;
    message?: {
        error?: string;
        success?: string;
    }
}

type TAlertState = {
    withIcon: boolean;
    isFixed: boolean;
    message: string;
    show: boolean;
} & (| { type: 'error'; variant: 'error-soft'; } | { type: 'success'; variant: 'success-soft'; });

const InputOTP = (props: TProps) => {
    const { numberOfDigits, message, onChange, name, correctOTP, } = props;

    const otpBoxReference = useRef<Array<HTMLDivElement | null>>([]);

    const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(""));
    const [alert, setAlert] = useState<TAlertState>({
        show: false,
        type: 'error',
        message: '',
        isFixed: false,
        withIcon: true,
        variant: 'error-soft'
    })

    useEffect(() => {
        const isValid = otp.join("") !== "" && otp.join("") === correctOTP

        const updateAlertState: TAlertState = isValid ? {
            ...alert,
            message: message?.success || 'OTP is Correct',
            type: "success",
            variant: "success-soft",
        } : {
            ...alert,
            message: message?.error || 'OTP is In correct',
            type: "error",
            variant: "error-soft",
        }
        setAlert(updateAlertState)

        onChange({
            target: {
                name,
                value: isValid
            }
        })
    }, [otp]);


    const handleChange = (value: string, index: number) => {
        const newArr = [...otp];
        const isFirstInputEmpty = !((otpBoxReference?.current[0] as HTMLInputElement)?.value)
        const lastIndexLargestValue = findLargestIndexWithValue(otp)
        console.log(value, index)

        if (isFirstInputEmpty && index !== 0) {
            otpBoxReference?.current[0]?.focus()
            newArr[0] = value;
            otpBoxReference?.current[1]?.focus()
        } else if (lastIndexLargestValue > index && !value) {
            newArr[lastIndexLargestValue] = value
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
        const lastIndexLargestValue = findLargestIndexWithValue(otp)

        if (e.key === "Backspace" && lastIndexLargestValue > index) {
            otpBoxReference?.current[lastIndexLargestValue]?.focus()
        } else if (e.key === "Backspace" && !value && index > 0) {
            otpBoxReference?.current[index - 1]?.focus()
        }
        else if (e.key === "Enter" && !value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1]?.focus()
        }
        return e
    }

    return (
        <Container gap={"small"}>
            <div className='flex gap-4'>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value?.slice(-1), index)}
                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                ref={(reference) => {
                    return otpBoxReference.current[index] = reference
                }}
                className={`border-gray-100 bg-gray-100 flex items-center justify-center text-center p-2 w-[2.5rem] h-[2.5rem] !outline-none `}
                    />
                ))}
            </div>
            {
                otp?.filter(data => data).length === numberOfDigits && <Alert {...alert} withIcon show />
            }
        </Container>

    );

}


export default InputOTP;
