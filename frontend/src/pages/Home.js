import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:8080/api/workouts");
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setWorkouts(json.workouts);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
}

export default Home;
