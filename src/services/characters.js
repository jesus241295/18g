export const getCharacters = async () => {
  const response = await fetch(
    "https://kodemia-18g-default-rtdb.firebaseio.com/.json"
  );
  const data = await response.json();
  return data;
};
// fetch("https://kodemia-18g-default-rtdb.firebaseio.com/.json", {
//   method: "POST",
//   headers: {
//     "Content-Type": "Application/JSON",
//   },
//   body: JSON.stringify({
//     prueba: 1,
//   }),
// }).then((response) => console.log(response));
