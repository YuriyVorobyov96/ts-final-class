/**
 * Make the following class unable to be extended.
 *
 * @param target
 * @returns The new class
 */
export function FinalClass<T extends { new (...args: any[]): object }>(target: T): T {
  return class FinalClass extends target {
    constructor(...args: any[]) {
      if (new.target !== FinalClass) throw new Error(`A final class ${target.name} is not extendable`);
      super(...args);
    }
  };
}
