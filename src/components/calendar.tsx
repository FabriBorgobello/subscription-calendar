import { CalendarNavigation } from "./calendar-navigation";
import { CalendarView } from "./calendar-view";

export function Calendar({ year, month }: { year: number; month: number }) {
  return (
    <div className="bg-gray-950 px-2 lg:px-4 py-6 h-screen">
      <div
        style={{
          viewTransitionName: "calendar",
        }}
        className="p-2 md:p-6 rounded md:rounded-lg w-full bg-gray-900 max-w-screen-xl mx-auto flex flex-col transition-all duration-300"
      >
        <h1 className="mb-6 font-bold text-2xl">Subscription Calendar</h1>
        <CalendarNavigation year={year} month={month} />
        <CalendarView year={year} month={month} />
      </div>
    </div>
  );
}
