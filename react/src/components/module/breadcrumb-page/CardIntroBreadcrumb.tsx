
import CardIntroComponent from "@components/cards/CardIntroComponent";
import CardVariantComp from "@components/cards/CardVariantComp";
import Breadcrumb from "@components/ui/Breadcrumb";
import listMenuNavbar from "@lib/utils/data/menu-navbar";

const CardIntroBreadcrumb = () => {

  const listExample = [
    {
      title: "",
      component: <div className="flex flex-col ">
        <CardVariantComp
          title={"Default"}
          Component={<Breadcrumb items={listMenuNavbar} activeItem={0}/>}
          customeClass={{
            container: "border-none [&>p]:min-w-[7rem] !flex-row-reverse !p-0 !justif-start"
          }}
          
        />

        <CardVariantComp
          title={"No Divider"}
          Component={<Breadcrumb items={listMenuNavbar} withIconDivider={false} activeItem={1}/>}
          customeClass={{
            container: "border-none [&>p]:min-w-[7rem] !flex-row-reverse  !p-0 !justify-end"
          }}
        />

        <CardVariantComp
          title={"Custome Icon Divider"}
          Component={<Breadcrumb items={listMenuNavbar} customeIconDivider={"/"} activeItem={2}/>}
          customeClass={{
            container: "border-none [&>p]:min-w-[7rem] !flex-row-reverse  !p-0 !justify-end"
          }}
        />
      </div>
    }
  ]


  return (
    <CardIntroComponent
      title={'Breadcrumb'}
      subTitle="Description of Breadcrumb."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Breadcrumb`;

export default CardIntroBreadcrumb;
