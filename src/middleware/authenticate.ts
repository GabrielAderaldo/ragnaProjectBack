import { NextFunction } from 'express';
import admin from 'firebase-admin';

export async function authenticateToken(request: any, response: any, next: NextFunction) {
  const token = request.headers.authorization;
  if (!token) {
    response.status(401).json({ message: "Usuário não autorizado!" });
    return;
  }
  let decodedIdToken;
  try {
    decodedIdToken = await admin.auth().verifyIdToken(token, true);
  } catch (err) {
    response.status(401).json({ message: "Usuário não autorizado!" });
    return;
  }

  request.user = {
    uid: decodedIdToken.sub
  }

  next();
}