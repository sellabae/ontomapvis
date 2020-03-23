const dataset1 = {
    domain: 'conference edas-ekaw',
    ont1: edas,
    ont2: ekaw,
    maps: mapping_edas_ekaw
};
const dataset2 = {
    domain: 'conference iasted-sigkdd',
    ont1: iasted,
    ont2: sigkdd,
    maps: mapping_iasted_sigkdd
};

window.addEventListener('load', function() {
    console.log("window loaded.");
    $('#dataset-description-1').html(describeDataset(dataset1));
    $('#dataset-description-2').html(describeDataset(dataset2));
    
});

function describeDataset(dataset)
{
    var desc = 'domain: ' + dataset.domain +'<br>'+
        `onto1: \"${dataset.ont1.baseNS}\" ${dataset.ont1.classCount} classes` +'<br>'+
        `onto2: \"${dataset.ont2.baseNS}\" ${dataset.ont2.classCount} classes` +'<br>'+
        `maps: ${dataset.maps.alignments.length} class alignments`;
    // console.log(desc);
    return desc;
}

/**
 * create message box and return svg:g
 * @param {string} msg 
 */
const messageBox = function(msg) {
    const box = d3.create('svg:g').classed('message-box', true);
    box.append('rect')
        .attr('width', msg.length * 6.5 + 5)
        .attr('height', 22);
    box.append('text')
        .text(msg)
        .attr('x', 5).attr('y', 5);
    return box.node();
};