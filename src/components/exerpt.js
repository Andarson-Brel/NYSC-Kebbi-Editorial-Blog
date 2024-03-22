export default function Excerpt({ str, count }) {
  // console.log(str);
  if (str && str.length > count) {
    str = str.substring(0, count) + "...";
  }
  return str;
}
