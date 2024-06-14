import Button from "@components/ui/Button"

const LandingPage = () => {
    return (
        <article className="h-[75vh] flex items-center">
            <div className="w-full md:w-[50rem] flex flex-col justify-center items-center mx-auto my-auto ">
                <h4 className="font-bold text-center ">
                    Streamline Your Frontend Development Process
                </h4>
                <p className="text-gray text-body-large text-center">
                    Building a robust and scalable frontend codebase has never been easier. Codebase 199 provides developers with the tools and guidelines necessary to create a strong foundation for any frontend project.                </p>
                <div className="flex w-full md:w-auto gap-4 mt-4">
                    <Button customeElement={"link"} variant={"solid-primary"} className="min-w-[7rem]" to={"/docs"} label={'Get Sarted'} />
                    <Button customeElement={"link"} variant={"solid-white"} className="min-w-[7rem]" to={"https://github.com/siska199/my-code-base-199"} label={'Github'} target="_blank" />
                </div>
            </div>
        </article>
    )
}

export default LandingPage