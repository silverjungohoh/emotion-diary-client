import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import BottonNav from '@components/ui/BottomNav';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4.5rem;
`;

function Layout() {
  return (
    <Wrapper>
      <Outlet />
      <BottonNav />
    </Wrapper>
  );
}

export default Layout;
