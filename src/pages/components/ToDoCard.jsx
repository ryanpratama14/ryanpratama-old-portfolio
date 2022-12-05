import React from "react";

const ToDoCard = ({ nameProps, taskProps, dateProps, percentProps }) => {
  return (
    <div class="mx-10 my-6 shadow-lg rounded-xl w-96 md:w-96 p-4 bg-white overflow-hidden">
      <div class="flex items-center border-b-2 mb-2 py-2">
        <img
          class="w-10 h-10 object-cover "
          alt="tasks"
          src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png"
        />

        <div class="pl-3">
          <div class="font-medium text-black">{nameProps}</div>
        </div>
      </div>
      <div class="w-full">
        <p class="text-gray-800 text-sm font-medium mb-2">Working On:</p>
        <p class="text-gray-800 text-xl font-medium mb-2">{taskProps}</p>
        <p class="text-gray-600 text-xs font-bold mb-2">Due: {dateProps}</p>
      </div>
      <div class="flex items-center justify-between my-2">
        <p class="text-red-600 text-sm">
          {percentProps}%<span class="text-black">/</span>
          <span class="text-green-600">100%</span>{" "}
          <span class="text-black">task completed</span>
        </p>
      </div>
    </div>
  );
};

export default ToDoCard;
