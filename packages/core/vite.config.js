import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Scribble",
      formats: ["es", "cjs"],
      fileName: "index"
    }
  },
  plugins: [dts()]
});
