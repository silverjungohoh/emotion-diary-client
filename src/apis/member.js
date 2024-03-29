import { publicApi } from '@apis/baseApi';

// 이메일 중복 확인
export const checkEmail = async (email) => {
  const { data } = await publicApi.get(`members/check/email?email=${email}`);
  return data;
};

// 닉네임 중복 확인
export const checkNick = async (nickname) => {
  const { data } = await publicApi.get(`members/check/nickname?nickname=${nickname}`);
  return data;
};

// 로그인
export const login = async (loginForm) => {
  const { data } = await publicApi.post('members/login', loginForm);
  return data;
};

// 회원가입
export const signUp = async (signUpForm) => {
  const { data } = await publicApi.post(`members/sign-up`, signUpForm);
  return data;
};
