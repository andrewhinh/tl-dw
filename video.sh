#!/bin/zsh


# Install dependencies
npm install youtube-mp3-downloader --save
pip install git+https://github.com/openai/whisper.git 
pip install language_tool_python


# Creating empty folder to store audio files/transcripts
mkdir /content/summary/audio_files/


# Variables for easy directory navigation
home_dir="/content/summary/"
audio_dir="/content/summary/audio_files/"


# Download *.mp3 file(s) from Youtube video(s) -> audio_files folder
node download.js $@


# Transcribe audio files and move them to -> audio_files folder
cd $audio_dir
for f in $(find . -name "*.mp3")
do
whisper "$f" --model base.en --language English
done
cd $home_dir


# Summarize transcripts 
python3 summary.py


# Open summary.txt for easy copy access
nano summary.txt