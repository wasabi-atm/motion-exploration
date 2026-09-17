import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "src/content/live_body_clean.html");
  const html = fs.readFileSync(filePath, "utf-8");

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
