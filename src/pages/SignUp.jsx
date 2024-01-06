import SelectBox from '@components/common/SelectBox';
import Logo from '@components/common/Logo';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import { Wrapper, FormBox, FieldBox, RowBox } from '@styles/SignUp.style';
import { checkEmail, checkNick } from '@apis/member';
import { useState } from 'react';
import useFormInput from '@/hooks/useFormInput';

function SignUp() {
  const email = useFormInput('');
  const nick = useFormInput('');
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [isCheckNick, setIsCheckNick] = useState(false);

  const optionList = [
    { id: 1, kor: '남성', eng: 'MALE' },
    { id: 2, kor: '여성', eng: 'FEMALE' },
  ];

  const isButtonDisabled = !isCheckEmail || !isCheckNick;

  const onClickEmail = async (e) => {
    e.preventDefault();
    const { message } = await checkEmail(email.value);
    alert(message);
    setIsCheckEmail(true);
  };

  const onClickNick = async (e) => {
    e.preventDefault();
    const { message } = await checkNick(nick.value);
    alert(message);
    setIsCheckNick(true);
  };

  return (
    <Wrapper>
      <Logo />
      <FormBox>
        <FieldBox>
          <label htmlFor="email">이메일</label>
          <RowBox>
            <TextInput type="email" {...email} />
            <Button width="25%" onClick={onClickEmail}>
              확인
            </Button>
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
            <TextInput type="text" {...nick} />
            <Button width="25%" onClick={onClickNick}>
              확인
            </Button>
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
        <Button height="3rem" disabled={isButtonDisabled}>
          가입하기
        </Button>
      </FormBox>
    </Wrapper>
  );
}

export default SignUp;
