import React from 'react'
import WelcomeSection from '../components/WelcomeUi/WelcomeSection'
import FinalSection from '../components/WelcomeUi/FinalSection'

const welcome = {
  title: "Bem-vindo à Pokedex Mundo Pokémon!",
  text: "Preparado para embarcar na jornada mais emocionante de todas? Aqui, sua jornada começa! Seja um treinador mestre ou um iniciante destemido, a Pokedex Mundo Pokémon é o seu guia essencial para explorar o vasto universo Pokémon."
}
const text1 = {
  title: "Explore e Descubra",
  text: "Navegue por nossa extensa base de dados de Pokémon e desvende os segredos por trás de cada criatura. Das planícies de Kanto às montanhas de Galar, todos os Pokémon aguardam para serem descobertos por você."
}
const text2 = {
  title: "Informações Detalhadas",
  text: "Obtenha informações detalhadas sobre habilidades, tipos, evoluções e muito mais. Torne-se um verdadeiro especialista em Pokémon e surpreenda seus amigos com seu conhecimento."
}
const text3 = {
  title: "Conecte-se com Outros Treinadores",
  text: "Junte-se à nossa comunidade de treinadores, compartilhe suas descobertas, estratégias e participe de discussões animadas. Afinal, a jornada Pokémon é ainda mais emocionante quando compartilhada!"
}
const text4 = {
  title: "Não perca tempo!",
  text: "Seja parte desta incrível jornada Pokémon. Crie sua conta agora e comece a sua aventura para se tornar um verdadeiro Mestre Pokémon. A emoção está apenas começando!"
}



export default function Welcome() {
  return (
    <div className=''>
      <WelcomeSection 
      welcome={welcome}
      text1={text1}
      text2={text2}
      />

      <FinalSection  
      text3={text3}
      text4={text4}
      />
      
      </div>



  )
}
