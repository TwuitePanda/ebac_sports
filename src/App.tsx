import React, { useState } from 'react'
import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const App: React.FC = () => {
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  const favoritar = (produto: Produto) => {
    const isFavorito = favoritos.find((p) => p.id === produto.id)
    if (isFavorito) {
      setFavoritos(favoritos.filter((p) => p.id !== produto.id))
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </Provider>
  )
}

export default App
