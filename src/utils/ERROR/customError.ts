export interface CustomError {
  name: string;
  type: string;
  status: string;
  statusCode: number;
  message: string;
}

export const createCustomError = (
  name: string,
  type: string,
  status: string,
  statusCode: number,
  message: string
): CustomError => ({
  name,
  type,
  status,
  statusCode,
  message,
});

export const customErrorToJSON = (error: CustomError) => ({
  name: error.name,
  type: error.type,
  status: error.status,
  statusCode: error.statusCode,
  message: error.message,
});
