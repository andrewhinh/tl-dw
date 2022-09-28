"""
Input: 
- *.mp3 file(s) in audio_files/ from download.js
Output: 
- summary.txt: Summary(ies) of video(s)
"""


# Imports
import language_tool_python

tool = language_tool_python.LanguageTool('en-US')

from transformers import pipeline

classifier = pipeline("summarization", model="facebook/bart-large-cnn")

import math
import glob

files = glob.glob("./audio_files/" + '*txt')


# Collecting transcripts
transcript_list = []
for file in files: 
    with open(file) as f: 
        transcript = [line.rstrip() for line in f]
        transcript = " ".join(transcript)
        transcript_list.append(transcript)


# Correcting grammar
transcript_list = [tool.correct(transcript) for transcript in transcript_list]


# Summarizing
max_input_length = 1024 # facebook/large-bart-cnn 
max_output_length = 142
new_list = []
for transcript in transcript_list:
    if len(transcript) < max_output_length: new_list.append(transcript+'\n')
    else:
        check = math.floor(len(transcript)/max_input_length)
        if check > 1: 
            new = ""
            for i in range(check): new += classifier(transcript[max_input_length*i:max_input_length*(i+1)])[0]['summary_text']
            new_list.append(new+'\n')
        else: new_list.append(classifier(transcript)[0]['summary_text']+'\n')


# Correcting grammar again to be sure
new_list = [tool.correct(transcript) for transcript in new_list]


# Saving to fixed_transcript.txt
with open('summary.txt', 'w') as f: f.writelines(new_list)