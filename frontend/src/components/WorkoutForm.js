import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useWorkoutsContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("http://localhost:8080/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Load (kg):</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      <label>Reps:</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
