/*const header = React.createElement("h1", {
    id : "Heading",
    xyz : "abc"
}, "Hello World from React!");
*/

const Parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "I am an H1 Tag"),
    React.createElement("h2", {}, "I am an H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 Tag"),
    React.createElement("h2", {}, "I am an H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);
