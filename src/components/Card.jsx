import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();

    const storedQuotes = localStorage.getItem("savedQuotes");
    if (storedQuotes) {
      setSavedQuotes(JSON.parse(storedQuotes));
    }
  }, []);
  // function to get the quote from the given API
  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setQuote(response.data[0]);
    } catch (error) {
      console.error("Error fetching the quote", error);
    }
  };
  //   function to save the quote
  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      const newSavedQuotes = [...savedQuotes, quote];
      setSavedQuotes(newSavedQuotes);
      localStorage.setItem("savedQuotes", JSON.stringify(newSavedQuotes));
      fetchQuote();
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex flex-col items-center justify-center px-5 py-5">
      <div className="w-full max-w-lg mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
        <div className="w-full mb-10">
          <div className="flex justify-end">
            <svg
              onClick={saveQuote}
              className="h-8 w-8 text-red-500 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
          </div>
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-xl text-gray-600 font-bold text-center px-5">
            {quote}
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        {savedQuotes.length > 0 && (
          <div className="w-full max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-5">
              Saved Quotes
            </h2>
            {savedQuotes.map((savedQuote, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-5 mb-5"
              >
                {savedQuote}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
