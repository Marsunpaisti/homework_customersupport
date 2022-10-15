import { HTTPLoggerMiddleware } from './httplogger.middleware';

describe('HttploggerMiddleware', () => {
  it('should be defined', () => {
    expect(new HTTPLoggerMiddleware()).toBeDefined();
  });
});
