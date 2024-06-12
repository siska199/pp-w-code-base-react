import Button from "@components/ui/Button"

const LandingPage = () => {
    return (
        <article className="">
            <div className="w-[35rem] flex flex-col justify-center items-center mx-auto h-[calc(100vh-10rem)] my-auto ">
                <h4 className="font-bold ">
                    Build Your Code Base
                </h4>
                <p className="text-gray text-body-large">
                    Beautifully structured code and components designed to simplify your development process. Accessible. Customizable. Open Source.
                </p>
                <div className="flex gap-4 mt-4">
                    <Button className="min-w-[7rem]">Get Sarted</Button>
                    <Button variant={"white"} className="font-medium min-w-[7rem]">Github</Button>

                </div>
            </div>
        </article>
    )
}

export default LandingPage