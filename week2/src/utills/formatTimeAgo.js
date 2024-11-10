export function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInWeek = 604800;

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds}초`;
  } else if (diffInSeconds < secondsInHour) {
    return `${Math.floor(diffInSeconds / secondsInMinute)}분`;
  } else if (diffInSeconds < secondsInDay) {
    return `${Math.floor(diffInSeconds / secondsInHour)}시간`;
  } else if (diffInSeconds < secondsInWeek) {
    return `${Math.floor(diffInSeconds / secondsInDay)}일`;
  } else {
    return `${Math.floor(diffInSeconds / secondsInWeek)}주`;
  }
}
