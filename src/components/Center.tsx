const style = {
  width: "100%",
  textAlign: "center",
} as React.CSSProperties;

interface Props {
  children: React.ReactNode;
}

const Center = (props: Props) => {
  return <div {...props} style={style} />;
};

export default Center;
