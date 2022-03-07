import css from "./DateStamp.module.css";

const DateStamp = () => {
  const dateStamp = new Date();
  const date = dateStamp.getDate();

  const month = dateStamp.toLocaleString("en-US", { month: "short" });
  const day = dateStamp.toLocaleString("en-US", { weekday: "long" });
  const year = dateStamp.getFullYear();
  return (
    <div className={css["date-Container"]}>
      <div className={css["date"]}>{date}</div>
      <div className={css["month"]}>{month}</div>
      <div className={css["year"]}>{year}</div>
      <div className={css["day"]}>{day}</div>
    </div>
  );
};
export default DateStamp;
