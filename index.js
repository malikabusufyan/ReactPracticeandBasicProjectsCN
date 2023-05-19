// const reactHeading = React.createElement(
//   "h1",
//   { className: "head" },
//   "Hello React"
// );
// This is not working for me ReactDOM.createRoot(document.getElementById("root").render(reactHeading));
// const root = document.getElementById("root");
// const rootElement = ReactDOM.createRoot(root);
// rootElement.render(reactHeading);

const imageSrc = "https://files.codingninjas.in/coding-ninjas-24647.png";
const reactImage = React.createElement("img", { src: imageSrc });

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
rootElement.render(reactImage);
