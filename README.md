manavis
=======

Manavis shows experience gain from combat logs generated by The Mana World's server, tmwAthena.

There is a demo video of manavis here: https://www.youtube.com/watch?v=ZKIm-7-txKs

Manavis can operate in two modes, offline and online.

To run in offline mode, place the public/ folder in a location served by a web server, or run python -m SimpleHTTPServer from it, and connect to localhost:8000.
While offline, you can still analyse everything as you would normally.

To run in online mode, after running npm install for the first time, run npm start from the project root, and connect to localhost:3000.
In online mode, active filters are broadcast to other users in the same channel, similar to multiplayer notepad or etherpad.
You can still operate offline by unselecting the checkbox at the loading screen.

Significant amounts of processing in javascript are required. It is recommended you use recent versions of a browser such as chromium.
