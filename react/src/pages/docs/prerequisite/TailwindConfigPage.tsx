import CardIntro from "@components/cards/CardIntro";
import Badge from "@components/ui/Badge";
import CodeBlock from "@components/ui/CodeBlock";
import Container from "@components/ui/Container";

const TailwindConfigPage = () => {
  return (
    <Container gap={"base"}>
      <CardIntro
        title={'Tailwind config file'}
        subTitle={<>
          This Tailwind CSS configuration file <Badge label={'(tailwind.config.js)'} variant={"soft-gray"} /> enhances the default Tailwind CSS theme with custom font weights, sizes, spacing utilities, and extended styles like new fonts, box shadows, and color palette modifications. It also specifies where Tailwind CSS should look for class definitions within the project files. These customizations enable consistent and flexible styling throughout the application, tailored to specific design requirements and preferences.
        </>}
      />
      <CodeBlock
        fileName="tailwind.config.js"
        customeStyle={{
          pre: {
            maxHeight: '50rem'
          }
        }}
        codeString={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx, svg}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx,css,}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",

  ],

  theme: {
    // Rewrite tailwind style
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },

    fontSize: {
      'heading-05': '30px',
      'heading-04': '36px',
      'heading-03': '48px',
      'heading-02': '60px',
      'heading-01': '72px',

      'body-tiny': '10px',
      'body-small': '12px',
      'body-base': '14px',
      'body-medium': '16px',
      'body-large': '18px',
      'body-xl': '20px',
      'body-2xl': '24px',
      'body-3xl': '28px'


    },
    spacing: {
      '0': '0px',
      'px': '1px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '2': '0.50rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem'
    },


    // Extend style form tailwind
    extend: {
      fontFamily: {
        'staryssa': ['Staryssa'],
      },
      boxShadow: {
        // '4-y-1': '0px 1px 4px 0px rgba(226, 232, 240, 1)',
      },
      borderColor: {
        DEFAULT: '#e5e7eb',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        "broken-white": '#F8F8FC',
        disabled: "#f9fafb",
        transparent: "transparent",
        gray: {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
          DEFAULT: '#6b7280'
        },
        primary: {
          '50': '#F0F6FF',
          '100': '#DCEBFE',
          '200': '#7AB7FF',
          '300': '#50A1FF',
          '400': '#2E88F6',
          '500': '#357AEA',
          '600': '#1055EA',
          '700': '#1347CC',
          '800': '#0A318C',
          '900': '#1D223F',
          DEFAULT: '#357AEA',
        },
        // primary <PINK>: {
        //   '50': '#FDF2F8',
        //   '100': '#FCE8F4',
        //   '200': '#FBD0E8',
        //   '300': '#F9A9D5',
        //   '400': '#F471B5',
        //   '500': '#EC4699',
        //   '600': '#DB2979',
        //   '700': '#BF185D',
        //   '800': '#9B174C',
        //   '900': '#811842',
        //   DEFAULT: '#EC4699',
        // },
        success: {
          '50': '#F0FDF4',
          '100': '#DCFCE7',
          '200': '#BBF7D0',
          '300': '#86EFAC',
          '400': '#4ADE80',
          '500': '#22C55E',
          '600': '#16A34A',
          '700': '#15803D',
          '800': '#166534',
          '900': '#14532D',
          DEFAULT: '#22C55E'
        },
        warning: {
          '50': '#FFFBEB',
          '100': '#FEF3C7',
          '200': '#FDE68A',
          '300': '#FCD34D',
          '400': '#FBBF24',
          '500': '#F59E0B',
          '600': '#D97706',
          '700': '#B45309',
          '800': '#92400E',
          '900': '#78350F',
          DEFAULT: '#F59E0B'
        },
        error: {
          '50': '#FEF2F2',
          '100': '#FEE2E2',
          '200': '#FECACA',
          '300': '#FCA5A5',
          '400': '#F87171',
          '500': '#EF4444',
          '600': '#DC2626',
          '700': '#B91C1C',
          '800': '#991B1B',
          '900': '#7F1D1D',
          DEFAULT: '#EF4444'
        }
      },
    },
  },
};`} />
    </Container>
  );
};

export default TailwindConfigPage;