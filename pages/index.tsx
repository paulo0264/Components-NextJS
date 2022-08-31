import type { NextPage } from 'next'
import Texto from '../components/Texto'
import ListaProduto from '../components/ListaProdutos'


const Home: NextPage = () => {
  return (
    <ListaProduto>
      <Texto text= "TV full HD 42 Polegadas"></Texto>
      <Texto text= "Celular Motorola G7 Play"></Texto>
      <Texto text = "Jeepe Vermelho"></Texto>
    </ListaProduto>

  )
}

export default Home
