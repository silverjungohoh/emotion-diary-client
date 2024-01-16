import { privateApi } from '@apis/baseApi';

// 일기 작성
export const writeDiary = async (diaryForm) => {
  const { data } = await privateApi.post('diaries', diaryForm);
  return data;
};

// 일기 상세 조회
export const getDiaryDetail = async (diaryId) => {
  const { data } = await privateApi.get(`diaries/${diaryId}`);
  return data;
};
