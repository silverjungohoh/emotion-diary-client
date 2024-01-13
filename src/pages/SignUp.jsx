import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SelectBox from '@components/common/SelectBox';
import Logo from '@components/common/Logo';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import { Wrapper, FormBox, FieldBox, RowBox, Span } from '@styles/SignUp.style';
import { checkEmail, checkNick, signUp } from '@apis/member';
import { genderList } from '@constants/select';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      gender: 'MALE',
      isCheckEmail: false,
      isCheckNick: false,
    },
  });

  const navigate = useNavigate();
  const isCheck = watch('isCheckEmail') === true && watch('isCheckNick') === true;

  const onClickEmail = async (e) => {
    e.preventDefault();
    try {
      const { message } = await checkEmail(watch('email'));
      alert(message);
      setValue('isCheckEmail', true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onClickNick = async (e) => {
    e.preventDefault();
    try {
      const { message } = await checkNick(watch('nickname'));
      alert(message);
      setValue('isCheckNick', true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onSubmit = async (data) => {
    try {
      const { nickname } = await signUp(data);
      alert(`${nickname}님 환영합니다!`);
      navigate('/login');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <FieldBox>
          <label htmlFor="email">이메일</label>
          <RowBox>
            <TextInput
              type="email"
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '이메일 형식에 맞지 않습니다.',
                },
                onChange: () => {
                  watch('isCheckEmail') && setValue('isCheckEmail', false);
                },
              })}
            />
            <Button width="25%" onClick={onClickEmail}>
              확인
            </Button>
          </RowBox>
          {errors.email && <Span>{errors.email.message}</Span>}
        </FieldBox>
        <FieldBox>
          <label htmlFor="password">비밀번호</label>
          <TextInput
            type="password"
            {...register('password', { required: '비밀번호를 입력해주세요.' })}
          />
          {errors.password && <Span>{errors.password.message}</Span>}
        </FieldBox>
        <FieldBox>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <TextInput
            type="password"
            {...register('passwordCheck', {
              required: '비밀번호 확인을 입력해주세요.',
              validate: (value) =>
                watch('password') != value ? '비밀번호를 다시 확인해주세요.' : true,
            })}
          />
          {errors.passwordCheck && <Span>{errors.passwordCheck.message}</Span>}
        </FieldBox>
        <FieldBox>
          <label htmlFor="nickname">닉네임</label>
          <RowBox>
            <TextInput
              type="text"
              onChange={() => {
                watch('isCheckNick') && setValue('isCheckNick', false);
              }}
              {...register('nickname', {
                required: '닉네임을 입력해주세요.',
                minLength: { value: 2, message: '닉네임은 최소 2글자 이상이어야 합니다.' },
                maxLength: { value: 10, message: '닉네임은 최대 10글자를 넘을 수 없습니다.' },
                onChange: () => {
                  watch('isCheckNick') && setValue('isCheckNick', false);
                },
              })}
            />
            <Button width="25%" onClick={onClickNick}>
              확인
            </Button>
          </RowBox>
          {errors.nickname && <Span>{errors.nickname.message}</Span>}
        </FieldBox>
        <FieldBox>
          <label htmlFor="gender">성별</label>
          <SelectBox name="gender" {...register('gender')}>
            {genderList.map((opt) => (
              <option key={opt.id} value={opt.eng}>
                {opt.kor}
              </option>
            ))}
          </SelectBox>
        </FieldBox>
        <Button height="3rem" type="submit" disabled={!isCheck || isSubmitting}>
          가입하기
        </Button>
      </FormBox>
    </Wrapper>
  );
}

export default SignUp;
