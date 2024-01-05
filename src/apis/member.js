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
