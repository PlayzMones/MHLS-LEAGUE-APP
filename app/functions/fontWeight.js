export default function fontWeight(w) {
  if (w == 100) {
    return "Montserrat-Light";
  } else if (w == 200) {
    return "Montserrat-Medium";
  } else if (w == 300) {
    return "Montserrat-SemiBold";
  } else if (w > 300) {
    return "Montserrat-ExtraBold";
  } else {
    return null;
  }
}
