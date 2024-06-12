import CardIntro from "@components/cards/CardIntro"
import CardSubMenu from "@components/cards/CardSubMenu"
import List from "@components/ui/List"


const IntroductionPage = () => {
    const listItemSubMenu1 = [
        {
            label: "Not Just a Component Library: ",
            content: "We are not available as an npm package. Instead, you pick the components you need, copy the code, and integrate it directly into your project."
        },
        {
            label: "Your Code, Your Way: ",
            content: "Each piece of code is designed to be flexible and customizable, allowing you to tailor it to your specific requirements and preferences."
        },
        {
            label: "Comprehensive and Maintained: ",
            content: "Code Base 199 covers a wide range of common logic and structures needed for developing robust applications, helping you avoid pitfalls and ensuring your codebase is easy to maintain."
        }
    ]
    return (
        <>
            <CardIntro
                title={'Introduction'}
                subTitle={'Code Base 199 is designed to ease developers into building applications from scratch, providing a comprehensive reference for code structure and component design. Unlike traditional component libraries, Code Base 199 offers ready-to-use code snippets that you can copy, paste, and customize to fit your specific needs.'}
            />
            <CardSubMenu title="What Makes Code Base 199 Unique?" customeClass={{ title: "border-b-0", container: "gap-0" }}>
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