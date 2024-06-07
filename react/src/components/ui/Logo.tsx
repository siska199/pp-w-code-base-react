interface TProps extends React.HTMLProps<HTMLDivElement>{

}

const Logo = (props: TProps) => {
    return (
        <div {...props}>Logo</div>
    )
}


// const LogoVariants = cva(
//     'w-fit rounded-lg gap-1 h-fit items-center border  justify-center flex gap-sm  cursor-pointer-custome focus:outline-none focus:ring-4 ',
//     {
//         variants: {
//             variant: {
//                 'primary': 'bg-primary hover:!bg-primary-400 border-primary focus:ring-primary-200 !text-white disabled:bg-primary-300 disabled:border-primary-300',
//                 'gray': 'bg-gray hover:!bg-gray-400 border-gray-200 focus:ring-gray-200 !text-white disabled:bg-gray-300 disabled:border-gray-300',
//                 'black': 'bg-black hover:!bg-black/75 border-black focus:ring-black/70 !text-white disabled:opacity-50 ',
//                 'white': 'bg-white  hover:!bg-gray-100 text-gray-900 focus:ring-gray-200',
//                 'icon': 'bg-white  hover:!bg-gray-100 text-gray-900 focus:ring-0 !p-2 border-none'
//             },
//             isContained: {
//                 "false": "bg-white",
//                 "true": ""
//             },
//             isRounded: {
//                 "false": "",
//                 "true": "rounded-full"
//             },

//             sizeCustome: {
//                 "small": "py-1 px-4 ",
//                 "base": "py-2 px-4 ",
//                 "medium": "py-3 px-4 text-body-medium",
//                 "large": "py-3 px-5 text-body-medium",
//                 "xl": "py-3 px-6 text-body-3xl",
//             },
//         },
//         compoundVariants: [
//             {
//                 variant: "primary",
//                 isContained: false,
//                 class: "!text-primary hover:!bg-primary-100",
//             },
//             {
//                 variant: "gray",
//                 isContained: false,
//                 class: "!text-gray hover:!bg-gray-100",
//             },
//             {
//                 variant: "black",
//                 isContained: false,
//                 class: "!text-black hover:!bg-black/10",
//             },
//         ],
//         defaultVariants: {
//             variant: "primary",
//             sizeCustome: "base",
//             isContained: true,
//             isRounded: false
//         }
//     }
// )


export default Logo