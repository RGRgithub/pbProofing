function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zjuPh0nFbb":
        Script1();
        break;
      case "6fNtrjOW0o8":
        Script2();
        break;
      case "6WW33YzmUcx":
        Script3();
        break;
      case "6pPHqcpCaiB":
        Script4();
        break;
      case "5qpVBzw9cOc":
        Script5();
        break;
      case "6S6gLzAWZwz":
        Script6();
        break;
      case "5x4CA2vJq4m":
        Script7();
        break;
      case "5tsoZjVfW3d":
        Script8();
        break;
      case "6YyapQTcFBO":
        Script9();
        break;
      case "6AFFDHuAKkL":
        Script10();
        break;
      case "5ks7IYDirwp":
        Script11();
        break;
      case "5mly0azJQjG":
        Script12();
        break;
      case "68QdommLsZb":
        Script13();
        break;
      case "5YXsWF2PAWz":
        Script14();
        break;
      case "6diBtjM8R3o":
        Script15();
        break;
      case "5mU7JpXhERw":
        Script16();
        break;
      case "68ffhRg9imS":
        Script17();
        break;
      case "5dz28tb8KDP":
        Script18();
        break;
      case "6SsC9mLBsnw":
        Script19();
        break;
      case "6jxHYV4ZQ7D":
        Script20();
        break;
      case "6MWqDQs6l5u":
        Script21();
        break;
      case "5wyUgvCSEpZ":
        Script22();
        break;
      case "6NwXT0xwPB3":
        Script23();
        break;
      case "653mCRtJ0IZ":
        Script24();
        break;
      case "5XLMTcXNWEb":
        Script25();
        break;
      case "5kjJMpjfulG":
        Script26();
        break;
      case "6rSymOf9V7X":
        Script27();
        break;
      case "6ZiNZxYJ14z":
        Script28();
        break;
      case "6cBlldwJk2W":
        Script29();
        break;
      case "69hptQslnbk":
        Script30();
        break;
      case "6SYs9ivZJ63":
        Script31();
        break;
      case "6N8G7pwj7uu":
        Script32();
        break;
      case "6BdjQO5Q3op":
        Script33();
        break;
      case "5r8O2sqKWYa":
        Script34();
        break;
      case "66sz3kEbSUj":
        Script35();
        break;
      case "5jMbDg9JZ19":
        Script36();
        break;
      case "6HchQTcAxw4":
        Script37();
        break;
      case "5geF93iavzI":
        Script38();
        break;
      case "5lqw9YKFbsb":
        Script39();
        break;
      case "604ydc3uQ8v":
        Script40();
        break;
      case "6fBiGA6tIQN":
        Script41();
        break;
      case "6Gx3psgpsPo":
        Script42();
        break;
      case "5etjsxcbsQ1":
        Script43();
        break;
      case "6XFARFedvJF":
        Script44();
        break;
      case "6Gn4HSIhv7n":
        Script45();
        break;
      case "5jXAPDExWMx":
        Script46();
        break;
      case "6H8570SsuJj":
        Script47();
        break;
      case "6pZh3qK2twc":
        Script48();
        break;
      case "5nxY9WfNPy4":
        Script49();
        break;
      case "5oCPfJCP2gL":
        Script50();
        break;
      case "6lc18gdoDTY":
        Script51();
        break;
      case "61iSb1UF0I4":
        Script52();
        break;
      case "6qouuqqmO8j":
        Script53();
        break;
      case "60YJFyQVtVx":
        Script54();
        break;
      case "6oAYbV6FEFU":
        Script55();
        break;
      case "6RPItgdsDmC":
        Script56();
        break;
      case "67niwHJNrkJ":
        Script57();
        break;
      case "603qTfSth9p":
        Script58();
        break;
      case "5XTLu9jrrh3":
        Script59();
        break;
      case "64eoLyHsjzw":
        Script60();
        break;
      case "60sfUUTqvc2":
        Script61();
        break;
      case "6XQi8OFRZhA":
        Script62();
        break;
      case "6DdOSbUm7jP":
        Script63();
        break;
      case "5outXTD53ZL":
        Script64();
        break;
      case "6BhmDM5eCGn":
        Script65();
        break;
      case "6TDW70EDMwk":
        Script66();
        break;
      case "6ZkoBSxUx1W":
        Script67();
        break;
      case "6Z6UAeodfQl":
        Script68();
        break;
      case "6SQIY1EPq1k":
        Script69();
        break;
      case "6bga4Mt6JtV":
        Script70();
        break;
      case "6RJfOZCNjzk":
        Script71();
        break;
      case "6OJN720zDxm":
        Script72();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('5Wp0r6uRSmn');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 124000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5fsYmFemWhM');
