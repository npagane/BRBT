Package.describe({
  name: "javascript-local",
  version: "0.0.0",
  summary: "Javascript Code Generator for blockly:blockly-local",
  git: "https://github.com/adrianliaw/meteor-blockly",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.1");
  api.use(["blockly-local@0.0.0", "blocks-local@0.0.0"], "client");
  api.imply("blockly-local");
  api.addFiles("lib/javascript_compressed.js", "client");
});
