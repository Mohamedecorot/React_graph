class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      newsletter: false,
      checked: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //   handleChange(e) {
  //     this.setState({
  //       nom: e.target.value,
  //       checked: e.target.checked,
  //     });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <label htmlFor="nom">Mon nom</label>
  //         <input
  //           type="text"
  //           id="nom"
  //           name="nom"
  //           value={this.state.nom}
  //           onChange={this.handleChange}
  //         />
  //         <textarea
  //           type="text"
  //           id="nom"
  //           name="nom"
  //           value={this.state.nom}
  //           onChange={this.handleChange}
  //         ></textarea>
  //         <select value={this.state.nom} onChange={this.handleChange}>
  //           <option value="demo1">Demo 1</option>
  //           <option value="demo2">Demo 2</option>
  //           <option value="demo3">Demo 3</option>
  //         </select>
  //         <input
  //           type="checkbox"
  //           checked={this.state.checked}
  //           onChange={this.handleChange}
  //         />
  //         {this.state.checked ? (
  //           <div>un message affiché si on coche la checkbox</div>
  //         ) : null}
  //       </div>
  //     );
  //   }

  handleChange(e) {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            value={this.state.nom}
            onChange={this.handleChange}
            id="nom"
            name="nom"
          />
        </div>
        <div>
          <label htmlFor="prenom">Prenom</label>
          <input
            type="text"
            value={this.state.prenom}
            onChange={this.handleChange}
            id="prenom"
            name="prenom"
          />
        </div>
        <div>
          <label htmlFor="newsletter">s'abonner à la newsletter</label>
          <input
            type="checkbox"
            checked={this.state.newsletter}
            onChange={this.handleChange}
            id="newsletter"
            name="newsletter"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
