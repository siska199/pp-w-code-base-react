
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import List from "@components/ui/List";
import codeStringComponentUi from "@lib/utils/code-string/component-ui";

const CardIntroList = () => {
  const listItem = [
    {
      label:'Label1',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      label:'Label2',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      label:'Label3',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      label:'Label4',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ]

  const listItemWithChild =[...Array(3)]?.map((_,i)=>({
    label:'Label'+i,
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    childs:[
      {
        label:'child-label1',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        label:'child-label2',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ]
  }))

  const listExample = [
    {
      component: <CardVariantComp
        title={'default'}
        withBorder={false}
        Component={<List
          items={listItem}
          customeIconLi={{
            0:"🌻"
          }}
        />}
      />
    },
    {
      component: <CardVariantComp
      title={'with child'}
      withBorder={false}
      Component={<List
        items={listItemWithChild}
        variantBadge={{
          0:"softborder-success",
          1 :"softborder-warning"
        }}
        customeIconLi={{
          1:<div className="w-[0.35rem] h-[0.35rem] mt-2 flex-shrink-0 bg-gray-500 rounded-[50%]"/>
        }}
      />}
    />
    }

  ]
  return (
    <CardIntroComponent
      title={'List'}
      subTitle="The List component in the provided code is a versatile tool for displaying structured content in a web application. It allows developers to easily render lists of items, supporting hierarchical structures with optional titles and custom styling."
      listExample={listExample }
      displayCodeBase={codeStringComponentUi.List}
    />
  );
}


export default CardIntroList;
