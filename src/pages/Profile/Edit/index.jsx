import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  retrieve as retrieveUser,
  update as updateUser,
} from "../../../services/users";
import Inputs from "../../../components/Inputs";

export default function ProfileEdit() {
  // Local state
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  // RRD
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const data = await retrieveUser(id);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhotoURL(data.photoURL);
      setEmail(data.email);
      setBirthdate(data.birthdate);
      setIsLoading(false);
    };

    getUser();
  }, [id]);

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
      await updateUser(id, data);

      navigate(`/app/profiles/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit</h2>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
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
            <Inputs
              placeholder="photoURL"
              value={photoURL}
              callback={(e) => setPhotoURL(e.target.value)}
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
            Edit User
          </button>
        </form>
      )}
    </div>
  );
}
