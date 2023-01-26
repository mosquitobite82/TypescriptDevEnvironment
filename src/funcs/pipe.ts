type PipeFunc = <T, U>(x: T) => U;

interface Pipe<T> {
  to: <T, U>(func: (x: T) => U) => Pipe<U>
  apply: <U>() => U
}

/**
 * 
 * @param x the value to send into the pipe
 * @returns the pipe
 */
export const pipe = <T>(x: T) => {
  /**
  * Adds the given function to the pipe
  * @param func
  * @returns the pipe
  */
  const to = <T, TResult>(funcs: PipeFunc[], func: PipeFunc) => {
    funcs[funcs.length++] = func;
    return pipeOf(funcs, x);
  };

  const pipeOf = <T>(funcs: PipeFunc[], x: T) => {
    const pipeObj: Pipe<T> = {
      /**
       * Adds the given function to the pipe
       * @param func 
       * @returns the pipe
       */
      to: <T, U>(func: (x: T) => U) => {
        return to<T, U>(funcs, func as PipeFunc);
      },
      /**
       * @returns the result from sending the initial value through the pipe
       */
      apply: () => {
        const first = funcs[0];
        const rest = funcs.slice(1);
        let result: any = first(x);
        rest.map(func => result = func(result));
        return result;
      }
    };

    return pipeObj;
  };



  return pipeOf([], x);
};
