import style from '../styles/components/card.module.css'

const card = () => {
    const [filme, setFilme] = useState([])

    useEffect(()=> {
        const getFilme = async () => {
      
          try {
            const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=5d7eca2e")
            const data = response.json()
            setFilme (data.filme)
      
      
          } catch (error) {
      
            console.error("Erro ao pegar o filme:". error)
            
          }
      
      }
      getFilme()

      }, []);


  return (
    <>
    <div className= {style.cardContainer}>
        
        {filme.map (filme => {
        
            <div key={filme.id} className={style.filmCard}>
            <Subtitle content='Título: ' />
            <Text content={filme.title} />
            <Subtitle content='Ano de lançamento: ' />
            <Text content={filme.year} />
            <Subtitle content='Gênero: ' />
            <Text content={filme.genre} />
            <Subtitle content='Direção: ' />
            <Text content={filme.director} />
            <Subtitle content='Sinopse: ' />
            <Text content={filme.sinopse} />
                
            </div>
               
        
        
        })

        }
    </div>
    </>
  )
}

export default card