const style = {
  color: "#555",
  fontSize: "1.5rem",
  textAlign: "center",
} as React.CSSProperties;

interface Props {
  children: string;
}

const Title = (props: Props) => {
  return <h2 {...props} style={style} />;
};

interface Props {}

export default Title;
