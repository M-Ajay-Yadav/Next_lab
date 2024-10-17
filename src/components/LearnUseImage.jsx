import Image from "next/image";
import MyImg from "../../public/images/RoyalBrothers.png";

const LearnUseImage = () => {
  return (
    <>
      <Image src={MyImg} alt="My Image" width={1000} />
    </>
  );
};

export default LearnUseImage;
