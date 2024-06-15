import CardIntro from "@components/cards/CardIntro"
import CardSubMenu from "@components/cards/CardSubMenu"
import Button from "@components/ui/Button"
import List from "@components/ui/List"


const IntroductionPage = () => {
    const listItemSubMenu1 = [
        {
            label: "Efficient Code Snippets: ",
            content: "Access ready-to-use code snippets that you can effortlessly integrate and customize to suit your project's requirements."
        },
        {
            label: "Robust Helper Functions: ",
            content: "Enjoy a collection of powerful helper functions that simplify complex tasks, from data manipulation to dynamic styling."
        },
        {
            label: "Tailored Styling Capabilities: ",
            content: "Utilize a pre-configured Tailwind CSS setup for seamless customization of styles such as colors, typography, and spacing."
        },
        {
            label: "Enhanced Component Library: ",
            content: "Benefit from a diverse library of components including advanced features like date pickers, dynamic input formatting, and SVG icon customization."
        },
        {
            label: "Developer-Centric Approach: ",
            content: "Designed with developers in mind, Code Base 199 provides the tools and guidelines needed to build scalable and maintainable applications from scratch."
        },
    ]
    return (
        <>
            <CardIntro
                title={'Introduction'}
                subTitle={<>
                    Code Base 199 is designed to ease developers into building applications from scratch, providing a comprehensive reference for code structure and component design. Unlike traditional component libraries, Code Base 199 offers ready-to-use code snippets that you can copy, paste, and customize to fit your specific needs. Although these snippets are ready to use, there are a few important prerequisites to keep in mind.
                    Therefore, it is essential <Button variant={"link-gray"} customeElement="link" to={"/docs/prerequisite/library"} label={'to read the prerequisites'} /> before using Code Base 199.
                </>}
            />
            <CardSubMenu title="Background" customeClass={{ title: "border-b-0", container: "gap-0" }}>
                <p>
                    The creator of Code Base 199, a seasoned developer, has often faced the challenges of starting projects from scratch, especially in frontend development. Developers are frequently left without the support of a UI/UX design system, making it difficult to anticipate the variations and future requirements of components. As projects evolve and new component variants are needed, maintaining and enhancing the codebase can become a daunting task, sometimes causing issues with existing code.
                    Code Base 199 provides developers with a clear picture of all possible component variations when creating a new component. This foresight helps in designing flexible and scalable components from the start.
                </p>
            </CardSubMenu>
            <CardSubMenu title="What Makes Code Base 199 Unique?" customeClass={{ title: "border-b-0", container: "gap-0" }}>
                <p>Code Base 199 sets itself apart with a unique blend of features designed to enhance your development experience:</p>
                <List items={listItemSubMenu1} />
            </CardSubMenu>
            <CardSubMenu title="Why Code Base 199?" customeClass={{ title: "border-b-0", container: "gap-0" }}>
                <p>
                    As developers, we understand the challenges of starting from scratch. Our goal is to provide a one-stop reference for developers, making it easier to structure and maintain codebases. Code Base 199 is your go-to resource for finding well-organized, reliable code snippets that help you build better applications.
                </p>
            </CardSubMenu>
            <CardSubMenu title="Join Us" customeClass={{ title: "border-b-0", container: "gap-0" }}>
                <p>
                    Dive into our comprehensive collection of code snippets and start building your dream projects with confidence and ease.
                </p>
            </CardSubMenu>
        </>
    )
}

export default IntroductionPage