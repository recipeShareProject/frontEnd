import logo from 'imgs/logo.png';

const LogoIcon = ({onClick}) => {
  return <img alt="alarm" src={logo} onClick={() => onClick()} />;
};
export default LogoIcon;
