const style = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  padding: "10px 15px",
  borderRadius: "4px",
  width: "calc(100% - 30px)",
  marginBottom: "10px",
};

const spanStyle = {
  color: "#777",
  fontSize: "10px",
  textTransform: "uppercase",
  fontWeight: "900",
} as React.CSSProperties;

interface Props {
  placeholder?: string;
  label: string;
}

const Input = (props: Props) => {
  const label = props.label;
  return (
    <div>
      <span style={spanStyle}>{label}</span>
      <input {...props} style={style} />
    </div>
  );
};

export default Input;
