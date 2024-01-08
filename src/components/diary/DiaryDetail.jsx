import { getDayOfTheWeek } from '@utils/date';
import { emotions } from '@constants/emotion';
import {
  Wrapper,
  ImageBox,
  Image,
  TextBox,
  H1,
  H3,
  P,
  ButtonBox,
} from '@styles/diary/DiaryDetail.style';
import Button from '@components/common/Button';

function DiaryDetail({ diaryDetail }) {
  const { title, content, emotionType, date, isWriter } = diaryDetail;

  return (
    <Wrapper>
      <H1>{`${date} (${getDayOfTheWeek(date)})`}</H1>
      <ImageBox>
        <Image src={emotions.find((diary) => diary.desc === emotionType).image} alt="emotion" />
      </ImageBox>
      <TextBox>
        <H3>{title}</H3>
        <P>{content}</P>
      </TextBox>
      {isWriter && (
        <ButtonBox>
          <Button $color="grey">삭제하기</Button>
          <Button>수정하기</Button>
        </ButtonBox>
      )}
    </Wrapper>
  );
}

export default DiaryDetail;
