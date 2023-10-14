import { Metadata } from "next";
import Link from "next/link";
import TestButton from "./components/Temp";
import { getSortedPostsData } from "./lib/posts";

export const metadata: Metadata = {
  title: "asdasdasd",
  description: "asdasdasd",
};

export default function Home() {
  const allPostsData = getSortedPostsData();

  console.log(allPostsData);

  return (
    <>
      <main
        style={{ flexDirection: "column", gap: "10px" }}
        className="flex items-center justify-between">
        <TestButton />
        <ul style={{ flexDirection: "column", gap: "10px" }} className="flex">
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
