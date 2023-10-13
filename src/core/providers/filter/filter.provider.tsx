import React from "react";

interface FilterContext {
  characterName: string;
  setCharacterName: (value: string) => void;
}

interface Props {
    children?: React.ReactNode;
}

export const FilterContext = React.createContext<FilterContext>({
    characterName: "",
    setCharacterName: (value: string) => {},
});

export const FilterContextProvider: React.FC <Props> = (props) => {
    const [characterName, setCharacterName] = React.useState("");

    return (
        <FilterContext.Provider value={{ characterName, setCharacterName }}>
            {props.children}
        </FilterContext.Provider>
    );
};

