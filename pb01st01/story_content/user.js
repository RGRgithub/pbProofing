window.InitUserScripts = function()
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
window.Script50 = function()
{
  window.parent?.postMessage({ action: "activity_completed"}, '*');
    var player = GetPlayer(); // Get a reference to the Storyline player
    var customScore = player.GetVar("CustomScore"); // Get the value of your custom variable

    // If publishing to an LMS, you'll need to interact with the LMS API
    // This example uses SCORM 1.2/2004 compatible functions
    var lmsAPI = parent; // Get a reference to the LMS API (parent window)

    // Set the score in the LMS (raw score, max score, min score)
    lmsAPI.SetScore(customScore, 100, 0); // Assuming max score is 100 and min is 0

    // Optionally, set the lesson status to complete
    SCORM_CallLMSSetValue("cmi.core.lesson_status", "complete");

    // Commit the data to the LMS
    lmsAPI.CommitData();
}

};
