import IsNumber from './IsNumber';

export default function Caculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return { total: null, next: null, operator: null };
  }

  if (IsNumber(buttonName)) {
    if (obj.total) {
      obj.next = obj.total + buttonName;
    } else {
      obj.next = buttonName;
    }
    return { total: obj.next, next: null, operator: null };
  }
}
