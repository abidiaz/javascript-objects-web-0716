// objects - ?
// objects - defines an object called `playlist`
// updatePlaylist(playlist, artistName, songTitle) - adds the `artistName: songTitle` key-value pair to `playlist`
//removeFromPlaylist(playlist, artistName) - removes `artistName` from `playlist`
var songTitle
var playlist = {artistName: songTitle} 

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
   delete playlist[artistName];
   return playlist;
}
