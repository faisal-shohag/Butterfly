import Lottie from "react-lottie-player";
import butterfly from '@/lottie/butterfly.json';

const Loading = () => {
    return (
        <div className="flex relative justify-center items-center flex-col">
        <Lottie
          loop
          animationData={butterfly}
          play
          style={{ width: '50%', height: '50%' }}
        />
        <div className="text-xl font-semibold lg:absolute bottom-10">Loading...</div>
        </div>
    );
};

export default Loading;