import React from 'react'

export class Counter extends React.Component {
  constructor() {
    super()

    this.state = {contador: 0}

    console.log('Construindo a classe Counter')
  }

  UNSAFE_componentWillMount() {
    console.log('O componente contador está prestes a ser montado')
  }

  componenteDidMount() {
    console.log("O componente contador foi montado ✅")

    document.addEventListener("scroll", this.consoleScroll)
  }

  shouldComponentUpdate() {
    // if (this.state.contador === 2 ) return false
    return true
  }

  UNSAFE_componentWillUpdate() {
    console.log("O componente contador será atualizado")
  }

  componentWillUnmount() {
    console.log("O componente contador será desmontado")

    document.removeEventListener("scroll", this.consoleScroll)
  }

  consoleScroll() {
    console.log("Rolando a página...")
  }

  render() {
    console.log("Renderizando o componente contador...")
    return (
      <div>
        <h2>{this.state.contador}</h2>

        <button onClick={() => this.setState({ contador: this.state.contador - 1 })}>Decrementar</button>
        <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>Incrementar</button>
      </div>
    )
  }
}