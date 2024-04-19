import format from "date-fns/format";

export function formatDate(date) {
  const dateObj = new Date(date);
  return format(
    dateObj,
    "MMMM do 'at' h:mm b"
  ) 
}