import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class HTTPLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const startAt = Date.now();
    const { method, originalUrl, ip } = request;
    const userAgent = request.headers['user-agent'];

    response.on('close', () => {
      const endAt = Date.now();
      const timeTaken = endAt - startAt;
      const { statusCode } = response;
      const contentLength = response.get('Content-Length');

      this.logger.log(
        `${method} ${originalUrl} => Status: ${statusCode} Len: ${contentLength} T: ${timeTaken}ms | ${userAgent} (${ip}) `,
      );
    });

    next?.();
  }
}
