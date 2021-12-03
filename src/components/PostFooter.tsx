import { Share } from "iconsax-react";
import { Like } from "iconsax-react";
import "./PostFooter.scss";

const PostFooter = () => {
  return (
    <div className="footerContainer">
      <div className="footerButton">
        <Like variant="Bold" size={20} color="blue" /> Like
      </div>
      <div className="footerButton">
        <Share variant="Bold" size={20} color="green" /> Share
      </div>
    </div>
  );
};

export default PostFooter;
