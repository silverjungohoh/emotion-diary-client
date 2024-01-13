import { Wrapper, FormBox, FieldBox, ButtonBox } from '@styles/Login.style';
import Logo from '@components/common/Logo';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import { useNavigate } from 'react-router-dom';
import { login } from '@apis/member';
import useFormInput from '@hooks/useFormInput';

function Login() {
  const navigate = useNavigate();

  const email = useFormInput('');
  const password = useFormInput('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginForm = { email: email.value, password: password.value };
    try {
      const { accessToken, refreshToken } = await login(loginForm);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <FormBox onSubmit={onSubmit}>
        <FieldBox>
          <label htmlFor="email">이메일</label>
          <TextInput type="email" required {...email} />
        </FieldBox>
        <FieldBox>
          <label htmlFor="password">비밀번호</label>
          <TextInput type="password" required {...password} />
        </FieldBox>
        <ButtonBox>
          <Button type="submit" height="3rem">
            로그인
          </Button>
          <Button type="button" height="3rem" $color="blue" onClick={() => navigate('/sign-up')}>
            회원가입
          </Button>
        </ButtonBox>
      </FormBox>
    </Wrapper>
  );
}

export default Login;
