import blogs from "@/Data/BlogData";
import React from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./Blogs/BlogCard";

const Featured = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading="Featured Posts"
            tagline="Featured posts to inspire, educate, and elevate your understanding."
          />
        </div>

        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
