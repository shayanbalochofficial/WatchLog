import blogs from "@/Data/BlogData";
import React from "react";

const Featured = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto">
        <div className="items-center text-center pt-10 pb-20"></div>
      </div>
    </section>
  );
};

export default Featured;
