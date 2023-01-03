import { React, useEffect } from "react";
import Review from "./components/Review";

const Reviews = () => {
  useEffect(() => {
    document.title = "FaoTech: Reviews";
  }, []);
  return (
    <div className="-mt-[5rem] pt-32 from-primary to-secondary text-primary-content bg-gradient-to-b">
      <section>
        <div class="mx-auto max-w-screen-xl px-8 py-12 sm:px-6 sm:pb-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Read <span class="text-primary-content">trusted</span> reviews
              from our <span>students</span>
            </h2>
          </div>
          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
            <Review
              nameProps={"Alvin Pratama"}
              linkedinProps={
                "https://www.linkedin.com/in/alvin-pratama-1a046424b/"
              }
              instagramProps={"https://www.instagram.com/alvinjustkidding/"}
              telegramProps={"https://t.me/palveeen"}
              occupationProps={"FaoTech Student"}
              quoteProps={"First coffee then coding. Join FaoTech now."}
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
              occupationProps={"FaoTech Student"}
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
              occupationProps={"FaoTech Student"}
              quoteProps={"Started at stage zero. Now I know how to code well."}
              linkProps={"https://www.instagram.com/ilham.akbar6"}
              pictureProps={require("./components/ilham.jpg")}
            ></Review>
            <Review
              nameProps={"Ryan Pratama"}
              linkedinProps={"https://www.linkedin.com/in/ryanpratama14/"}
              instagramProps={"https://www.instagram.com/ryanpratama14"}
              telegramProps={"https://t.me/ryanpratama14/"}
              occupationProps={"FaoTech Student"}
              quoteProps={
                "Best career decision I've ever made. Recommended! 🙌"
              }
              linkProps={"https://www.instagram.com/ryanpratama14"}
              pictureProps={require("./components/ryan.jpg")}
            ></Review>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
