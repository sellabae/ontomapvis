const dataset = {
    domain: 'conference',
    ont1: edas,
    ont2: ekaw,
    maps: mapping_edas_ekaw
};

const treeWidth = 300;
const ontGap = 200;

console.log('ont1TreeRoot:');
const ont1TreeRoot = tree( hierarchy(dataset.ont1.root), 'right');
console.log('ont2TreeRoot:');
const ont2TreeRoot = tree( hierarchy(dataset.ont2.root), 'left');

updateData();

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
        `maps: ${dataset.maps.alignments.length} class alignments`;
    // console.log(desc);
    return desc;
}

function updateData()
{
    console.log('updateData() reassigning positions of mapped classes to alignments');
    dataset.maps.alignments.forEach((almt,i) => {
        //asign id to each alignment
        almt.id = i;
        //filter match
        almt.e1match = ont1TreeRoot.descendants().filter(d => d.data.name === almt.entity1);
        almt.e2match = ont2TreeRoot.descendants().filter(d => d.data.name === almt.entity2);

        //mark if the alignment is for class, not property
        almt.isClassMapping = (almt.e1match.length && almt.e2match.length) ? true : false;
        
        //TODO: handle multiple matches
        if (almt.isClassMapping) {
            if (almt.e1match.length > 1) {
                console.log(`**${i}. multiple match e1:${almt.entity1} match:${almt.e1match}`);
            }
            if (almt.e2match.length > 1) {
                console.log(`**${i}. multiple match e2:${almt.entity2} match:${almt.e2match}`);
            }
        }

        //assign position
        //TODO: this may be redundant now to almt.e1match[i].x and almt.e1match[i].y
        var e1 = almt.e1match[0];
        var e2 = almt.e2match[0];
        if (almt.isClassMapping) {
            // console.log(`${i}. e1:${e1.data.name} x${e1.y} y${e1.x}\t e2:${e2.data.name} x${e2.y} y${e2.x}`);
            almt.e1pos = {x: e1.x, y: e1.y};
            almt.e2pos = {x: e2.x, y: e2.y};
        }
    });
    console.log('alignments:');
    console.log(dataset.maps.alignments);
}

function drawBaselineSvg()
{
    console.log("drawBaselineSvg()");
    
    const svg = d3.select("#baseline-svg")
        .attr('height', 2100)   //TODO: calculate auto
        .attr('width', 1050);   //TODO: adjust to the same width of svgdiv
    const svgWidth = +svg.attr('width');
    // //auto adjust the svg height
    // let newHeight = nodeHeight * Math.max(ont1TreeRoot.count(), ont2TreeRoot.count());
    // svg.attr('height', newHeight);

    const g = svg.append('g')
        .attr('transform',`translate(${svgWidth/2},20)`);
    const base_ont1G = g.append(() => treechart(ont1TreeRoot, "right"))
        .attr('id','base_ont1G')
        .classed('right-aligned', true)
        .attr('transform',`translate(${-ontGap/2},0)`);
    const base_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','base_ont2G')
        .attr('transform',`translate(${ontGap/2},0)`);
    const base_mapG = g.append('g')/*.lower()*/
        .attr('id','base_mapG')
        .attr('transform',`translate(${-ontGap/2},0)`); //to center
    
    //mapline
    console.log('draw baseline mapping');
    const mapline = base_mapG.selectAll('g')
        .data(dataset.maps.alignments)
        .join('g')
        .classed('mapping', true)
        .classed('mapLine', true);
    mapline.append('path')   //foreground path
        .attr('d', (d,i) => calcMapLinePath(d,i))
        .attr('fill', 'none')
        .attr('class', 'mapLine-fg')
        .clone(true).lower() //background path
            .attr('class', 'mapLine-bg')
        .clone(true).lower() //path select helper
            .attr('class', 'mapLine-select-helper');
    //mapline event
    mapline.on('mouseover', (d, i, n) => {
        d3.select(n[i]).classed('highlight', true).raise();
        highlightNode(
            base_ont1G.select('#n' + d.e1match[0].id),
            base_ont1G);
        highlightNode(
            base_ont2G.select('#n' + d.e2match[0].id),
            base_ont2G);

        //FIXME: Why is it drawing on 0,0???
        // console.log(`mouseover alignment. e1pos:${d.e1pos.x},${d.e1pos.y} e2pos:${d.e2pos.x},${d.e2pos.y}`);
        // if( ! d3.select(n[i]).select('.mapLine-endpoint') ) {
        //     d3.select(n[i])
        //     .append('circle').attr('r', 8)
        //         .classed('mapLine-endpoint', true)
        //         .attr('x', d.e1pos.x).attr('y', d.e1pos.y)
        //     .clone(true)
        //         .attr('x', ontGap + d.e2pos.x).attr('y', d.e2pos.y);
        // }
    });
    mapline.on('mouseout', (d, i, n) => {
        d3.select(n[i]).classed('highlight', false);
        // d3.select(n[i]).selectAll('.mapLine-endpoint').remove();
        unmuteAllNode(base_ont1G);
        unmuteAllNode(base_ont2G);
    });

    //test for mappings to nodes collapsed under parent
    mapline.on('click', (_,i,n) =>
        d3.select(n[i]).classed('map-to-collapsed', true));

}

