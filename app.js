function WelcomeFunc({ name, children }) {
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        Il est {this.state.date.toLocaleTimeString()} le{" "}
        {this.state.date.toLocaleDateString()}
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start };
    this.timer = null;
  }

  componentDidMount() {
    window.setInterval(this.increment.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  increment() {
    this.setState(function (state, props) {
      return { n: this.state.n + props.step };
    });
  }

  render() {
    return <div>Valeur : {this.state.n}</div>;
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

function Home() {
  return (
    <div>
      <Welcome name="momo" />
      <Welcome name="coco" />
      <Clock />
      <Incrementer start={10} />
      <Incrementer start={100} step={10} />
    </div>
  );
}
// ReactDOM.render(
//   <Welcome name="momo">ça va</Welcome>,
//   document.querySelector("#app")
// );
ReactDOM.render(<Home />, document.querySelector("#app"));
