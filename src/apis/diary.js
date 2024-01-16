import { privateApi } from '@apis/baseApi';

// 일기 작성
export const writeDiary = async (diaryForm) => {
  const { data } = await privateApi.post('diaries', diaryForm);
  return data;
};
