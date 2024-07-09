import Badge from "@components/ui/Badge";
import Button from "@components/ui/Button";
import Tooltip from "@components/ui/Tooltip";

interface TProps {
  name: string;
  to?: string;
  importFrom?: string;
}

const Filename = (props: TProps) => {
  const { name, to, importFrom } = props
  const Label = (
    <Tooltip text={importFrom ? `import from ${importFrom}` : ''} customeClass={{ tooltip: 'before:min-w-[10rem]' }}>
      <Badge label={name} variant={"soft-warning"} className={`${to && 'underline'}`} />
    </Tooltip>
  )
  return to ? <Button className="!inline-block" label={Label} to={to} variant={"link-black"} /> : Label
}

export default Filename