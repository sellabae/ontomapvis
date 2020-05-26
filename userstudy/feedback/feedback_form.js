const FormCode = {
    workload: 0,
    usability: 1,
    reaction: 2
};

window.addEventListener('load', function() {
    console.log("window loaded.");

    var data = formdata.reaction; //formdata.tlx, formdata.sus, formdata.reaction
    generateForm(data);
});

/**
 * Generate feedback form
 * @param {object} data formdata object
 */
function generateForm(data) {
    console.log('generating form...');

    //Show form description
    $("#form-title").text(data.title);
    $("#form-message").text(data.message);

    //Add hidden id/formtype info for form submit
    var pid = "E9R7A001"; //some 8-digit random generated id
    $('#form-identification').append(`<input type="text" id="pId" name="pId" value="${pid}" readonly>`);
    $('#form-identification').append(`<input type="text" id="formtype" name="type" value="${data.type}" readonly>`);
    
    //Draw the form on html page
    console.log('formtype: ' + data.formcode);
    switch(data.formcode) {
        case FormCode.workload:
        case FormCode.usability:
            drawScaleForm(data);
            break;
        case FormCode.reaction:
            drawReactionForm(data);
            break;
        default:
            console.log("invalid formtype is selected.");
    }
}

/**
 * Draw scale based questionnaire type of form to html.
 * @param {object} formdata. either workload tlx or usability sus
 */
function drawScaleForm(data) {
    console.log("drawScaleForm()");
    if (data.itmes == "undefined") return;
    
    data.items.forEach((item,i) => {
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
        itemDiv.append(createRadioGroup("a"+idx, data.scale));

        $('#form-content').append(itemDiv);
    });
}

/**
 * Create a radio group
 * @param {string} inputName name of the radio group
 * @param {object} scale {count, fisrt, last}
 */
function createRadioGroup(inputName, scale) {
    var answerDiv = $('<div class="answerdiv text-center">');
    answerDiv.append($('<label>'+ scale.first +'</label>'));
    var radiogroup = $('<div class="form-check form-check-inline" role="radiogroup">');
    for (var i=1; i<=scale.count; i++) {
        var radio = $('<div class="radiodiv"></div>');
        radio.append($(`<label class="form-check-label">${i}</label>`));
        radio.append($('<input/>', {
            class: "form-check-input",
            type: "radio",
            name: inputName,
            id: "inlineRadio" + i,
            value: i,
            required: "required"
        }));
        radiogroup.append(radio);
    }
    answerDiv.append(radiogroup);
    answerDiv.append($('<label>'+ scale.last +'</label>'));
    return answerDiv;
}

/**
 * Draws Reaction Cards form
 * @param {*} data 
 */
function drawReactionForm(data) {
    const limit = 5;

    //Draw reaction cards
    var cardsDiv = $('<div class="cards-div"></div>');
    shuffle(data.items);
    for (var word of data.items) {
        var wordcard = $(`
            <label class="btn wordcard">
                ${word}
                <input type="checkbox" class="word-checkbox" value="${word}" autocomplete="off">
            </label>
        `);
        cardsDiv.append(wordcard);
    }
    $('#form-content').append(cardsDiv);

    //Chosen words
    var chosenCardsDiv = $('<div class="chosen-cards-div"></div>');
    chosenCardsDiv.append($('<input id="chosen-words" type="text" name="words" value="" readonly>'));
    $('#form-content').append(chosenCardsDiv);

    //Checkbox interaction
    $('input.word-checkbox').on('change', function() {
        var checkbox = $(this);
        var label = checkbox.parent('label');
        
        //Set limit
        if ($('input.word-checkbox:checked').length > limit) {
            $(this).prop('checked', false);
            console.log('word selection limit 5');
            return;
        }
        
        //Sync with button
        if (checkbox.is(':checked')) {
            label.addClass('active');
        } else {
            label.removeClass('active');
        }
        
        //list of words
        var checkedboxes = $('input.word-checkbox:checked').toArray();
        var words = checkedboxes.map(c => c.value);
        console.log(words);
        $('#chosen-words').val(words.join(', '));
    });

    //Create text input for reason
    var reasonDiv = $(`
        <div class="reason-div form-group">
            <label for="formGroupExampleInput">${data.q2}</label>
            <textarea class="form-control" id="reasonTextarea" rows="3" name="reason" placeholder="reasons of your choices"></textarea>
        </div>`);
    $('#form-content').append(reasonDiv);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}