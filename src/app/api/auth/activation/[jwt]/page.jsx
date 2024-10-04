import { activateUser } from "../../actions/action";
import Verified from "./verified";


const ActivationPage = async ({ params }) => {
  // console.log("Params",params.jwt)
  const result = await activateUser(params.jwt);

  return (
    <div className=" flex flex-col items-center justify-center">
      {result.message === "!exist" ? (
        <p className="text-red-500 text-2xl">The user does not exist</p>
      ) : result.message === "verified" ? (
        <Verified title={'Verified!'} subtitle={'Your account has already been verified!'}/>
      ) : result.message === "success" ? (
        <p>
          <Verified title={'Verified!'} subtitle={'Your account has been verified!'}/>
        </p>
      ) : (
        <p className="text-yellow-500 text-2xl">Oops! Something went wrong!</p>
      )}
    </div>
  );
};

export default ActivationPage;
