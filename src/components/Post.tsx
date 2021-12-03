import PostFooter from "./PostFooter";

const style = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  padding: "10px 15px",
  position: "relative",
  marginBottom: "10px",
} as React.CSSProperties;

interface Props {
  image: string;
}

const Post = (props: Props) => {
  const { image } = props;
  return (
    <div style={style}>
      <img src={image} alt="post" />
      <PostFooter />
    </div>
  );
};

export default Post;
