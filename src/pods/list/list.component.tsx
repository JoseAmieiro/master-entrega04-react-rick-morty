import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CharacterEntity } from './list.vm';
import { useDebounce } from 'use-debounce';
import { routes } from '@/core';
export const List: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterEntity[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000); // 300ms debounce delay
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="character-list-container">
        <span className="header">Avatar</span>
        <span className="header">Id</span>
        <span className="header">Name</span>
        {filteredCharacters.map(item => {
          console.log(item.name.toString())
          return (
            <React.Fragment key={item.id}>
              <img src={item.image} alt="avatar" />
              <div>{item.id}</div>
              <Link to={routes.detail(item.id.toString())}>{item.name}</Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};