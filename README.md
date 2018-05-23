# YahooThumbsDowner
Thumbs down all comments by a Yahoo user

This repo provides a set of tools that can be used to thumbs down all comments made by a particular Yahoo user. I was motivated to write these because I was spending an increasing amount of time in Yahoo News comment sections manually and repetitively marking thumbs down all comments made by particular bots, trolls, bullies, windbags, idiots, jackasses, goofballs, numbskulls, etc. Personally, I wish Yahoo would completely remove the comment feature from their news articles because commenters are generally unprofessional and frequently add contentious content with no value. Until they do, these tools can be used by Yahoo News readers to convey blanket disapproval of particular commenters.

Some things to be aware of:
  These tools are not fast. They are set to run at a rate of ~4 comments per second per instance. This is limited by the tools because Yahoo seems to be limited to this rate *from a single browser window*. The tools can be run simultaneously in multiple browser windows, at least for different comments on the same or different news articles. Changing the scripts to run faster (per instance) may mark the thumbs down buttons, but later re-displaying those comments may show they were not actually recorded in Yahoo.
  These tools are not perfect. They sometimes do not mark all comments. They also (rarely) erroneously mark ALL comments for an article. While this is certainly a bug, it seems not so terrible to mark a relatively few comments incorrectly.
  These tools are not guaranteed to work in the future. They rely on specific class names in content served by Yahoo. Yahoo may of course change those class names at any time, which would break the functioning of these tools.
  These tools have only been tested in a recent version of Chrome running on a Windows 10 laptop. They may or may not work on other browsers/platforms.
  The max number of comments marked for a user is a constant (set to 5000) at the top of the scripts. Most (real) users have made far less than 5000 comments, but many bots/trolls have made well over 10,000 comments, and a few are even over 100,000. You can try increasing the max number of comments, but that seems to make the scripts run more slowly.
  There are two scripts included: YahooThumbsDowner1 is for the "old-style" comments, which are shown in-line. YahooThumbsDowner2 is for 'new-style' comments that appear in a pop-up window. These may eventually be combined, but for now, just use the correct script depending on the way Yahoo displays the comments.
  There is no good way to stop running a script once it is started. They can be paused by pressing the play/pause button, but not stopped entirely. The only known way to stop the script entirely is to close the browser window.

To install:
1. Open a Chrome window. Then open Developer Tools (press F10)
2. Click on "Sources" at the top of Developer Tools
3. Click on "+ New snippet"
4. Copy this entire source code and paste it into the source window
5. Save the snippet. Name it something like "YahooThumbsDowner1"
6. Repeat for the second script, and name it something like "YahooThumbsDowner2"

To use: 
1. Open the comments section of a Yahoo News article
2. Find a comment that is particularly ignorant or offensive
3. Click on the user name for that comment to display the comments for that user
4. Open the Developer Tools for that window if not already open
5. Run the snippet by right-clicking on the name, then selecting "Run".
6. Use the Console window to view progress and see when the snippet is done.
