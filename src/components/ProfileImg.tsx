const style = {
  img: {
    borderRadius: "100%",
  },
};

const ProfileImg = () => {
  return (
    <div>
      <img
        style={style.img}
        src="https://placekitten.com/100/100"
        alt="Profile photo"
      />
    </div>
  );
};

export default ProfileImg;
