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

// 일기 삭제
export const deleteDiary = async (diaryId) => {
  const { data } = await privateApi.delete(`diaries/${diaryId}`);
  return data;
};

// 일기 수정
export const updateDiary = async (diaryForm, diaryId) => {
  const { data } = await privateApi.patch(`diaries/${diaryId}`, diaryForm);
  return data;
};
