import React from "react";

export function QuizCreateForm() {
  return (
    <div className="form">
      <div className="p-4 mb-4 rounded-2xl">
        <h1 className="text-2xl font-normal text-black lg:text-3xl font-custom">
          Maak een quiz aan
        </h1>
      </div>
      <div className="flex flex-col space-y-4">
        <input
          placeholder="Titel"
          className="w-full p-2 mb-2 border-2 rounded-full"
        />
        <input
          placeholder="Beschrijving"
          className="w-full p-2 mb-2 border-2 rounded-full"
        />
        <button className="w-full p-2 text-white rounded-full bg-sky-600">
          Quiz aanmaken
        </button>
      </div>
    </div>
  );
}
