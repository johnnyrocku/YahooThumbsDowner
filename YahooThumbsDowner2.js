// This script can be used to thumbs down ALL comments for
// a particular Yahoo News commenter. To use:
// 1. In the comments section, find an annoying commenter
// 2. Click on their name to bring up their comments
// 3. Run this script. It first expands all of their comments
// then clicks on all the thumbs down outline icons.

var maxcomments = 5000;

// Find and report user line
var user = document.getElementsByClassName("username Pt(4px) Fw(b) Fz(20px) C(#fff)");
console.log("Username: " + user[0].innerText);

// Find and report the number of comments
var numComments = document.getElementsByClassName("user-comments-count Pt(10px) Fz(12px) Fw(600) C(#fff)");
console.log("Comments: " + numComments[0].innerText);
var mytext = numComments[0].innerText;

// Extract the number of comments
var found = mytext.substring(0, mytext.indexOf(" reaction"));
found = found.replace(/,/g, '');
found = parseInt(found);
maxcomments = Math.min(maxcomments, found);
console.log("Number of comments found: " + found);
console.log("Number of comments to be marked: " + maxcomments);

var downercount = 1;
var expandcount = 0;
ExpandComments();

function ExpandComments() {
    var x = document.getElementsByClassName("Ff(ss) Fz(14px) Fw(b) Bdw(2px) Ta(c) Cur(p) Va(m) Bdrs(4px) O(n)! Lh(n) Bgc(#fff) C($c-fuji-blue-1-a) Bdc($c-fuji-blue-1-a) Bd C(#fff):h Bgc($c-fuji-blue-1-a):h My(20px) Px(30px) Py(10px) showMore D(b) Mx(a) Pos(r) Tt(c)");
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

function ThumbsDowner() {
    // var thumbsdown = document.getElementsByClassName("O(n) Bgc(t) Bdc(t) M(0) P(0) Bd(n)");
    var thumbsdown = document.getElementsByClassName("O(n):h O(n):a  Bgc(t) Bdc(t) M(0) P(0) Bd(n)");
    
    // console.log(thumbsdown);
    // return;
    if (downercount >= maxcomments * 2 || typeof thumbsdown[downercount] === "undefined") {
        console.log("Done marking thumbs down for " + user[0].innerText);
        return;
    }
    // console.log(thumbsdown);
    thumbsdown[downercount].click();
    downercount += 2;
    if (downercount % 200 === 1)
        console.log("Thumbs downing " + (downercount-1) / 2);
    setTimeout(ThumbsDowner, 200);
}
