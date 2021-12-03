import * as React from "react";

const style = (block: boolean) => ({
  backgroundColor: "#00B1D2",
  border: "0px",
  padding: "10px 15px",
  borderRadius: "4px",
  color: "white",
  fontWeight: "bold",
  width: block ? "100%" : undefined,
  marginBottom: block ? "10px" : undefined,
});

interface Props {
  children: string;
  block?: boolean;
}

const Button = (props: Props) => {
  const { block = false } = props;
  return <button {...props} style={style(block)} />;
};

export default Button;
