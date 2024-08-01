"use client";

import Image from "next/image";
import cover from "/public/images/dathin_allan.jpeg";
import content from "@/content/content";
import { useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";

function SongsPage() {
  const [selectedSong, setSelectedSong] = useState(content.songs.song_4);
  const [playingSong, setPlayingSong] = useState(content.songs.song_4.mp3File);
  

  const handleSongClick = (song) => {
    setSelectedSong(song);
    setPlayingSong(song.mp3File);
    console.log(song.mp3File);
  };

  return (
    <div className="h-full md:h-screen bg-gray-700 flex flex-col md:flex-row">
      {/* left side
      -------------------------------------------------------- */}
      <div className="bg-green-600 h-full md:w-[60%] relative">
        <div className="absolute top-0 bg-desktop-song-gradient h-full w-full"></div>
        <div className="md:pl-[100px] px-[20px] md:px-0 mt-20 absolute z-10">
          <div className="items-end flex">
            <h1 className="text-5xl md:text-8xl font-bold text-white">
              {selectedSong ? selectedSong.name : "Dathin Allan"}
            </h1>
            <p className="md:mb-2 text-xs md:text-base text-white">
              ({selectedSong ? selectedSong.ver : "original"})
            </p>
          </div>
          <h1 className="text-base md:text-xl font-medium text-white">
            Lashan Herath
          </h1>
        </div>
        <div className="absolute bottom-0 z-10"></div>
        <Image
          src={selectedSong ? selectedSong.cover : cover}
          alt="cover_image"
          width={400}
          height={400}
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 bottom-0 text-black flex w-full items-center justify-center">
          <AudioPlayer currentSong={playingSong} />
        </div>
      </div>

      {/* Right side 
      ----------------------------------------------------------------*/}
      <div className="bg-white h-full md:w-[40%]">
        <div className="mt-8 md:mt-20 md:pl-12 md:pr-[100px] px-[20px] md:px-0">
          <p className="text-sm font-medium text-gray-300 mb-1">Now Playing</p>
          <div className="flex items-end gap-4">
            <div className="w-44">
              <Image
                src={selectedSong ? selectedSong.cover : cover}
                alt="cover_image"
                width={400}
                height={400}
                className="object-cover h-full w-full rounded-md"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                {selectedSong ? selectedSong.name : "Dathin Allan"}
              </h1>
              <p className="text-xs md:text-sm font-medium">
                ({selectedSong ? selectedSong.ver : "original"})
              </p>
              <p className="text-gray-500 text-sm md:text-base">
                Lashan Herath
              </p>
            </div>
          </div>

          <h1 className="text-xl font-medium text-gray-300 mt-12">Songs</h1>
          <div className="w-full h-px bg-gray-300 mt-2 mb-4"></div>

          <div
            className="flex flex-col gap-3 overflow-y-scroll pb-24"
            style={{ maxHeight: "calc(100vh - 300px)" }}
          >
            {Object.entries(content.songs)
              .reverse()
              .map(([key, song]) => (
                <div
                  key={key}
                  className="cursor-pointer flex items-end gap-4 hover:bg-gray-100 rounded-md transition"
                  onClick={() => handleSongClick(song)}
                >
                  <div className="w-32">
                    <Image
                      src={song.cover}
                      alt="cover_image"
                      width={400}
                      height={400}
                      className="h-full w-full rounded-md"
                    />
                  </div>
                  <div>
                    <h1
                      className={`text-2xl font-semibold ${
                        selectedSong?.id === song.id ? "text-green-400" : ""
                      }`}
                    >
                      {song.name}
                    </h1>
                    <p className="text-xs md:text-sm font-medium">
                      ({song.ver})
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      Lashan Herath
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongsPage;
