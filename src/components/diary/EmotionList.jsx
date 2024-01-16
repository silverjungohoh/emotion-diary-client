import { styled } from 'styled-components';
import { emotions } from '@constants/emotion';
import EmotionItem from './EmotionItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.625rem;
`;

const Label = styled.label`
  & > input:checked + div {
    border: 2px solid black;
  }
`;

const Input = styled.input`
  display: none;
  visibility: hidden;
`;

function EmotionList({ value, onChange }) {
  return (
    <Wrapper>
      {emotions.map((item) => (
        <Label key={item.id}>
          <Input
            type="radio"
            name="emotion"
            value={item.score}
            checked={parseInt(value) === item.score}
            onChange={onChange}
          />
          <EmotionItem item={item} />
        </Label>
      ))}
    </Wrapper>
  );
}

export default EmotionList;
