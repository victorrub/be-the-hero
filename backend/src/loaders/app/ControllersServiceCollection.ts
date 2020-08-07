import GetDirectoryContent from "@loaders/app/utils/GetDirectoryContent";
import NormalizePath from "@loaders/app/utils/NormalizePath";

import { Controllers } from "./core/GetAllControllers";
import { IControllerBase } from "./core/IControllerBase";

export class ControllersServiceCollection {
  public static async AddControllers(): Promise<Array<IControllerBase>> {
    const normalizedPath = NormalizePath("controllers");
    const filesOnControllersFolder = await GetDirectoryContent(normalizedPath);

    const controllers = await Controllers.GetAll(filesOnControllersFolder);
    return controllers;
  }
}
