import CardIntro from "@components/cards/CardIntro";
import Badge from "@components/ui/Badge";
import CodeBlock from "@components/ui/CodeBlock";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";

const CSSFilePage = () => {
    const listCSSFile = [
        {
            title: <>File <Badge label="index.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles</span></>,
            caption: <CodeBlock
                fileName="styles/index.css"
                codeString={`@font-face {
    font-family: 'Staryssa';
    src: url('../fonts/staryssa.ttf');
}

@tailwind base;
@tailwind components;
@tailwind utilities;


@layer base {
    *{
        @apply m-0 p-0 box-border ;
    }
    html{
        @apply scroll-smooth;
    }
    body{
        @apply overflow-x-hidden relative text-body-base bg-white text-gray-800;

    }
    h1{
        @apply text-heading-01;
    }
    h2{
        @apply text-heading-02;
    }
    h3{
        @apply text-heading-03;
    }
    h4{
        @apply text-heading-04;
    }
    h5{
        @apply text-heading-05;
    }
    p{
        @apply text-body-base text-gray text-justify;
    }
    li{
        @apply text-gray
    }
    th{
        @apply text-left font-medium;
    }

}



@layer utilities {

    /* Blur effect for iamge */
    .blur-effect {
        filter: blur(10px);
        transition: filter 0.3s ease-out;
    }
    
    .clear-effect {
        filter: blur(0);
        transition: filter 0.3s ease-out;
    }

    /* Create bounce effect while click component */
    .bounce-effect {
        @apply transition-all duration-[50] hover:scale-[1.03] active:scale-[0.98] disabled:!scale-[1] disabled:cursor-not-allowed
    }

    .bounce-effect-disabled {
        @apply transition-none hover:scale-100 active:scale-100;
    }

    .cursor-pointer-custome{
       @apply bounce-effect cursor-pointer
    }

    /* Blur background effect */
	.bg-blur{
        background: transparent !important;
        backdrop-filter: blur(10px) !important;
    }
    /* FOR SVG ICON set color dinamically */
    .icon-white path { @apply stroke-white }
    .icon-white-fill path { @apply fill-white  }

    .icon-black path { @apply stroke-black }
    .icon-black-fill path { @apply fill-black  }

    .icon-gray path { @apply stroke-gray }
    .icon-gray-fill path { @apply fill-gray }

    .icon-primary path { @apply stroke-primary }
    .icon-primary-fill path { @apply fill-primary  }

    .icon-error path { @apply stroke-error }
    .icon-error-fill path {  @apply fill-error }

    .icon-warning path { @apply stroke-warning}
    .icon-warning-fill path { @apply fill-warning }

    .icon-success path { @apply  stroke-success}
    .icon-success-fill path { @apply  fill-success}

    /* Customize scrollbar */
    ::-webkit-scrollbar{
        @apply w-2 h-2
    }
    ::-webkit-scrollbar-track {
        box-shadow: none;
        border-radius: 10px;
        background:white;
    }
    ::-webkit-scrollbar-thumb {
        @apply rounded-lg bg-gray-300
    }
    ::-webkit-scrollbar-thumb:hover {
        @apply bg-gray-300
    }
    /* Hide scrollbar */
    .scrollbar-hidden::-webkit-scrollbar {
        display: none;
      }
    .scrollbar-hidden {
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
    }
    
}`}
            />
        },
        {
            title: <>File <Badge label="input.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock
                fileName="styles/ui/input.css"
                codeString={`@import url('../index.css');

/* Remove background autofill */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}

/* Customize input number */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}

/* Input Radio Button */
input[type="radio"]{
    @apply accent-primary;
    -webkit-appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 0 0 1px #E2E8F0;
}

input[type="radio"]:checked{
    box-shadow: 0 0 0 1px #357AEA;
}

input[type="radio"]:disabled{
    accent-color: #E2E8F0 !important;
    box-shadow: 0 0 0 1px #E2E8F0 !important;
}

/* Customize input date */
/* Remove border in the popper modal */
.react-datepicker {
    @apply !overflow-hidden mx-auto flex flex-col !border-gray-200 rounded-[16px] shadow-md  
    
}

.react-datepicker__header{
    @apply bg-white !border-none
}

.react-datepicker-wrapper{
    @apply overflow-hidden
}

.react-datepicker__input-container {
    @apply border 
}
.react-datepicker__input-container,.react-datepicker__view-calendar-icon{
    @apply flex relative border-none gap-2 p-0
}

.react-datepicker__input-container input{
    @apply flex relative p-0 !outline-none w-full
}
.react-datepicker-ignore-onclickoutside{
    @apply w-auto
}

.react-datepicker-popper {
    @apply shadow-md !border-none;
}


.react-datepicker-left {
    @apply absolute left-0 right-auto top-11 transform-none !important
}

.react-datepicker-right {
    @apply absolute right-0 left-auto top-11 transform-none  !important
}

.react-datepicker__triangle,
.react-datepicker__triangle::before,
.react-datepicker__triangle::after {
    display: none;
}

.react-datepicker__portal {
    @apply absolute z-10 w-72 text-body-small transform-none bg-white shadow px-3 py-2 top-12 right-0 rounded
}

.react-datepicker__month-container {
    @apply flex flex-col !border-none rounded-[16px] mx-auto min-w-[16rem]
}
.react-datepicker__month-text{
    @apply bg-transparent w-full
}

.react-datepicker__year-text--selected button ,.react-datepicker__month-text--selected button{
    @apply !bg-primary z-[10] hover:!bg-primary-400 text-white ;
}


.react-datepicker__month {
    @apply flex flex-col !border-none;
}

.react-datepicker__current-month {
    @apply ml-2 text-body-large font-semibold text-gray-800
}

.react-datepicker__year--container{
    @apply w-[16rem]
}
.react-datepicker__year{
    @apply flex items-start justify-center max-h-[10rem] overflow-y-auto scrollbar-hidden 
}
.react-datepicker__year-wrapper{
    @apply grid grid-cols-2
}

.react-datepicker__week {
    @apply flex justify-around
}

.react-datepicker__day-names {
    @apply flex justify-around  font-medium text-center text-body-base
}

.react-datepicker__day-name {
    @apply w-8 h-8 text-gray flex items-center justify-center py-1 rounded-full
}

.react-datepicker__navigation {
    @apply absolute top-2
}

.react-datepicker__navigation--previous {
    @apply right-12 w-8 h-8 rounded transition flex items-center justify-center hover:bg-gray-200
}

.react-datepicker__navigation--next {
    @apply right-4 w-8 h-8 rounded transition flex items-center justify-center hover:bg-gray-200
}

.react-datepicker__day {
    @apply mb-1 w-8 h-8 flex items-center justify-center py-1 text-body-small leading-loose transition text-gray-700 rounded
}

.react-datepicker__day--disabled {
    @apply cursor-not-allowed opacity-40 hover:bg-transparent
}

.react-datepicker__day--outside-month {
    @apply text-gray-300
}

.react-datepicker__day--in-range {
    @apply bg-gray-200
}

.react-datepicker__day--in-selecting-range {
    @apply bg-primary-200
}

.react-datepicker__day--selecting-range-start {
    @apply bg-white border-2 border-primary-500
}

.react-datepicker__day--selecting-range-end {
    @apply bg-white border-2 border-primary-500
}

.react-datepicker__day--selected {
    @apply bg-primary-500 text-white hover:bg-primary-600
}

.react-datepicker__day--today{
    @apply hover:bg-gray-100
}

.react-datepicker__day--range-start {
    @apply bg-primary-500 text-white hover:text-gray-700 hover:bg-white
}

.react-datepicker__day--range-end {
    @apply bg-primary-500 text-white hover:text-gray-700 hover:bg-white
}
.react-datepicker__day--keyboard-selected{
    @apply bg-transparent
}

.react-datepicker__close-icon{
    @apply flex items-center justify-center 
}
.react-datepicker__close-icon::after{
   background-color:transparent;
   content:"";
   background-image: url('../../icons/close.svg');

   background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

}`}
            />
        },
        {
            title: <>File <Badge label="modal.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock

                fileName="styles/ui/modal.css"
                codeString={`@import url('../index.css');
.md-overlay {
	position: fixed;
	width: 100%;
	visibility: hidden;
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: 0;
	background: rgba(0,0,0,0.5);
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
    opacity : 74%;

}

.md-modal {
	position: fixed;
	left:50%;
	height: auto;
	z-index: 2000;
	
	visibility: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;

	-webkit-transform: translateX(-50%) translateY(-50%);
	-moz-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
	
}

.md-effect-1.md-modal,.md-effect-2.md-modal{
	top: 50%;
}

.md-effect-3.md-modal{
	bottom:0%;
	-webkit-transform: translateX(-50%) translateY(0%);
	-moz-transform: translateX(-50%) translateY(0%);
	-ms-transform: translateX(-50%) translateY(0%);
	transform: translateX(-50%) translateY(0%);
}

.md-show {
	visibility: visible;
}


/* Content styles */
.md-content {
	background: white;
	position: relative;
	margin: 0;
    padding : 1rem;
    border-radius:0.5rem;
	box-shadow: 0px 20px 25px -5px #0F172A1A;
	box-shadow: 0px 10px 10px 0px #0F172A0D;
	width : 100%;
}

.md-show ~ .md-overlay {
	opacity: 1;
	visibility: visible;
}

/* Effect 1: Fade in and scale up */
.md-effect-1 .md-content {
	-webkit-transform: scale(0.7);
	-moz-transform: scale(0.7);
	-ms-transform: scale(0.7);
	transform: scale(0.7);
	opacity: 0;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.md-show.md-effect-1 .md-content {
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}

/* Effect 2: Slide from the right */
.md-effect-2 .md-content {
	-webkit-transform: translateX(20%);
	-moz-transform: translateX(20%);
	-ms-transform: translateX(20%);
	transform: translateX(20%);
	opacity: 0;
	-webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
	-moz-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
	transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}
.md-show.md-effect-2 .md-content {
	-webkit-transform: translateX(0);
	-moz-transform: translateX(0);
	-ms-transform: translateX(0);
	transform: translateX(0);
	opacity: 1;
}


/* Effect 3: Drawer */
.md-effect-3 .md-content {
	-webkit-transform: translateY(50%);
	-moz-transform: translateY(50%);
	-ms-transform: translateY(50%);
	transform: translateY(50%);
	opacity: 0;
	-webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
	-moz-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
	transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}

.md-show.md-effect-3 .md-content {
	-webkit-transform: translateX(0);
	-moz-transform: translateX(0);
	-ms-transform: translateX(0);
	transform: translateX(0);
	opacity: 1;
}`} />
        },
        {
            title: <>File <Badge label="progress-step.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock fileName="styles/ui/progress-step.css"
                codeString={`@import url('../index.css');
/* Progress step horizontal */

.stepper-wrapper {
    @apply mt-auto flex justify-between ;
}
.stepper-item.horizontal {
    @apply relative flex flex-col items-center flex-1 ;
}

.stepper-item.vertical {
    @apply relative min-h-[1rem];
}

.stepper-item.vertical > div:first-child {
    position: static;
    height: 0;
}

.stepper-item.vertical > div:not(:first-child) {
    margin-left: 2em;
    padding-left: 1em;
  }
  

.stepper-item.vertical .step-title {
    line-height: 1.5em;
    font-weight: 500;
  }

.step-item.vertical + .step-item.vertical {
    margin-top: 1.5em
} 

.stepper-item.vertical::after {
    @apply content-[''] absolute left-[15px] block top-[1px]  bottom-[5px]  h-full  border-gray-200 border-[1px] !z-[1];
    transform-origin: 50% 100%;
}  

.stepper-item.vertical.completed::after{
    @apply border-primary;
} 
.stepper-item.vertical.active::after{
    @apply border-primary;
}

.stepper-item.vertical.completed .step-counter.vertical:after {
    @apply bg-primary
}

.stepper-item.vertical:last-child .step-counter.vertical:after {
    display: none
  }
  

.stepper-item.horizontal::before {
    @apply absolute content-[""]  z-[2] left-[50%] top-[20px] w-full;
}

.stepper-item.horizontal::after {
    @apply absolute content-[""] border-b-[1.5px] border-gray-200  w-full left-[50%] top-[20px] z-[2];

}

.stepper-item .step-counter {
    @apply relative z-[5] flex justify-center items-center w-[2rem] h-[2rem] rounded-full border-gray-200 border-[1.5px] bg-white mb-[6px];
}

.stepper-item.active {
  @apply font-bold 
}

.stepper-item.active .step-counter{
    @apply border-primary  bg-white border-[2px] ring-4 ring-primary-200;
}

.stepper-item.active .step-counter span{
    @apply w-3 h-3 rounded-full bg-primary;
}

.stepper-item.completed .step-counter {
  @apply bg-primary text-white border-primary;
}

.stepper-item.completed.horizontal::after {
    @apply absolute content-[""] border-b-[1px] border-primary w-full left-[50%] top-[20px] z-[3];
}

.stepper-item.horizontal:first-child::before {
    @apply content-none
}
.stepper-item.horizontal:last-child::after {
    @apply content-none
}`} />
        },
        {
            title: <>File <Badge label="table.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock fileName="styles/ui/table.css"
                codeString={`@import url('../index.css');
.column-checked{
    @apply flex items-center justify-center py-3 px-2;
}

.column-data{
    @apply py-3 px-6;
}`} />
        },
        {
            title: <>File <Badge label="tooltip.css" variant={"soft-gray"} /> terletak pada folder <span className="italic">styles/ui</span></>,
            caption: <CodeBlock fileName="styles/ui/tooltip.css" codeString={`@import url('../index.css');
.tooltip {
  position: relative;
  display: inline-block;
}


.tooltip .tooltip-text {
  visibility: hidden;
  color: #fff;
  text-align: center;
  position: absolute;
  z-index: 1;
  
}
.tooltip .tooltip-text.left,.tooltip .tooltip-text.right{
    background-color:black;
    border-radius: 6px;
    padding: 5px ;
}

.tooltip .tooltip-text.top .text, .tooltip .tooltip-text.bottom .text{
    border-radius: 6px;
    background-color: black;
    padding: 5px ;

}

.tooltip .tooltip-text::after {
  content: "";
  position: absolute;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}

.tooltip:hover .tooltip-text {
    visibility: visible;
}

/* TOP */
.tooltip .tooltip-text.top {
    bottom: 100%;
    left: 0%;
} 
.tooltip .tooltip-text.top::after{
    top: 100%;
    left: 50%;
    border-color: black transparent transparent transparent;

}

/* Botom */
.tooltip .tooltip-text.bottom {
    top: 110%;
    left: 0%;
} 
.tooltip .tooltip-text.bottom::after{
    bottom: 100%;
    left: 50%;
    border-color: transparent transparent black transparent;
}

/* TOP */
.tooltip .tooltip-text.top {
    bottom: 100%;
    left: 0%;
} 
.tooltip .tooltip-text.top::after{
    top: 100%;
    left: 50%;
    border-color: black transparent transparent transparent;

}

/* Left */
.tooltip .tooltip-text.left {
    top: -5px;
    left: 105%;
} 
.tooltip .tooltip-text.left::after{
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-color: transparent black transparent transparent;

}

/* Right */
.tooltip .tooltip-text.right {
    top: -5px;
    right: 103%;
} 
.tooltip .tooltip-text.right::after{
    top: 50%;
    left: 101.5%;
    margin-top: -5px;
    border-color: transparent transparent transparent black;

}`} />
        }
    ]
    return (
        <div className="flex flex-col gap-3">
            <CardIntro
                title={'CSS File'}
                subTitle={<div className="text-body-small">
                    <p >The CSS files provided contain various styles and configurations tailored for different components and effects in a web application. Let&#39;s summarize each CSS file briefly:</p>
                    <List
                        items={[
                            {
                                label: "index.css",
                                content: "This file is imported in several other CSS files and likely contains global styles and utility classes shared across the application."
                            },
                            {
                                label: "tooltip.css",
                                content: 'Defines styles for tooltips',
                                childs: [
                                    {
                                        content: 'Positions tooltips relative to their parent elements (top, bottom, left, right).'
                                    },
                                    {
                                        content: 'Applies visibility changes on hover.'
                                    },
                                    {
                                        content: 'Uses pseudo-elements (::after) for arrow-like indicators.'
                                    },
                                    {
                                        content: 'Sets specific styles for tooltip text background and appearance.'
                                    }
                                ]
                            },
                            {
                                label: 'table.css',
                                content: 'Styles for tables: ',
                                childs: [
                                    {
                                        content: 'Utilizes @import to include index.css.'
                                    },
                                    {
                                        content: 'Defines different styles for checked columns (column-checked) and data columns (column-data).'
                                    },
                                    {
                                        content: 'Likely includes styles for responsive and interactive table components.'
                                    }
                                ]
                            },
                            {
                                label: 'progress-step.css',
                                content: 'Styles for progress steps: ',
                                childs: [
                                    {
                                        content: 'Imports index.css.'
                                    },
                                    {
                                        content: 'Defines styles for horizontal (stepper-item.horizontal) and vertical (stepper-item.vertical) progress steps.'
                                    },
                                    {
                                        content: 'Includes effects for completed and active steps.'
                                    },
                                    {
                                        content: 'Uses pseudo-elements (::after) for step indicators.'
                                    }
                                ]
                            },
                            {
                                label: 'model.css',
                                content: 'Styles for modal overlays: ',
                                childs: [
                                    {
                                        content: 'Imports index.css.'
                                    },
                                    {
                                        content: 'Sets up modal overlay (md-overlay) and modal content (md-content) styles.'
                                    },
                                    {
                                        content: 'Includes effects for modal visibility (md-show) and transitions.'
                                    },
                                    {
                                        content: 'Configures different modal effects (md-effect-1, md-effect-2, md-effect-3) with various transitions and transformations.'
                                    }
                                ]
                            },
                            {
                                label: 'input.css',
                                content: 'Styles for input elements:',
                                childs: [
                                    {
                                        content: 'Imports index.css.'
                                    },
                                    {
                                        content: 'Customizes input fields, including autofill background removal, number inputs, radio buttons, and date pickers (react-datepicker).'
                                    },
                                    {
                                        content: 'Defines styles for different states of radio buttons and input components.'
                                    }
                                ]
                            },
                        ]}
                    />
                    <p className="indent-[2rem]">
                        Each CSS file encapsulates specific styling rules and effects tailored for different UI components like tooltips, tables, progress steps, modals, and form inputs. They make extensive use of Tailwind CSS utility classes (@apply) to apply styles consistently and efficiently across the application. These styles collectively contribute to a cohesive and visually appealing user interface.
                    </p>
                </div>}
            />
            <ProgressStep type="number" listStep={listCSSFile} variant="vertical" />
        </div>
    );
};

export default CSSFilePage;