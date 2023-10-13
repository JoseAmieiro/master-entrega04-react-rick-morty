import { CharacterEntity } from "./api.model";

export const getCharacters = (): Promise<CharacterEntity[]> => {
    return fetch("https://rickandmortyapi.com/api/character").then(
        (response) => response.json()
    );
};