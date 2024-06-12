import Button from "@components/ui/Button"

const LandingPage = () => {
    return (
        <article className="h-[75vh] flex items-center">
            <div className="w-full md:w-[35rem] flex flex-col justify-center items-center mx-auto my-auto ">
                <h4 className="font-bold ">
                    Build Your Code Base
                </h4>
                <p className="text-gray text-body-large">
                    Beautifully structured code and components designed to simplify your development process. Accessible. Customizable. Open Source.
                </p>
                <div className="flex w-full md:w-auto gap-4 mt-4">
                    <Button customeElement={"link"} className="min-w-[7rem]" to={"/docs"}>Get Sarted</Button>
                    <Button customeElement={"link"} variant={"white"} className="font-medium min-w-[7rem]" to={"https://github.com/siska199/my-code-base-199"} newTab>Github</Button>
                </div>
            </div>
        </article>
    )
}

export default LandingPage