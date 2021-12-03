import * as React from "react";

const style = (center: boolean): React.CSSProperties => ({
  backgroundColor: "#eee",
  padding: "10px 15px",
  height: "calc(100vh - 75px)",
  width: "100%",
  display: "flex",
  justifyContent: center ? "center" : undefined,
  alignItems: center ? "center" : undefined,
  flexDirection: "column",
});

interface Props {
  children: JSX.Element | JSX.Element[];
  center?: boolean;
}

const Container = (props: Props) => {
  const { children, center = false } = props;
  return <div style={style(center)}>{children}</div>;
};

export default Container;
