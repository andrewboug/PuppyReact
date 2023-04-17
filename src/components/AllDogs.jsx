import React from "react";
import { useState, useEffect } from "react";
import { fetchDogs } from "../ajaxHelpers/puppies";
import { useNavigate } from "react-router-dom";

export default function AllDogs() {
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const dogList = await fetchDogs();
      setDogs(dogList);
    }
    getDogs();
  }, []);

  return (
    <div>
      {dogs.map((dog) => {
        console.log(dog);
        return (
          <div
            key={dog.id}
            onClick={() => {
              navigate(`/${dog.id}`);
            }}
          >
            <p>{dog.name}</p>
            <ul>
              <li>{dog.breed}</li>
            </ul>
            <img src={dog.imageUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
}
