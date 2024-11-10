export function formatLikes(likes) {
  if (likes >= 100000000) {
    return (likes / 100000000).toFixed(1).replace(/\.0$/, "") + "억";
  } else if (likes >= 10000) {
    return (likes / 10000).toFixed(1).replace(/\.0$/, "") + "만";
  } else if (likes >= 1000) {
    return (likes / 1000).toFixed(1).replace(/\.0$/, "") + "천";
  } else {
    return likes.toString();
  }
}
