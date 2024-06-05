/* eslint-disable react/jsx-handler-names */
import IconChevronToggle from "@assets/icons/IconChevronToggle";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { TOption } from "@types";
import clsx from "clsx";
import { useRef, useState } from "react";

interface TProps {
    label: React.ReactNode;
    options: TOption[];
    onClick: (data: TOption) => void;
    customeClass?: {
        containerDropdown?: string;
        btnDropdown?: string;

    };
    isDefaultStyle?: boolean;
}

const DropdownBase = (props: TProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const refBtn = useRef<HTMLDivElement | null>(null);

    const { options, label, onClick: handleOnClick, customeClass, isDefaultStyle = true } = props;
    const [isOpen, setIsOpen] = useState(false)

    useOnClickOutside<HTMLDivElement>({ ref, refExceptions: [refBtn], handler: () => setIsOpen(false) });

    const handleOnClickOption = (data: TOption) => {
        handleOnClick(data)
        setIsOpen(false)
    }
    return (
        <div className={clsx({
            "relative inline-block text-left w-fit": true,
            [customeClass?.containerDropdown || '']: customeClass?.containerDropdown
        })}>
            <div
                ref={refBtn}
                onClick={() => {
                    setIsOpen(!isOpen)
                }} >
                <button type="button" className={clsx({
                    "inline-flex w-full justify-center items-center gap-x-1.5 ": true,
                    "rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50": isDefaultStyle,
                    [customeClass?.btnDropdown || ""]: customeClass?.btnDropdown
                })}>
                    {label}
                    <IconChevronToggle isOpen={isOpen} />
                </button>
            </div>

            <div ref={ref} className={clsx({
                "absolute  z-10 mt-2 transition-all overflow-hidden origin-top-right rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none": true,
                " h-auto shadow-lg w-56": isOpen,
                " h-0 shadow-none": !isOpen
            })}>
                {
                    isOpen && <div className="py-0">
                        {
                            options?.map((option, i) =>
                                <div key={i} onClick={() => handleOnClickOption(option)} className="hover:bg-gray-100 block px-4 py-2 cursor-pointer" >{option?.label}</div>
                            )
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default DropdownBase