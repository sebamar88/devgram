import Post from "../../components/Post";
import Layout from "../UI/Layout";
import ProfileImg from "../../components/ProfileImg";
import Button from "../../components/Button";
import Card from "../../components/Card";

const style = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postContainer: {
    display: "flex",
    flexFlow: "wrap",
    alignItems: "center",
    margin: "1rem 0",
  },
  post: {
    width: "33%",
    marginBottom: ".5rem",
  },
  img: {
    width: "100%",
    height: "auto",
  },
};

const Profile = () => {
  return (
    <Layout>
      <div style={style.container}>
        <ProfileImg />
        <Button>Edit Profile</Button>
      </div>
      <div style={style.postContainer}>
        <div style={style.post}>
          <Card>
            <img style={style.img} src="https://placekitten.com/1000" alt="" />
          </Card>
        </div>
        <div style={style.post}>
          <Card>
            <img style={style.img} src="https://placekitten.com/1000" alt="" />
          </Card>
        </div>
        <div style={style.post}>
          <Card>
            <img style={style.img} src="https://placekitten.com/1000" alt="" />
          </Card>
        </div>
        <div style={style.post}>
          <Card>
            <img style={style.img} src="https://placekitten.com/1000" alt="" />
          </Card>
        </div>
        <div style={style.post}>
          <Card>
            <img style={style.img} src="https://placekitten.com/1000" alt="" />
          </Card>
        </div>
        <div style={style.post}>
          <Card>
            <img style={style.img} src="https://placekitten.com/1000" alt="" />
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
