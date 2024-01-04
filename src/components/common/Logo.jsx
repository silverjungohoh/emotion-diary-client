import DiaryLogo from '@assets/diary.png';
import { styled } from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 90px;
`;

function Logo() {
  return (
    <ImageWrapper>
      <Image src={DiaryLogo} alt="일기 로고" />
    </ImageWrapper>
  );
}

export default Logo;
