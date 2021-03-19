// https://fr.reactjs.org/docs
let n = 0;

function render() {
  const title = React.createElement(
    "h1",
    {},
    "Bonjour ",
    React.createElement("span", {}, n)
  );
  // console.log(title);
  ReactDOM.render(title, document.querySelector("#app"));
  // Equivalent à document.querySelector("#app").innerHTML = '<h1>Bonjour</h1>'
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);
