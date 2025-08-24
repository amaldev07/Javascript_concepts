function myNew(Ctor, ...args) {
  if (typeof Ctor !== "function") {
    throw new TypeError("Ctor must be a function");
  }

  // 1) Create an object linked to Ctor.prototype
  const obj = Object.create(Ctor.prototype);

  // 2) Call the constructor with `this = obj`
  const result = Ctor.apply(obj, args);

  // 3) If constructor returned an object, use it; else use `obj`
  const isObject = result !== null && (typeof result === "object" || typeof result === "function");
  return isObject ? result : obj;
}
