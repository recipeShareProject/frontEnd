import {Black5} from 'assets/colorSet';
import styled from 'styled-components';

const Divider = () => {
  return <DividerLine></DividerLine>;
};

export default Divider;

const DividerLine = styled.div`
  width: 100vw;
  height: 16px;
  background: ${Black5};
`;
