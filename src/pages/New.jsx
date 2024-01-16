import { useNavigate } from 'react-router-dom';
import { LuChevronLeft } from 'react-icons/lu';
import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import Header from '@components/ui/Header';
import DiaryEditor from '@components/diary/DiaryEditor';

function New() {
  const navigate = useNavigate();

  return (
    <>
      <Header
        text="작성하기"
        left={
          <Button width="3rem" $color="grey" onClick={() => navigate(-1)}>
            <Icon icon={<LuChevronLeft />} />
          </Button>
        }
      />
      <DiaryEditor />
    </>
  );
}

export default New;
