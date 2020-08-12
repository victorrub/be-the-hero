import { readdir } from "fs";

export default function GetDirectoryContent(
  path: string
): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    readdir(path, (error, files) => {
      if (error) reject(error);

      resolve(files);
    });
  });
}
