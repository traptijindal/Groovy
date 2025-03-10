// export const fetchJioSaavnSong = async (songName, trackId, setCurrentSong, playingTrackId, setPlayingTrackId, setIsPlaying) => {
//     try {
//       const response = await fetch(
//         `https://saavn.dev/api/search/songs?query=${encodeURIComponent(songName)}`
//       );
//       const data = await response.json();
  
//       if (data?.data?.results.length > 0) {
//         const song = data.data.results[0];
//         setCurrentSong({
//           title: song.name,
//         //   artist: song.primaryArtists || "Unknown Artist",
//           url: song.downloadUrl[4].url || song.downloadUrl[0].url || "",
//           image: song.image[2].url || "/songcard.jpeg",
//         });
  
//         if (playingTrackId === trackId) {
//           setPlayingTrackId(null);
//           setIsPlaying(false);
//         } else {
//           setPlayingTrackId(trackId);
//           setIsPlaying(true);
//         }
//       } else {
//         console.error("No songs found for", songName);
//       }
//     } catch (error) {
//       console.error("Error fetching song:", error);
//     }
//   };

export const fetchJioSaavnSong = async (songName, trackId, setCurrentSong, playingTrackId, setPlayingTrackId, setIsPlaying, audioRef) => {
  try {
    const response = await fetch(
      `https://saavn.dev/api/search/songs?query=${encodeURIComponent(songName)}`
    );
    const data = await response.json();

    if (data?.data?.results.length > 0) {
      const song = data.data.results[0];
      const songUrl = song.downloadUrl[4]?.url || song.downloadUrl[0]?.url || "";

      if (!songUrl) {
        console.error("No valid download URL found for", songName);
        return;
      }

      if (playingTrackId === trackId) {
        // If the same track is clicked, toggle play/pause
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        // Pause before changing the source
        if (!audioRef.current.paused) {
          audioRef.current.pause();
        }

        // Wait a moment before setting the new source
        setTimeout(() => {
          setCurrentSong({
            title: song.name,
            url: songUrl,
            image: song.image[2]?.url || "/songcard.jpeg",
          });

          setPlayingTrackId(trackId);
          setIsPlaying(true);

          if (audioRef.current) {
            audioRef.current.src = songUrl;

            // Ensure the new source is fully loaded before playing
            audioRef.current.load();
            audioRef.current.play().catch((error) => console.error("Playback error:", error));
          }
        }, 100); // Small delay to prevent interruption
      }
    } else {
      console.error("No songs found for", songName);
    }
  } catch (error) {
    console.error("Error fetching song:", error);
  }
};

  