import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  // const [workouts, setWorkouts] = useState([]);

  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:8080/api/workouts");
      const json = await response.json();
      if (response.ok) {
        // setWorkouts(json.workouts);
        dispatch({ type: "SET_WORKOUTS", payload: json.workouts });
      }
    };
    fetchWorkouts();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
