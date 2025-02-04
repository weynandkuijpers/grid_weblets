import { v4 } from "uuid";
import VM from "./vm";

export default class Presearch extends VM {
  public id = v4().split("-")[0];
  public name = `PS${this.id}`;
  public cpu = 1;
  public memory = 1024 * .5;
  public preCode = "";
  public publicIp = false;
  public privateRestoreKey = "";
  public publicRestoreKey = "";

  public get valid(): boolean {
    return this.name !== "" && this.preCode !== "";
  }
}
