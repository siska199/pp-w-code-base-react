import Badge from "@components/ui/Badge";
import Button from "@components/ui/Button";
import Tooltip from "@components/ui/Tooltip";
import { cn } from "@lib/utils/helper";

interface TProps {
  name: string;
  to?: string;
  importFrom?: string;
}

const Filename = (props: TProps) => {
  const { name, to, importFrom } = props;
  const tooltipMessage = importFrom ? "import from " + importFrom : "";

  const Label = (
    <Tooltip text={tooltipMessage} customeClass={{ tooltip: "before:min-w-[10rem]" }}>
      <Badge
        label={name}
        variant={"soft-warning"}
        className={cn({
          underline: to,
        })}
      />
    </Tooltip>
  );
  return to ? <Button className="!inline-block" label={Label} to={to} variant={"link-black"} target="_blank" /> : Label;
};

export default Filename;
