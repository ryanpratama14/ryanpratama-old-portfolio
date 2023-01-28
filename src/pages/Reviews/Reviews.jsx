import React from "react";
import { Helmet } from "react-helmet";
import Review from "./components/Review";

const Reviews = ({ title }) => {
  return (
    <section id="reviews" className="styleIt">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="font-bold sm:text-5xl text-4xl my-20 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Read trusted reviews <br /> from our students
        </h1>
      </div>

      <div className="gap-6 flex justify-center items-center flex-wrap">
        <Review
          nameProps={"Alvin Pratama"}
          linkedinProps={"https://www.linkedin.com/in/alvin-pratama-1a046424b/"}
          instagramProps={"https://www.instagram.com/alvinjustkidding/"}
          telegramProps={"https://t.me/palveeen"}
          occupationProps={"faoTech Student"}
          quoteProps={"First coffee then coding. Join faoTech now."}
          linkProps={"https://www.instagram.com/alvinjustkidding"}
          pictureProps={require("./components/alvin.jpg")}
        ></Review>
        <Review
          nameProps={"Anas Firly"}
          linkedinProps={
            "https://www.linkedin.com/in/muhammad-anasfirly-3b3948147/"
          }
          instagramProps={"https://www.instagram.com/anasfirly_"}
          telegramProps={"https://t.me/anasfirly20"}
          occupationProps={"faoTech Student"}
          quoteProps={"Great experience, learned so much from here."}
          linkProps={"https://www.instagram.com/anasfirly_"}
          pictureProps={require("./components/firly.jpg")}
        ></Review>
        <Review
          nameProps={"Ilham Akbar"}
          linkedinProps={
            "https://www.linkedin.com/in/muhammad-ilham-akbar-380372166/"
          }
          instagramProps={"https://www.instagram.com/ilham.akbar6"}
          telegramProps={"https://t.me/ilham_akbar6"}
          occupationProps={"faoTech Student"}
          quoteProps={"Started at stage zero. Now I know how to code well."}
          linkProps={"https://www.instagram.com/ilham.akbar6"}
          pictureProps={require("./components/ilham.jpg")}
        ></Review>
        <Review
          nameProps={"Ryan Pratama"}
          linkedinProps={"https://www.linkedin.com/in/ryanpratama14/"}
          instagramProps={"https://www.instagram.com/ryanpratama14"}
          telegramProps={"https://t.me/ryanpratama14/"}
          occupationProps={"faoTech Student"}
          quoteProps={"Best career decision I've ever made. Recommended!"}
          linkProps={"https://www.instagram.com/ryanpratama14"}
          pictureProps={require("./components/ryan.jpg")}
        ></Review>
      </div>
    </section>
  );
};

export default Reviews;
