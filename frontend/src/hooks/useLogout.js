import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutsContext();
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // Dispatch logout action
    authDispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
};
