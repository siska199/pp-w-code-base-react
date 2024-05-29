import Button from "@components/ui/Button"

const ExampleButton = () => {
  return (
    <div className="flex gap-4">
      <div className="p-4 flex flex-col gap-4">
        <Button >Button</Button>
        <Button isContained={false}>Button</Button>
        <Button disabled>Button</Button>
        <Button isRounded>Button</Button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <Button variant={"gray"} >Button</Button>
        <Button variant={"gray"} isContained={false}>Button</Button>
        <Button variant={"gray"} disabled>Button</Button>
        <Button variant={"gray"} isRounded>Button</Button>

      </div>

      <div className="p-4 flex flex-col gap-4">
        <Button variant={"black"}>Button</Button>
        <Button variant={"black"} isContained={false}>Button</Button>
        <Button  variant={"black"} disabled>Button</Button>
        <Button variant={"black"} isRounded>Button</Button>

      </div>
    </div>
  )
}

export default ExampleButton