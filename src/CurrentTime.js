export default function CurrentTime() {
  let now = new Date();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentTime = `${days[day]} ${hours}:${minutes}`;
  return currentTime;
}
