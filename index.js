// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
}
function wrapAdjective(visualFlare = "*") {
    const encouragingPromptFunction =  function (howIFeel = "special") {
        return `You are ${visualFlare}${howIFeel}${visualFlare}!`;
    };
    return encouragingPromptFunction;
};