import { useEffect, useState } from "react";
import "./Home.css";
// Services
import { getCharacters } from "../../services/characters";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  // REQUEST A Rick and Morty API.
  useEffect(() => {
    const getCharactersQuery = async () => {
      const data = await getCharacters();
      setCharacters(data.results);
    };
    getCharactersQuery();
  }, []);
  // console.log(characters, "STATE characters");
  const getNameCharacters = () => {
    return characters.map(({ name, location, image }, i) => {
      return (
        <div key={i} className="container">
          <div className="card-container">
            <div className="img">
              <img src={image} alt="img" className="image" />
            </div>
            <div>
              <p className="card-title">Name</p>
              <p className="card-content">{name}</p>
            </div>
            <div>
              <p className="card-title">Location</p>
              <p className="card-content">{location.name}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{getNameCharacters()}</div>;
}

// 1. Componente se Monta
// 2. Estado se define como []
// 3. Se renderiza
// 4. Se ejecuta el useEffect
// 5. Se ejecuta una petición al servidor y se espera
// 6. Con la respuesta del servidor, actualizamos el estado
// 7. Se renderiza el componente, pero ahora el state, tiene el valor
// del resultado del servidor
