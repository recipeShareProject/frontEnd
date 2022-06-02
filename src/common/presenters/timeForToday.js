export function timeForToday(value, type) {
  let today;
  let createdAt;
  let expiredAt;
  let word;
  let betweenTime;
  if (type === 'party') {
    today = new Date();
    expiredAt = new Date(value);
    word = '뒤까지';
    betweenTime = Math.floor(
      (expiredAt.getTime() - today.getTime()) / 1000 / 60,
    );
  } else {
    today = new Date();
    createdAt = new Date(value);
    word = '전';
    betweenTime = Math.floor(
      (today.getTime() - createdAt.getTime()) / 1000 / 60,
    );
  }

  if (betweenTime < 1 && type !== 'party') {
    return '방금전';
  }
  if (betweenTime < 1 && type === 'party') {
    return '나눔완료';
  }

  if (betweenTime < 60) {
    return `${betweenTime}분 ${word}`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 ${word}`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 ${word}`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 ${word}`;
}
