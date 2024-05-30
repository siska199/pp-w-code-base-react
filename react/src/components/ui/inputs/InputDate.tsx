/* eslint-disable react/jsx-handler-names */
import { IconChevronLeft, IconChevronRight } from '@assets/icons';
import Button from '@components/ui/Button';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const InputDate = () => {
    const [originalDate, setOriginalDate] = useState(new Date())
    const [startDate, setStartDate] = useState(originalDate);
    const [showDate, setShowDate] = useState(true)
    const [showMonth, setShowMonth] = useState(false)
    const [showYear, setShowYear] = useState(false)
    const [isShouldCloseOnSelect, setIsShouldCloseOnSelect] = useState(true)
    
    const handleOnChange = (value: Date) => {
        if(showYear){
            setShowDate(true)
            setShowYear(false)
        }else if(showMonth){
            setStartDate(value)
            setShowDate(true)
            setShowMonth(false)
        }else if(!showMonth && !showYear){
            setIsShouldCloseOnSelect(true)
            setShowDate(false)
            setStartDate(value)
            setOriginalDate(value)
        }
    }

    const handleShowMonth = () => {
        setShowMonth(true)
        setShowYear(false)
        setIsShouldCloseOnSelect(false)
    }
    const handleShowYear = () => {
        setShowYear(true)
        setShowMonth(false)
        setIsShouldCloseOnSelect(false)
    }

    const handleOnCalenderClose = () => {
        setShowYear(false)
        setShowMonth(false)
        if(!showDate){
            setStartDate(originalDate)
        }
        if(showMonth || showYear){
            setStartDate(originalDate)
        }
    }

    // const handleCancel = ()=>{
    //     setStartDate(originalDate);
    //     setShowYear(false)
    //     setShowMonth(false)
    //     setShowDate(true)
    //     setIsShouldCloseOnSelect(true)
    // }

    // const handleApply = ()=>{
    //     if(showMonth){
    //         setShowMonth(false)
    //     }else{
    //         setShowYear(false)
    //     }
    //     setOriginalDate(startDate)
    //     setShowDate(true)
    //     setIsShouldCloseOnSelect(true)
    // }

    const handleOnChangeRaw = ()=>{
        console.log("click change raw: ",)
    }

    return (

        <div>

            <div className="relative w-40">
                <DatePicker
                    onCalendarClose={handleOnCalenderClose}
                    selected={startDate}
                    onChange={handleOnChange}
                    // startDate={startDate}
                    // endDate={new Date(endDate)}
                    nextMonthButtonLabel=">"
                    previousMonthButtonLabel="<"
                    showPreviousMonths={true}
                    popperClassName="flex flex-col gap-2 justify-enter react-datepicker-left !shadow-none overflow-hidden"
                    // customInput={<ButtonInput />}
                    showYearPicker={showYear}
                    showMonthYearPicker={showMonth}
                    showFullMonthYearPicker={showDate}
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
                                    onClick={showMonth||showYear ? decreaseYear : decreaseMonth}
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
                                        !showMonth && !showYear && <span onClick={handleShowMonth} className='cursor-pointer'>{format(date, 'MMMM')}</span>
                                        
                                    }
                                    <span onClick={handleShowYear} className='cursor-pointer'>{showYear?format(startDate, 'yyyy'):format(date, 'yyyy')  }</span>
                                </div>
                                <Button
                                    isRounded
                                    isContained={false}
                                    variant={"gray"}
                                    onClick={showMonth||showYear ? increaseYear : increaseMonth}
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
                    onChangeRaw={handleOnChangeRaw}
                >
                    {/* <div className='grid grid-cols-2 gap-2  '>
                        {
                            (showMonth || showYear) && <>      
                                <Button variant={"white"} onClick={handleCancel} className='w-full'>
                                    Cancel
                                </Button>     
                                <Button  onClick={handleApply} className='w-full'>
                                    Apply
                                </Button>                   
                            </>
                        }
                    </div> */}

                </DatePicker>
            </div>
        </div>

    );
}




export default InputDate;
