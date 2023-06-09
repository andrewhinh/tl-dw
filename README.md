# tl-dw
Automated YouTube Video Transcription and Summarization

## How to use
https://user-images.githubusercontent.com/40700820/192876028-cda7c1f6-ef9f-4a61-8774-485526c76672.mp4
1. Go to this [Google Colab](https://colab.research.google.com/drive/1PgzSwMcE37H40MrR5ztcKCAa_iy8mkG7?usp=sharing). 
2. Make a copy by going to the `File` Tab and clicking the `Save a copy in Drive` button.
3. In the `Change this` sub-section, change the youtube link associated with the `youtube_video_link` variable to the YouTube video link of your choice.
4. Click the play button under the `Summary: Take notes automatically!` section, and forget ever taking notes again as your summary appears under the `Take my Notes!` section! 
5. Realize AI and ML isn't perfect, and fix the summary with Grammarly afterwards.

## Notes
- The longer your video is, the more time-efficient it is: a 1 min video takes about 5 minutes, while a 9.5 min video takes about 19.5 mins, for reference.
- Be wary of using this for videos longer than 30 minutes when using the Google Colab GPU (because of their runtime policies): if in doubt, don't use it.
- If the summary is too long (as it's more similar to a report than a headline), consider [shortening the summary](https://huggingface.co/facebook/bart-large-cnn).

## Credit
- [ytb2mp3](https://github.com/ytb2mp3/youtube-mp3-downloader) for their YouTube video -> .mp3 file code
- [OpenAI](https://github.com/openai/whisper) for their .mp3 file -> transcript code
- [Facebook](https://huggingface.co/facebook/bart-large-cnn) for their summarization model
