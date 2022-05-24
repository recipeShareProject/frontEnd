import send from 'assets/imgs/send.png';

const SendIcon = ({onClick}) => {
  return <img alt="send" src={send} onClick={() => onClick()} />;
};
export default SendIcon;
