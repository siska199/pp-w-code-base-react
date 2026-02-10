import { IconClose, IconSearch } from '@assets/icons';
import IconChevronToggle from '@assets/icons/IconChevronToggle';
import Badge from '@components/ui/Badge';
import ContainerInput from '@components/ui/inputs/ContainerInput';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { getFieldLabelFromOptions, isEmptyValue, spreadArrayAttemp } from '@lib/utils/helper';
import { TBasePropsInput, TCustomeEventOnChange, TOption } from '@types';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import InputMultipleCheckbox from './InputMultipleCheckbox';
import InputBase from '@components/ui/inputs/InputBase';

type TProps = {
  name: string;
  onChange: (e: TCustomeEventOnChange<string | string[]>) => void;
  options: TOption[];
  withSearch?: boolean;
  outlined?: boolean;
} & (TSingleSelectProps | TMultipleSelectProps);

interface TSingleSelectProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  multiple?: false;
  value: string;
}

interface TMultipleSelectProps extends TBasePropsInput, Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  multiple: true;
  value: string[];
}

const InputSelectMakyo = (props: TProps) => {
  const { options, multiple, withSearch = true, outlined = true, ...attrs } = props;

  const refContainerDropdown = useRef<HTMLDivElement | null>(null);
  const refContainerValue = useRef<HTMLDivElement | null>(null);
  const refIconChevron = useRef<HTMLDivElement | null>(null);
  const refInput = useRef<HTMLInputElement | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside<HTMLDivElement>({
    ref: refContainerDropdown,
    refExceptions: [refIconChevron, refInput, refContainerValue],
    handler: () => {
      setIsOpen(false);
    },
  });

  useEffect(() => {
    if (!multiple) {
      const labelOfValue = getFieldLabelFromOptions({ array: options, value: attrs?.value });
      setSearchQuery(labelOfValue || '');
    }
  }, [attrs.value]);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (refInput?.current && multiple) {
      refInput.current.style.width = `${searchQuery?.length * 10 || 10}px`;
    }
  }, [searchQuery, multiple]);

  const handleOnClickOption = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement, MouseEvent>, data: TOption) => {
    e?.stopPropagation();
    let valueUpdates: string[] | string = data?.value;

    if (multiple && Array.isArray(attrs?.value)) {
      const isSelected = attrs?.value?.some((singleValue) => singleValue === data?.value);
      valueUpdates = isSelected ? attrs?.value?.filter((data) => data !== valueUpdates) : (spreadArrayAttemp({ newValue: valueUpdates, array: attrs?.value }) as string[]);
    } else {
      setIsOpen(false);
    }
    attrs?.onChange({
      target: {
        name: attrs?.name,
        value: valueUpdates,
      },
    });
    setSearchQuery('');
    setIsSearch(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOnClearValue = () => {
    if (multiple) {
      setSearchQuery('');
    } else {
      attrs?.onChange({
        target: {
          name: attrs?.name,
          value: '',
        },
      });
      setSearchQuery('');
    }
  };


  return (
    <ContainerInput<React.HTMLProps<HTMLInputElement>>
      {...attrs}
      isClerable={false}
      onCustomeClearHandler={handleOnClearValue}
      customeClearValue={multiple ? searchQuery : String(attrs?.value) || searchQuery}
      customeElement={{
        ...attrs?.customeElement,
        end: (
          <span
            className={`${isEmptyValue(attrs?.value) && attrs?.variant === 'v6' && '-mt-1'}`}
            ref={refIconChevron}
            onClick={(e) => {
              e?.preventDefault();
              e?.stopPropagation();
              const updateIsOpen = !isOpen;
              if (updateIsOpen) {
                refInput?.current?.focus();
              }
              setIsOpen(updateIsOpen);
            }}
          >
            <IconChevronToggle isOpen={isOpen} />
          </span>
        ),
      }}
      customeClass={{
        ...attrs?.customeClass,
        ciV1: '',
        ciV2: `flex-no-wrap max-w-full !rounded-[0.25rem] ${!outlined && 'bg-gray-200'}`,
        input: 'min-w-0',
        ciV4: '!inline-block ',
        label: `${isEmptyValue(attrs?.value) && attrs?.variant === 'v6' && !isOpen ? 'scale-100 -translate-y-1 ' : ''} `,
      }}
      childrenOverlay={
        <div
          ref={refContainerDropdown}
          className={clsx({
            'absolute  z-10 mt-2 origin-bottom-right  bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none': true,
            ' h-auto shadow-lg w-full': isOpen,
            ' h-0 shadow-none': !isOpen,
          })}
        >
          {withSearch && isOpen && (
            <div className="border-b">
              <InputBase
                {...attrs}
                id={attrs?.name}
                onChange={(e) => {
                  e?.stopPropagation();
                  setIsSearch(true);
                  handleSearchChange(e);
                  setIsOpen(true);
                }}
                value={searchQuery}
                variant="v7"
                autoComplete={'off'}
                autoFocus={true}
                customeElement={{
                  start: <IconSearch />,
                }}
              />
            </div>
          )}
          {multiple && isOpen && (
            <InputMultipleCheckbox
              options={options}
              {...attrs}
              value={attrs.value as string[]}
              customeClassMulCheckbox={{
                containerOption: '!px-0 !py-1 !max-h-[11.5rem] !flex-nowrap !overflow-y-scroll',
                containerCheckbox: '',
              }}
              label={''}
              onChange={(e) => {
                attrs?.onChange(e);
                setSearchQuery('');
              }}
              withCheckbox={false}
              searchQuery={searchQuery}
            />
          )}
          {!multiple && isOpen && (
            <div className="py-0 overflow-y-auto max-h-[10rem]">
              {options?.map((option, i) => {
                const isSelected = option?.value === attrs?.value;
                return (
                  <div
                    key={i}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOnClickOption(e, option)}
                    className={clsx({
                      'hover:bg-gray-100 block px-4 py-2 cursor-pointer ': true,
                      '!bg-primary-50 text-primary-700 ': isSelected,
                      '!bg-gray-100': isSearch && i === 0 && searchQuery,
                    })}
                  >
                    {option?.label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      }
    >
      {() => (
        <div
          ref={refContainerValue}
          className={clsx({
            'flex shrink gap-2 flex-wrap  overflow-x-auto  scrollbar-hidden': true,
          })}
          onClick={() => {
            if (multiple) {
              const updateIsOpen = !isOpen;
              if (updateIsOpen) {
                refInput?.current?.focus();
              }
              setIsOpen(updateIsOpen);
            }
          }}
        >
          <div className=" w-full cursor-pointer flex flex-wrap gap-1 h-full ">
            {multiple &&
              (attrs?.value as string[])?.map((data, i: number) => {
                const labelValue = getFieldLabelFromOptions({ array: options, value: data });
                return (
                  <Badge
                    key={i}
                    label={
                      <div className="flex gap-1 items-center">
                        {labelValue}
                        <div className="border border-black rounded-full" onClick={(e) => handleOnClickOption(e, { label: labelValue, value: data })}>
                          <IconClose className="w-[0.75rem] h-[0.75rem] icon-black icon-black-fill" />
                        </div>
                      </div>
                    }
                    variant={'softborder-gray'}
                  />
                );
              })}
            <input ref={refInput} disabled={true} className={`${outlined ? '!bg-white' : 'bg-gray-200'}`} />
          </div>
        </div>
      )}
    </ContainerInput>
  );
};

export default InputSelectMakyo;
