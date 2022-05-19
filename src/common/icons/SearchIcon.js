import search from 'imgs/search.png';

const SearchIcon = ({onClick}) => {
  return <img alt="search" src={search} onClick={() => onClick()} />;
};
export default SearchIcon;
