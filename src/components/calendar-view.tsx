import { MOCK_SUBSCRIPTIONS } from "@/models/subscription";
import { CalendarDayCell } from "./calendar-day-cell";

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}

const TODAY = new Date();

export function CalendarView({ year, month }: { year: number; month: number }) {
  const adjustedMonthIndex = month - 1;
  const daysInMonth = getDaysInMonth(adjustedMonthIndex + 1, year);
  const firstDayOfMonth = getFirstDayOfMonth(adjustedMonthIndex, year);

  return (
    <table>
      <thead>
        <tr className="flex justify-between gap-2 md:gap-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <th key={day} className="flex-1 text-gray-500 py-2 md:py-4">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex flex-col gap-2 md:gap-4">
        {Array.from(
          { length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) },
          (_, week) => (
            <tr key={week} className="flex h-14 md:h-20 gap-2 md:gap-4">
              {Array.from({ length: 7 }, (_, day) => {
                const date = week * 7 + day - firstDayOfMonth + 1;

                const isValidDate = date > 0 && date <= daysInMonth;

                const isToday =
                  isValidDate &&
                  date === TODAY.getDate() &&
                  month === TODAY.getMonth() + 1 &&
                  year === TODAY.getFullYear();

                return (
                  <td key={day} id={date.toString()} className="flex-1 h-full ">
                    <CalendarDayCell
                      isToday={isToday}
                      date={date}
                      isValidDate={isValidDate}
                      subscription={
                        MOCK_SUBSCRIPTIONS.find(
                          (subscription) => subscription.billingDate === date
                        ) || null
                      }
                    />
                  </td>
                );
              })}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
