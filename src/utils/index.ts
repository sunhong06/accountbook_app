export const isValidValue = (value: string, label: string, regEx: any, regExText: string) => {
  if (value.trim() === '') {
    return `${label}를 입력해주세요`;
  } else if (!regEx.test(value)) {
    return regExText;
  }
};
