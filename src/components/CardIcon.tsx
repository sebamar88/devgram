import Logo from "../assets/imgs/DevGramLogo.svg";

const imgStyle = {
  width: "35%",
  margin: "0 auto",
  position: "absolute",
  top: "-75px",
  left: "32.5%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "1px solid #ddd",
  borderBottom: "none",
  height: "32%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as React.CSSProperties;

const styleImg = {
  width: "60%",
};

const CardIcon = () => {
  return (
    <div style={imgStyle}>
      <img style={styleImg} src={Logo} alt="Logo DevGram" />
    </div>
  );
};

export default CardIcon;
