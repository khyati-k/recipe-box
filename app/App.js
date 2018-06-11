import React from "react";

const data = [
  {
    id: 1,
    name: "omlette",
    ingredient: ["eggs", "milk", "salt"]
  }
];

function Box(props) {
  return (
    <span>
      {props.recipe.name}
      <ul>{props.recipe.ingredient.map(i => <li key={i}>{i}</li>)}</ul>
      <button onClick={() => props.handleRemove(props.recipe.id)}>
        Delete
      </button>
    </span>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: data
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.setState(currentState => ({
      recipes: currentState.recipes.concat("8")
    }));
  }
  handleRemove(i) {
    this.setState(currentState => ({
      recipes: currentState.recipes.filter(recipe => recipe.id !== i)
    }));
  }
  render() {
    return (
      <div>
        <h1>RECIPE BOX</h1>
        {this.state.recipes.map(recipe => (
          <Box
            key={recipe.id}
            recipe={recipe}
            handleRemove={this.handleRemove}
          />
        ))}
       
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default App;