const duration = 1500;
const easing = 'ease-out';
const id = '6XoypW8FIyl';
const pulseAmount = 0.1;
const delay = 133000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6OShqHRTxYM');
const duration = 1250;
const easing = 'ease-out';
const id = '5VeI4MNHg2j';
const pulseAmount = 0.1;
const delay = 46000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6hHiBDhe3Xw');
const duration = 1000;
const easing = 'ease-out';
const id = '636Q267M8Qc';
const pulseAmount = 0.1;
const delay = 53000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5vyvI4UkDXL');
const duration = 750;
const easing = 'ease-out';
const id = '6r8Khj9rvkE';
const pulseAmount = 0.07;
const delay = 62000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6q9bK31dBvD');
const duration = 1250;
const easing = 'ease-out';
const id = '6Sb3YCyV0bQ';
const pulseAmount = 0.1;
const delay = 93000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6mV8LCmERnu');
const duration = 1250;
const easing = 'ease-out';
const id = '6pqVOYOJLJW';
const pulseAmount = 0.1;
const delay = 119000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5fsYmFemWhM');
const duration = 1500;
const easing = 'ease-out';
const id = '6XoypW8FIyl';
const pulseAmount = 0.1;
const delay = 128250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  const target = object('5Wp0r6uRSmn');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 3625;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6MHj7FdyhGV');
const duration = 2000;
const easing = 'ease-out';
const id = '5t2XwWG7Sup';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6AnAhvfyw1x');
const duration = 1250;
const easing = 'ease-out';
const id = '5hUtNvJrD5D';
const pulseAmount = 0.1;
const delay = 8000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('68NDgiAzKfz');
const duration = 1250;
const easing = 'ease-out';
const id = '5lZNoLHS94V';
const pulseAmount = 0.1;
const delay = 10000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('6AnAhvfyw1x');
const duration = 1250;
const easing = 'ease-out';
const id = '5hUtNvJrD5D';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('68NDgiAzKfz');
const duration = 1250;
const easing = 'ease-out';
const id = '5lZNoLHS94V';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6EtfIK2DBNN');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  player.once(() => {
const target = object('5WSlUXHc5eC');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('6oU0GsgjF6Y');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 14500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('5zdcqNqWbI1');
const duration = 1500;
const easing = 'ease-out';
const id = '61HuSZSRE9g';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  const target = object('6Bj7nv0fnxa');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6ZsJ8DNKgMA');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('5p3SJd29gDn');
const duration = 750;
const easing = 'ease-out';
const id = '6SyKQQNQVfH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  player.once(() => {
const target = object('5jWymMUT9kE');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 13000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script23 = function()
{
  player.once(() => {
const target = object('5WEwktmw2Hg');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  const target = object('5WEwktmw2Hg');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('6f0U1dgiXxQ');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  player.once(() => {
const target = object('6mLkY4l1Nvk');
const duration = 750;
const easing = 'ease-out';
const id = '6lsV5CvCBsF';
const pulseAmount = 0.07;
const delay = 9200;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script27 = function()
{
  const target = object('6mLkY4l1Nvk');
const duration = 750;
const easing = 'ease-out';
const id = '6lsV5CvCBsF';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  player.once(() => {
const target = object('5Z3VhW2PXph');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  player.once(() => {
const target = object('6Hb1wtbWdRq');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  const target = object('6Hb1wtbWdRq');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  player.once(() => {
const target = object('6qhEMnkNx8M');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  player.once(() => {
const target = object('6O8JuH85AWr');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script33 = function()
{
  player.once(() => {
const target = object('6f0HFH9wPow');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  const target = object('6f0HFH9wPow');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  player.once(() => {
const target = object('5t4xlwMrDAi');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 13000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  player.once(() => {
const target = object('62sxc9Vdmh4');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script37 = function()
{
  player.once(() => {
const target = object('5wvqwF21rUo');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  const target = object('5wvqwF21rUo');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  player.once(() => {
const target = object('6V4uzeH6QyX');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script40 = function()
{
  player.once(() => {
const target = object('5Y16qllWPOR');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script41 = function()
{
  player.once(() => {
const target = object('6oiXTEF90AD');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  const target = object('6oiXTEF90AD');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  player.once(() => {
const target = object('5mdhd8OYy8g');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 13000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script44 = function()
{
  player.once(() => {
const target = object('6DvLiNqx5xC');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script45 = function()
{
  player.once(() => {
const target = object('5eJZrQ1zMXE');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script46 = function()
{
  const target = object('5eJZrQ1zMXE');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  player.once(() => {
const target = object('6ra0MRY9Utf');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script48 = function()
{
  player.once(() => {
const target = object('6XwXIKaqB1Q');
const duration = 2000;
const easing = 'ease-out';
const id = '6kwuFixCJDp';
const pulseAmount = 0.07;
const delay = 12000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script49 = function()
{
  const target = object('6T94wMaElsw');
const duration = 750;
const easing = 'ease-out';
const id = '6bjJ9nZsgAm';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  player.once(() => {
const target = object('6eg722UCx8F');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script51 = function()
{
  player.once(() => {
const target = object('6d6BOcmPPJm');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script52 = function()
{
  const target = object('6d6BOcmPPJm');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  player.once(() => {
const target = object('6SU8ddz1SeQ');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script54 = function()
{
  player.once(() => {
const target = object('6fqzEDepGcS');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script55 = function()
{
  player.once(() => {
const target = object('5iHz7nPRQyz');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script56 = function()
{
  const target = object('5iHz7nPRQyz');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  player.once(() => {
const target = object('5aay8ZPGBvP');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 13000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script58 = function()
{
  player.once(() => {
const target = object('5vK98IeT9UL');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script59 = function()
{
  player.once(() => {
const target = object('6HQl9PJPgFU');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script60 = function()
{
  const target = object('6HQl9PJPgFU');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  player.once(() => {
const target = object('6aMDgICtA4W');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script62 = function()
{
  player.once(() => {
const target = object('6AwxaYCcZDx');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script63 = function()
{
  player.once(() => {
const target = object('5tyll4YMM3h');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script64 = function()
{
  const target = object('5tyll4YMM3h');
const duration = 750;
const easing = 'ease-out';
const id = '6ms8wAim7iG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script65 = function()
{
  player.once(() => {
const target = object('6C0EsPsCJ5k');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 13000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script66 = function()
{
  player.once(() => {
const target = object('6SaSqeCnVzW');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script67 = function()
{
  player.once(() => {
const target = object('5cJ7JJkrfUy');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script68 = function()
{
  const target = object('5cJ7JJkrfUy');
const duration = 1500;
const easing = 'ease-out';
const id = '5l2R2pNp6CH';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script69 = function()
{
  player.once(() => {
const target = object('5YaB9FBV7Fu');
const duration = 750;
const easing = 'ease-out';
const id = '6GwQSghFvtz';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script70 = function()
{
  player.once(() => {
const target = object('5nUnRvw2nEv');
const duration = 2000;
const easing = 'ease-out';
const id = '6brmahDvhzT';
const pulseAmount = 0.07;
const delay = 12000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script71 = function()
{
  player.once(() => {
const target = object('5ryqU1Hd26G');
const duration = 750;
const easing = 'ease-out';
const id = '64cQmKbNJBg';
const pulseAmount = 0.07;
const delay = 17000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
