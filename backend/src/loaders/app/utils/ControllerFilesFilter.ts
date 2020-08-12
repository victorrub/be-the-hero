import { extname } from "path";

export default function ControllerFilesFilter(file: string): boolean {
  return (
    (extname(file) === ".ts" || extname(file) === ".js") &&
    /Controller/.test(file) &&
    !/Controllers/.test(file)
  );
}
