const FormTypeNum = {
    workload: 0,
    usability: 1,
    reaction: 2
};
const FormType = {
    workload: "tlx",
    usability: "sus",
    reaction: "reaction"
};

window.addEventListener('load', function() {
    console.log("window loaded.");

    
    var data = formdata.tlx;
    showFormHead(data);
    drawScaleForm(data);
    // var selected = FormTypeNum.workload; //0,1,2
    // switch(selected) {
    //     case FormTypeNum.workload:
    //     case FormType.usability:
    //         drawQuestionForm(selectedForm);
    //         break;
    //     case FormType.reaction:
    //         drawReactionForm();
    //         break;
    //     default:
    //         console.log("invalid formtype is selected.");
    // }
});

function showFormHead(data) {
    $("#form-title").text(data.title);
    $("#form-message").text(data.message);
}

/**
 * Draw scale based questionnaire type of form.
 * @param {object} formdata. either workload tlx or usability sus
 */
function drawScaleForm(data) {
    console.log("drawScaleForm()");
    if (data.itmes == "undefined") return;
    
    data.items.forEach((d,i) => {
        createQuestionItem(d,i).appendTo('form');
    });
}

function createQuestionItem(item, i) {
    idx = i+1;
    //question item
    var itemDiv = $('<div/>', {
        id: 'item' + idx,
        class: 'itemdiv'
    });
    //question text
    text = idx + ". " + item.question;
    itemDiv.append($('<p/>', {class: 'qtext', html: text}));
    //question subtext
    if (item.subtext != "undefined") {
        itemDiv.append($('<p/>', {class: 'qtext-sub', html: item.subtext}));
    }
    //radio group
    itemDiv.append(createRadioGroup(5, 'very low', 'very high'));

    return itemDiv;
}

/**
 * Create a radio group
 * @param {number} pointCount 
 * @param {string} firstWord 
 * @param {string} lastWord 
 */
function createRadioGroup(pointCount, firstWord, lastWord) {
    var answerDiv = $('<div class="answerdiv text-center">');
    var radioDiv = $('<div class="form-check form-check-inline" role="radiogroup">');
    radioDiv.append($('<span>'+ firstWord +'</span>'));
    for (var i=1; i<=pointCount; i++) {
        radioDiv.append($('<input/>', {
            class: "form-check-input",
            type: "radio",
            name: "inlineRadioOptions",
            id: "inlineRadio" + i,
            value: i
        }));
    }
    radioDiv.append($('<span>'+ lastWord +'</span>'));
    answerDiv.append(radioDiv);
    return answerDiv;
}



function drawReactionCardForm(formdata) {

}
