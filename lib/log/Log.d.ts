import ILogHandler from './ILogHandler';
/**
 * The Log class provides static methods for logging messages at different levels (verbose,
 * info, warning, error) and with context information. Context information helps identify
 * which component generated the messages and makes the messages useful and filterable.
 * @public
 */
export default class Log {
    private static _logHandler;
    /**
     * Configures the logger with a different target.
     * @beta
     */
    static initialize(logHandler: ILogHandler): void;
    /**
     * Logs a verbose message
     * @param   source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param   message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    static verbose(source: string, message: string): void;
    static info(source: string, message: string): void;
    static warn(source: string, message: string): void;
    static error(source: string, error: Error): void;
}
//# sourceMappingURL=Log.d.ts.map