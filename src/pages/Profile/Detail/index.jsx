import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/users";
import { deleteList as deleteUsers } from "../../../services/users";

// CSS
import "./Detail.css";

export default function ProfileDetail() {
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("PRIMERA VEZ");

    const getUser = async () => {
      const data = await retrieveUser(id);
      // const dataDelete = await deleteUsers(id);
      setTimeout(() => {
        setUser(data);
      }, 1000);
      console.log(data);
    };

    getUser();
  }, []);

  console.log(id);

  return (
    <div>
      <h2>Detail</h2>
      {!user ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <img src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <button onClick={() => navigate(-1)}>Regresar</button>
          <button onClick={() => navigate(1)}>Delete</button>
        </div>
      )}
    </div>
  );
}
