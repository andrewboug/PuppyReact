const baseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-ET-WEB-AM/players";

export async function fetchDogs() {
  try {
    const response = await fetch(baseUrl);
    const dogList = await response.json();
    return dogList.data.players;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleDog(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const singleDog = await response.json();
    return singleDog;
  } catch (error) {
    console.error(error);
  }
}

export async function postDog(name, breed) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const createdDog = await response.json();
    return createdDog;
  } catch (error) {
    console.error(error);
  }
}
