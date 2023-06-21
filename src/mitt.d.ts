interface Emitter {
  on<T = any>(type: string, handler?: (event: T) => void): void;
  off<T = any>(type: string, handler?: (event: T) => void): void;
  emit<T = any>(type: string, event?: T): void;
}

declare module "mitt" {
  function mitt(): Emitter;
  export = mitt;
}