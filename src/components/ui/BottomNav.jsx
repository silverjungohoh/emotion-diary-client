import { styled } from 'styled-components';
import { LuHome, LuUser2, LuFilePlus } from 'react-icons/lu';
import Icon from '@components/common/Icon';

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
    width: 24.375rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function BottonNav() {
  return (
    <Wrapper>
      <NavList>
        <li>
          <Icon icon={<LuHome />} />
        </li>
        <li>
          <Icon icon={<LuUser2 />} />
        </li>
        <li>
          <Icon icon={<LuFilePlus />} />
        </li>
      </NavList>
    </Wrapper>
  );
}

export default BottonNav;
