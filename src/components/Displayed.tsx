import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Cards: FC<{
  link: string;
  logo: string;
  alt: string;
  title: string;
  description: string;
  color: string;
}> = ({ link, logo, alt, title, description, color }) => {
  return (
    <section
      style={{ backgroundColor: color }}
      className="rounded drop-shadow-xl p-2 flex justify-between items-center w-400 sm:w-fit sm:justify-center"
    >
      <div
        className="my-2 mx-5 bg-slate-50 rounded w-20 h-20 sm:w-50 sm:h-50"
        onClick={() => window.open(link, "_blank")}
      >
        <img src={logo} alt={alt} className="object-cover w-full h-full p-2" />
      </div>
      <div className="w-3/4 sm:hidden">
        <p className="text-lg font-semibold m-0 ">{title}</p>
        <p className="h-15 mb-3 ">{description}</p>
        <button
          className="rounded w-full bg-slate-50 my-2 py-2 uppercase font-semibold"
          onClick={() => window.open(link, "_blank")}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export const Bubble: FC<{
  link: string;
  logo: string;
  alt: string;
  color: string;
}> = ({ link, logo, alt, color }) => {
  return (
    <div className="m-2 g-col-2">
      <a href={link} style={{ textDecoration: "none" }}>
        <div
          style={{ backgroundColor: color }}
          className="circle animated d-flex flex-column justify-content-center align-items-center"
          id={(Math.random() * 5 + 2).toString()}
        >
          <div className="">
            <img
              src={logo}
              alt={alt}
              className="w-20 h-20 p-1 sm:w-16 sm:h-16 bg-slate-100 rounded-full object-contain"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export const Links: FC<{
  link?: string;
  href?: string;
  name: string;
  icon: any;
}> = ({ link, href, name, icon }) => {
  return (
    <div className="my-2 mx-5 cursor-pointer">
      {link && <Link to={link}>{icon}</Link>}
      {href && (
        <button onClick={() => window.open(href, "_self")}>{icon}</button>
      )}
    </div>
  );
};

export const Inputs: FC<{
  title: string;
  name: string;
}> = ({ title, name }) => {
  return (
    <div>
      {title === "Message" ? (
        <textarea
          className="rounded border-color border my-3 p-2 w-80"
          rows={5}
          placeholder={title}
          name={name}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={title}
          name={name}
          className="rounded border-color border my-3 p-2 w-80 placeholder-black"
        />
      )}
    </div>
  );
};
