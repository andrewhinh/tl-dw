//Libraries
var YoutubeMp3Downloader = require("youtube-mp3-downloader");


//Configure YoutubeMp3Downloader with your settings
var YD = new YoutubeMp3Downloader({
    "ffmpegPath": "/usr/bin/ffmpeg",        // FFmpeg binary location
    "outputPath": "./audio_files",          // Output file location (default: the home directory)
    "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
    "queueParallelism": 2,                  // Download parallelism (default: 1)
    "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
    "allowWebm": false                      // Enable download from WebM sources (default: false)
});


//Helper variables + functions
var idx = 0;

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


//Main Process
process.argv.slice(2).forEach(function(links) {
    //Get YouTube video ID
    id = youtube_parser(String(links));

    //Download video and save as MP3 file
    YD.download(id, "audio"+String(idx)+".mp3");

    YD.on("finished", function(err, data) {
        console.log(JSON.stringify(data));
    });

    YD.on("error", function(error) {
        console.log(error);
    });

    YD.on("progress", function(progress) {
        console.log(JSON.stringify(progress));
    });

    idx++;
  });