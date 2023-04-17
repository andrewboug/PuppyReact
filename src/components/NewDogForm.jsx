import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postDog } from "../ajaxHelpers/puppies";

export default function NewDogForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div>
      <h2>Create a new Pup!</h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const newDog = await postDog(name, breed);
          console.log("New Dog from API: ", newDog);
          navigate("/");
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="breed">Breed:</label>
        <input type="text" onChange={(e) => setBreed(e.target.value)} />
        <button>Submit!</button>
      </form>
    </div>
  );
}
