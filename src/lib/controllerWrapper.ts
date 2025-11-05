import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { CustomError } from "./error/custom.error";
import { fromError } from "zod-validation-error";

type ControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const controllerWrapper = (
  fn: ControllerFunction
): ControllerFunction => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: unknown) {
      if (error instanceof CustomError) {
        res.failure({
          status: error.status,
          message: error.message,
        });
      } else if (error instanceof ZodError) {
        res.invalid({
          message: fromError(error).toString(),
        });
      } else {
        next(error);
      }
    }
  };
};
