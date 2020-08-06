import { readdir } from "fs";
import path from "path";
import "reflect-metadata";

import { IControllerBase } from "./core/IControllerBase";

export class ControllersServiceCollection {
  private _controllers = new Array<IControllerBase>();

  public GetControllers(): Array<IControllerBase> {
    return this._controllers;
  }

  public AddControllers(): Promise<Array<IControllerBase>> {
    return new Promise((resolve, reject) => {
      try {
        const normalizedPath = path.join(__dirname, "../../", "controllers");

        readdir(normalizedPath, async (err, files) => {
          if (err) throw new Error();

          const promiseGetAllControllers = files.map(async (file: string) => {
            const moduleName = file.split(".").slice(0, -1).join(".");

            const module = await import(`../../controllers/${file}`);

            const Controller = module[moduleName];

            const instance = new Controller();

            const controllerType = Reflect.getMetadata(
              "controller-type",
              Controller
            );

            const controllerBase: IControllerBase = {
              name: moduleName,
              type: controllerType,
              pureClass: Controller,
              instantiatedClass: instance,
            };

            return controllerBase;
          });

          this._controllers = await Promise.all(promiseGetAllControllers);

          resolve(this._controllers);
        });
      } catch (ex) {
        reject(
          new Error(
            `An error occurred while the controllers were being instantiated.`
          )
        );
      }
    });
  }
}
