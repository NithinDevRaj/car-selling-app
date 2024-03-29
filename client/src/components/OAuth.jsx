import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(true)
  //handler for login
  const handlerGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });


      const data = await res.json();
      console.log(data)
      if (data.success) {
        console.log('cannot login')
        setAuthError(false)
      } else {
        console.log(data)
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log("could not sign in with google ", error);
    }
  };
  return (
    <>
      <button
        onClick={handlerGoogleClick}
        type="button"
        className="bg-red-700 rounded-lg p-3 uppercase text-white hover:opacity-95"
      >
        continue with google
      </button>


      {authError ? <span> </span> : <span className="text-red-500">please try again....!</span>}

    </>

  );
};

export default OAuth;
