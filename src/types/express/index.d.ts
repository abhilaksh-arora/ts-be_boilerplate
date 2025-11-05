import "express";

declare global {
  namespace Express {
    export interface Response {
      badData(payload: Payload): Response;
      invalid(payload: Payload): Response;
      failure(payload: Payload): Response;
      unauthorized(payload: Payload): Response;
      success(payload: Payload): Response;
    }

    export interface Request {
      user?: {
        id: number;
        email: string;
        username: string;
        organizationId: number;
        firstName: string;
        lastName: string;
        profilePictureUrl: string | null;
        role?: string | null;
      };
    }
  }
}

export interface Payload {
  success?: boolean;
  message?: string;
  status?: number;
  error?: string | null;
  total_count?: number | null;
  data?: object | unknown[] | null;
}
