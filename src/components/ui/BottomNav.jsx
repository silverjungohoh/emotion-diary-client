import { styled } from 'styled-components';
import { LuHome, LuUser2, LuPenSquare } from 'react-icons/lu';
import Icon from '@components/common/Icon';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #f9fafb;
  padding: 0.8rem 0.2rem;
  border-top: 1px solid #ececec;
  @media (min-width: 480px) {
    width: 22.5rem;
  }
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function BottonNav() {
  return (
    <Wrapper>
      <NavList to="/">
        <NavLink>
          <Icon icon={<LuHome />} />
        </NavLink>
        <NavLink to="/new">
          <Icon icon={<LuPenSquare />} />
        </NavLink>
        <NavLink to="/user">
          <Icon icon={<LuUser2 />} />
        </NavLink>
      </NavList>
    </Wrapper>
  );
}

export default BottonNav;
