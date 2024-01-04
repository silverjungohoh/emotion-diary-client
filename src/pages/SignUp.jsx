import SelectBox from '@components/common/SelectBox';
import Logo from '@components/common/Logo';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import { Wrapper, FormBox, FieldBox, RowBox } from '@styles/SignUp.style';

function SignUp() {
  const optionList = [
    { id: 1, kor: '남성', eng: 'MALE' },
    { id: 2, kor: '여성', eng: 'FEMALE' },
  ];

  return (
    <Wrapper>
      <Logo />
      <FormBox>
        <FieldBox>
          <label htmlFor="email">이메일</label>
          <RowBox>
            <TextInput type="email" />
            <Button $size="small">확인</Button>
          </RowBox>
        </FieldBox>
        <FieldBox>
          <label htmlFor="password">비밀번호</label>
          <TextInput type="password" />
        </FieldBox>
        <FieldBox>
          <label htmlFor="password-check">비밀번호 확인</label>
          <TextInput type="password" />
        </FieldBox>
        <FieldBox>
          <label htmlFor="nickname">닉네임</label>
          <RowBox>
            <TextInput type="text" />
            <Button $size="small">확인</Button>
          </RowBox>
        </FieldBox>
        <FieldBox>
          <label htmlFor="gender">성별</label>
          <SelectBox name="gender">
            {optionList.map((opt) => (
              <option key={opt.id} value={opt.eng}>
                {opt.kor}
              </option>
            ))}
          </SelectBox>
        </FieldBox>
        <Button $size="large">가입하기</Button>
      </FormBox>
    </Wrapper>
  );
}

export default SignUp;
