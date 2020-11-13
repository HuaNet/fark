/**
 * The redirectable implementation for the Log class.
 * @beta
 */
export interface ILogHandler {
    verbose(source: string, message: string): void;
    info(source: string, message: string): void;
    warn(source: string, message: string): void;
    error(source: string, error: Error): void;
}
export default ILogHandler;
//# sourceMappingURL=ILogHandler.d.ts.map