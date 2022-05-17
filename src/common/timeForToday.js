import dayjs from 'dayjs';
export function timeForToday(value) {
  const today = new Date();
  const createdAt = new Date(value);

  const betweenTime = Math.floor(
    (createdAt.getTime() - today.getTime()) / 1000 / 60,
  );

  if (betweenTime < 1) return '마감임박';
  if (betweenTime < 60) {
    return `${betweenTime}분 남음`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 남음`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 남음`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 남음`;
}
