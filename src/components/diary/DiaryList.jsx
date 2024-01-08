import { styled } from 'styled-components';
import DiaryItem from './DiaryItem';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

function DiaryList({ diaryList }) {
  return (
    <Wrapper>
      {diaryList.map((item) => (
        <DiaryItem item={item} key={item.id} />
      ))}
    </Wrapper>
  );
}

export default DiaryList;
