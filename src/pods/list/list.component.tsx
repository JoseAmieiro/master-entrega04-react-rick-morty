import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterEntity } from './list.vm';
import { routes, FilterContext } from '@/core';
import { ListHeader } from './components';

export const List: React.FC = () => {
  const { characterName, setCharacterName } = React.useContext(FilterContext);
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [, setSearchQuery] = React.useState<string>('');
  
  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(characterName.toLowerCase())
  );
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCharacterName(event.target.value)
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        value={characterName}
        onChange={handleSearchChange}
      />
      <div className="character-list-container">
      <ListHeader />
        {filteredCharacters.map(item => 
            <React.Fragment key={item.id}>
              <img src={item.image} alt="avatar" />
              <div>{item.id}</div>
              <Link to={routes.detail(item.id.toString())}>{item.name}</Link>
            </React.Fragment>
        )}
      </div>
    </>
  );
};