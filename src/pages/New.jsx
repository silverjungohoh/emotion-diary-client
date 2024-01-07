import { LuChevronLeft } from 'react-icons/lu';
import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import Header from '@components/ui/Header';
import { Wrapper } from '@styles/New.style';
import DiaryEditor from '@/components/diary/DiaryEditor';

function New() {
  return (
    <Wrapper>
      <Header
        text="작성하기"
        left={
          <Button width="3rem" $color="grey">
            <Icon icon={<LuChevronLeft />} />
          </Button>
        }
      />
      <DiaryEditor />
    </Wrapper>
  );
}

export default New;
