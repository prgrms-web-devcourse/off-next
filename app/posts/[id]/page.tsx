import { getAllPostIds, getPostData } from "@/app/lib/posts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const postData = (await getPostData(params.id)) as any;

  return {
    title: postData.title,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();

  return paths.map((path) => ({
    path,
  }));
}

export default async function FirstPost({ params }: any) {
  const postData = (await getPostData(params.id)) as any;

  return (
    <>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}

      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}
