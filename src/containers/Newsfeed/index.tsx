import Post from "../../components/Post";
import Layout from "../UI/Layout";

const style = {
  margin: "0 auto",
};

const Newsfeed = () => {
  return (
    <Layout>
      <div style={style}>
        <Post image="https://placekitten.com/600/400" />
        <Post image="https://placekitten.com/600/400" />
      </div>
    </Layout>
  );
};

export default Newsfeed;
