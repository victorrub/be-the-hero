module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
    "minify",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@controllers": "./src/controllers",
          "@data": "./src/data",
          "@loaders": "./src/loaders",
          "@annotations": "./src/loaders/api/annotations",
          "@models": "./src/models",
          "@errors": "./src/models/errors",
          "@validators": "./src/models/validators",
          "@services": "./src/services",
          "@utils": "./src/utils",
        },
      },
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
