import Progressbar from "@components/ui/Progressbar"

const ExampleProgressbar = () => {
    return (
        <div className="w-full border p-[5rem] flex flex-col gap-4">
            <Progressbar value={50} valueTotal={100} size="small"/>
            <Progressbar value={50} valueTotal={100} />

        </div>
    )
}

export default ExampleProgressbar