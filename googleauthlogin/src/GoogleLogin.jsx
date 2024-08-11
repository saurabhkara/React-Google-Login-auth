import { useGoogleLogin } from "@react-oauth/google";

export default function GoogleLogin() {
  const googleResponse = async (authResult) => {
    try {
      console.log(authResult["code"]);
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: googleResponse,
    flow: () => {},
  });

  return (
    <div>
      <h3>Google Login</h3>
      <div>
        <button onClick={googleLogin}>Login with Google</button>
      </div>
    </div>
  );
}
