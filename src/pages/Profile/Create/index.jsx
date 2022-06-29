import { useState } from "react";
import { pintar } from "../../../services/characters";

import "./Create.css";

export default function ProfileCreate() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [photoURL, setPhotoURL] = useState();
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const agregar = {
      firstName,
      lastName,
      photoURL,
      email,
      birthDate,
    };

    setFirstName("");
    setLastName("");
    setPhotoURL("");
    setEmail("");
    setBirthDate("");

    console.log(pintar(agregar));
  };

  return (
    <div className="container">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="kod">
          <img
            src="https://cdn-images-1.medium.com/max/200/1*P2FCXzWh-CwkIIWHtq0Bbw@2x.png"
            alt="img"
            className="img"
          />
        </div>

        <input
          required
          placeholder="Nombre"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          required
          placeholder="Apellido"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          required
          placeholder="URL IMG"
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
        <input
          required
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          required
          placeholder="BirthDate"
          value={birthDate}
          onChange={(event) => setBirthDate(event.target.value)}
        />
        <div className="content-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
            className="logo"
            alt="imgprofile"
          />
        </div>

        <button className="boton" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
}
