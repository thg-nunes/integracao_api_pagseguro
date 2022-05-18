import { Request, Response } from "express";

export interface AnalyzeData {
  analyzePassword?(password: string | number): string | number
  insertData?(req: Request, res: Response): void
}
