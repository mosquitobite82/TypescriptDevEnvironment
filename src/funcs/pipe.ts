type PipeFunc = <T, TResult>(x: T) => TResult;

interface Pipe<T> {
  to: (func: PipeFunc) => Pipe<T>
  apply: () => any
}

export const pipe = <T>(x: T) => {
  const to = <T, TResult>(funcs: PipeFunc[], func: PipeFunc) => {
    funcs[funcs.length++] = func;
    return pipeOf(funcs, x);
  };

  const pipeOf = <T>(funcs: PipeFunc[], x: T) => {
    const pipeObj: Pipe<T> = {
      to: (func: PipeFunc) => {
        return to(funcs, func);
      },
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
