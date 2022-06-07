import profile from 'assets/imgs/profile.png';
import styled from 'styled-components';

const ProfileIcon = ({onClick, src = profile}) => {
  return <ProfileImg alt="alarm" src={src} onClick={() => onClick()} />;
};

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
export default ProfileIcon;
