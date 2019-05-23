import moment from "moment";

export const getMonth = monthIndex => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saterday",
    "Sunday"
  ];
  const now = moment();
  const monthNumber = now.month(monthIndex);
  const year = now.year();
  const daysInMonth = now.daysInMonth();
  let month = [];

  // console.log("Month: ", monthNumber);

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = moment(
      `${year}-${(monthIndex || monthNumber) + 1}-${i}`, "YYYY-MM-D"
    );
    month.push({
      currentDate,
      weekDay: weekDays[currentDate.weekday()]
    });
  }
  return month;
};
