import Button from "@components/ui/Button"

const LandingPage = () => {
    return (
        <article className="h-[75vh] flex items-center">
            <div className="w-full md:w-[50rem] flex flex-col justify-center items-center mx-auto my-auto ">
                <h4 className="font-bold text-center ">
                    Empowering Frontend Developers,
                    <br />One Codebase at a Time.
                </h4>
                <p className="text-gray text-body-large text-center">
                    Code Base 199 aims to provide developers with a clear picture of all possible component variations when creating a new component. This foresight helps in building a robust and flexible codebase that can easily accommodate future changes.
                </p>
                <div className="flex w-full md:w-auto gap-4 mt-4">
                    <Button variant={"solid-primary"} className="min-w-[7rem]" to={"/docs"} label={'Get Sarted'} />
                    <Button variant={"solid-white"} className="min-w-[7rem]" to={"https://github.com/siska199/my-code-base-199"} label={'Github'} target="_blank" />
                </div>
            </div>
        </article>
    )
}

export default LandingPage