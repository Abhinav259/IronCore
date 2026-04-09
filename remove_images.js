import fs from "fs";

const filePath = "src/utils/exerciseUtils.ts";
let content = fs.readFileSync(filePath, "utf-8");

content = content.replace(/\s*image:\s*.*?,?\n/g, "\n");
content = content.replace(/\s*alt:\s*.*?,?\n/g, "\n");

fs.writeFileSync(filePath, content);
console.log("Done");
