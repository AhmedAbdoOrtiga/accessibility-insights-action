export declare class PromiseUtils {
    waitFor<T, Y>(promise: Promise<T>, timeoutInMilliSec: number, onTimeoutCallback: () => Promise<Y>): Promise<T | Y>;
}