/**
 * Calculates the svg:path for a baseline mapping line
 * @param {Object} almt an alignment mapping
 * @param {number} i the index of the alignment
 */
function calcMapLinePath(almt, i)
{
    if (!almt.isClassMapping) {
        return ``;
    }
    const dn = 6; //distance from the nodemark
    const x1 = almt.e1pos.x + dn,
          y1 = almt.e1pos.y,
          x2 = almt.e2pos.x + ontGap - dn,
          y2 = almt.e2pos.y;
    const c = 10,   //curve value
          gm = 20, //margin from ontGap
          hgap = ((ontGap-gm*2) / dataset.maps.alignments.length).toFixed(0);
    const hx = hgap * i + gm;
    const vy = y2 > y1 ? y2-c : y2+c;
    const cy = y2 > y1 ? c : -c;
    return `M${x1},${y1} H${hx} s${c},0,${c},${cy} V${vy} s0,${cy},${c},${cy} H${x2}`;
}

function drawMatrixSvg()
{
    console.log("drawMatrixSvg()");
    
    const svg = d3.select("#matrix-svg")
        .attr('height', 2300)
        .attr('width', 1950);

    const g = svg.append('g')
        .attr('transform',`translate(${treeWidth+10},${treeWidth-70})`);
    const hGap = nodeHeight/2; //gap between headers and matrix
    const matrix_ont1G = g.append(() => treechart(ont1TreeRoot, "right"))
        .attr('id','matrix_ont1G')
        .attr('transform',`translate(${-hGap},${hGap})`)
        .classed('right-aligned', true);
    const matrix_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','matrix_ont2G')
        .attr('transform',`translate(${hGap},${-hGap}), rotate(270)`)
        .classed('horizontal', true);
    
    //draw matrix background table rows and columns
    const row = ont1TreeRoot.descendants().length;
    const col = ont2TreeRoot.descendants().length;
    const cellSize = nodeHeight;
    const gGrid = g.append(() => grid(row, col, cellSize, true))
        .classed('bg-grid', true);

    //draw mapping cells
    console.log('draw matrix mapping');
    const matrix_mapG = g.append('g')
        .attr('id','matrix_mapG');
    const enlarge = 4;
    const mapcell = matrix_mapG.selectAll('rect')
        .data(dataset.maps.alignments)
        .join('rect')
            .classed('mapping', true)
            .classed('mapCell', true)
            .attr('x', d => d.e2pos.y)
            .attr('y', d => d.e1pos.y)
            .attr('width', cellSize)
            .attr('height', cellSize);
    mapcell.on('mouseenter', d => {
        //guide rect to its mapped cell
        console.log('drawing mapCell-guide');
        const gCellGuide = gGrid.append('g')
            .classed('mapCell-guide', true);
        gCellGuide.append('rect')
            .attr('x', d.e2pos.y).attr('y', 0)
            .attr('width', cellSize).attr('height', cellSize * row);
        gCellGuide.append('rect')
            .attr('x', 0).attr('y', d.e1pos.y)
            .attr('width', cellSize * col).attr('height', cellSize);
        
    });
    mapcell.on('mouseover', (d, i, n) => {
        // console.log(`mouseover cell ${d3.select(n[i]).attr('transform-origin')}`);
        //TODO: With '.highlight' scale in css, but now transform-origin behaves weird
        d3.select(n[i])
            .raise()
            .classed('highlight', true)
            .attr('width', cellSize + enlarge)
            .attr('height', cellSize + enlarge)
            .attr('transform', `translate(${-enlarge/2},${-enlarge/2})`);
        
        highlightNode(
            matrix_ont1G.select('#n' + d.e1match[0].id),
            matrix_ont1G);
        highlightNode(
            matrix_ont2G.select('#n' + d.e2match[0].id),
            matrix_ont2G);
    });
    mapcell.on('mouseout', (_, i, n) => {
        d3.select(n[i])
            .classed('highlight', false)
            .attr('width', cellSize)
            .attr('height', cellSize)
            .attr('transform', `translate(0,0)`);

        unmuteAllNode(matrix_ont1G);
        unmuteAllNode(matrix_ont2G);

        gGrid.select('.mapCell-guide').remove();
    });

    //test for mappings to nodes collapsed under parent
    mapcell.on('click', (_,i,n) =>
        d3.select(n[i]).classed('map-to-collapsed', true));
    

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

// /**
//  * Draws a mapping cell(rect) of an alignment for matrix mapping
//  * @param {Object} almt a mapping alignment
//  * @param {number} cellSize width of a mapping cell
//  */
// function mapCellRect(almt, cellSize)
// {
//     console.log(`mapCellRect() for alignmet${almt.id}`);
//     if (almt.isClassMapping) {
//         var rect = d3.create('svg:rect')
//             .classed('mapCell', true)
//             .attr('x', almt.e2pos.y)
//             .attr('y', almt.e1pos.y)
//             .attr('width', cellSize)
//             .attr('height', cellSize);
//         return rect.node();
//     } else {
//         return d3.create('svg:rect').node();
//     }
// }