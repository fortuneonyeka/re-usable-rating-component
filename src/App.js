
import StarRating from './components/StarRating';

function App() {
  return (
    <StarRating maxRating={5}  className="test" messages={["Terrible", "Bad","okay","Good", "Amazing"]} defaultRating={3}/>
  );
}

export default App;
