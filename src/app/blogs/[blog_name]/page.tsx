import BlogPageComp from "@/components/Blogs/BlogPageComp";

export default async function Page({
  params,
}: {
  params: Promise<{ blog_name: string }>;
}) {
  const slug = (await params).blog_name;
  return (
    <>
      <span className="text-white">
        <BlogPageComp slug={slug} />
      </span>
    </>
  );
}


