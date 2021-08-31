

export const calulateDate = async (date) => {
  let year = await date.split("-")[0];
  let month = await date.split("-")[1];
  let day = await date.split("-")[2].split("T")[0];
  let newDate = `${year}년 ${month}월 ${day}일`;
  return newDate;
};