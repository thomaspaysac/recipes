export function formatTotalTime (prep, cuisson) {
  const total = prep + cuisson;
  if (total >= 60 && (total / 60) % 1 === 0) {
    return total / 60 === 1 ? "1 heure" : total/60 + " heures"
  } else if (total >= 60) {
    const arr = (total/60).toString().split('.');
    const h = arr[0];
    const min = Math.floor(("0." + arr[1]) * 60);
    return h + (h > 1 ? " heures " : " heure ") + min + " minutes";
  } else {
    return total + " minutes";
  }
}