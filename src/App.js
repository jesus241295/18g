// Components
import Card from "./components/Card";

import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [amountMXN, setAmountMXN] = useState(null);
  const [amountUSD, setAmountUSD] = useState(null);

  const [numTarget, setNumTarget] = useState("000000000000000000");
  const [nameTarget, setNameTarget] = useState(null);
  const [dateTarget, setDateTarget] = useState(null);
  const [CVCTarget, setCVCTarget] = useState(null);

  const [koders, setKoders] = useState([
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "David",
      lastName: "",
      age: 40,
      gender: "f",
      photoURL: "https://media4.giphy.com/media/5sYyfIMRcpJWNqdySh/giphy.gif",
    },
  ]);

  const kodersUI = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => {
      // console.log(firstName);
      return (
        <Card
          key={index}
          photoURL={photoURL}
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
        />
      );
    }
  );

  const handleChangeAmount = ({ target: { value } }, from) => {
    const USD = 20.16;
    // from = USD o MXN
    if (from === "USD") {
      setAmountMXN(value * USD);
      setAmountUSD(value);
    } else {
      setAmountMXN(value);
      setAmountUSD(value / USD);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newKoders = [
      ...koders,
      {
        firstName,
        lastName,
        age,
        gender,
        photoURL,
      },
    ];

    setKoders(newKoders);

    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhotoURL("");
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="container">{kodersUI}</div>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          placeholder="Apellido"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          placeholder="Edad"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          placeholder="Genero"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
        <input
          placeholder="URL imagen"
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
        <button type="submit">Agregar Koder</button>
      </form> */}
      <div>
        <input
          type="number"
          value={amountMXN}
          onChange={(e) => handleChangeAmount(e, "MXN")}
        />
        <input
          type="number"
          value={amountUSD}
          onChange={(e) => handleChangeAmount(e, "USD")}
        />
      </div>
      <idv className="target">
        <input
          className="input"
          placeholder="Numero de Targeta"
          value={numTarget}
          onChange={(event) => setNumTarget(event.target.value)}
        />

        <input
          className="input input-2"
          type="text"
          placeholder="Nombre"
          value={nameTarget}
          onChange={(event) => setNameTarget(event.target.value.toUpperCase())}
        />
        <div className=" date">
          <input
            className="input"
            placeholder="Fecha"
            type="date"
            value={dateTarget}
            onChange={(event) => setDateTarget(event.target.value)}
          />

          <input
            className="input"
            placeholder="CVC"
            type="number"
            value={CVCTarget}
            onChange={(event) => setCVCTarget(event.target.value)}
          />
        </div>
      </idv>
      <div className="card-target">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdKixVXH8cKbweX4eeuekhnJktRB1PniupyFbmB0x7YVTDdZN9b5StNSDSiV0acrbQsk&usqp=CAU"
            alt="visa"
            className="visa"
          />
          <img
            src="https://previews.123rf.com/images/alancotton/alancotton1511/alancotton151100211/48042691-de-cerca-de-un-chip-de-tarjeta-de-cr%C3%A9dito.jpg"
            className="img"
          />
        </div>
        <div className="fijo">
          <p className="tarjeta">{numTarget}</p>
        </div>
        <div>
          <p className="tarjeta-2">{nameTarget}</p>
        </div>
        <div>
          <p className="tarjeta-3">{dateTarget}</p>
        </div>
      </div>
      <div className="card-tarjet1">
        <div>
          <p>{CVCTarget}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
