# youtube-title-obs

# Description

This is a simple Youtube video information to browser source for OBS. This extension + web server combo is targeted to streamers that wish to display to their audience current youtube video information, such as: Video title, View count, Channel name, Channel subscribers, etc.

# Installation

## Unpacked method


1. Go to the [releases](https://github.com/JCalebBR/youtube-title-obs/releases) page and download the (latest) executable file for your OS of choice and, while you are at it, download the source code.
2. Unzip the source code to a folder of your preference and place the executable inside the `pages/` folder (very important)
3. Head over to `chrome://extensions`.
4. Toggle `Developer mode` at the top right corner.
5. Click on `Load unpacked` at the top left corner.
6. Select the source code folder you unpacked. If all went well you should be greeted by this:
    ![A](https://i.imgur.com/hEywsDK.png)

# Why do I need to download and run an executable?

The local web server is needed so the extension can communicate with OBS indirectly via a locally hosted web page. The extension parses the data from the youtube web page and sends it via REST API (Post request) to the web server which in turn saves the data to a local file which is then rendered by the HTML + CSS on the web page.

\- **Ok, you've told me all of this nerdy stuff but you haven't told me why yet...**

Well, since manifest v3 of the Chrome Extensions API, they deprecated the fileSystem API which would have made this seamlessly work without any executables. Go figure if they will bring it back or not, or why they have done it.

The executable is only there to make sure everybody can run the server without any prior programming knowledge or opening up the ***spooky*** command prompt


# I still don't trust you...

Install Node.JS and NPM and run the `server.js` script inside `pages/`, it will work too


# Usage

## Run the executable

1. Double click / Run the executable file
2. If everything is working fine it will print to the screen: `XXXXXXXXXXXXX - Server started!`
   
- IMPORTANT: 
   - You need to start the executable you previously downloaded and leave it open (everytime and) while you are using OBS.
   - If any errors occur, double check that the executable is placed inside the `pages/` folder

## OBS Setup

1. Create a new browser source in OBS as follows:
    - URL: `localhost:5000`
    - Custom CSS - Here you'll be able to change the look of the source, examples:
        - Change all text colour:

            ```css
            body {
                color: red
            }
            ```
        - Change the channel, title and views name colour:
        
            ```css
            #channel {
                color: pink;
            }

            #title {
                color: purple;
            }

            #views {
                color: green;
            }
            ```
        - Change the avatar size:
            ```css
            .avatar_img {
                width: 100px
            }
            ```
        - And so on...
    - Check the latest box: `Update the browser when the scene becomes active`

## Youtube

1. Open a new youtube video
2. Wait a few seconds and voilá it should be working


# FAQ

## Extension failed to update title, avatar, etc
- Refresh the page