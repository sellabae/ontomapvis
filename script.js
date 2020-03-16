const dataset = {
    domain: 'conference',
    ont1: edas,
    ont2: ekaw,
    maps: mapping_edas_ekaw
};

const treeWidth = 300;

console.log('ont1TreeRoot:');
const ont1TreeRoot = tree( hierarchy(dataset.ont1.root), 'right');
console.log('ont2TreeRoot:');
const ont2TreeRoot = tree( hierarchy(dataset.ont2.root), 'left');

const newAlignments = buildNewAlignments(dataset.maps.alignments, ont1TreeRoot, ont2TreeRoot);

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


//Separates ontology trees and mappings from baseline for separate interaction effects 
//FIXME: Separate the two data!
const base_ont1root = ont1TreeRoot;
const base_ont2root = ont2TreeRoot;
const base_alignments = newAlignments;
const mtrx_ont1root = ont1TreeRoot;
const mtrx_ont2root = ont2TreeRoot;
const mtrx_alignments = newAlignments;

//To make highlight stay on mouse click on mapping line.
let maplineClicked = false;

window.addEventListener('load', function() {
    console.log("window loaded.");
    $('#dataset-description').html(describeDataset());

    drawBaselineSvg();
    drawMatrixSvg();
    
});

function describeDataset()
{
    var desc = '[Dataset]' +'<br>' +
        'domain: ' + dataset.domain +'<br>'+
        `onto1: \"${dataset.ont1.baseNS}\" ${dataset.ont1.classCount} classes` +'<br>'+
        `onto2: \"${dataset.ont2.baseNS}\" ${dataset.ont2.classCount} classes` +'<br>'+
        `maps: ${dataset.maps.alignments.length} class alignments`;
    // console.log(desc);
    return desc;
}

function updateMappingPos(alignments) {
    alignments.forEach(a => {
        a.e1pos = {x: a.e1.x, y: a.e1.y};
        a.e2pos = {x: a.e2.x, y: a.e2.y};
    });
}

