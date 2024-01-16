export function getDayOfTheWeek(date) {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  return week[new Date(date).getDay()];
}

export function getStringDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}
