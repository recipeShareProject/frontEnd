import dayjs from 'dayjs';
export function timeForToday(value) {
  const today = new Date();
  const createdAt = new Date(value);
  console.log(today);
  console.log(createdAt);
  const betweenTime = Math.floor(
    (createdAt.getTime() - today.getTime()) / 1000 / 60,
  );
  console.log(createdAt.getTime());
  console.log(today.getTime());
  console.log(betweenTime);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}
