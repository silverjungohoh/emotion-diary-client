import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import Loading from '@components/common/Loading';
import { getDiaryDetail, deleteDiary } from '@apis/diary';

function DiaryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const getDetail = async (id) => {
      try {
        const data = await getDiaryDetail(id);
        setDetail(data);
      } catch (error) {
        alert(error.response.data.message);
        navigate('/', { replace: true });
      }
    };

    getDetail(id);
  }, [id, navigate]);

  if (!detail) {
    return <Loading />;
  }

  const onClickDelete = async () => {
    const isConfirm = confirm('일기를 삭제하시겠습니까?');
    if (isConfirm) {
      try {
        const { message } = await deleteDiary(id);
        alert(message);
        navigate(-1, { replace: true });
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const { title, content, emotionType, date, isWriter } = detail;

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
          <Button type="button" $color="grey" onClick={onClickDelete}>
            삭제하기
          </Button>
          <Button type="button" onClick={() => navigate(`/edit/${id}`)}>
            수정하기
          </Button>
        </ButtonBox>
      )}
    </Wrapper>
  );
}

export default DiaryDetail;
