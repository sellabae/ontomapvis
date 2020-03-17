
/**
 * Builds alignment list with "id, entity1, and entity2" pairs including redundant matches
 * @param {*} sourceAlmts 
 * @returns {*} newAlmts
 */
function buildNewAlignments(sourceAlmts, ont1root, ont2root) {
    console.log('buildNewAlignments()');
    let newAlmts = [];
    let id = 0;
    sourceAlmts.forEach(almt => {
        e1matches = ont1root.descendants().filter(d => d.data.name === almt.entity1);
        e2matches = ont2root.descendants().filter(d => d.data.name === almt.entity2);
        namePair = {entity1: almt.entity1, entity2: almt.entity2};
        for (let e1 of e1matches) {
            for (let e2 of e2matches) {
                newAlmts.push({id:id++, namePair:namePair, e1:e1, e2:e2});
            }
        }
    });
    console.log(newAlmts);
    return newAlmts;
}

/**
 * Updates the mapped positions of alignments
 * @param {*} alignments 
 */
function updateMappingPos(alignments) {
    alignments.forEach(a => {
        //Updates the positions
        if (a.e1.shown) {
            a.e1pos = {x: a.e1.x, y: a.e1.y};
        } else {
            const nearestShownAnc = a.e1.ancestors().filter(d => d.shown)[0];
            a.e1pos = {x: nearestShownAnc.x, y: nearestShownAnc.y};
        }
        if (a.e2.shown) {
            a.e2pos = {x: a.e2.x, y: a.e2.y};
        } else {
            const nearestShownAnc = a.e2.ancestors().filter(d => d.shown)[0];
            a.e2pos = {x: nearestShownAnc.x, y: nearestShownAnc.y};
        }

        //Marks mapToHidden if one of mappedEntity is shown false
        a.mapToHidden = !(a.e1.shown && a.e2.shown);
    });
}

/**
 * Give 'highlight' class to the DOM elements of the list of alignments
 * @param {*} alignments one alignment or an array of alignments
 * @param {*} g svg:g of baseline or matrix
 * @param {*} alignmentSet base_alignment or mtrx_alignment
 */
function highlightAlignment(alignments, g, alignmentSet) {
    if (!alignments) { return; }    //for undefined
    console.log('highlightAlignment()');
    alignments = Array.isArray(alignments) ? alignments : [alignments];
    //To highlight any redundant alignment sets
    alignments = alignmentSet.filter(d => d.namePair === alignments[0].namePair);

    //Mutes all mapping and nodes in the group
    g.selectAll('.node').classed('muted', true);
    g.selectAll('.mapping').classed('muted', true);

    //Highlights mappings and their class nodes
    for (let almt of alignments) {
        // console.log(`highlight: gMap #a${almt.id}, gTree1 #n${almt.e1.id} '${almt.e1.data.name}', gTree2 #n${almt.e2.id} '${almt.e2.data.name}'`);

        //alignment
        g.select("#gMap").select('#a'+almt.id)
            .classed('muted', false)
            .classed('highlight', true).raise();
        //tree nodes
        g.select("#gTree1").select('#n'+almt.e1.id)
            .classed('muted', false)
            .classed('highlight', true);
        g.select("#gTree2").select('#n'+almt.e2.id)
            .classed('muted', false)
            .classed('highlight', true);
    }
}

function turnOffEffects(g) {
    g.selectAll("*")
        .classed('highlight', false)
        .classed('muted', false);
}
