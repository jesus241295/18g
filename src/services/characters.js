export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data;
};

export const pintar = async (
  firstName,
  lastName,
  photoURL,
  email,
  birthdate
) => {
  await fetch("https://kodemia-18g-default-rtdb.firebaseio.com/.json", {
    method: "POST",
    headers: {
      "Content-Type": " Application/JSON",
    },
    body: JSON.stringify(firstName, lastName, photoURL, email, birthdate),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
fetch(
  "https://kodemia-18g-default-rtdb.firebaseio.com/-N5eyZHn3B_JbKSrNuAs.json",
  {
    method: "DELETE",
  }
)
  .then((response) => response.json())
  .then((data) => console.log(data));
