import React from "react"
import { Counter } from "./Components/Counter/Counter";

export class App extends React.Component {
  constructor() {
    super()
    this.state = {showCounter: false}
  }

  render() {
    return (
      <>
        <h1>Ciclo de Vida do React</h1>
        <button onClick={() => {
          this.setState({showCounter: !this.state.showCounter});
        }}
        >{ this.state.showCounter ? 'Remover contador' : 'Mostrar contador'}</button>

        {this.state.showCounter && <Counter />}
      </>
    )
  }
}