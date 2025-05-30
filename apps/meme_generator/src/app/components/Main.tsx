import { useState } from 'react';

export default function Main() {
  const [memeInfo, setMemeInfo] = useState({
    topText: 'One does not simply not',
    bottomText: 'Walk into Mordor',
    imgUrl: 'http://i.imgflip.com/1bij.jpg',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMemeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-col items-center max-w-screen-md w-11/12 mx-auto">
      {' '}
      {/* .meme styles */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {' '}
        {/* .form styles */}
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={memeInfo.topText}
            onChange={handleChange}
            className="w-full mt-1 rounded border border-gray-300 pl-1 min-h-10 font-karla" /* .form input styles, font-karla needs tailwind.config.js setup */
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={memeInfo.bottomText}
            onChange={handleChange}
            className="w-full mt-1 rounded border border-gray-300 pl-1 min-h-10 font-karla" /* .form input styles, font-karla needs tailwind.config.js setup */
          />
        </label>
        <button className="col-span-2 rounded text-white cursor-pointer min-h-10 font-karla bg-gradient-to-r from-[#711F8D] to-[#A818DA]">
          {' '}
          {/* .form button styles, font-karla needs tailwind.config.js setup, custom gradient */}
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme relative flex flex-col justify-center items-center">
        {' '}
        {/* This div is just a container, the .meme styles are on the main tag */}
        <img
          src="http://i.imgflip.com/1bij.jpg"
          alt="meme"
          className="max-w-full h-auto rounded"
        />{' '}
        {/* .meme > img styles */}
        <span className="absolute text-3xl font-extrabold text-center my-4 px-1 uppercase text-white tracking-[1px] font-impact top-0 text-shadow-outline">
          {' '}
          {/* .meme span and .top styles, font-impact needs tailwind.config.js setup, text-shadow needs custom setup */}
          {memeInfo.topText}
        </span>
        <span className="absolute text-3xl font-extrabold text-center my-4 px-1 uppercase text-white tracking-[1px] font-impact bottom-0 text-shadow-outline">
          {' '}
          {/* .meme span and .bottom styles, font-impact needs tailwind.config.js setup, text-shadow needs custom setup */}
          {memeInfo.bottomText}
        </span>
      </div>
    </main>
  );
}
