import {
  ErrorRequestHandler,
  NextFunction,
  type Request,
  type Response,
} from "express";
import { AppError } from "../utils/app.error";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  void req;
  void next;
  let statusCode = 500;
  let message = "Server Error";
  let details: unknown;
  let errors:
    | Array<{ path: string; message: string; code?: string }>
    | undefined;

  // Handle different error types
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as any).code === 11000
  ) {
    statusCode = 409;
    message = "Duplicate key error";
    details = (err as any).keyValue ?? (err as any).keyPattern;
  }

  res.status(statusCode).json({ message, details, errors }); // Send the error response
};
