import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import Header from '@components/ui/Header';
import { useState } from 'react';
import BottonNav from '@components/ui/BottomNav';
import SelectBox from '@components/common/SelectBox';
import { Wrapper, ControlBox, ButtonBox } from '@styles/Home.style';
import DiaryList from '@components/diary/DiaryList';
import { list } from '@constants/diaryData';
import { sortList, filterList } from '@constants/select';

function Home() {
  const [date, setDate] = useState(new Date());

  const { diaryList, hasNext } = list;

  const increaseMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  };

  const decreaseMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
  };

  return (
    <Wrapper>
      <Header
        text={`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
        left={
          <Button width="3rem" $color="grey" onClick={decreaseMonth}>
            <Icon icon={<LuChevronLeft />} />
          </Button>
        }
        right={
          <Button width="3rem" $color="grey" onClick={increaseMonth}>
            <Icon icon={<LuChevronRight />} />
          </Button>
        }
      />
      <ControlBox>
        <SelectBox>
          {sortList.map((item) => (
            <option key={item.id} value={item.value}>
              {item.desc}
            </option>
          ))}
        </SelectBox>
        <SelectBox>
          {filterList.map((item) => (
            <option key={item.id} value={item.value}>
              {item.desc}
            </option>
          ))}
        </SelectBox>
      </ControlBox>
      <DiaryList diaryList={diaryList} />
      {hasNext && (
        <ButtonBox>
          <Button $color="grey">더보기</Button>
        </ButtonBox>
      )}
      <BottonNav />
    </Wrapper>
  );
}

export default Home;
