// start at 226
// --------------------------------------------------------- game chunk
// read 4 bytes = length next value
// read length bytes
// read 4 bytes = length map name
// read length*2 bytes (map name)
// read 4 bytes = length map data (scenario\mp\*)
// read length bytes (map data)
// 4 bytes = ???
// 4 bytes = ???
// 4 bytes = ???
// 4 bytes = ???
// 8 bytes = DATABASE
// 4 bytes = ???
// 4 bytes = ???
// 4 bytes = ???
// 4 bytes = ???
// 4 bytes = slots (always 8)
// 4 bytes = ???
// 4 bytes = ??? (always 8)
// 4 bytes = ???
// (4 * 2) * 7 + 5 = 61 bytes (game options)
// 4 bytes = replay name length
// read length*2 bytes (replay name)
// 4 bytes = ???
// 4 bytes = length win conditions
// win conditions length long
// --------------------------------------------------------- player chunk
// while byte != 'F'
// followed by 'OLDGPLY'
// 4 bytes = chunk version ?
// 4 bytes = chunk length
// 4 bytes = ???
// 8 bytes = DATAINFO
// 4 bytes = ???
// 4 bytes = data info length
// 4 bytes = ???
// 4 bytes = player name length
// length bytes = player name
// 61 bytes = ???
// FOLDTCUC
// ...
// --------------------------------------------------------- action chunk
// 4 bytes = always 0; probably means action chunk
// 4 bytes = chunk length
// 1 byte = 50 in hex = 80 decimal = P
// 4 bytes = timestamp (timestamp / 8 = seconds)
// remaining bytes until length = ???
// if 4 next bytes = 1 then chat chunk, else next action chunk starts
// --------------------------------------------------------- chat chunk
// 4 bytes = 1 (means chat chunk)
// 4 bytes = chat chunk length
// 4 bytes = always 1
// 4 bytes = ???
// 1 byte = ???
// 4 bytes = name length
// length bytes * 2 = name
// 4 bytes = 0 is obs, else player
// 4 bytes = player info???
// 4 bytes = 1 to team, 0 to all
// 4 bytes = msg length
// length bytes * 2 = message
