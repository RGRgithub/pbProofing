function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iXWtFSbI21":
        Script1();
        break;
      case "6NW83QjYi3d":
        Script2();
        break;
      case "6IOPUm8pOBc":
        Script3();
        break;
      case "6df6pYX0LFY":
        Script4();
        break;
      case "69EuDf8q7Ve":
        Script5();
        break;
      case "5dC8UdKrn0C":
        Script6();
        break;
      case "5s9YRGzxLp1":
        Script7();
        break;
      case "5erF2P4c8Fk":
        Script8();
        break;
      case "5ZhkYIXsNws":
        Script9();
        break;
      case "6FUNfss56O2":
        Script10();
        break;
      case "66Dv1VUXlDu":
        Script11();
        break;
      case "6R3E6DHAEyq":
        Script12();
        break;
      case "6gefTrF9aVM":
        Script13();
        break;
      case "63vDEnbhLtc":
        Script14();
        break;
      case "6UYq2N2N3hj":
        Script15();
        break;
      case "6GcQGkmTcNH":
        Script16();
        break;
      case "6QlTnX21ZZX":
        Script17();
        break;
      case "5qfV1Z595Xy":
        Script18();
        break;
      case "6HVmXInvKWe":
        Script19();
        break;
      case "6KS3zNHhNME":
        Script20();
        break;
      case "6ZGXvf8C6Px":
        Script21();
        break;
      case "6FLpcJDlCex":
        Script22();
        break;
      case "5s1s2BtDX42":
        Script23();
        break;
      case "6nukHjNcaxr":
        Script24();
        break;
      case "6Jg19llbPSw":
        Script25();
        break;
      case "5yoCMQqBWzY":
        Script26();
        break;
      case "6706M3M8Rn2":
        Script27();
        break;
      case "5WYh7vQTCBl":
        Script28();
        break;
      case "68H1uoJK3yA":
        Script29();
        break;
      case "6dXm4pypapn":
        Script30();
        break;
      case "5XWGpLsokeK":
        Script31();
        break;
      case "6UjH4GAmXIZ":
        Script32();
        break;
      case "6l7IK6aSk85":
        Script33();
        break;
      case "6muVVVDexUT":
        Script34();
        break;
      case "6p6G6vIa7mK":
        Script35();
        break;
      case "5wN48D7M3Eu":
        Script36();
        break;
      case "6ZZNr9O5Yx7":
        Script37();
        break;
      case "6202TjodPSv":
        Script38();
        break;
      case "5mp6wAS8Y8R":
        Script39();
        break;
      case "5bOLvh5v6xs":
        Script40();
        break;
      case "61jyRlqhqXF":
        Script41();
        break;
      case "5sT44cUFaHo":
        Script42();
        break;
      case "6Uom66j6dpn":
        Script43();
        break;
      case "6Y9bc7YOxL4":
        Script44();
        break;
      case "6L7urg76xpf":
        Script45();
        break;
      case "6FtchxuF5Rp":
        Script46();
        break;
      case "6Czm3dyX7TT":
        Script47();
        break;
      case "6lH2Z3XX87Z":
        Script48();
        break;
      case "6Lw259dnJkY":
        Script49();
        break;
      case "6gE3HMirJjg":
        Script50();
        break;
      case "5uXSvAfMyVm":
        Script51();
        break;
      case "5osZ5smQoyD":
        Script52();
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
const target = object('61wMqg9Wcwj');
const duration = 1500;
const easing = 'ease-out';
const id = '60mlfIQXbjM';
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

