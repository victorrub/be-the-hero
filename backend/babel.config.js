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
          "@models": "./src/models",
          "@services": "./src/services",
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
