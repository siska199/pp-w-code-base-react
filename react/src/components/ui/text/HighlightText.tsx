interface TPropsHighlight {
  text: string;
  highlight?: string;
}

const HighlightText = (props: TPropsHighlight) => {
  const { highlight, text } = props;
  if (!highlight) return text;

  const regex = new RegExp(`(${highlight})`, 'ig');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="bg-teal-400 px-0.5">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
};

export default HighlightText;
