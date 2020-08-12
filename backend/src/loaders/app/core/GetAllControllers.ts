import ControllerFilesFilter from "@loaders/app/utils/ControllerFilesFilter";
import RemoveFileExtension from "@loaders/app/utils/RemoveFileExtension";

import { IControllerBase } from "./IControllerBase";

import "reflect-metadata";

export class Controllers {
  public static GetAll(
    filesOnControllersFolder: Array<string>
  ): Promise<Array<IControllerBase>> {
    return Promise.all(
      filesOnControllersFolder
        .filter((file) => ControllerFilesFilter(file))
        .map((file) => this.ImportControllerAndCreateControllerBaseObject(file))
    );
  }

  private static async ImportControllerAndCreateControllerBaseObject(
    file: string
  ): Promise<IControllerBase> {
    const basePath = `../../..`;
    const module = await import(`${basePath}/controllers/${file}`);

    const moduleName = RemoveFileExtension(file);
    const Controller = module[moduleName];
    const instance = new Controller();

    const controllerType = Reflect.getMetadata("controller-type", Controller);

    return {
      name: moduleName,
      type: controllerType,
      pureClass: Controller,
      instantiatedClass: instance,
    };
  }
}
