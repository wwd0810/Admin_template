import { AxiosError } from "axios";

declare module "react-canvas-js";

declare global {
  type ApiResult<T> = {
    result: number;
    data: T;
  };

  type Page = {
    page: number;
    select_page: number;
  };

  type Pending = {
    [key: string]: boolean;
  };
  type Success = {
    [key: string]: boolean;
  };
  type Failure = { [key: string]: [boolean, null | AxiosError] };
}
