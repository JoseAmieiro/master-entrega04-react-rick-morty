import { CharacterEntity } from "./api.model";

export const getCharacter = (id: string): Promise<CharacterEntity> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
};
