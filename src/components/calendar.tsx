import { Link } from "next-view-transitions";
import { MOCK_SUBSCRIPTIONS, Subscription } from "@/models/subscription";
import Image from "next/image";

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}

export function Calendar({ year, month }: { year: number; month: number }) {
  return (
    <div className="border border-red-500 flex flex-col">
      <CalendarNavigation year={year} month={month} />
      <CalendarView year={year} month={month} />
    </div>
  );
}

function CalendarNavigation({ year, month }: { year: number; month: number }) {
  return (
    <div className="flex items-center w-full justify-between">
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
      <h1 className="flex-1 text-center">
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
        <tr className="flex justify-between">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <th key={day} className="flex-1">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from(
          { length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) },
          (_, week) => (
            <tr key={week} className="flex h-28">
              {Array.from({ length: 7 }, (_, day) => {
                const date = week * 7 + day - firstDayOfMonth + 1;

                const isValidDate = date > 0 && date <= daysInMonth;

                return (
                  <td
                    key={day}
                    id={date.toString()}
                    className="flex-1 h-full overflow-hidden"
                  >
                    {isValidDate ? (
                      <CalendarDayCell
                        date={date}
                        subscription={
                          MOCK_SUBSCRIPTIONS.find(
                            (subscription) => subscription.billingDate === date
                          ) || null
                        }
                      />
                    ) : null}
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

function CalendarDayCell({
  date,
  subscription,
}: {
  date: number | null;
  subscription: Subscription | null;
}) {
  return (
    <div className="p-4 border flex justify-start flex-col items-center h-full gap-4">
      <p>{date}</p>
      {subscription ? (
        <div
          style={{
            viewTransitionName: `logo-${subscription.name.toLowerCase()}`,
          }}
          className="flex justify-center items-center h-10 w-full overflow-hidden max-w-24"
        >
          <Image
            id={subscription.name}
            className="h-full w-auto"
            src={subscription.logo}
            alt={subscription.name}
            height={0}
            width={0}
          />
        </div>
      ) : null}
    </div>
  );
}
