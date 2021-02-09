### LVN Highlight Movie Mode Chrome Extension

## How to Install the Chrome Extension

1. Download the .zip file from Github and unzip it on your computer.
![github zip dl](/images/gitzip.png?raw=true)

or clone the repo in your terminal
`git clone git@github.com:CorticoAI/moviemode.git`

2. Open your Chrome broser and navigate to `chrome://extensions`. Turn on developer mode.

![extension dev mode](/images/chrome_dev.png?raw=true)

3. Click on "Load Unpacked" and select the `moviemode` folder that you just downloaded/cloned.

4. Depending on your Chrome setup, you may need to add the moviemode button to your extension toolbar. Click the puzzle icon and then the pin.

![extension dev mode](/images/pin.png?raw=true)

You'll know that the extension is installed and ready to go when you see the `L` icon in your chrome toolbar...

![extension dev mode](/images/success.png?raw=true)

## Using the extension

Currently, the extension doesn't do anything unless you're on an LVN embed page, such as [this one](https://embed.lvn.org/?hid=468292). Note that an embed page is different from a [highlight share page](https://app.lvn.org/highlight/1052562). To go from a highlight share page to an embed page, simply plug the highlight ID into this URL structure: `https://embed.lvn.org/?hid={higlight_id}`.

Once on a higlight page, turn on movie mode by click on the `L` chrome extension icon.

![extension dev mode](/images/engage.png?raw=true)

To play a highlight you can either click the purple play button OR hit your spacebar.

## Creating a video for sharing

Once you've got the chrome extension installed, you aren't too far away from being able to turn moviemode highlights into shareable video files, but there are some additional hoops to jump through. Read on, intrepid reader...

We'll be creating the video using Quicktime screen recorder (already installed on your mac) and Soundflower, an app that allows you to pipe your system audio (e.g. sounds coming from Chrome) over to another app (e.g. Quicktime). If you're sharing to social networks, you'll like also want to use `ffmpeg` in the terminal to convert Quicktime's `.mov` files to `.mp4` for better support on mobile, in Twitter, etc.

# Requirements

You'll need Soundflower. Follow all of the instructions found here: [https://github.com/mattingalls/Soundflower/releases/tag/2.0b2](https://github.com/mattingalls/Soundflower/releases/tag/2.0b2)

If you're successful, you should be able to see `Soundflower (2ch)` as an audio output option in your Mac's toolbar.

![extension dev mode](/images/soundflower.png?raw=true)

Next, install `ffmpeg`. The easiest way to do this is via Homebrew: `brew install ffmpeg`. Don't know what that means? Read on...

First, open up your [terminal](https://www.howtogeek.com/682770/how-to-open-the-terminal-on-a-mac/). Copy/paste this text and hit enter:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

You'll see a bunch of stuff happen, and it could take a couple of minutes to run through everything. Just chill, this is what being a 1337 hacker is all about. You'll know it is all done when you see the $ prompt that you saw when you first opened the terminal. Next, install ffmpeg:

`brew install ffmpeg`

More stuff will happen, just wait it out and once it is all over you're done installing stuff.

# Creating a video

1. Go to the highlight you want to make a video for and open up the embed page for that highlight.
2. Turn on moviemode via the Chrome extension.
3. Open up Quicktime Player. Go to File > New Screen Recording.
4. Select the partial screen capture mode (dotted lines).
5. Ensure your system sound is set to output to Soundflower (2ch) and in Quicktime screencapture Option menu you have selected Soundflower (2ch) as the input.

![extension dev mode](/images/qt.png?raw=true)

6. Select the area of the screen you want to capture (be sure to give the LVN logo and text area a bit of a buffer to help frame the video) and hit Record. 
7. Start the highlight (again, via the play button or if it is offscreen just hit your spacebar.) When the highlight is complete, stop the Quicktime recording via the Stop button in your Mac's menubar. Don't worry too much about timing your start and end times, you can trim them in the next step.

![extension dev mode](/images/stop.png?raw=true)

8. Trim the video start and end points in Quicktime: Edit > Trim. This will give you yellow start and endoints in the timeline that you can drag to where you want the start and end of the video to be. When you're done, hit trim.

9. Export your video. In Quicktime: File > Export As > 1080p. Give it a name and save it wherever you want. You've now got an HD `.mov` file, congrats!

10. Convert your video to mp4. Open up the terminal and type:

`ffmpeg -i /path/to/video.mov path/to/video.mp4`

...replacing the /path/to/video bit with the actual path to the file you just created. The simplest way to do this is to drag the file into the terminal after you've type `ffmpeg -i `. Terminal will plop in the path for you. Then do it again, but edit the name of the file to be `.mp4`. Hit enter and it'll start processing. When it is done, you'll see a `.mp4` version of the video in the same directory where you saved the `.mov`. 

**Congrats, you did it!**

