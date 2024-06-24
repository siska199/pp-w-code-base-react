
import { TBasePropsInput } from '@/types/ui/index';
import { IconMessage } from "@assets/icons";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputBase from "@components/ui/inputs/InputBase";
import useForm from '@hooks/useForm';
import codeStringComponentUi from '@lib/utils/code-string/component-ui';

const CardIntroInputBase = () => {
  const intialForm = {
    'variant-1':{
      label: 'Variant 1',
      placeholder: "Variant 1",
      variant: "v1"
    },
    'variant-2':{
      label: 'Variant 2',
      placeholder: "Variant 2",
      variant: "v2",
    },
    'variant-3':{
      label: 'Variant 3',
      placeholder: "Variant 3",
      variant: "v3",
    },
    'variant-4':{
      label: 'Variant 4',
      placeholder: "Variant 4",
      variant: "v4",
    },
    'variant-5':{
      label: 'Variant 5',
      placeholder: "Variant 5",
      variant: "v5",
    },
    'disabled':{
      label: 'Disabled',
      placeholder: "Disabled",
      variant: "v1",
      disabled: true,
    },
    'error':{
      label: 'Error',
      placeholder: "Error",
      variant: "v1",
      errorMessage: "Invalid Input",
    },
    "icon-left":{
      label: 'Icon Left',
      variant: "v1",
      customElements: {
        start: <IconMessage />
      }
    },
    'icon-right':{
      label: 'Icon right',
      variant: "v1",
      customElements: {
        end: <IconMessage />
      }
    },
    'icon-pre-start':{
      label: 'Pre End',
      variant: "v1",
      customElements: {
        preStart: "Http"
      }
    },
    'icon-pre-end':{
      name: 'icon-pre-end',
      label: 'Pre End',
      customElements: {
        preEnd: "Text Preend"
      }
    }
  }
  type TKey = keyof typeof intialForm
  const {form, handleOnChange} =useForm<TKey>({
   initialForm : intialForm
  }) 
  const listExample1 = [
    {
      title: 'Variant 1',
      props: form["variant-1"]
    },
    {
      title: 'Variant 2',
      props: form["variant-2"]
    },
    {
      title: 'Variant 3',
      props: form["variant-3"]
    },
    {
      title: 'Variant 4',
      props: form["variant-4"]
    },
    {
      title: 'Variant 5',
      props: form["variant-5"]
    },
  ]

  const listExample2 = [
    {
      title: 'Disabled',
      props:form["disabled"]
    },
    {
      title: 'Error',
      props: form["error"]
    },

  ]

  const listExample3 = [
    {
      title: 'Icon left',
      props: form["icon-left"]
    },
    {
      title: 'Icon Right',
      props: form["icon-right"]
    },
    {
      title: 'Pre Start',
      props: form["icon-pre-start"]
    },
    {
      title: 'Pre End',
      props:form["icon-pre-end"]
    },
  ]

  const listExample = [
    {
      title: 'Variant',
      component: listExample1?.map((data, i) => (
        <CardVariantComp
          key={i}
          title={data.title}
          withBorder={false}
          customeClass={{
            container: "w-full"
          }}
          Component={<InputBase
            onChange={handleOnChange}
            {...data?.props}
            variant={data?.props?.variant as TBasePropsInput['variant']}
          />}
        />
      ))
    },
    {
      title: 'State',
      component: listExample2?.map((data, i) => (
        <CardVariantComp
          key={i}
          title={data.title}
          withBorder={false}
          customeClass={{
            container: "w-full"
          }}
          Component={<InputBase
            onChange={handleOnChange}
            {...data?.props}
            variant={data?.props?.variant as TBasePropsInput['variant']}
          />}
        />
      ))
    },
    {
      title: 'With Icon',
      component: listExample3?.map((data, i) => (
        <CardVariantComp
          key={i}
          title={data.title}
          withBorder={false}
          customeClass={{
            container: "w-full"
          }}
          Component={<InputBase
            onChange={handleOnChange}
            {...data?.props}
            variant={data?.props?.variant as TBasePropsInput['variant']}
            customeElement={data?.props.customElements}
          />}
        />
      ))
    },

  ]


  return (
    <CardIntroComponent
      title={'Input Base'}
      subTitle="InputBase is a reusable React component for handling HTML input fields. It takes in various properties to customize the input and wraps it with a ContainerInput component that adds extra features like a clearable input option. It adjusts the placeholder based on the provided variant. This makes it easy to manage and extend input fields consistently across your application."
      listExample={listExample}
      displayCodeBase={codeStringComponentUi.InputBase}
    />
  );
}



export default CardIntroInputBase;
