import { Link } from "next-view-transitions";

const TODAY = new Date();
export function CalendarNavigation({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const IS_CURRENT_MONTH =
    TODAY.getFullYear() === year && TODAY.getMonth() + 1 === month;

  return (
    <div className="flex items-center w-full justify-between gap-2 md:gap-4 mb-2 h-10">
      {/* Previous year */}
      <Link
        className="rotate-180 flex items-center justify-center h-full transition-all duration-300 rounded md:rounded-lg px-1  md:px-4 py-2 fill-gray-400 bg-gray-800 hover:bg-gray-700"
        href={`/${year - 1}/${month}`}
      >
        <svg width="25" height="14" viewBox="0 0 25 14">
          <path d="M1 13L13 6.94393L1 0.999999L1 3.42991L8.09615 6.94393L1 10.3832L1 13Z" />
          <path d="M11 13L23 6.94393L11 0.999999L11 3.42991L18.0962 6.94393L11 10.3832L11 13Z" />
        </svg>
      </Link>
      {/* Previous month */}
      <Link
        className="rotate-180 flex items-center justify-center h-full transition-all duration-300 rounded md:rounded-lg px-1  md:px-4 py-2 fill-gray-400 bg-gray-800 hover:bg-gray-700"
        href={month === 1 ? `/${year - 1}/12` : `/${year}/${month - 1}`}
      >
        <svg width="15" height="14" viewBox="0 0 15 14">
          <path d="M1 13L13 6.94393L1 0.999999L1 3.42991L8.09615 6.94393L1 10.3832L1 13Z" />
        </svg>
      </Link>
      <h2 className="flex-1 text-center text-gray-200 bg-gray-800 h-full px-1 py-2 rounded md:rounded-lg">
        {new Date(year, month - 1).toLocaleString("default", {
          month: "short",
          year: "numeric",
        })}
      </h2>
      {/* Go to current month */}
      {!IS_CURRENT_MONTH && (
        <Link
          className="transition-all duration-300 rounded md:rounded-lg px-1  md:px-4 py-2 fill-gray-400 bg-gray-800 hover:bg-gray-700"
          href={`/${TODAY.getFullYear()}/${TODAY.getMonth() + 1}`}
        >
          Today
        </Link>
      )}
      {/* Next month */}
      <Link
        className="flex items-center justify-center h-full transition-all duration-300 rounded md:rounded-lg px-1  md:px-4 py-2 fill-gray-400 bg-gray-800 hover:bg-gray-700"
        href={month === 12 ? `/${year + 1}/1` : `/${year}/${month + 1}`}
      >
        <svg width="15" height="14" viewBox="0 0 15 14">
          <path d="M1 13L13 6.94393L1 0.999999L1 3.42991L8.09615 6.94393L1 10.3832L1 13Z" />
        </svg>
      </Link>
      {/* Next year */}
      <Link
        className="flex items-center justify-center h-full transition-all duration-300 rounded md:rounded-lg px-1  md:px-4 py-2 fill-gray-400 bg-gray-800 hover:bg-gray-700"
        href={`/${year + 1}/${month}`}
      >
        <svg width="25" height="14" viewBox="0 0 25 14">
          <path d="M1 13L13 6.94393L1 0.999999L1 3.42991L8.09615 6.94393L1 10.3832L1 13Z" />
          <path d="M11 13L23 6.94393L11 0.999999L11 3.42991L18.0962 6.94393L11 10.3832L11 13Z" />
        </svg>
      </Link>
    </div>
  );
}
