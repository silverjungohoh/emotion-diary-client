import { styled } from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 0.5rem;
  padding: 0.625rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f5;
`;

const Image = styled.img`
  width: 70%;
  margin-bottom: 0.625rem;
`;

const Span = styled.span`
  font-size: 10px;
  font-weight: 500;
`;

function EmotionItem({ item }) {
  return (
    <Wrapper>
      <Image src={item.image} key={item.id} alt={item.desc} />
      <Span>{item.desc}</Span>
    </Wrapper>
  );
}

export default EmotionItem;
