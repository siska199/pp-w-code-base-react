import "@assets/styles/index.css"
import "@assets/styles/ui/input.css"
import "@assets/styles/ui/modal.css"
import ExampleButton from "@components/examples/ExampleButton"
import ExampleDropdown from "@components/examples/ExampleDropdown"
import ExampleInput from "@components/examples/ExampleInput"
import ExampleModal from "@components/examples/ExampleModal"

const App = () => {
  return (
    <>
      <ExampleButton/>
      <ExampleInput/>
      <ExampleModal/>
      <ExampleDropdown/>
    </>
  )
}

export default App