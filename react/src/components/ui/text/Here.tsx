import Button from "@components/ui/Button";

interface TProps {
  to: string;
}

const Here = (props: TProps) => {
  const { to } = props;
  return <Button label="here" to={to} target="_blank" />;
};

export default Here;
