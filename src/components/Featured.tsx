import blogs from "@/Data/BlogData";
import React from "react";

const Featured = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  return <div></div>;
};

export default Featured;
