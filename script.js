let dataset = {
    domain: 'conference',
    ont1: edas,
    ont2: ekaw,
    maps: mapping_edas_ekaw
};

let treeWidth = 300;
let ontGap = 200;

const ont1TreeRoot = tree(dataset.ont1.root, 'right');
const ont2TreeRoot = tree(dataset.ont2.root, 'left');

window.addEventListener('load', function() {
    console.log("window loaded.");
    $('#dataset-description').html(describeDataset());

    drawBaselineSvg();
    drawMatrixSvg();
    
});

function describeDataset()
{
    var desc = /*'[Dataset]' +'<br>' +*/
        'domain: ' + dataset.domain +'<br>'+
        `onto1: \"${dataset.ont1.baseNS}\" ${dataset.ont1.classCount} classes` +'<br>'+
        `onto2: \"${dataset.ont2.baseNS}\" ${dataset.ont2.classCount} classes` +'<br>'+
        `maps: ${dataset.maps.alignments.length} alignments`;
    // console.log(desc);
    return desc;
}

function drawBaselineSvg()
{
    console.log("drawBaselineSvg()");
    
    const svg = d3.select("#baseline-svg")
        .attr('height', 1900)
        .attr('width', 1000);
    const svgWidth = +svg.attr('width');
    // //auto adjust the svg height
    // let newHeight = nodeHeight * Math.max(ont1TreeRoot.count(), ont2TreeRoot.count());
    // svg.attr('height', newHeight);

    const g = svg.append('g')
        .attr('transform',`translate(${svgWidth/2},20)`);
    const base_ont1G = g.append(() => treechart(ont1TreeRoot, "right"))
        .attr('id','base_ont1G')
        .attr('transform',`translate(${-ontGap/2},0)`);
    const base_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','base_ont2G')
        .attr('transform',`translate(${ontGap/2},0)`);
    
    console.log('draw baseline mapping');
    const base_mapG = g.append('g').lower()
        .attr('id','base_mapG')
        .attr('transform',`translate(${-ontGap/2},0)`);
    base_mapG.selectAll('path')
        .data(dataset.maps.alignments)
        .join('path')
            .classed('mapLine', true)
            .attr('d', (d,i) => mapLinePath(d,i));
}

/**
 * Calculates the svg:path for a baseline mapping line
 * @param {Object} almt an alignment mapping
 * @param {number} i the index of the alignment
 */
function mapLinePath(almt, i)
{
    var e1 = ont1TreeRoot.descendants().filter(d => d.data.name === almt.entity1)[0];
    var e2 = ont2TreeRoot.descendants().filter(d => d.data.name === almt.entity2)[0];

    if (e1 != undefined && e2 != undefined) {
        // console.log(`${i}. e1:${e1.data.name} x:${e1.x} y:${e1.y}   e2:${e2.data.name} x:${e2.x} y:${e2.y}`);
        const x1 = e1.y, y1 = e1.x;
        const x2 = e2.y + ontGap, y2 = e2.x;
        const q = Math.abs(y2 - y1)/2;
        const qx = (ontGap-20) / dataset.maps.alignments.length * i;
        const qy = y2 > y1 ? y2-q : y2+q;
        return `M ${x1} ${y1} Q ${qx.toFixed(0)} ${y1} ${qx.toFixed(0)} ${qy} T ${x2} ${y2}`;
    } else {
        // console.log(`${i}. undefined for (${almt.entity1}, ${almt.entity1})`);
        return ``;
    }
}

