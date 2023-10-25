import React from "react";
import { useParams } from "react-router-dom";

import { getCharacter } from "./api/api";
import { Detail } from "./detail.component";
import { mapMemberToVM } from "./detail.mappers";
import { createDefaultMemberDetail, CharacterEntityVM } from "./detail.vm";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<CharacterEntityVM>(
    createDefaultMemberDetail()
  );

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getCharacter(id).then(mapMemberToVM).then(setMember)
  }, [])


  return <Detail member={member} />;
};
