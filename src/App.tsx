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

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
