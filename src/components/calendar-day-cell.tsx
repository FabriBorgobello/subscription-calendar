import { Subscription } from "@/models/subscription";
import { clsx } from "clsx";
import Image from "next/image";

export function CalendarDayCell({
  isToday,
  isValidDate,
  date,
  subscription,
}: {
  isToday: boolean;
  isValidDate: boolean;
  date: number | null;
  subscription: Subscription | null;
}) {
  return (
    <div
      className={clsx(
        "group rounded md:rounded-lg bg-gray-800 px-1 md:px-4 pb-1 md:pb-2 pt-1 flex justify-start flex-col items-center h-full gap-1 xl:gap-2 transition-all duration-300",
        isToday && "bg-blue-950 hover:bg-blue-800",
        isValidDate &&
          "hover:bg-gray-700 hover:shadow-lg hover:scale-105 group-hover:text-white",
        !isValidDate && "opacity-30"
      )}
    >
      <p
        className={clsx(
          "text-gray-400 transition-all duration-300",
          isToday && "text-blue-500 font-bold group-hover:text-white",
          !isValidDate && "hidden"
        )}
      >
        {date}
      </p>
      {subscription ? (
        <div
          style={{
            viewTransitionName: `logo-${subscription.id}`,
          }}
          className="mt-auto flex justify-center items-center w-full overflow-hidden max-w-24"
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
