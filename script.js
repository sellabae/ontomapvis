const dataset = {
    domain: 'conference',
    ont1: edas,
    ont2: ekaw,
    maps: mapping_edas_ekaw
};

const treeWidth = 300;
const ontGap = 200;

const ont1TreeRoot = tree(dataset.ont1.root, 'right');
const ont2TreeRoot = tree(dataset.ont2.root, 'left');
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
    console.log('reassigning positions of mapped classes to alignments');
    dataset.maps.alignments.forEach((almt,i) => {
        almt.id = i;
        //filter match
        //TODO: better give tree node object to the almt.e1 directly??
        var e1match = ont1TreeRoot.descendants().filter(d => d.data.name === almt.entity1);
        var e2match = ont2TreeRoot.descendants().filter(d => d.data.name === almt.entity2);

        //mark only if the alignment is a mapping of class, not property
        almt.isClassMapping = (e1match.length && e2match.length) ? true : false;
        
        //assign number of matches to each ontology
        if (almt.isClassMapping) {
            almt.e1match = e1match.length;
            almt.e2match = e2match.length;
            if (almt.e1match > 1) {
                console.log(`${i}. multiple match e1:${almt.entity1} match:${almt.e1match}`);
            }
            if (almt.e2match > 1) {
                console.log(`${i}. multiple match e2:${almt.entity2} match:${almt.e2match}`);
            }
        }

        //assign position
        //TODO: handle multiple match when needed
        var e1 = e1match[0];
        var e2 = e2match[0];
        if (almt.isClassMapping) {
            console.log(`${i}. e1:${e1.data.name} x${e1.y} y${e1.x}\t e2:${e2.data.name} x${e2.y} y${e2.x}`);
            almt.e1pos = {x: e1.x, y: e1.y};
            almt.e2pos = {x: e2.x, y: e2.y};
        }
    });
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
        .classed('right-aligned-tree', true)
        .attr('transform',`translate(${-ontGap/2},0)`);
    const base_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','base_ont2G')
        .attr('transform',`translate(${ontGap/2},0)`);
    
    console.log('draw baseline mapping');
    const base_mapG = g.append('g')
        // .lower()
        .attr('id','base_mapG')
        .attr('transform',`translate(${-ontGap/2},0)`); //to center
    // base_mapG.selectAll('path')
    //     .data(dataset.maps.alignments)
    //     .join('path')
    //         .attr('d', (d,i) => mapLinePath(d,i))
    //         .attr("stroke", "white")    //for path background
    //         .attr('stroke-width', '4px')
    //         .attr('fill', 'none')
    //         .clone(true)                //actual path
    //             .classed('mapping', true)
    //             .classed('mapLine', true);
    base_mapG.selectAll('g')
        .data(dataset.maps.alignments)
        .join('g')
        .classed('mapping', true)
        .classed('mapLine', true)
        .on('mouseover', (d, i, n) => {
            d3.select(n[i]).classed('highlight', true).raise();

            //TODO: Why is it drawing on 0,0???
            // console.log(`mouseover alignment. e1pos:${d.e1pos.x},${d.e1pos.y} e2pos:${d.e2pos.x},${d.e2pos.y}`);
            if( ! d3.select(n[i]).select('.mapLine-endpoint') ) {
                d3.select(n[i])
                .append('circle').attr('r', 8)
                    .classed('mapLine-endpoint', true)
                    .attr('x', d.e1pos.x).attr('y', d.e1pos.y)
                .clone(true)
                    .attr('x', ontGap + d.e2pos.x).attr('y', d.e2pos.y);
            }
        })
        .on('mouseout', (_, i, n) => {
            d3.select(n[i]).classed('highlight', false)
                .selectAll('.mapLine-endpoint').remove();
        })
            .append('path')          //foreground path
                .attr('d', (d,i) => mapLinePath(d,i))
                .attr('class', 'mapLine-fg')
            .clone(true).lower() //background path
                .attr('class', 'mapLine-bg')
            .clone(true).lower() //path select helper
                .attr('class', 'mapLine-select-helper');
}

/**
 * Calculates the svg:path for a baseline mapping line
 * @param {Object} almt an alignment mapping
 * @param {number} i the index of the alignment
 */
function mapLinePath(almt, i)
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

function mapLinePath_old(almt, i)
{
    if (!almt.isClassMapping) {
        return ``;
    }
    const x1 = almt.e1pos.x,
          y1 = almt.e1pos.y,
          x2 = almt.e2pos.x + ontGap,
          y2 = almt.e2pos.y;
    const q = Math.abs(y2 - y1)/2;
    const qx = ( (ontGap-20) / dataset.maps.alignments.length * i ).toFixed(0);
    const qy = y2 > y1 ? y2-q : y2+q;
    return `M ${x1} ${y1} Q ${qx} ${y1} ${qx} ${qy} T ${x2} ${y2}`;
}

function drawMatrixSvg()
{
    console.log("drawMatrixSvg()");
    
    const svg = d3.select("#matrix-svg")
        .attr('height', 2300)
        .attr('width', 1950);

    let g = svg.append('g')
        .attr('transform',`translate(${treeWidth+10},${treeWidth-70})`);
    hGap = nodeHeight/2; //gap between headers and matrix
    var matrix_ont1G = g.append(() => treechart(ont1TreeRoot, "right"))
        .attr('id','matrix_ont1G')
        .classed('right-aligned-tree', true)
        .attr('transform',`translate(${-hGap},${hGap})`);
    var matrix_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','matrix_ont2G')
        .attr('transform',`translate(${hGap},${-hGap}), rotate(270)`)
        .classed('tilted', true);
    
    //draw matrix background table rows and columns
    const row = ont1TreeRoot.descendants().length;
    const col = ont2TreeRoot.descendants().length;
    const cellSize = nodeHeight;
    // g.append(() => drawTableLines(row, col, cellSize, false))
    //     .lower()
    //     .classed('map-bg-table', true)
    //     .attr('transform',`translate(${treeWidth},${treeWidth-50})`);
    var tbG = g.append('g').lower()
        .classed('tbG', true);
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
    var matrix_mapG = g.append('g').attr('id','matrix_mapG');

    // var mapCell = matrix_mapG.selectAll('rect')
    //     .data(dataset.maps.alignments)
    //     .enter()
    //     .append(d => mapCellRect(d));
    //TODO: Why the above doesn't work? below is temporary solution to draw mapping cells
    dataset.maps.alignments.forEach( almt => {
        if (almt.isClassMapping) {
            const x = almt.e2pos.y;
            const y = almt.e1pos.y;
            const cellSize = nodeHeight;
            matrix_mapG.append('rect')
                .classed('mapping', true)
                .classed('mapCell', true)
                .attr('x', x)
                .attr('y', y)
                .attr('width', cellSize)
                .attr('height', cellSize);
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
function mapCellRect(almt)
{
    console.log(`mapCellRect() for alignmet${almt.id}`);
    if (almt.isClassMapping) {
        const x = almt.e2pos.y;
        const y = almt.e1pos.y;
        const cellSize = nodeHeight;
        var rect = d3.create('svg:rect')
            .classed('mapCell', true)
            .attr('x', x)
            .attr('y', y)
            .attr('width', cellSize)
            .attr('height', cellSize);
        return rect.node();
    } else {
        return d3.create('svg:rect').node();
    }
}