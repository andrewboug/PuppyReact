import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const params = useParams();
  console.log("Params", params);
  return <div>Single Player</div>;
}
