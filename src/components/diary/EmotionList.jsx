import { styled } from 'styled-components';
import Worst from '@assets/worst.png';
import Bad from '@assets/bad.png';
import Normal from '@assets/normal.png';
import Good from '@assets/good.png';
import Best from '@assets/best.png';
import EmotionItem from './EmotionItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.625rem;
`;

const list = [
  { id: 1, desc: 'WORST', image: Worst },
  { id: 2, desc: 'BAD', image: Bad },
  { id: 3, desc: 'NORMAL', image: Normal },
  { id: 4, desc: 'GOOD', image: Good },
  { id: 5, desc: 'BEST', image: Best },
];

function EmotionList() {
  return (
    <Wrapper>
      {list.map((item) => (
        <EmotionItem item={item} key={item.id} />
      ))}
    </Wrapper>
  );
}

export default EmotionList;
