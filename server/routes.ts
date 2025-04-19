import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import bookingRoutes from './routes/booking';

export async function registerRoutes(app: Express): Promise<Server> {
  // Register booking routes for consultation scheduling
  app.use(bookingRoutes);

  // Additional routes can be added here
  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
