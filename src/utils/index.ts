export const isValidValue = (value: string, label: string, regEx: any, regExText: string) => {
  console.log(value);
  if (value.trim() === '') {
    return `${label}를 입력해주세요`;
  } else if (!regEx.test(value)) {
    return regExText;
  }
};
