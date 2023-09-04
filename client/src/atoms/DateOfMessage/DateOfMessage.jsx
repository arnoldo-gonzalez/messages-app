import {time} from "./DateOfMessage.module.css";
import { months, days } from "../../data/timesData"

export default function DateOfMessage({day, month, year, weekDay}) {
  const today = new Date()
  const [todayDay, todayMonth, todayYear] = [today.getDate(), today.getMonth(), today.getFullYear()]

  return (
    <>
    { todayDay === day && todayMonth === month && todayYear === year
      ? <h4 className={time}>Today</h4>
      : todayYear !== year
      ? <h4 className={time}>{year} - {months.en[month]} - {day}</h4>
      : todayMonth !== month 
      ? <h4 className={time}>{months.en[month]} - {day}</h4>
      : <h4 className={time}>{days.en[weekDay]}</h4>
    }
    </>
  )
}
