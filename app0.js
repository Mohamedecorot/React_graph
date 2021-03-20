// https://fr.reactjs.org/docs
let n = 0;

// function render() {
//   const title = React.createElement(
//     "h1",
//     {},
//     "Bonjour ",
//     React.createElement("span", {}, n)
//   );
//   // console.log(title);
//   ReactDOM.render(title, document.querySelector("#app"));
//   // Equivalent à document.querySelector("#app").innerHTML = '<h1>Bonjour</h1>'
// }

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}

function render() {
  const items = ["Tache 1", "Tache 2", "Tache 3"];
  const lis = items.map((item, k) => <li key={k}>{item}</li>);
  const title = (
    <div>
      <h1 className="title">
        Coucou
        <span> {numberFormat(n)}</span>
      </h1>
      <ul>{lis}</ul>
    </div>
  );
  ReactDOM.render(title, document.querySelector("#app"));
}
render();

window.setInterval(() => {
  n++;
  render();
}, 1000);
