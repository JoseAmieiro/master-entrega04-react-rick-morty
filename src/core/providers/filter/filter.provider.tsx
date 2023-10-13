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
    const [organizationName, setOrganizationName] = React.useState("lemoncode");

    return (
        <FilterContext.Provider value={{ characterName: organizationName, setCharacterName: setOrganizationName }}>
            {props.children}
        </FilterContext.Provider>
    );
};

