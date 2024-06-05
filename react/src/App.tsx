
import ExampleButton from "@components/examples/ExampleButton"
import ExampleDropdown from "@components/examples/ExampleDropdown"
import ExampleInput from "@components/examples/ExampleInput"
import ExampleModal from "@components/examples/ExampleModal"
import ExampleProgressbar from "@components/examples/ExampleProgressbar"
import ExampleSkeleton from "@components/examples/ExampleSkeleton"
import ExampleTooltip from "@components/examples/ExampleTooltip"
import Image from "@components/ui/Image"
const App = () => {

  return (
    <>
      <Image src={"boyfriend.jpg"} />

      <ExampleButton />
      <ExampleInput />
      <ExampleModal />
      <ExampleDropdown />
      <ExampleProgressbar />
      <ExampleSkeleton />
      <ExampleTooltip />
    </>
  )
}

export default App