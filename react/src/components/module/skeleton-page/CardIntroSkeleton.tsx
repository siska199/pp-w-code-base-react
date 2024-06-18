
import CardIntroComponent from "@components/cards/CardIntroComponent";
import Skeleton from "@components/ui/Skeleton";

const CardIntroSkeleton = () => {

  const listExample = [
    {
      component: <div className="w-full">
        <Skeleton isLoading={true} type={"text"}>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi recusandae, sunt repellat odit maiores aliquid illum qui adipisci molestiae nesciunt, corrupti quaerat distinctio, ex quas quo inventore cum? Molestiae explicabo voluptatibus odit repellendus officiis, atque maxime consequatur incidunt praesentium cupiditate odio corrupti. Culpa voluptate mollitia id sequi delectus natus odio architecto, nobis iste in corrupti ratione tenetur porro et perspiciatis! Earum possimus autem optio velit nobis maiores deleniti iste vel doloremque illo reiciendis consectetur aspernatur omnis natus quidem tempore molestiae quisquam ut, in eum neque quo commodi pariatur. Deleniti, fugiat.</span>
        </Skeleton>

      </div>
    },

  ]
  return (
    <CardIntroComponent
      title={'Skeleton'}
      subTitle="Description of Skeleton."
      listExample={listExample}
      displayCodeBase={displayCodeBase}
    />
  );
}

const displayCodeBase = `// Code for Skeleton`;

export default CardIntroSkeleton;
