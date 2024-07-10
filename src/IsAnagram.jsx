import React, { useState } from "react";

const IsAnagram = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [isAnagram, setIsAnagram] = useState(null);

  const checkAnagram = () => {
    const update = (str) => str.toLowerCase().split("").sort().join("");
    setIsAnagram(update(str1) === update(str2));
  };

  return (
    <div className="flex justify-center items-center flex-col mt-4">
      <h1 className="font-bold text-4xl">Anagram Checker</h1>
      <div className="flex m-4 gap-8">
        <input
          type="text"
          className="border-4 border-red-400"
          onChange={(e) => setStr1(e.target.value)}
          value={str1}
          placeholder="Enter first word or phrase"
        />
        <input
          type="text"
          className="border-4 border-red-400"
          onChange={(e) => setStr2(e.target.value)}
          value={str2}
          placeholder="Enter second word or phrase"
        />
        <button className="bg-green-400 text-white p-2" onClick={checkAnagram}>
          Check Anagram
        </button>
      </div>
      {isAnagram !== null && (
        <div className="mt-4">
          {isAnagram ? (
            <p className="text-green-500 text-2xl underline">
              The strings are anagrams!
            </p>
          ) : (
            <p className="text-red-500 text-2xl underline">
              The strings are not anagrams!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default IsAnagram;
