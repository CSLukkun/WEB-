var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);//向原网页回传消息
    setTimeout("timedCount()",500);
}

timedCount();