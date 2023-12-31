import React from "react";
import RenderCards from "../../components/Card";
import Carousel from "../../components/Carousel";
import blogs from "../../json/blogs.json";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 gap-x-2 gap-y-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        <Carousel />
        <div className="hidden p-4 lg:block">
          <div className="h-full w-full rounded-xl px-4 py-4 hover:bg-slate-200/50 hover:shadow-sm dark:hover:bg-slate-800/50">
            <h3 className="select-none pb-4 text-lg font-bold text-title dark:text-title-dark md:text-xl">
              Top Post
            </h3>
            <div className="h-80 overflow-hidden pr-4 hover:overflow-y-auto">
              {blogs.map((blog, index) => (
                <p
                  key={index}
                  className="cursor-pointer py-4 font-semibold hover:text-primary md:text-lg"
                  onClick={() => navigate(`/article/${blog.id}`)}
                >
                  {blog.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h3 className="card-container title px-10 md:mt-4">Latest Post</h3>
      <div className=" w-full px-10 ">
        <div className="flex gap-2 overflow-x-auto">
          <Button
            title="All"
            className="rounded-md bg-primary/20 px-4 py-1 text-dark-gray dark:text-light"
          />
          <Button title="HTML" className="px-2" />
          <Button title="CSS" className="px-2" />
          <Button title="Python" className="px-2" />
          <Button title="JavaScript" className="px-2" />
          <Button title="ReactJS" className="px-2" />
          <Button title="NodeJS" className="px-2" />
          <Button title="AI" className="px-2" />
        </div>
      </div>
      <div className=" mt-2 grid grid-cols-1 gap-x-2 gap-y-8 px-6 duration-300 sm:grid-cols-2 lg:grid-cols-3">
        <RenderCards />
      </div>
    </div>
  );
}
