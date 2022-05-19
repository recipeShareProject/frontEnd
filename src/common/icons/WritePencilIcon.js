import pencil from 'imgs/pencil.png';

const WritePencilIcon = ({onClick}) => {
  return <img alt="search" src={pencil} onClick={() => onClick()} />;
};
export default WritePencilIcon;
