import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  async function handleClick() {
    const response = await fetch(
      "http://localhost:8080/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json.workout });
    }
  }
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): {workout.load}</strong>
      </p>
      <p>
        <strong>Reps: {workout.reps}</strong>
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
