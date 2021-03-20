class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Momo",
      checked: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      nom: e.target.value,
      checked: e.target.checked,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="nom">Mon nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={this.state.nom}
          onChange={this.handleChange}
        />
        <textarea
          type="text"
          id="nom"
          name="nom"
          value={this.state.nom}
          onChange={this.handleChange}
        ></textarea>
        <select value={this.state.nom} onChange={this.handleChange}>
          <option value="demo1">Demo 1</option>
          <option value="demo2">Demo 2</option>
          <option value="demo3">Demo 3</option>
        </select>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        {this.state.checked ? (
          <div>un message affiché si on coche la checkbox</div>
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
