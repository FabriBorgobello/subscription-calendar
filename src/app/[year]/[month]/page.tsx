import { Calendar } from "@/components/calendar";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  year: z
    .string()
    .regex(/^\d{4}$/)
    .transform(Number),
  month: z
    .string()
    .regex(/^(0?[1-9]|1[0-2])$/)
    .transform(Number),
});

export default function Page({
  params,
}: {
  params: { year: string; month: string };
}) {
  // Redirect to 404 if the URL is not valid
  const result = schema.safeParse(params);
  if (!result.success) {
    return redirect("/404");
  }

  const year = result.data.year;
  const month = result.data.month;

  return (
    <div>
      <Calendar year={year} month={month} />
    </div>
  );
}
