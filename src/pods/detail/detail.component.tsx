import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";
import { CharacterEntityVM } from "./detail.vm";


interface Props {
  member: CharacterEntityVM;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <div>
      <h1>Detail page</h1>
      <img src={member.image} />
      <p> id: {member.id}</p>
      <p> name: {member.name}</p>
      <p> status: {member.status}</p>
      <p> type: {member.type}</p>
      <p> gender: {member.gender}</p>
      <Link to={routes.list}>Back to list page</Link>
    </div>
  );
}