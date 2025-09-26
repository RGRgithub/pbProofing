function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6609dSAMasG":
        Script1();
        break;
      case "5VNqsuzutqs":
        Script2();
        break;
      case "5w0uEpuHSza":
        Script3();
        break;
      case "5o1PRcy9AGF":
        Script4();
        break;
      case "6bVAB5Wq5EX":
        Script5();
        break;
      case "61RA5rLc7yB":
        Script6();
        break;
      case "6aRClBcFhO7":
        Script7();
        break;
      case "5iMTOSL6S1z":
        Script8();
        break;
      case "62l2s5mE8nu":
        Script9();
        break;
      case "5viaghVI73v":
        Script10();
        break;
      case "6R82VzoIuk9":
        Script11();
        break;
      case "5VRs1U5hapB":
        Script12();
        break;
      case "6OX7SxSLvPv":
        Script13();
        break;
      case "6adKIWJsapU":
        Script14();
        break;
      case "6Loh40tJoF8":
        Script15();
        break;
      case "6YyNws1yDNn":
        Script16();
        break;
      case "6bC9iT1Jchg":
        Script17();
        break;
      case "5uYrcE9B0wd":
        Script18();
        break;
      case "6kZT6nF62ud":
        Script19();
        break;
      case "66lmkrx17l5":
        Script20();
        break;
      case "60MRcI3BwTi":
        Script21();
        break;
      case "5eyfH6z7UJE":
        Script22();
        break;
      case "6WzYlQIkUuV":
        Script23();
        break;
      case "5dnXKgFCQKU":
        Script24();
        break;
      case "5hJJQGnQpJL":
        Script25();
        break;
      case "6m8qjNTZK4z":
        Script26();
        break;
      case "6aFkZeiFMFc":
        Script27();
        break;
      case "6an6oEHld8K":
        Script28();
        break;
      case "6PHLRofw5QM":
        Script29();
        break;
      case "6ZEuMflpilf":
        Script30();
        break;
      case "5tsveQr9s8t":
        Script31();
        break;
      case "5tePsNvtHQ0":
        Script32();
        break;
      case "5qf1zG4qYdQ":
        Script33();
        break;
      case "5a08VaVmH7b":
        Script34();
        break;
      case "6KXx6NMYj8f":
        Script35();
        break;
      case "61ndznzpC3Y":
        Script36();
        break;
      case "60XL5jfMUhz":
        Script37();
        break;
      case "6WydYaKMt3T":
        Script38();
        break;
      case "5nrnXpVYljQ":
        Script39();
        break;
      case "66QioeGQgs2":
        Script40();
        break;
      case "5uqUnOIauT7":
        Script41();
        break;
      case "5tVXwVUhvk8":
        Script42();
        break;
      case "5yFZcVPJ1W3":
        Script43();
        break;
      case "67OB12CDwFv":
        Script44();
        break;
      case "5YOAfQO76Dg":
        Script45();
        break;
      case "5iQxF3HWOiC":
        Script46();
        break;
      case "5ZT6hfWiuQd":
        Script47();
        break;
      case "6QZfdHPshWC":
        Script48();
        break;
      case "6aNVkTPlnhR":
        Script49();
        break;
      case "6VzA3v0iPL2":
        Script50();
        break;
      case "6KBwPVw50oC":
        Script51();
        break;
      case "6nuV66a0YLR":
        Script52();
        break;
      case "6D817r8l2zU":
        Script53();
        break;
      case "5wd7SiEJKYv":
        Script54();
        break;
      case "6cmAT6E3l9G":
        Script55();
        break;
      case "6jFSWbK0cTP":
        Script56();
        break;
      case "6Y1VRyv9HtP":
        Script57();
        break;
      case "62ochu0EjfL":
        Script58();
        break;
      case "698rRPzyBf4":
        Script59();
        break;
      case "6pxJfmWRNAP":
        Script60();
        break;
      case "5itgPP5Q1He":
        Script61();
        break;
      case "5zv7fdeNGsu":
        Script62();
        break;
      case "5qsj3DK0SA8":
        Script63();
        break;
      case "66zMwnfKM02":
        Script64();
        break;
      case "5bnSA6oo4SD":
        Script65();
        break;
      case "5qqm0929B2H":
        Script66();
        break;
      case "5iCQDc6FVjJ":
        Script67();
        break;
      case "5uBuhI8cYMm":
        Script68();
        break;
      case "6P2XfmqaT2z":
        Script69();
        break;
      case "5k7goGIrboz":
        Script70();
        break;
      case "6DVMSDqOK1X":
        Script71();
        break;
      case "6jJl1UjcZEW":
        Script72();
        break;
      case "5n1tmnObOH1":
        Script73();
        break;
      case "5c1WPqgdiZ5":
        Script74();
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
const delay = 125000;
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

