import { useState, useEffect } from "react";
import "./App.css";

// components
import Title from "./components/Title";
import FullName from "./components/FullName";
function App() {
  // estado local del componente

  // const isActive = (itemNumber) => itemNumber === itemActive;

  const koders = [
    {
      firstName: "Chucho",
      lastName: "Gonzalez",
      age: 25,
      gender: "m",
      email: "pulqueDelFuerte@gmail.com",
      photoURL:
        "https://depor.com/resizer/PdpXRneBCzqthTfzQ9qVUrpBehM=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YRDRN2AWWNATVHH3CPLXR4FUPA.jpg",
    },
    {
      firstName: "David",
      lastName: "Cermeño",
      age: 25,
      gender: "m",
      email: "pulqueDelFuerte@gmail.com",
      photoURL:
        "https://avatars.sched.co/3/ea/5930156/avatar.jpg.320x320px.jpg?0df",
    },
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      email: "pulqueDelFuerte@gmail.com",
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbh2T_0ZYG3XEt_6_k4oUd6muWfqPIMLSEow&usqp=CAU",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      email: "pulqueDelFuerte@gmail.com",
      photoURL: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      email: "pulqueDelFuerte@gmail.com",
      photoURL:
        "https://images.ctfassets.net/86mn0qn5b7d0/featured-img-of-post-137396/3a3e7b267adac634bde6679c47a1430e/featured-img-of-post-137396.png?fm=jpg&fl=progressive&q=50&w=1200",
    },
    {
      firstName: "Andrea",
      lastName: "Perez",
      age: 30,
      gender: "f",
      email: "pulqueDelFuerte@gmail.com",
      photoURL:
        "https://i.pinimg.com/474x/d5/f8/3c/d5f83c809b2f6ceb70a0310883f1fe87.jpg",
    },
  ];
  // const [itemActive, setIsActive] = useState();
  const [inActive, setInActive] = useState(null);
  const pintarKoders = koders.map(
    ({ firstName, lastName, age, gender, photoURL, email }, i) => {
      return (
        <div key={i} className="container">
          <div className="image">
            <img alt="image" src={photoURL} />
          </div>
          <div
            onMouseOver={() => setInActive(i)}
            onMouseOut={() => setInActive(false)}
            className={`${inActive === i ? "contenido" : "contenido_2"}`}
          >
            <div className="texto">
              <p className="title">Nombre:</p>
              <p>
                {firstName} {lastName}
              </p>
            </div>
            <div className="texto">
              <p className="title">Edad: </p>
              <p> {age} años</p>
            </div>
            <div className="texto">
              <p className="title">Correo:</p>
              <p> {email}</p>
            </div>
            <div className="texto">
              <p className="title">Genero:</p>
              <p> {gender === "m" ? "Masculino" : "Femenino"}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="App">
      <header className="App-header">
        {/* <ul>
          <li
            onClick={() => setIsActive(1)}
            className={`${isActive(1) ? "active" : "inactive"}`}
          >
            Parrafo 1
          </li>
          <li
            onClick={() => setIsActive(2)}
            className={`${isActive(2) ? "active" : "inactive"}`}
          >
            Parrafo 2
          </li>
          <li
            onClick={() => setIsActive(3)}
            className={`${isActive(3) ? "active" : "inactive"}`}
          >
            Parrafo 3
          </li>
          <li
            onClick={() => setIsActive(4)}
            className={`${isActive(4) ? "active" : "inactive"}`}
          >
            Parrafo 4
          </li>
          <li
            onClick={() => setIsActive(5)}
            className={`${isActive(5) ? "active" : "inactive"}`}
          >
            Parrafo 5
          </li>
        </ul> */}
        <div className="posts">
          <ul className="nombre">{pintarKoders}</ul>
        </div>
      </header>
    </div>
  );
}

export default App;
