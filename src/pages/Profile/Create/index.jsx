import { useState } from "react";
import { create as createUser } from "../../../services/users";

//componets
import Inputs from "../../../components/Inputs";

// CSS
import "./Create.css";

export default function ProfileCreate() {
  // Local state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const cleanForm = () => {
    setFirstName("");
    setLastName("");
    setPhotoURL("");
    setEmail("");
    setBirthdate("");
  };

  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(photoURL) ||
      isEmpty(email) ||
      isEmpty(birthdate)
    ) {
      return;
    }

    const data = {
      firstName,
      lastName,
      photoURL,
      email,
      birthdate,
    };

    try {
      await createUser(data);
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <Inputs
            placeholder="First Name"
            value={firstName}
            callback={(e) => setFirstName(e.target.value)}
          />
          <Inputs
            placeholder="Last Name"
            value={lastName}
            callback={(e) => setLastName(e.target.value)}
          />
        </div>
        <Inputs
          placeholder="Email "
          value={email}
          callback={(e) => setEmail(e.target.value)}
        />

        <Inputs
          placeholder="Birthdate"
          value={birthdate}
          callback={(e) => setBirthdate(e.target.value)}
        />
        <button type="submit" className="btn">
          Create User
        </button>
      </form>
    </div>
  );
}
