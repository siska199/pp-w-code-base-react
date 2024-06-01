/* eslint-disable react/jsx-handler-names */
import { TBasePropsInput } from '@/types/ui/index';
import { IconCalender, IconChevronLeft, IconChevronRight } from '@assets/icons';
import Button from '@components/ui/Button';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import { TCustomeEventOnChange } from '@types';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useState } from 'react';
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TProps extends TBasePropsInput, Omit<Partial<ReactDatePickerProps>, "onChange"|"value" >{
    name            : string;
    value           : Date
    onChange        : (e: TCustomeEventOnChange<Date>) => void;
    placeholder?    : string;
    iconPosition?   : "start" |"end"
}


const InputDate = (props: TProps) => {
    const { name, value,iconPosition="start", placeholder, onChange, ...attrs } = props
    const [showTypeDate, setShowTypeDate] = useState<"date" | "month" | "year" | "">("date")

    const [isShouldCloseOnSelect, setIsShouldCloseOnSelect] = useState(true)

    const handleOnChange = (valueDate: Date) => {
        setShowTypeDate(showTypeDate === "date"?"":"date")
        setIsShouldCloseOnSelect(true)
        onChange({
            target: {
                name,
                value: new Date(valueDate)
            }
        })

    }

    const handleShowMonth = () => {
        setShowTypeDate("month")
        setIsShouldCloseOnSelect(false)
    }
    const handleShowYear = () => {
        setShowTypeDate("year")
        setIsShouldCloseOnSelect(false)
    }

    const handleOnCalenderClose = () => {
        setShowTypeDate("")
    }


    return (

        <ContainerInput {...attrs}>
            <DatePicker
                onCalendarClose={handleOnCalenderClose}
                selected={value}
                onChange={handleOnChange}
                nextMonthButtonLabel=">"
                previousMonthButtonLabel="<"
                showPreviousMonths={true}
                placeholderText={placeholder}
                showYearPicker={showTypeDate === "year"}
                showMonthYearPicker={showTypeDate === "month"}
                showFullMonthYearPicker={showTypeDate === "date"}
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    decreaseYear,
                    increaseYear,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => {
                    return (
                        <div className="flex items-center rounded-[16px] justify-between px-2  ">
                            <Button
                                onClick={["year", "month"]?.includes(showTypeDate) ? decreaseYear : decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                isRounded isContained={false}
                                variant={"gray"}
                                className={clsx({
                                    'p-2': true,
                                    'cursor-not-allowed opacity-50 ': prevMonthButtonDisabled
                                })}
                            >
                                <IconChevronLeft />
                            </Button>
                            <div className="text-body-medium font-semibold flex gap-2 text-gray-700">
                                {
                                    [ "date",""]?.includes(showTypeDate) && <span onClick={handleShowMonth} className='cursor-pointer'>{format(date||"", 'MMMM')}</span>

                                }
                                <span onClick={handleShowYear} className='cursor-pointer'>{showTypeDate === "year" ? format(value||"", 'yyyy') : format(date||"", 'yyyy')}</span>
                            </div>
                            <Button
                                isRounded
                                isContained={false}
                                variant={"gray"}
                                onClick={["year", "month"]?.includes(showTypeDate) ? increaseYear : increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                className={clsx({
                                    'p-2': true,
                                    'cursor-not-allowed opacity-50': nextMonthButtonDisabled

                                })}
                            >
                                <IconChevronRight />
                            </Button>
                        </div>
                    )
                }}
                renderMonthContent={(...attrs) => {
                    return <Button variant='white' className="w-full border-none !rounded-none focus:ring-0"  >{attrs[1]}</Button>
                }}
                renderYearContent={(...attrs) => {
                    return <Button variant='white' className="w-full border-none !rounded-none focus:ring-0"  >{attrs[0]}</Button>
                }}
                shouldCloseOnSelect={isShouldCloseOnSelect}
                enableTabLoop={true}
                yearItemNumber={8}
                showIcon={true}
                icon={<IconCalender/>}
                disabled={attrs?.disabled}
                
                popperClassName="flex flex-col gap-2 z-[9999] justify-enter react-datepicker-left !shadow-none overflow-hidden"
                wrapperClassName='w-full'
                className={clsx({
                    "":true,
                    "ml-6 ":iconPosition==="start",
                    "mr-6 ":iconPosition==="end",
                })}
                calendarClassName={"border relative"}
                calendarIconClassname={clsx({
                    " absolute  mt-[-0.25rem] z-[2]" : true,
                    "left-[-0.5rem] ":iconPosition==="start",
                    "right-[-0.5rem] ":iconPosition==="end",
                })}
            >
            </DatePicker>
        </ContainerInput>

    );
}




export default InputDate;
