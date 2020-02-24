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
    // //auto adjust the height
    // let newHeight = nodeHeight * Math.max(ont1TreeRoot.count(), ont2TreeRoot.count());
    // svg.attr('height', newHeight);

    let g = svg.append('g')
        .attr('transform',`translate(${svgWidth/2},20)`);
    var base_ont1G = g.append(() => treechart(ont1TreeRoot, "right"))
        .attr('id','base_ont1G')
        .attr('transform',`translate(${-ontGap/2},0)`);
    var base_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','base_ont2G')
        .attr('transform',`translate(${ontGap/2},0)`);
    
    console.log('draw baseline mapping');
    var base_mapG = g.append('g').lower()
        .attr('id','base_mapG')
        .attr('transform',`translate(${-ontGap/2},0)`);
    const mapLine = base_mapG.selectAll('path')
        .data(dataset.maps.alignments)
        .join('path')
            .classed('mapping', true)
            .attr('stroke', 'rgb(20, 165, 153)')
            .attr('stroke-width', '2px')
            .attr('fill', 'none')
            .attr('d', (d,i) => mapLinePath(d,i));

}

function mapLinePath(a, i)
{
    var e1 = ont1TreeRoot.descendants().filter(d => d.data.name === a.entity1)[0];
    var e2 = ont2TreeRoot.descendants().filter(d => d.data.name === a.entity2)[0];

    if (e1 != undefined && e2 != undefined) {
        // console.log(`${i}. e1:${e1.data.name} x:${e1.x} y:${e1.y}   e2:${e2.data.name} x:${e2.x} y:${e2.y}`);
        const x1 = e1.y, y1 = e1.x;
        const x2 = e2.y + ontGap, y2 = e2.x;
        const q = Math.abs(y2 - y1)/2;
        const qx = (ontGap-20) / dataset.maps.alignments.length * i;
        const qy = y2 > y1 ? y2-q : y2+q;
        return `M ${x1} ${y1} Q ${qx.toFixed(0)} ${y1} ${qx.toFixed(0)} ${qy} T ${x2} ${y2}`;
    } else {
        // console.log(`${i}. undefined for (${a.entity1}, ${a.entity1})`);
        return ``;
    }
}

function drawMatrixSvg()
{
    console.log("drawMatrixSvg()");
    
    const svg = d3.select("#matrix-svg")
        .attr('height', 2150)
        .attr('width', 1750);

    let g = svg.append('g')
        .attr('transform','translate(10,10)');
    hVal = nodeHeight/2; //for header position adjustmant
    var matrix_ont1G = g.append(() => treechart(ont1TreeRoot, "right"))
        .attr('id','matrix_ont1G')
        .attr('transform',`translate(${treeWidth-hVal},${treeWidth-50+hVal})`);
    var matrix_ont2G = g.append(() => treechart(ont2TreeRoot, "left"))
        .attr('id','matrix_ont2G')
        .attr('transform',`translate(${treeWidth+hVal},${treeWidth-50-hVal}), rotate(270)`);
    
    //draw matrix background table rows and columns
    var mapBgG = g.append('g').lower()
        .classed('map-bg-table', true)
        .attr('transform',`translate(${treeWidth},${treeWidth-50})`)
    let ont1len = ont1TreeRoot.descendants().length;
    let ont2len = ont2TreeRoot.descendants().length;
    // mapBgG.append('rect')
    //     .attr('height', ont1len * nodeHeight)
    //     .attr('width', ont2len * nodeHeight)
    //     .style('fill', '#EEE');
    var tbRow = mapBgG.append('g').classed('row', true);
    var tbCol = mapBgG.append('g').classed('col', true);
    for (let i=0; i<ont1len+1; i++) {
        tbRow.append('line')
            .attr('x1', 0).attr('y1', i * nodeHeight)
            .attr('x2', ont2len * nodeHeight).attr('y2', i * nodeHeight)
            .style('stroke', '#CCC').style('stroke-width', '1px');
    }
    for (let i=0; i<ont2len+1; i++) {
        tbCol.append('line')
            .attr('x1', i * nodeHeight).attr('y1', 0)
            .attr('x2', i * nodeHeight).attr('y2', ont1len * nodeHeight)
            .style('stroke', '#CCC').style('stroke-width', '1px');
    }

    console.log('draw matrix mapping');
    //draw mapping cells
    var matrix_mapG = g.append('g')
        .attr('id','matrix_mapG');
    // .attr('transform',`translate(${treeWidth},${treeWidth-50})`);

    // var mapCell = matrix_mapG.selectAll('rect')
    //     .data(dataset.maps.alignments)
    //     .enter()
    //     .append((d,i) => mapCellRect(d,i));

    //TODO: this is temporary to check drawing cells
    var mapCell = matrix_mapG.selectAll('rect')
        .append('rect')
        .attr('id', 'test-cell')
        .attr('x', 400)
        .attr('y', 400)
        .attr('width', nodeHeight)
        .attr('height', nodeHeight)
        .style('color', 'red');
    dataset.maps.alignments.forEach((a,i) => {
        var e1 = ont1TreeRoot.descendants().filter(d => d.data.name === a.entity1)[0];
        var e2 = ont2TreeRoot.descendants().filter(d => d.data.name === a.entity2)[0];
        if (e1 != undefined && e2 != undefined) {
            console.log(`${i}. e1:${e1.data.name} x${e1.x} y${e1.y}\t e2:${e2.data.name} x${e2.x} y${e2.y}`);
            const x = e2.x;
            const y = e1.x;
            mapCell.append('rect')
                // .classed('mapping', true)
                .attr('x', x)
                .attr('y', y)
                .attr('width', nodeHeight)
                .attr('height', nodeHeighht)
                .style('color', 'red');
        } else {
            console.log(`${i}. undefined for (${a.entity1}, ${a.entity1})`);
        }
    });
}

function mapCellRect(a,i)
{
    console.log('mapCellRect() called');
    //TODO: update to handle more than one filtered results (there can be repetition)
    var e1 = ont1TreeRoot.descendants().filter(d => d.data.name === a.entity1)[0];
    var e2 = ont2TreeRoot.descendants().filter(d => d.data.name === a.entity2)[0];

    if (e1 != undefined && e2 != undefined) {
        console.log(`${i}. e1:${e1.data.name} x${e1.x} y${e1.y}\t e2:${e2.data.name} x${e2.x} y${e2.y}`);
        const x = e2.x;
        const y = e1.x;
        const cellSize = nodeHeight;
        var rect = d3.create('rect')
            .classed('mapping', true)
            .attr('x', x).attr('y', y)
            .attr('width', cellSize).attr('height', cellSize)
            .style('fill', 'red');
        return rect.node();
    } else {
        console.log(`${i}. undefined for (${a.entity1}, ${a.entity1})`);
        return d3.create('rect').node();
    }
}