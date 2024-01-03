export const timeUtils = () => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;

  const time = new Date(Date.now() - timezoneOffset);

  return time;
};
