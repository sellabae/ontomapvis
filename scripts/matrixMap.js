/**
 * Creates matrixMapping and returns svg:g
 * @param {*} ont1root 
 * @param {*} ont2root 
 * @param {*} alignments 
 */
function matrixMapping(ont1root, ont2root, alignments) {
    console.log(`matrixMapping(ont1root, ont2root, alignments)`);

    //Creates a detached g to return
    const g = d3.create("svg:g");
}

const dataset = {
    domain: 'conference',
    ont1: edas,
    ont2: ekaw,
    maps: mapping_edas_ekaw
};
//Builds proper structures for ontologies and alignments
const ont1TreeRoot = tree( hierarchy(dataset.ont1.root), 'right');
const ont2TreeRoot = tree( hierarchy(dataset.ont2.root), 'left');
const newAlignments = buildNewAlignments(dataset.maps.alignments, ont1TreeRoot, ont2TreeRoot);
//Adds a mapping field to a node in tree if there's an alignment for it.
ont1TreeRoot.each(d => {
    const filtered = newAlignments.filter(a => a.e1.id === d.id);
    if (filtered.length) {
        d.mappings = filtered;
    }
});
ont2TreeRoot.each(d => {
    const filtered = newAlignments.filter(a => a.e2.id === d.id);
    if (filtered.length) {
        d.mappings = filtered;
    }
});
//Processed data to use
const mtrx_ont1root = ont1TreeRoot;
const mtrx_ont2root = ont2TreeRoot;
const mtrx_alignments = newAlignments;

window.addEventListener('load', function() {
    console.log("window loaded.");
    drawMatrixSvg();
});

/**
 * Draws matrix mapping svg
 */
