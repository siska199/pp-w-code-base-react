/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-handler-names */
import { IconCalender, IconChevronLeft, IconChevronRight } from "@assets/icons";
import Button from "@components/ui/Button";
import ContainerInput from "@components/ui/inputs/ContainerInput";
import { TBasePropsInput, TCustomeEventOnChange } from "@types";
import clsx from "clsx";
import { format } from "date-fns";
import { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TProps<TWithRange extends boolean, TWIthMultiple extends boolean> extends TBasePropsInput, Omit<Partial<ReactDatePickerProps<TWithRange, TWIthMultiple>>, "onChange" | "value"> {
  name: string;
  value: TWithRange extends true ? [Date, Date] : Date; // Updated to handle single Date or [Date, Date]
  onChange: (e: TCustomeEventOnChange<TWithRange extends true ? [Date, Date] : Date>) => void; // Updated onChange handler
  placeholder?: string;
  iconPosition?: "start" | "end";
}

const InputDate = <TWithRange extends boolean = false, TWIthMultiple extends boolean = false>(props: TProps<TWithRange, TWIthMultiple>) => {
  const { name, value, iconPosition = "start", placeholder, onChange, ...attrs } = props;

  const [showTypeDate, setShowTypeDate] = useState<"date" | "month" | "year" | "">("date");
  const [isShouldCloseOnSelect, setIsShouldCloseOnSelect] = useState(true);
  const [focus, setFocus] = useState(false);

  const handleOnChange = (valueDate: TWithRange extends true ? [Date, Date] : Date) => {
    setShowTypeDate(showTypeDate === "date" ? "" : "date");
    setIsShouldCloseOnSelect(true);
    onChange({
      target: {
        name,
        value: valueDate,
      },
    });
  };

  const handleShowMonth = () => {
    setShowTypeDate("month");
    setIsShouldCloseOnSelect(false);
  };

  const handleShowYear = () => {
    setShowTypeDate("year");
    setIsShouldCloseOnSelect(false);
  };

  const handleOnCalenderClose = () => {
    setShowTypeDate("");
  };

  return (
    <ContainerInput
      {...attrs}
      value={value}
      customeClass={{
        label: `${!focus && !value && attrs?.variant === "v6" && "scale-100 translate-y-0 ml-[20px]"}`,
      }}
    >
      {() => (
        <DatePicker
          onCalendarClose={handleOnCalenderClose}
          selected={Array.isArray(value) ? value[0] : value}
          startDate={Array.isArray(value) ? value[0] : value}
          endDate={Array.isArray(value) ? value[1] : value}
          selectsRange={attrs.selectsRange}
          // @ts-ignore
          onChange={handleOnChange}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          showPreviousMonths={true}
          placeholderText={placeholder}
          showYearPicker={showTypeDate === "year"}
          showMonthYearPicker={showTypeDate === "month"}
          showFullMonthYearPicker={showTypeDate === "date"}
          autoFocus={focus}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth, decreaseYear, increaseYear, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
            <div className="flex items-center rounded-[16px] justify-between px-2">
              <Button
                onClick={["year", "month"]?.includes(showTypeDate) ? decreaseYear : decreaseMonth}
                disabled={prevMonthButtonDisabled}
                shape={"circle"}
                variant={"solid-white"}
                label={<IconChevronLeft />}
                className={clsx({
                  "p-2": true,
                  "cursor-not-allowed opacity-50 ": prevMonthButtonDisabled,
                })}
              />

              <div className="text-body-medium font-semibold flex gap-2 text-gray-700">
                {["date", ""].includes(showTypeDate) && (
                  <span onClick={handleShowMonth} className="cursor-pointer">
                    {format(date || "", "MMMM")}
                  </span>
                )}

                <span onClick={showTypeDate === "year" ? () => null : handleShowYear} className={showTypeDate === "year" ? "" : "cursor-pointer"}>
                  {format(date || "", "yyyy")}
                </span>
              </div>
              <Button
                shape={"circle"}
                variant={"solid-white"}
                onClick={["year", "month"]?.includes(showTypeDate) ? increaseYear : increaseMonth}
                disabled={nextMonthButtonDisabled}
                className={clsx({
                  "p-2": true,
                  "cursor-not-allowed opacity-50": nextMonthButtonDisabled,
                })}
                label={<IconChevronRight />}
              />
            </div>
          )}
          shouldCloseOnSelect={isShouldCloseOnSelect}
          enableTabLoop={true}
          yearItemNumber={8}
          showIcon={true}
          icon={<IconCalender />}
          disabled={attrs.disabled}
          isClearable={!!value}
          toggleCalendarOnIconClick={true}
          popperClassName="flex flex-col gap-2 z-[10] justify-enter react-datepicker-left !shadow-none overflow-hidden"
          wrapperClassName="w-full"
          className={clsx({
            "": true,
            "ml-6": iconPosition === "start",
            "mr-6": iconPosition === "end",
          })}
          calendarClassName={"border relative"}
          calendarIconClassname={clsx({
            "absolute mt-[-0.25rem] z-[2]": true,
            "left-[-0.5rem]": iconPosition === "start",
            "right-[-0.5rem]": iconPosition === "end",
          })}
          clearButtonClassName={clsx({
            "right-[-0.25rem] z-[10]": true,
            "right-[0.65rem]": iconPosition === "end",
          })}
        />
      )}
    </ContainerInput>
  );
};

export default InputDate;
