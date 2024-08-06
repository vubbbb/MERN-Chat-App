import Lottie from "react-lottie";
import { animationDefaultOptions } from "../../../../lib/utils";

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-300">
      <Lottie
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOptions}
      />
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 text-3xl transition-all duration-300">
        <h3 className="poppins-medium">
          Hi<span className="text-purple-500">!</span> Welcome to{" "}
          <span className="text-purple-500">Send Nude</span> Chat App
          <span className="text-purple-500">.</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
