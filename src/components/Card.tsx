const style = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  padding: "10px 15px",
  position: "relative",
} as React.CSSProperties;

interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const Card = (props: Props) => {
  const { children } = props;
  return <div style={style}>{children}</div>;
};

export default Card;
