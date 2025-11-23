import React from "react";
import SectionHeader from "../SectionHeader";
import blogs from "@/Data/BlogData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto">
        <div className="items-center text-center pt-10 pb-20 ">
          <SectionHeader
            heading="All Blogs"
            tagline="Explore all the blogs in one place"
          />
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              slug={blog.slug}
              desc={blog.description}
              imgUrl={blog.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
