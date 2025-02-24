const CLIENT_ID = "4359048b2a4c4f0c8b81eb1472342f54";
const CLIENT_SECRET = "9eb02b7387cf45599fab6949a72ec900";

export const getSpotifyToken = async () => {
  const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${credentials}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};
