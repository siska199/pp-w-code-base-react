
import { TBasePropsInput } from '@/types/ui/index';
import { IconMessage } from "@assets/icons";
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import InputBase from "@components/ui/inputs/InputBase";
import { TEventOnChange } from "@types";
import { useState } from "react";

const CardIntroInputBase = () => {

  const [form, setForm] = useState({
    'variant-1':{
      value:''
    },
    'variant-2':{
      value:''
    },
    'variant-3':{
      value:''
    },
    'variant-4':{
      value:''
    },
    'variant-5':{
      value:''
    },

    'disabled' : {
      value :''
    },
    'error' : {
      value :''
    },
    'icon-left' : {
      value :''
    },    
    'icon-right' : {
      value :''
    },
    'icon-pre-start' : {
      value :''
    },
    'icon-pre-end' : {
      value :''
    },
  })

  const handleOnChange = (e:TEventOnChange)=>{
    const name = e.target.name as keyof typeof form
    const value= e.target.value

    setForm({
      ...form,
      [name]:{
        ...form[name],
        value
      }
    })
  }

  const listExample1 = [
    {
      title :'Variant 1',
      props :{
        name:'variant-1',
        label : 'Variant 1',
        placeholder :"Variant 1",
        variant:"v1",
        ...form["variant-1"]
      }
    },
    {
      title :'Variant 2',
      props :{
        name:'variant-2',
        label : 'Variant 2',
        placeholder :"Variant 2",
        variant:"v2",
        ...form["variant-2"]
      }
    },
    {
      title :'Variant 3',
      props :{
        name:'variant-3',
        label : 'Variant 3',
        placeholder :"Variant 3",
        variant:"v3",
        ...form["variant-3"]
      }
    },
    {
      title :'Variant 4',
      props :{
        name:'variant-4',
        label : 'Variant 4',
        placeholder :"Variant 4",
        variant:"v4",
        ...form["variant-4"]
      }
    },
    {
      title :'Variant 5',
      props :{
        name:'variant-5',
        label : 'Variant 5',
        placeholder :"Variant 5",
        variant:"v5",
        ...form["variant-5"]
      }
    },
  ]
  
  const listExample2 = [
    {
      title :'Disabled',
      props :{
        name:'disabled',
        label : 'Disabled',
        placeholder :"Disabled",
        variant:"v1",
        ...form["disabled"],
        disabled:true
      }
    },
    {
      title :'Error',
      props :{
        name:'error',
        label : 'Error',
        placeholder :"Error",
        variant:"v1",
        errorMessage:"Invalid Input",
        ...form["error"]
      }
    },

  ]

  const listExample3 = [
    {
      title :'Icon left',
      props :{
        name:'icon-left',
        label : 'Icon Left',
        variant:"v1",
        ...form["icon-left"],
        customElements:{
          start: <IconMessage />
        }
      }
    },
    {
      title :'Icon Right',
      props :{
        name:'icon-right',
        label : 'Icon right',
        variant:"v1",
        ...form["icon-right"],
        customElements:{
          end:  <IconMessage /> 
        }
      }
    },
    {
      title :'Pre Start',
      props :{
        name:'icon-pre-start',
        label : 'Pre start',
        variant:"v1",
        ...form["icon-pre-start"],
        customElements:{
          preStart : "Http"
        }
      }
    },
    {
      title :'Pre End',
      props :{
        name:'icon-pre-end',
        label : 'Pre End',
        variant:"v1",
        ...form["icon-pre-end"],
        customElements:{
          preEnd : "Text Preend"
        }
      }
    },
  ]

  const listExample = [
    {
      title :'Variant',
      component : listExample1?.map((data,i)=>(
      <CardVariantComp
        key={i}
        title={data.title}
        withBorder={false}
        customeClass={{
          container:"w-full"
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
      title :'State',
      component : listExample2?.map((data,i)=>(
      <CardVariantComp
        key={i}
        title={data.title}
        withBorder={false}
        customeClass={{
          container:"w-full"
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
      title :'With Icon',
      component : listExample3?.map((data,i)=>(
      <CardVariantComp
        key={i}
        title={data.title}
        withBorder={false}
        customeClass={{
          container:"w-full"
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
    listExample={listExample }
    displayCodeBase={displayCodeBase}
  />
  );
}

const displayCodeBase = `import { TBasePropsInput } from '@/types/ui/index';
import ContainerInput from "@components/ui/inputs/ContainerInput";
import React from 'react';

interface TProps extends TBasePropsInput, React.HTMLProps<HTMLInputElement> {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase = (props: TProps) => {
    const { ...attrs } = props;
    return (
        <ContainerInput<React.HTMLProps<HTMLInputElement>>  {...attrs} isClerable>
            {
                (attrsInput) => <input
                    {...attrsInput}
                    id={attrsInput?.name}
                    placeholder={attrs?.variant === "v2" ? "" : attrsInput?.placeholder || ""}
                />
            }
        </ContainerInput>
    );
}



export default InputBase;`;

export default CardIntroInputBase;