function drawBaselineSvg()
{
    console.log("drawBaselineSvg()");
    const ontGap = 200;
    
    const svg = d3.select("#baseline-svg")
        .attr('height', 2100)   //TODO: calculate auto
        .attr('width', 1050);   //TODO: adjust to the same width of svgdiv
    const svgWidth = +svg.attr('width');
    // //auto adjust the svg height
    // let newHeight = nodeHeight * Math.max(ont1TreeRoot.count(), ont2TreeRoot.count());
    // svg.attr('height', newHeight);
    const g = svg.append('g')
        .attr('transform',`translate(${svgWidth/2},20)`);
    const gTree1 = g.append(() => treechart(base_ont1root, "right"))
        .attr('id','gTree1')
        .classed('right-aligned', true)
        .attr('transform',`translate(${-ontGap/2},0)`);
    const gTree2 = g.append(() => treechart(base_ont2root, "left"))
        .attr('id','gTree2')
        .attr('transform',`translate(${ontGap/2},0)`);
    const gMap = g.append('g')
        .attr('id','gMap')
        .attr('transform',`translate(${-ontGap/2},0)`); //to center
    
    console.log('draw baseline mapping');

    function update() {
        console.log('update mapLines');

        updateMappingPos(base_alignments);

        const t = gMap.transition().duration(100);

        const mapline = gMap.selectAll('g')
            .data(base_alignments, d => d.id);
        const maplineEnter = mapline.enter()
            .append('g')
                .attr('id', d => `a${d.id}`)
                .classed('mapping', true).classed('mapLine', true);
        maplineEnter
            .on('click', almt => {
                console.log('mapLine clicked!');
                maplineClicked = true;
                highlightAlignment(almt, g, base_alignments);
            })
            .on('mouseover', almt => {
                if (!maplineClicked) highlightAlignment(almt, g, base_alignments);
            })
            .on('mouseout', () => {
                if (!maplineClicked) turnOffEffects(g);
            });
        maplineEnter.append('path')   //foreground path
            .attr('d', (d,i) => calcMapLinePath(d,i))
            .attr('fill', 'none')
            .attr('class', 'mapLine-fg')
            .clone(true).lower() //background path
                .attr('class', 'mapLine-bg')
            .clone(true).lower() //path select helper
                .attr('class', 'mapLine-select-helper');
        const maplineUpdate = mapline.transition(t)
            .each( (d,i,n) => {
                d3.select(n[i]).selectAll('path')
                    .attr('d', () => calcMapLinePath(d,i));
            });
        const maplineExit = mapline.exit().transition(t).remove();

        console.log(base_alignments);
    }
    update();
    //Redraws mapping lines
    gTree1.on('click', () => update());
    gTree2.on('click', () => update());

    //Highlights alignments for mouse events on tree nodes
    g.selectAll('.node')
        .filter(d => d.mappings != undefined)
        .on('mouseover', d => {
            if (!maplineClicked) highlightAlignment(d.mappings, g, base_alignments);
        })
        .on('mouseout', () => {
            if (!maplineClicked) turnOffEffects(g);
        });
    //Turns off the highlight when clicked on other part in svg
    document.getElementById('baseline-svg')
        .addEventListener('click', (e) =>{
            const isMapLineTargeted = d3.select(e.target.parentNode).classed('mapLine');
            if(maplineClicked && !isMapLineTargeted) {
                console.log('baseline svg clicked! Turning off the highlight.');
                maplineClicked = false;
                turnOffEffects(g);
            }
        });

    // //Show message when mouseover on 'Thing'
    // const msgBox = svg.append(() => messageBox("Double-click 'Thing' to expand/collapse all."))
    //     .attr('visibility', 'hidden');
    // //TODO: enable this for doubleclick on Thing
    // svg.selectAll('.root.node')
    //     .on('mouseover', () => msgBox.attr('visibility', 'visible'))
    //     .on('mouseout', () => msgBox.attr('visibility', 'hidden'))
    //     .on('dblclick', () => {
    //         console.log('root double-clicked!');
    //     });
    
    /**
     * Calculates the svg:path for a baseline mapping line
     * @param {Object} almt an alignment mapping
     * @param {number} i the index of the alignment
     */
    function calcMapLinePath(almt, i)
    {
        if (!almt) { return ``; }
        console.log(`calcMapLinePath(almt=${almt}, i=${i})`);
        console.log(`calcMapLinePath() id:${almt.id} e1pos:${almt.e1pos.x},${almt.e1pos.y} e2pos:${almt.e2pos.x},${almt.e2pos.y}`);

        const ontGap = 200;
        const dn = 6; //distance from the nodemark
        const x1 = almt.e1pos.x + dn,
            y1 = almt.e1pos.y,
            x2 = almt.e2pos.x + ontGap - dn,
            y2 = almt.e2pos.y;
        const c = 10,   //curve value
            gm = 20, //margin from ontGap
            hgap = ((ontGap-gm*2) / base_alignments.length).toFixed(0);
        const hx = hgap * i + gm;
        const vy = y2 > y1 ? y2-c : y2+c;
        const cy = y2 > y1 ? c : -c;
        return `M${x1},${y1} H${hx} s${c},0,${c},${cy} V${vy} s0,${cy},${c},${cy} H${x2}`;
    }
}


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
    const row = mtrx_ont1root.descendants().length;
    const col = mtrx_ont2root.descendants().length;
    const cellSize = nodeHeight;
    const gGrid = gContent.append(() => grid(row, col, cellSize, true))
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
            update => update.transition(t)
                    .attr('x', d => d.e2pos.y)
                    .attr('y', d => d.e1pos.y)
        )   .attr('id', d => `a${d.id}`)
            .classed('mapping', true).classed('mapCell', true)
            .attr('width', cellSize).attr('height', cellSize);
        mapcell
            .on('mouseenter', almt => showCellGuide(almt))
            .on('mouseover', almt => highlightAlignment(almt, g, mtrx_alignments))
            .on('mouseout', () => {
                turnOffEffects(g);
                gGrid.selectAll('.mapCell-guide').remove();
            });
        
        console.log(mtrx_alignments);
    }
    update();
    //Redraws mapping cells
    gTree1.on('click', () => update());
    gTree2.on('click', () => update());

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

    function showCellGuide(alignments) {
        if (!alignments) { return; }    //for undefined
        console.log('draw cell guide');

        alignments = Array.isArray(alignments) ? alignments : [alignments];
        //To highlight any redundant alignment sets
        alignments = mtrx_alignments.filter(d => d.namePair === alignments[0].namePair);

        //guide rect to its mapped cell
        for(let almt of alignments) {
            const gCellGuide = gGrid.append('g')
            .classed('mapCell-guide', true);
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
        console.log(`highlight: gMap #a${almt.id}, gTree1 #n${almt.e1.id} '${almt.e1.data.name}', gTree2 #n${almt.e2.id} '${almt.e2.data.name}'`);

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