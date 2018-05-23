// This snippet can be used to thumbs down ALL comments for a particular
// Yahoo News commenter. It has only been tested with Chrome running on
// a desktop system with Windows 10
//
// To install:
// 1. Open a Chrome window. Then open Developer Tools (press F10)
// 2. Click on "Sources" at the top of Developer Tools
// 3. Click on "+ New snippet"
// 4. Copy this entire source code and paste it into the source window
// 5. Save the snippet. Name it something like "YahooThumbsDowner1"
// To use: 
// 1. Open the comments section of a Yahoo News article
// 2. Find a comment that is particularly ignorant or offensive
// 2. Click on the user name for that comment to display the comments for that user
// 3. Open the Developer Tools for that window if not already open
// 3. Run the snippet by right-clicking on the name, then selecting "Run".
// 4. Use the Console window to view progress and see when the snippet is done.

// This snippet thumbs down 4 comments per second, which seems to be about the
// fastest rate Yahoo can handle. Multiple instances can be run from different
// browser instances. If doing this, it helps to dock the Developer Tools directly
// to each browser instance. I prefer the right side.

// THere are two ways comments are displayed in Yahoo. This snippet only works
// for the older one where comments are shown in-line. The other way is when the
// comments show up in a kind of popup window. This snippet will not work with
// those, but there is another snippet available for those.
// 

var maxcomments = 5000;

// Find and report user line
var user = document.getElementById("activity-user");
// console.log("Raw user: " + user.outerHTML);
user = user.outerHTML;
user = user.substring(user.indexOf(">") + 1, user.indexOf("</"));
console.log("Username: " + user);

// Find and report the number of comments
var aTags = document.getElementsByTagName("p");
var searchText = "Comment Activity: ";
var found;

for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent.indexOf(searchText) !== -1) {
        found = aTags[i];
        break;
    }
}

// Extract the number of comments
found = found.outerHTML;
found = found.substring(found.indexOf(": ") + 1, found.indexOf("</"));
found = parseInt(found);
maxcomments = Math.min(maxcomments, found);
console.log("Number of comments found: " + found);
console.log("Number of comments to be marked: " + maxcomments);

var downercount = 0;
var expandcount = 0;
ExpandComments();

function ExpandComments() {
    var x = document.getElementsByClassName("load-more-activities clear-button Btn Mt-15 D-b C-line C-hover C-news");
    if (typeof x[0] === "undefined" || expandcount * 10 > maxcomments * 2) {
        console.log("Done expanding comments");
        ThumbsDowner();
        return;
    } else {
        x[0].click();
    }

    expandcount++;
    if (expandcount % 20 === 0)
        console.log("Expanding comments " + expandcount * 5);
    setTimeout(ExpandComments,100);
}

var activities;
var thumbsdown;
var j = 0;

function ThumbsDowner() 
{
    if (typeof activities === 'undefined')
    {
        activities = document.getElementsByClassName("activities");
        if (activities.length === 0)
        {
            console.log("No activities found");
            return;
        }
    }

    while (j < activities.length) 
    {
        // Find thumbs down elements
        var thumbsdown = activities[j].getElementsByClassName("Icon-Fp2 IconThumbsDownOutline D-ib Va-t");
        // Following line can be used to remove thumbs down (also comment above line)
        // var thumbsdown = activities[j].getElementsByClassName("Icon-Fp2 D-ib Va-t IconThumbsDownFill");
        if (thumbsdown.length === 0) 
        {
            j++;
            continue;
        }
        // console.log("thumbsdown[0]: " + thumbsdown[0]);

        if (thumbsdown[0] !== -1) 
        {
            thumbsdown[0].click();

            downercount++;
            if (downercount % 100 === 0)
                console.log("Thumbs downing " + downercount);
        
            break;
        }
    }

    if (downercount >= maxcomments || (j == activities.length && thumbsdown.length === 0)) 
    {
        console.log("Done marking thumbs down for user " + user);
        return;
    }   
    setTimeout(ThumbsDowner, 250);
}
