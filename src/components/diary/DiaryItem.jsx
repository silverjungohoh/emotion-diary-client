import { emotions } from '@constants/emotion';
import { Wrapper, ImageBox, TextBox, H1 } from '@styles/diary/DiaryItem.style';

function DiaryItem({ item }) {
  return (
    <Wrapper>
      <ImageBox>
        <img src={emotions.find((diary) => diary.desc === item.emotionType).image} alt="emotion" />
      </ImageBox>
      <TextBox>
        <H1>{item.date}</H1>
        <p>{item.title}</p>
      </TextBox>
    </Wrapper>
  );
}

export default DiaryItem;
