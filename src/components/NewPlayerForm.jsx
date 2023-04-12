import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("The button was clicked");
          navigate("/");
        }}
      >
        <input type="text" placeholder="name" />
        <input type="text" placeholder="breed" />
        <button>Submit</button>
      </form>
    </div>
  );
}
