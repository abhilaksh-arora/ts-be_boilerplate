import type { NextFunction, Request, Response } from "express";

export function handleNotFound(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  res.invalid({
    message: `Not Found - ${req.method} ${req.originalUrl}`,
  });
}

export function handleError(
  _err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  res.failure({});
}
