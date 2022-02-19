





Object.defineProperty(context, "_", {
  configurable: true,
  get: () => this.last,
  set: (value) => {
    this.last = value;
  },
});
