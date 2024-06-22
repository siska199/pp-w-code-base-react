import CardIntro from "@components/cards/CardIntro";
import Badge from "@components/ui/Badge";
import CodeBlock from "@components/ui/CodeBlock";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";

const HookPage = () => {
  const listHook = [
    {
      title: 'useFormattedInput',
      caption: (
        <div className="flex flex-col gap-2">
          <p>This hook is designed to handle formatted input fields, such as phone numbers, credit card numbers, or any other input that requires a specific pattern.</p>
          <div>
            <Badge label={"Key Points"} variant={"soft-warning"} />
            <List
              customeClass={{ ul: "ml-4" }}
              items={[
                {
                  label: "Dependencies:",
                  content: 'useRef from React'
                },
                {
                  label: "Parameters:",
                  content: "onChange, formatPattern, and value"
                },
                {
                  label: 'Returns:',
                  content: 'An object containing inputRef and handleOnChangeFormattedValue.'
                },
                {
                  label: 'Functionality:',
                  content: '',
                  childs: [
                    {
                      label: 'formatValue',
                      content: 'Formats the input value according to the provided pattern.'
                    },
                    {
                      label: 'handleOnChangeFormattedValue',
                      content: 'Handles changes to the input value, ensuring it follows the specified format and adjusts the cursor position accordingly.'
                    }
                  ]
                }
              ]}
            />
          </div>
          <div>
            <CodeBlock
              fileName="src/hooks/useFormattedInput.tsx"
              codeString={`import { useRef } from 'react';

interface TProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formatPattern: string;
    value: string;
}

const useFormattedInput = (props: TProps) => {
    const { onChange, formatPattern, value } = props
    const inputRef = useRef<HTMLInputElement>(null);

    const formatValue = (value: string, pattern: string): string => {
        const digitsOnly = value.replace(/\\D/g, "");
        let formattedValue = "";
        let patternIndex = 0;
        let valueIndex = 0;

        while (valueIndex < digitsOnly.length && patternIndex < pattern.length) {
            if (pattern[patternIndex] === "X") {
                formattedValue += digitsOnly[valueIndex];
                valueIndex++;
            } else {
                formattedValue += pattern[patternIndex];
            }
            patternIndex++;
        }

        return formattedValue;
    };


    const handleOnChangeFormattedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { selectionStart } = e.target;
        let cursorPosition = selectionStart as number;
        const valueDeleted = value[cursorPosition]
        const valueRaw = e.target.value

        const formattedValue = formatValue(valueRaw, formatPattern);
        if (inputRef.current) {
            const inputLengthDifference = formattedValue.length - e.target.value.length;
            cursorPosition = (selectionStart as number) + inputLengthDifference;
            if ([",", "-","."]?.includes(valueDeleted)) {
                cursorPosition -= 1
            }
        }
        e.target.value = formattedValue;
        onChange(e);
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.selectionStart = cursorPosition;
                inputRef.current.selectionEnd = cursorPosition;
            }
        }, 0);
    };

    return { inputRef, handleOnChangeFormattedValue };
};

export default useFormattedInput;`}
            />
          </div>
          <div>
            <Badge label={"Use Case"} variant={"soft-warning"} />
            <p className="ml-2 indent-4">This hook is useful in forms where specific input formatting is required, ensuring user input adheres to a defined pattern and improving user experience.</p>
          </div>
        </div>
      )
    },
    {
      title: 'useOnClickOutside',
      caption: (
        <div className="flex flex-col gap-2">
          <p>This hook detects and handles clicks outside of a specified element, which is useful for dropdowns, modals, or any component that should close when the user clicks outside of it.</p>
          <div>
            <Badge label={"Key Points"} variant={"soft-warning"} />
            <List
              customeClass={{ ul: "ml-4" }}
              items={[
                {
                  label: "Dependencies:",
                  content: 'RefObject, useEffect from React, and a helper function isEmptyValue.'
                },
                {
                  label: "Parameters:",
                  content: "handler, ref, and optionally refExceptions"
                },
                {
                  label: 'Returns:',
                  content: 'None (side-effect only).'
                },
                {
                  label: 'Functionality:',
                  content: '',
                  childs: [
                    {
                      label: 'handleClickOutside',
                      content: 'Adds event listeners for mousedown and touchstart. Calls handler when a click is detected outside of the specified ref, excluding any optional exceptions.'
                    }
                  ]
                }
              ]}
            />
          </div>
          <div>
            <CodeBlock
              codeString={`import { RefObject, useEffect } from "react";
import { isEmptyValue } from '@/lib/utils/helper';

interface TProps<T> {
    handler: () => void;
    ref: RefObject<T>;
    refExceptions?: RefObject<T>[];

}

const useOnClickOutside = <T extends HTMLElement>(props: TProps<T>) => {
    const { ref, handler, refExceptions } = props
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && (isEmptyValue(refExceptions) ? true : !refExceptions?.some(exceptionRef => {
                return exceptionRef.current?.contains(event.target as Node)
            }))) {
                handler();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;`}

            />
          </div>
          <div>
            <Badge label={"Use Case"} variant={"soft-warning"} />
            <p className="ml-2 indent-4">Ideal for managing UI components that need to be dismissed when a user interacts outside their boundaries, such as dropdown menus or modal dialogs.</p>
          </div>
        </div>
      )
    },
    {
      title: 'useTable',
      caption: (
        <div className="flex flex-col gap-4">
          <p>This hook is for managing table data, columns, and settings in a React component, encapsulating logic related to data fetching and state management for tables.</p>
          <div>
            <Badge label={"Key Points"} variant={"soft-warning"} />
            <List
              customeClass={{ ul: "ml-4" }}
              items={[
                {
                  label: "Dependencies:",
                  content: 'useEffect, useState from React.'
                },
                {
                  label: "Parameters:",
                  content: "initialColumn, initialData, and initialSetting"
                },
                {
                  label: 'Returns:',
                  content: 'An object containing setting, columns, setData, data, and handleOnChange.'
                },
                {
                  label: 'Functionality:',
                  content: '',
                  childs: [
                    {
                      label: 'Manages state for data and setting.',
                      content: ''
                    },
                    {
                      label: 'handleOnChange',
                      content: 'Fetches data (simulated with a timeout in this example) and updates state.'
                    },
                    {
                      label: 'Memoizes columns',
                      content: 'Prevents unnecessary re-renders.'
                    }
                  ]
                }
              ]}
            />
          </div>
          <div>
            <CodeBlock
              codeString={`import { TColumn, TResponseAPI, TSettingTable } from "@types";
import React, { useEffect, useState } from "react";

interface TProps {
    initialColumn: any;
    initialData: any;
    initialSetting: any;
}

const useTable = (props: TProps) => {
    const { initialColumn, initialData, initialSetting } = props
    const [data, setData] = useState(initialData)

    type TData = (typeof data)[0]

    const [setting, setSetting] = useState<TSettingTable<TData>>({
        currentPage: 1,
        totalPage: 10,
        ...initialSetting,
    })

    const columns: TColumn<TData, keyof TData>[] = React.useMemo(
        () => initialColumn,
        [initialColumn]
    );

    useEffect(() => {
        handleOnChange()
    }, [])

    const handleOnChange = async (params?: TSettingTable<TData>) => {
        const response: TResponseAPI = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    message: 'Success Get Data',
                    data: listData
                });
            }, 1000);
        });

        if (response?.status) {
            setData(response?.data)
        }


        params && setSetting(params)

    }

    return {
        setting,
        columns,
        setData,
        data,
        handleOnChange,

    }
}

const listData = [
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },

    {
        name: "Jane Cooper",
        email: "jane.cooper@example.com",
        title: "Regional Paradigm Technician",
        department: "Optimization",
        status: "Active",
        role: "Admin",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Cody Fisher",
        email: "cody.fisher@example.com",
        title: "Product Directives Officer",
        department: "Intranet",
        status: "Active",
        role: "Owner",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Esther Howard",
        email: "esther.howard@example.com",
        title: "Forward Response Developer",
        department: "Directives",
        status: "Active",
        role: "Member",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Jenny Wilson",
        email: "jenny.wilson@example.com",
        title: "Central Security Manager",
        department: "Program",
        status: "Active",
        role: "Member",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Kristin Watson",
        email: "kristin.watson@example.com",
        title: "Lean Implementation Liaison",
        department: "Mobility",
        status: "Active",
        role: "Admin",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        name: "Cameron Williamson",
        email: "cameron.williamson@example.com",
        title: "Internal Applications Engineer",
        department: "Security",
        status: "Active",
        role: "Member",
        locate: "Locate",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    }
]?.map((data, i) => ({ ...data, id: i }))


export default useTable`}
            />
          </div>
          <div>
            <Badge label={"Use Case"} variant={"soft-warning"} />
            <p className="ml-2 indent-4">Perfect for table components in a web application where managing and updating table data, pagination, and column definitions dynamically is required.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <CardIntro
        title={'Hook'}
        subTitle={`The codebase you provided makes use of three custom hooks in React, each with specific functionality and use cases. Here's an overview of each hook and its general purpose:`}
      />
      <ProgressStep type="number" listStep={listHook} variant="vertical" />

    </>
  );
};

export default HookPage;