window.Script2 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script3 = function()
{
  player.once(() => {
const target = object('5wR1MnIcXt2');
const duration = 1500;
const easing = 'ease-out';
const id = '5kgTiEFowZ5';
const pulseAmount = 0.1;
const delay = 70000;
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
const target = object('6GaRnMfcvNB');
const duration = 1500;
const easing = 'ease-out';
const id = '6XoypW8FIyl';
const pulseAmount = 0.1;
const delay = 82000;
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
const target = object('6GaRnMfcvNB');
const duration = 1500;
const easing = 'ease-out';
const id = '6XoypW8FIyl';
const pulseAmount = 0.1;
const delay = 76750;
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
  const target = object('5wR1MnIcXt2');
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

window.Script7 = function()
{
  player.once(() => {
const target = object('6MHj7FdyhGV');
const duration = 1500;
const easing = 'ease-out';
const id = '5t2XwWG7Sup';
const pulseAmount = 0.1;
const delay = 2000;
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
const target = object('5nhuecK2mLP');
const duration = 750;
const easing = 'ease-out';
const id = '5rwnBIURLrk';
const pulseAmount = 0.07;
const delay = 7000;
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
const target = object('6RpPCd64Eex');
const duration = 750;
const easing = 'ease-out';
const id = '6p3HcFOSGP0';
const pulseAmount = 0.07;
const delay = 11000;
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
  const target = object('5wR1MnIcXt2');
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

window.Script11 = function()
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

window.Script12 = function()
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

window.Script13 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script14 = function()
{
  player.once(() => {
const target = object('6oU0GsgjF6Y');
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

window.Script15 = function()
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

window.Script16 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script17 = function()
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

window.Script18 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script19 = function()
{
  player.once(() => {
const target = object('6lb7uUBvwkF');
const duration = 750;
const easing = 'ease-out';
const id = '6GPtK9YZLpx';
const pulseAmount = 0.07;
const delay = 8500;
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
const target = object('5mBMOghnR2Y');
const duration = 750;
const easing = 'ease-out';
const id = '5YHkvCdwho9';
const pulseAmount = 0.07;
const delay = 8500;
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
  player.once(() => {
const target = object('5nkgHR4pwAX');
const duration = 750;
const easing = 'ease-out';
const id = '6UtBCRKB5Hv';
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

window.Script22 = function()
{
  player.once(() => {
const target = object('5ki27UG4L1Y');
const duration = 1500;
const easing = 'ease-out';
const id = '5XM8Ganib18';
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

window.Script23 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script24 = function()
{
  player.once(() => {
const target = object('5nfWqqRT9GI');
const duration = 750;
const easing = 'ease-out';
const id = '6Qf1AGPULsZ';
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

window.Script25 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script26 = function()
{
  player.once(() => {
const target = object('5lcW5D3J0hi');
const duration = 1500;
const easing = 'ease-out';
const id = '6jWmPig1Z7C';
const pulseAmount = 0.07;
const delay = 11500;
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
  player.once(() => {
const target = object('6gQwthYxApi');
const duration = 1500;
const easing = 'ease-out';
const id = '5hbkJZtQ87T';
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

window.Script28 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script29 = function()
{
  player.once(() => {
const target = object('6A2aKShZC1Q');
const duration = 750;
const easing = 'ease-out';
const id = '6mCpqMAkzFh';
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

window.Script30 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script31 = function()
{
  player.once(() => {
const target = object('6CYV3eCh21m');
const duration = 1500;
const easing = 'ease-out';
const id = '6do7cqzp7B4';
const pulseAmount = 0.07;
const delay = 13250;
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
const target = object('6OfNOClHloi');
const duration = 1250;
const easing = 'ease-out';
const id = '6FhjJlQyfUc';
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

window.Script33 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script34 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script35 = function()
{
  player.once(() => {
const target = object('5tK70CZceGX');
const duration = 1500;
const easing = 'ease-out';
const id = '6JZNKXpGwsu';
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

window.Script36 = function()
{
  player.once(() => {
const target = object('60k9cWj2NWZ');
const duration = 750;
const easing = 'ease-out';
const id = '6Tv3qMU47nQ';
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
const target = object('5xR8s7oagCp');
const duration = 1500;
const easing = 'ease-out';
const id = '5h5mBbzSeSN';
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
  const target = object('5wR1MnIcXt2');
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

window.Script39 = function()
{
  player.once(() => {
const target = object('6AxdcJm4B4l');
const duration = 750;
const easing = 'ease-out';
const id = '5hSqaI2QFZh';
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
  const target = object('5wR1MnIcXt2');
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

window.Script41 = function()
{
  player.once(() => {
const target = object('6eN8fKE7Ram');
const duration = 1500;
const easing = 'ease-out';
const id = '5mDAasRCRb5';
const pulseAmount = 0.07;
const delay = 12188;
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
  player.once(() => {
const target = object('6JahwciFG3X');
const duration = 1500;
const easing = 'ease-out';
const id = '6amzIK8G6cY';
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

window.Script43 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script44 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script45 = function()
{
  player.once(() => {
const target = object('6dNvGmrUNM3');
const duration = 1500;
const easing = 'ease-out';
const id = '6U20afd0QlK';
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

window.Script46 = function()
{
  player.once(() => {
const target = object('6I84e8KuYb7');
const duration = 750;
const easing = 'ease-out';
const id = '6iIniwbCNhW';
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

window.Script47 = function()
{
  player.once(() => {
const target = object('69R6EAWU1u6');
const duration = 1500;
const easing = 'ease-out';
const id = '6UDkR1DNQPG';
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

window.Script48 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script49 = function()
{
  player.once(() => {
const target = object('5eVxHEfXKN2');
const duration = 1250;
const easing = 'ease-out';
const id = '6BK3uPtLYrd';
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

window.Script50 = function()
{
  const target = object('5wR1MnIcXt2');
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

window.Script51 = function()
{
  player.once(() => {
const target = object('69GWeNQeX8v');
const duration = 1500;
const easing = 'ease-out';
const id = '656lnleNPnh';
const pulseAmount = 0.07;
const delay = 11500;
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
function getActor() {
  return {
    "mbox": "mailto:mark.snyder@reallygreatreading.com",
    "objectType": "Agent",
    "name": "Playbooks Example"
  };
}
