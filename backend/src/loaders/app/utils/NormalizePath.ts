import path from "path";

export default function NormalizePath(folderName = ""): string {
  return path.join(__dirname, "../../../", folderName);
}
