
import styles from "../../styles/pages/Cadastrar.module.css";

import { useState , useEffect } from "react";

const listaFilme = () => {

  const [genero, setGenero] = useState([]);
  const [selecionarGenero, setSelecionarGenero] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
  const pegarGenero = async () => {

    try {
      const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=5d7eca2e")
      const data = response.json()
      setGenero (data.genres)


    } catch (error) {

      console.error("Erro ao buscar o gênero:". error)
      
    }

}
}, []);

  useEffect(() => {
    if (selecionarGenero) {
      const pegarFilme = async () => {
        try {
          const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=5d7eca2e")
          const data = response.json()
          setFilmes (data.movie)

        } catch (error) {
            console.error("Erro ao buscar filme:", error) 
        
        }
      }
    }
     
  },[selecionarGenero]);

  const handleChangeGenre = (e) => {
    setSelecionarGenero(e.target.value)
  }


  return (
    <>
      <div className={styles.container}>
        <label htmlFor="generoSelecionado">Selecione um gênero:</label>
        <select id="generoSelecionado" value={selecionarGenero} onChange={handleChangeGenre}>
          <option value="">Selecione...</option>
          {genero.map(genero => (
            <option key={genero.id} value={genero}>{genero}</option>
          ))}
        </select>

        {selecionarGenero && <h2>Filmes do Gênero {genero.find(genre => genre.id === selecionarGenero)?.name}:</h2>}

    <ul>
        {filmes.map(filme => (
            <li key={filme}>{filme}</li>
        ))}
    </ul>
      </div>;

  </>
  )  
};

export default listaFilme;
