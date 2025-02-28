export const fetchJioSaavnSong = async (songName, trackId, setCurrentSong, playingTrackId, setPlayingTrackId, setIsPlaying) => {
    try {
      const response = await fetch(
        `https://saavn.dev/api/search/songs?query=${encodeURIComponent(songName)}`
      );
      const data = await response.json();
  
      if (data?.data?.results.length > 0) {
        const song = data.data.results[0];
        setCurrentSong({
          title: song.name,
        //   artist: song.primaryArtists || "Unknown Artist",
          url: song.downloadUrl[4].url || song.downloadUrl[0].url || "",
          image: song.image[2].url || "/songcard.jpeg",
        });
  
        if (playingTrackId === trackId) {
          setPlayingTrackId(null);
          setIsPlaying(false);
        } else {
          setPlayingTrackId(trackId);
          setIsPlaying(true);
        }
      } else {
        console.error("No songs found for", songName);
      }
    } catch (error) {
      console.error("Error fetching song:", error);
    }
  };
  