window.Script4 = function()
{
  player.once(() => {
const target = object('5Wp0r6uRSmn');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 109000;
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
const target = object('6HFff7kVLHE');
const duration = 750;
const easing = 'ease-out';
const id = '6qlQN4JlxbG';
const pulseAmount = 0.07;
const delay = 67000;
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
const target = object('5gZZzuCMyvL');
const duration = 1000;
const easing = 'ease-out';
const id = '6YJT4JREjtS';
const pulseAmount = 0.1;
const delay = 74000;
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
const target = object('5vyvI4UkDXL');
const duration = 750;
const easing = 'ease-out';
const id = '6r8Khj9rvkE';
const pulseAmount = 0.07;
const delay = 104000;
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
const target = object('6OShqHRTxYM');
const duration = 1250;
const easing = 'ease-out';
const id = '5VeI4MNHg2j';
const pulseAmount = 0.1;
const delay = 39000;
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
  player.once(() => {
const target = object('6hHiBDhe3Xw');
const duration = 1000;
const easing = 'ease-out';
const id = '636Q267M8Qc';
const pulseAmount = 0.1;
const delay = 44000;
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

window.Script10 = function()
{
  player.once(() => {
const target = object('5fsYmFemWhM');
const duration = 1500;
const easing = 'ease-out';
const id = '6XoypW8FIyl';
const pulseAmount = 0.1;
const delay = 112250;
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

window.Script12 = function()
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

window.Script13 = function()
{
  player.once(() => {
const target = object('6AnAhvfyw1x');
const duration = 1250;
const easing = 'ease-out';
const id = '5hUtNvJrD5D';
const pulseAmount = 0.1;
const delay = 6000;
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

window.Script14 = function()
{
  player.once(() => {
const target = object('68NDgiAzKfz');
const duration = 1250;
const easing = 'ease-out';
const id = '5lZNoLHS94V';
const pulseAmount = 0.1;
const delay = 9000;
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

window.Script15 = function()
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

window.Script16 = function()
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

window.Script17 = function()
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

window.Script18 = function()
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

window.Script19 = function()
{
  player.once(() => {
const target = object('6oU0GsgjF6Y');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 18250;
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

window.Script20 = function()
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

window.Script21 = function()
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

window.Script22 = function()
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

window.Script23 = function()
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

window.Script24 = function()
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

window.Script25 = function()
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

window.Script26 = function()
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

window.Script27 = function()
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

window.Script28 = function()
{
  player.once(() => {
const target = object('6cG58s8i3l5');
const duration = 2000;
const easing = 'ease-out';
const id = '6qHmUBMAJ1n';
const pulseAmount = 0.07;
const delay = 8750;
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

window.Script30 = function()
{
  player.once(() => {
const target = object('5Z3VhW2PXph');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 13500;
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

window.Script31 = function()
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

window.Script32 = function()
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

window.Script33 = function()
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

window.Script34 = function()
{
  player.once(() => {
const target = object('6O8JuH85AWr');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 17250;
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

window.Script35 = function()
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

window.Script36 = function()
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

window.Script37 = function()
{
  const target = object('68jaxbFZIis');
const duration = 750;
const easing = 'ease-out';
const id = '6dNQ3F5sH66';
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

window.Script38 = function()
{
  player.once(() => {
const target = object('5t4xlwMrDAi');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 11250;
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

window.Script39 = function()
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

window.Script40 = function()
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

window.Script41 = function()
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

window.Script42 = function()
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

window.Script43 = function()
{
  player.once(() => {
const target = object('5Y16qllWPOR');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 14750;
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

window.Script45 = function()
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

window.Script46 = function()
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

window.Script47 = function()
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

window.Script48 = function()
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

window.Script49 = function()
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

window.Script50 = function()
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

window.Script51 = function()
{
  player.once(() => {
const target = object('6XwXIKaqB1Q');
const duration = 2000;
const easing = 'ease-out';
const id = '6kwuFixCJDp';
const pulseAmount = 0.07;
const delay = 10500;
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

window.Script53 = function()
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

window.Script54 = function()
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

window.Script55 = function()
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

window.Script56 = function()
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

window.Script57 = function()
{
  player.once(() => {
const target = object('6f2QSm2adSj');
const duration = 2000;
const easing = 'ease-out';
const id = '5idZNB6eGB2';
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

window.Script58 = function()
{
  const target = object('5iC4FFrCXfm');
const duration = 750;
const easing = 'ease-out';
const id = '5iHUdzhv13I';
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

window.Script59 = function()
{
  player.once(() => {
const target = object('6fqzEDepGcS');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 19500;
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

window.Script61 = function()
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

window.Script62 = function()
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

window.Script63 = function()
{
  player.once(() => {
const target = object('6AwxaYCcZDx');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 16000;
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

window.Script65 = function()
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

window.Script66 = function()
{
  player.once(() => {
const target = object('6C0EsPsCJ5k');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 10750;
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

window.Script68 = function()
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

window.Script69 = function()
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

window.Script70 = function()
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

window.Script71 = function()
{
  player.once(() => {
const target = object('5nUnRvw2nEv');
const duration = 2000;
const easing = 'ease-out';
const id = '6brmahDvhzT';
const pulseAmount = 0.07;
const delay = 9750;
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

window.Script72 = function()
{
  const target = object('6O958nQGksa');
const duration = 750;
const easing = 'ease-out';
const id = '6Tbia5lTKEG';
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

window.Script73 = function()
{
  player.once(() => {
const target = object('6bis27lJQ7x');
const duration = 1500;
const easing = 'ease-out';
const id = '6ct1MIo89Zc';
const pulseAmount = 0.07;
const delay = 15750;
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
