import { MouseEvent } from "react";

export default function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "London",
    "Beijing",
    "Shenzhen",
    "Zurich",
  ];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div>
      <h1>List</h1>
      { items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
