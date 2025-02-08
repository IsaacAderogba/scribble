import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ScribbleReact",
      formats: ["es", "cjs"],
      fileName: "index"
    }
  },
  plugins: [react(), dts()]
});
