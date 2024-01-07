import TextInput from '@components/common/TextInput';
import TextArea from '@components/common/TextArea';
import { FieldBox, Label, FormBox } from '@styles/diary/DiaryEditor.style';
import { DateInput } from '@components/common/DateInput';
import EmotionList from '@components/diary/EmotionList';
import Button from '@components/common/Button';

function DiaryEdior() {
  return (
    <FormBox>
      <FieldBox>
        <Label htmlFor="date">오늘은 언제인가요?</Label>
        <DateInput type="date" />
      </FieldBox>
      <FieldBox>
        <Label htmlFor="score">오늘의 감정</Label>
        <EmotionList />
      </FieldBox>
      <FieldBox>
        <Label htmlFor="title">한 줄 요약</Label>
        <TextInput type="text" height="3rem" />
      </FieldBox>
      <FieldBox>
        <Label htmlFor="content">오늘의 일기</Label>
        <TextArea />
      </FieldBox>
      <Button height="3rem">등록하기</Button>
    </FormBox>
  );
}

export default DiaryEdior;
