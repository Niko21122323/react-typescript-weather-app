import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="h-screen bg-slate-950/10 items-center flex justify-center rounded-3xl">
        <button
          onClick={() => loginWithRedirect()}
          className="text-slate-100 text-5xl"
        >
          Sign In
        </button>
      </div>
    )
  );
};

export default LoginButton;
