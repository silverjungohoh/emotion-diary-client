export function getDayOfTheWeek(date) {
  const week = ['월', '화', '수', '목', '금', '토', '일'];
  return week[new Date(date).getDay()];
}
