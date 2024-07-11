import ListGroup from "./components/ListGrup";

function App() {
  const items = [
    "New York",
    "San Francisco",
    "London",
    "Beijing",
    "Shenzhen",
    "Zurich",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
