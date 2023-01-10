import React from "react";
import { Icon } from "@iconify/react";

const skills = [
  {
    icon: "akar-icons:html-fill",
  },
  {
    icon: "akar-icons:css-fill",
  },
  {
    icon: "ph:figma-logo",
  },
  {
    icon: "mdi:git",
  },
  {
    icon: "mdi:language-javascript",
  },
  {
    icon: "mdi:react",
  },
  {
    icon: "simple-icons:nextdotjs",
  },
  {
    icon: "mdi:vuejs",
  },
];

const Skills = () => {
  return (
    <section className="bg-transparent py-12 w-[50%]">
      <div className="container mx-auto">
        <div className="flex justify-around gap-2">
          {skills.map((e, index) => {
            return (
              <div className="flex items-center justify-center">
                <Icon
                  icon={e.icon}
                  width="50"
                  height="50"
                  className="text-secondary-content"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
