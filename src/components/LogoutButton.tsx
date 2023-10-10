import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        onClick={() => logout()}
        className="bg-slate-950 text-slate-100 w-22 mt-10 h-20 rounded-2xl"
      >
        Sign Out
      </button>
    )
  );
};

export default LogoutButton;
