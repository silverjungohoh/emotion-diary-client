import { useNavigate } from 'react-router-dom';
import { LuChevronLeft } from 'react-icons/lu';
import Header from '@components/ui/Header';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import DiaryDetail from '@components/diary/DiaryDetail';

function Diary() {
  const navigate = useNavigate();

  return (
    <>
      <Header
        text="기록"
        left={
          <Button width="3rem" $color="grey" onClick={() => navigate(-1)}>
            <Icon icon={<LuChevronLeft />} />
          </Button>
        }
      />
      <DiaryDetail />
    </>
  );
}

export default Diary;
