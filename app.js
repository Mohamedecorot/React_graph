const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success">L'eau Bout</div>;
  }
  return <div className="alert alert-info">L'eau ne bout pas</div>;
}

function tryConvert(temperature, convert) {
  const value = parseFloat(temperature);
  if (Number.isNaN(value)) {
    return "";
  }
  return (Math.round(convert(value) * 100) / 100).toString();
}

// ReactDOM.render(
//   <BoilingVerdict celsius={110} />,
//   document.querySelector("#app")
// );

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature } = this.props;
    const name = "scale" + this.props.scale;
    const scaleName = scaleNames[this.props.scale];
    return (
      <div className="form-group">
        <label htmlFor={name}>Température (en {scaleName})</label>
        <input
          type="text"
          id={name}
          className="form-control"
          value={temperature}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: "c",
      temperature: 20,
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: "c",
      temperature,
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: "f",
      temperature,
    });
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "c" ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit =
      scale === "f" ? temperature : tryConvert(temperature, toFahrenheit);
    return (
      <div>
        {/* <div className="form-group">
          <label htmlFor="celsius">Température (en Celsius)</label>
          <input
            type="text"
            id="celcius"
            className="form-control"
            value={temperature}
            onChange={this.handleChange}
          />
        </div> */}
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}
ReactDOM.render(<Calculator />, document.querySelector("#app"));