function drawMatrixSvg()
{
    console.log("drawMatrixSvg()");
    
    const svg = d3.select("#matrix-svg")
        .attr('height', 2150)
        .attr('width', 1800);

    let g = svg.append('g')
        .attr('transform','translate(10,10)');
    hVal = nodeHeight/2; //for header position adjustmant
    var matrix_ont1G = g.append(() => treechart(ont1TreeRoot, "right"))
        .attr('id','matrix_ont1G')
        .attr('transform',`translate(${treeWidth-hVal},${treeWidth-50+hVal})`);
    var matrix_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','matrix_ont2G')
        .attr('transform',`translate(${treeWidth+hVal},${treeWidth-50-hVal}), rotate(270)`);
    
    //tilts the texts in the ont2 header
    matrix_ont2G.classed('tilted', true);
    // matrix_ont2G.selectAll('.node')
    //     .classed('tilted', true);
    
    //draw matrix background table rows and columns
    const row = ont1TreeRoot.descendants().length;
    const col = ont2TreeRoot.descendants().length;
    const cellSize = nodeHeight;
    // g.append(() => drawTableLines(row, col, cellSize, false))
    //     .lower()
    //     .classed('map-bg-table', true)
    //     .attr('transform',`translate(${treeWidth},${treeWidth-50})`);
    var tbG = g.append('g').lower()
        .classed('tbG', true)
        .attr('transform',`translate(${treeWidth},${treeWidth-50})`);
    const rowG = tbG.append('g').classed('row', true);
    for (let i=0; i<row+1; i++) {
        rowG.append('line')
            .attr('x1', 0)
            .attr('y1', i * cellSize)
            .attr('x2', col * cellSize)
            .attr('y2', i * cellSize);
    }
    const colG = tbG.append('g').classed('col', true);
    for (let i=0; i<col+1; i++) {
        colG.append('line')
            .attr('x1', i * cellSize)
            .attr('y1', 0)
            .attr('x2', i * cellSize)
            .attr('y2', row * cellSize);
    }

    //draw mapping cells
    console.log('draw matrix mapping');
    var matrix_mapG = g.append('g')
        .attr('id','matrix_mapG')
        .attr('transform',`translate(${treeWidth},${treeWidth-50})`);

    // var mapCell = matrix_mapG.selectAll('rect')
    //     .data(dataset.maps.alignments)
    //     .enter()
    //     .append((d,i) => mapCellRect(d,i));
    //TODO: this is temporary to draw mapping cells
    dataset.maps.alignments.forEach((almt,i) => {
        var e1 = ont1TreeRoot.descendants().filter(d => d.data.name === almt.entity1)[0];
        var e2 = ont2TreeRoot.descendants().filter(d => d.data.name === almt.entity2)[0];
        if (e1 != undefined && e2 != undefined) {
            // console.log(`${i}. e1:${e1.data.name} x${e1.x} y${e1.y}\t e2:${e2.data.name} x${e2.x} y${e2.y}`);
            const x = e2.x;
            const y = e1.x;
            const cellSize = nodeHeight;
            matrix_mapG.append('rect')
                .classed('mapCell', true)
                .attr('x', x)
                .attr('y', y)
                .attr('width', cellSize)
                .attr('height', cellSize);
        } else {
            // console.log(`${i}. undefined for (${almt.entity1}, ${almt.entity1})`);
        }
    });
}

/**
 * Draws the table lines
 * @param {number} row 
 * @param {number} col 
 * @param {number} cellSize 
 * @param {boolean} drawsBg 
 */
function drawTableLines(row, col, cellSize, drawsBg)
{
    console.log('draw lines for table background.');

    const tbG = d3.create('svg:g');
    if (drawsBg) {
        tbG.append('rect')
            .attr('height', row * cellSize)
            .attr('width', col * cellSize)
            .style('fill', '#EEE');
    }
    const rowG = tbG.append('g').classed('row', true);
    for (let i=0; i<row+1; i++) {
        rowG.append('line')
            .attr('x1', 0)
            .attr('y1', i * cellSize)
            .attr('x2', col * cellSize)
            .attr('y2', i * cellSize)
            .style('stroke', '#CCC').style('stroke-width', '1px');
    }
    const colG = tbG.append('g').classed('col', true);
    for (let i=0; i<col+1; i++) {
        colG.append('line')
            .attr('x1', i * cellSize)
            .attr('y1', 0)
            .attr('x2', i * cellSize)
            .attr('y2', row * cellSize)
            .style('stroke', '#CCC').style('stroke-width', '1px');
    }
    return tbG.node();
}

//TODO: why this isn't working??
/**
 * Draws a mapping cell(rect) of an alignment for matrix mapping
 * @param {Object} almt a mapping alignment
 * @param {number} i the index of almt within alignments
 */
function mapCellRect(almt,i)
{
    console.log('mapCellRect() called');
    //TODO: update to handle more than one filtered results (there can be repetition)
    var e1 = ont1TreeRoot.descendants().filter(d => d.data.name === almt.entity1)[0];
    var e2 = ont2TreeRoot.descendants().filter(d => d.data.name === almt.entity2)[0];

    if (e1 != undefined && e2 != undefined) {
        console.log(`${i}. e1:${e1.data.name} x${e1.x} y${e1.y}\t e2:${e2.data.name} x${e2.x} y${e2.y}`);
        const x = e2.x;
        const y = e1.x;
        const cellSize = nodeHeight;
        var rect = d3.create('svg:rect')
            .classed('mapCell', true)
            .attr('x', x)
            .attr('y', y)
            .attr('width', cellSize)
            .attr('height', cellSize);
        return rect.node();
    } else {
        console.log(`${i}. undefined for (${almt.entity1}, ${almt.entity1})`);
        return d3.create('svg:rect').node();
    }
}