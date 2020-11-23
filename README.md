[![Discord](https://img.shields.io/badge/Chat-Discord-blue.svg)](https://discord.gg/JQeVxbQT5G)
# SPAMBot
A spamming bot for Minecraft thanks to [mineflayer](https://github.com/PrismarineJS/mineflayer). Mainly for Windows, not tested on other OS.

Written in Node.js

[Link](https://drmoraschi.github.io/SPAMBot/) to the page of this project.

<img alt="logo" src="https://github.com/DrMoraschi/SPAMBot/raw/master/projectlogo.jpg" height="200" />

## Features

 * Supports 1.16.1.
 * Infinite number of custom phrases. You can add your own phrases by editing the file `lines.txt`.
 * Custom delay between chat messages. In milliseconds.
 * An easy-to-use GUI with incorporated chat thanks to [mineflayer-dashboard](https://github.com/wvffle/mineflayer-dashboard).
 * Reconnect ability in case it's kicked form the server.
 * Online/Cracked mode support.

## Install

 1. Make sure you have installed **Node** on your PC, once you have installed it, you can proceed to the next step. You can download Node [here](https://nodejs.org/).
 1. Create a folder somewhere in you PC.
 2. Extract the downloaded .zip in the folder, there should be a folder named SPAMBot-master, take the files and paste them where you want, like a folder.
 3. Now, open the command prompt (press WIN + R, it should open a window, type in "cmd" and hit ENTER).
 4. Navigate to the folder where you put the files (Example: type "cd C:\Users\DrMoraschi\Desktop\BotFolder" and hit ENTER).
 5. Now where are going to install **Mineflayer** and the other dependencies, type:
	
	`npm install`
    
    this will install all dependencies that are necessary.

 6. If you want your own custom phrases, you can just edit the file `lines.txt`.
 7. Now that all the things have been installed, the bot is ready to spam.
 
## How to Use

 1. In your Command Line, repeat number 4 from "Install"; navigate to the folder where the files are located.
 2. There are 4 arguments that are needed, and other 2 that are optional:

	"host" : This is the IP or the subdomain of the server.

	"port" : This is the port of the server.
	
	"delay" : This is the delay between each message that is sent.

	"username/gmail" : You need to type a username for the bot, write the e-mail in case the account is premium, default is "SPAMBot".

	"password" : Ignore if the account is cracked, only for premium accounts.

	Example:
	
	```node SPAM.js localhost 25565 500 mygmailcool@gmail.com mypasswordis1234```

 3. Once you've written all, hit ENTER and watch as the GUI starts and the bot connects to the server.
 
 #### WARNING
 
  I am not responsible of any consequences that this bot may cause, when you are downloading it, it's up to you and to be responsible of your own actions.
  
  Thank you.
