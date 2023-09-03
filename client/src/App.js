import Car from "./Car"
import Goal from "./Goal"
function App() {
  const cars=["fords","bmw","owl"]
  return (
    <>
    <Car color="red" name="bmw"  cars={cars}/>
    <Goal isGoal={true}/>
    </>
  );
}

export default App;
