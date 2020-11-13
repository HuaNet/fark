import { eslint } from "rollup-plugin-eslint";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";
import babel from "rollup-plugin-babel";
import clear from "rollup-plugin-clear";
import replace from "rollup-plugin-replace";
import json from "rollup-plugin-json";
import { uglify } from "rollup-plugin-uglify";
import { version } from "./package.json";
import typescript from "rollup-plugin-typescript3";

export default {
    input: "./src/index.ts",
    plugins: [
        clear({
            targets: ["./dist"],
            watch: true
        }),
        eslint(),
        typescript(),
        commonjs({ include: "node_modules/**", extensions: [".js", ".ts"] }),
        resolve({
            module: true,
            jsnext: true,
            // builtins: false,
            main: true,
            browser: true,
            extensions: [".js", ".json"]
        }),
        json(),
        globals({
            window: "window"
        }),
        builtins(),
        babel({
            exclude: "node_modules/**",
            runtimeHelpers: true,
            externalHelpers: true
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),

        process.env.NODE_ENV === "production" &&
            uglify({
                output: {
                    comments: "all"
                }
            })
    ],
    external: [],
    output: {
        banner:
            "/** @license fark v" +
            version +
            "\n*\n* Copyright (c) 2018-present, wangzhe, Inc.\n*\n* This source code is licensed under the MIT license found in the\n* LICENSE file in the root directory of this source tree.\n*/",
        file: "./dist/fark",
        format: process.env.NODE_ENV === "development" ? "umd" : "cjs",
        name: "fark",
        sourceMap: process.env.NODE_ENV === "development"
    }
};
