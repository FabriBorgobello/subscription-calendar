import Link from "next/link";

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}

export function Calendar({ year, month }: { year: number; month: number }) {
  return (
    <div>
      <CalendarNavigation year={year} month={month} />
      <CalendarView year={year} month={month} />
    </div>
  );
}

function CalendarNavigation({ year, month }: { year: number; month: number }) {
  return (
    <div className="flex items-center">
      {/* Previous year */}
      <Link
        className="border border-1 p-2"
        href={`/${year - 1}/${month}`}
      >{`<<`}</Link>
      {/* Previous month */}
      <Link
        className="border border-1 p-2"
        href={month === 1 ? `/${year - 1}/12` : `/${year}/${month - 1}`}
      >{`<`}</Link>
      <h1>
        {month}/{year}
      </h1>
      {/* Next month */}
      <Link
        className="border border-1 p-2"
        href={month === 12 ? `/${year + 1}/1` : `/${year}/${month + 1}`}
      >{`>`}</Link>
      {/* Next year */}
      <Link
        className="border border-1 p-2"
        href={`/${year + 1}/${month}`}
      >{`>>`}</Link>
    </div>
  );
}

function CalendarView({ year, month }: { year: number; month: number }) {
  const adjustedMonthIndex = month - 1;
  const daysInMonth = getDaysInMonth(adjustedMonthIndex + 1, year);
  const firstDayOfMonth = getFirstDayOfMonth(adjustedMonthIndex, year);

  return (
    <table>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(
          { length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) },
          (_, week) => (
            <tr key={week}>
              {Array.from({ length: 7 }, (_, day) => {
                const date = week * 7 + day - firstDayOfMonth + 1;
                return (
                  <td key={day}>{date > 0 && date <= daysInMonth && date}</td>
                );
              })}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
