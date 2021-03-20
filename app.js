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
    window.clearInterval(this.state.timer);
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
    this.state = { n: props.start, timer: null };
  }

  componentDidMount() {
    this.play();
  }

  componentWillUnmount() {
    this.pause();
  }

  increment() {
    this.setState(function (state, props) {
      return { n: this.state.n + props.step };
    });
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null,
    });
  }

  play() {
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }

  reset() {
    this.pause;
    this.play;
    this.setState((state, props) => ({ n: props.start }));
  }

  render() {
    return (
      <div>
        Valeur : {this.state.n}
        {this.state.timer ? (
          <button onClick={this.pause.bind(this)}>Pause</button>
        ) : (
          <button onClick={this.play.bind(this)}>Lecture</button>
        )}
        <button onClick={this.reset.bind(this)}>Réinitialiser</button>
      </div>
    );
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  increment(e) {
    e.preventDefault();
    this.setState(function (state, props) {
      return { n: this.state.n + 1 };
    });
  }

  render() {
    return (
      <div>
        Valeur : {this.state.n}{" "}
        <button onClick={this.increment.bind(this)}>Incrémenter</button>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Welcome name="momo" />
      <Welcome name="coco" />
      <Clock />
      <Incrementer start={10} />
      <Incrementer start={100} step={10} />
      <ManualIncrementer />
    </div>
  );
}
// ReactDOM.render(
//   <Welcome name="momo">ça va</Welcome>,
//   document.querySelector("#app")
// );
ReactDOM.render(<Home />, document.querySelector("#app"));
