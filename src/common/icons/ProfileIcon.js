import profile from 'assets/imgs/profile.png';

const ProfileIcon = ({onClick}) => {
  return <img alt="alarm" src={profile} onClick={() => onClick()} />;
};
export default ProfileIcon;
