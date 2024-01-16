import { useNavigate } from 'react-router-dom';
import TextInput from '@components/common/TextInput';
import TextArea from '@components/common/TextArea';
import { FieldBox, Label, FormBox } from '@styles/diary/DiaryEditor.style';
import { DateInput } from '@components/common/DateInput';
import EmotionList from '@components/diary/EmotionList';
import Button from '@components/common/Button';
import { getStringDate } from '@utils/date';
import { writeDiary } from '@apis/diary';
import useFormInput from '@hooks/useFormInput';

function DiaryEdior() {
  const navigate = useNavigate();
  const date = useFormInput(getStringDate(new Date()));
  const title = useFormInput('');
  const content = useFormInput('');
  const emotion = useFormInput(3);

  const onSubmit = async (e) => {
    e.preventDefault();
    const diaryForm = {
      title: title.value,
      content: content.value,
      date: date.value,
      score: parseInt(emotion.value),
    };
    try {
      const data = await writeDiary(diaryForm);
      console.log(data);
      navigate(`/diary/${data.id}`, { replace: true });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <FormBox onSubmit={onSubmit}>
      <FieldBox>
        <Label htmlFor="date">오늘은 언제인가요?</Label>
        <DateInput type="date" max={getStringDate(new Date())} {...date} required />
      </FieldBox>
      <FieldBox>
        <Label htmlFor="score">오늘의 감정</Label>
        <EmotionList {...emotion} required />
      </FieldBox>
      <FieldBox>
        <Label htmlFor="title">한 줄 요약</Label>
        <TextInput type="text" height="3rem" {...title} required />
      </FieldBox>
      <FieldBox>
        <Label htmlFor="content">오늘의 일기</Label>
        <TextArea {...content} required />
      </FieldBox>
      <Button type="submit" height="3rem">
        등록하기
      </Button>
    </FormBox>
  );
}

export default DiaryEdior;
