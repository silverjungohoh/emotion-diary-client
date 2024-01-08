import { LuChevronLeft } from 'react-icons/lu';
import Header from '@components/ui/Header';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import DiaryDetail from '@components/diary/DiaryDetail';
import { diaryDetail } from '@constants/diaryData';
import BottonNav from '@components/ui/BottomNav';
import { Wrapper } from '@styles/Diary.style';

function Diary() {
  const detail = diaryDetail;

  return (
    <Wrapper>
      <Header
        text="기록"
        left={
          <Button width="3rem" $color="grey">
            <Icon icon={<LuChevronLeft />} />
          </Button>
        }
      />
      <DiaryDetail diaryDetail={detail} />
      <BottonNav />
    </Wrapper>
  );
}

export default Diary;
