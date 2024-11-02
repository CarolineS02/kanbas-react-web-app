const hello = () => {
  alert("Hello World!");
};
const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};
export default function ClickEvent() {
  const handleClick = (parameter = "Hello") => {
    console.log(parameter)
  }

  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        className="btn btn-secondary m-1"
        onClick={hello} id="wd-hello-world-click">
        Hello World!</button>
      <button onClick={() => lifeIs("Good!")}
        className="btn btn-secondary m-1"
        id="wd-life-is-good-click">
        Life is Good!</button>
      <button onClick={() => {
        hello();
        lifeIs("Great!");
      }} id="wd-life-is-great-click"
        className="btn btn-secondary m-1">
        Life is Great!
      </button>
      <hr />
    </div>
  );
}