function drawMatrixSvg()
{
    console.log("drawMatrixSvg()");
    
    const svg = d3.select("#matrix-svg")
        .attr('width', 1950).attr('height', 2300);

    const gPos = {x: treeWidth+10, y: treeWidth-70};
    const g = svg.append('g')
        .attr('transform',`translate(${gPos.x},${gPos.y})`);

    //For fixed header effect
    const headSize = 600;
    const gContent = g.append('g').attr('id','gContent');
    const gRowHead = g.append('g')
        .attr('id','gRowHead').classed('matrix-head', true);
    gRowHead.append('rect').attr('x', -headSize)
        .attr('width', headSize).attr('height', 2300);
    const gColHead = g.append('g')
        .attr('id','gColHead').classed('matrix-head', true);
    gColHead.append('rect').attr('y', -headSize)
        .attr('width',1950).attr('height', headSize);
    const gAnchorHead = g.append('g')
        .attr('id','gAnchorHead').classed('matrix-head', true);
    gAnchorHead.append('rect')
        .attr('x', -headSize).attr('y', -headSize)
        .attr('width', headSize).attr('height', headSize);

    //Adds ontology treecharts
    const hGap = nodeHeight/2; //gap between headers and matrix
    const gTree1 = gRowHead.append(() => treechart(mtrx_ont1root, "right"))
        .attr('id','gTree1')
        .attr('transform',`translate(${-hGap},${hGap})`)
        .classed('right-aligned', true);
    const gTree2 = gColHead.append(() => treechart(mtrx_ont2root, "left"))
        .attr('id','gTree2')
        .attr('transform',`translate(${hGap},${-hGap}), rotate(270)`)
        .classed('horizontal', true);
    
    //Draws matrix background table rows and columns
    const cellSize = nodeHeight;
    let row = mtrx_ont1root.descendants().length;
    let col = mtrx_ont2root.descendants().length;
    let gGrid = gContent.append(() => grid(row, col, cellSize, true))
        .attr('id','gGrid').classed('bg-grid', true);

    //Draws mapping cells
    console.log('draw matrix mapping');
    const gMap = gContent.append('g')
        .attr('id','gMap');
    
    function update() {
        console.log('update mapCells');

        updateMappingPos(mtrx_alignments);

        const t = gMap.transition().duration(100);

        const mapcell = gMap.selectAll('rect')
            .data(mtrx_alignments, d => d.id);
        mapcell.join(
            enter => enter.append('rect')
                .attr('x', d => d.e2pos.y)
                .attr('y', d => d.e1pos.y),
            update => update
                .classed('map-to-hidden', d => d.mapToHidden)
                .transition(t)
                    .attr('x', d => d.e2pos.y)
                    .attr('y', d => d.e1pos.y)
            )
            .attr('id', d => `a${d.id}`)
            .classed('mapping', true).classed('mapCell', true)
            .attr('width', cellSize).attr('height', cellSize);
        mapcell
            .on('mouseenter', almt => showCellGuide(almt))
            .on('mouseover', almt => highlightAlignment(almt, g, mtrx_alignments))
            .on('mouseout', () => {
                turnOffEffects(g);
                gGrid.selectAll('.mapCell-guide').remove();
            });

        //FIXME: unstable glitch in mouseenter. better make cellguide permanant and move along mouse event?
        //Highlights alignments for mouse events on tree nodes
        g.selectAll('.node')
            .filter(d => d.mappings != undefined)
            .on('mouseenter', d => showCellGuide(d.mappings))
            .on('mouseover', d => highlightAlignment(d.mappings, g, mtrx_alignments))
            .on('mouseout', () => {
                turnOffEffects(g);
                gGrid.selectAll('.mapCell-guide').remove();
            });

        //FIXME: mouseover on mapCell doesn't work at initial state after updating the gGrid
        row = mtrx_ont1root.descendants().length;
        col = mtrx_ont2root.descendants().length;
        gContent.select('#gGrid').remove();
        gGrid = gContent.append(() => grid(row, col, cellSize, true))
            .attr('id','gGrid').classed('bg-grid', true)
            .lower();
        // console.log(mtrx_alignments);
    }

    update();
    //Redraws mapping cells
    gTree1.on('click', () => update());
    gTree2.on('click', () => update());

    function showCellGuide(alignments) {
        if (!alignments) { return; }    //for undefined
        console.log('draw cell guide');

        alignments = Array.isArray(alignments) ? alignments : [alignments];
        //To highlight any redundant alignment sets
        alignments = mtrx_alignments.filter(d => d.namePair === alignments[0].namePair);

        //guide rect to its mapped cell
        for(let almt of alignments) {
            const gCellGuide = gGrid.append('g')
                .classed('mapCell-guide', true).raise();
            gCellGuide.append('rect')
                .attr('x', 0).attr('y', almt.e1pos.y)
                .attr('width', cellSize * col).attr('height', cellSize);
            gCellGuide.append('rect')
                .attr('x', almt.e2pos.y).attr('y', 0)
                .attr('width', cellSize).attr('height', cellSize * row);
        }
    }

    // //Shows message when mouseover on 'Thing'
    // const msgBox = svg.append(() => messageBox("Double-click 'Thing' to expand/collapse all."))
    //     .attr('visibility', 'hidden');
    // svg.selectAll('.root.node')
    //     .on('mouseover', () => msgBox.attr('visibility', 'visible'))
    //     .on('mouseout', () => msgBox.attr('visibility', 'hidden'));

    //Freezes headers on svg on 'scroll' event
    document.getElementById('matrix-svgdiv')
        .addEventListener('scroll', (e) => {
            const top = e.target.scrollTop;
            const left = e.target.scrollLeft;
            // console.log(`scroll event on matrix. top:${top} left:${left}`);
            gAnchorHead.attr('transform', `translate(${left},${top})`);
            gRowHead.attr('transform', `translate(${left},0)`);
            gColHead.attr('transform', `translate(0,${top})`);
        });
}

/**
 * Draws the table lines
 * @param {number} row 
 * @param {number} col 
 * @param {number} cellSize 
 * @param {boolean} drawsBg 
 */
function grid(row, col, cellSize, drawsBg)
{
    console.log('create background table lines.');
    const g = d3.create('svg:g');

    if (drawsBg) {
        g.append('rect')
            .classed('bg-rect', true)
            .attr('height', row * cellSize)
            .attr('width', col * cellSize);
    }

    const rowG = g.append('g').classed('row', true);
    for (let i=0; i<row+1; i++) {
        rowG.append('line')
            .attr('x1', 0)
            .attr('y1', i * cellSize)
            .attr('x2', col * cellSize)
            .attr('y2', i * cellSize);
    }

    const colG = g.append('g').classed('col', true);
    for (let i=0; i<col+1; i++) {
        colG.append('line')
            .attr('x1', i * cellSize)
            .attr('y1', 0)
            .attr('x2', i * cellSize)
            .attr('y2', row * cellSize);
    }

    return g.node();
}
