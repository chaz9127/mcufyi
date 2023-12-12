import { useState } from 'react';
import { SearchResult } from '../../types';
import './SearchBar.component.scss';

type SearchBarProps = {
  results: SearchResult[]
}

export const SearchBar = (props: SearchBarProps) => {
  const { results } = props;
  const [ searchTerm, setSearchTerm ] = useState('');

  return (
    <div className="searchbar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="search"
        className="searchbar-input"
        onChange={(ele) => setSearchTerm(ele?.target?.value?.toLowerCase())}
      />
      <div className="searchbar-results">
        <ul className="searchbar-results-list">
          {
            results.length > 0 && (
              results.filter((term: SearchResult) => {
                const searchResult = term?.name?.toLowerCase();
                const searchInput = searchTerm;

                return !!searchInput && searchResult?.includes(searchInput);
              }).map(result => {
                return(
                  <li key={result.name}>
                    {result.name}
                  </li>)
              })
            )
          }
        </ul>
      </div>
    </div>
  )
}