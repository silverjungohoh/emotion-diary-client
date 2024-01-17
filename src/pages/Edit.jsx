import { useNavigate, useParams } from 'react-router-dom';
import { LuChevronLeft } from 'react-icons/lu';
import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import Header from '@components/ui/Header';
import DiaryEditor from '@components/diary/DiaryEditor';
import { getDiaryDetail } from '@apis/diary';
import { useEffect, useState } from 'react';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    const getDetail = async (id) => {
      try {
        const data = await getDiaryDetail(id);
        setOrigin(data);
      } catch (error) {
        alert(error.response.data.message);
        navigate('/', { replace: true });
      }
    };

    getDetail(id);
  }, [id, navigate]);

  return (
    <>
      <Header
        text="수정하기"
        left={
          <Button width="3rem" $color="grey" onClick={() => navigate(-1)}>
            <Icon icon={<LuChevronLeft />} />
          </Button>
        }
      />
      {origin && <DiaryEditor isEdit={true} origin={origin} />}
    </>
  );
}

export default Edit;
