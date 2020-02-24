let dataset = {
    domain: 'conference',
    ont1: edas,
    ont2: ekaw,
    maps: mapping_edas_ekaw
};

var baselineSvg;
var matrixSvg;

let nodeWidth = 200;
let nodeHeight = 26;
let nodeGap = 4;
let indent = 15;
let treeWidth = 300;
let ontGap = 100;

var base_ont1G;
var base_ont2G;
var base_mapG;
var base_ont1_subNodes;
var base_ont2_subNodes;

var matr_ont2_subNodes;
var matr_ont2_subNodes;

window.addEventListener('load', function() {
    console.log("window loaded.");
    $('#dataset-description').html(describeDataset());

    drawBaselineSvg();
    drawMatrixSvg();
    
});

function describeDataset()
{
    var desc = '[Dataset]'
        +'<br>'+ '  domain: ' + dataset.domain
        +'<br>'+ `  onto1: \"${dataset.ont1.baseNS}\" ${dataset.ont1.classCount} classes`
        +'<br>'+ `  onto2: \"${dataset.ont2.baseNS}\" ${dataset.ont2.classCount} classes`
        +'<br>'+ `  maps: ${dataset.maps.alignments.length} alignments`;
    // console.log(desc);
    return desc;
}

function drawBaselineSvg()
{
    // 1. Prep svg
    baselineSvg = d3.select("#baseline-svg");
    let g = baselineSvg.append('g')
        .attr('transform','translate(50,20)');
    base_ont1G = g.append('g')
        .attr('id','ont1G')
        .classed('align-right', true);
    base_ont2G = g.append('g')
        .attr('id','ont2G')
        .attr('transform',`translate(${treeWidth + ontGap},0)`);
    base_mapG = g.append('g')
        .attr('id','mapG');

    // 2. Draws ontology trees
    // drawIndentedTree(base_ont1G, dataset.ont1, true);
    // drawIndentedTree(base_ont2G, dataset.ont2, false);

    //TEMP codes to make subNodes work with mapping!
    var isRightAlign;
    var tree;
    var ontG;
    //2-1) ont1
    // root node
    isRightAlign = true;
    tree = dataset.ont1;
    ontG = base_ont1G;
    //draw root node
    var rootNodeG = ontG.append('g');
    var rootNode = rootNodeG.append('g')
        .datum(tree.root);
    drawNode(rootNode, isRightAlign);
    var subNodeG = rootNodeG.append('g')
        .classed('subNodeG', true)
        .attr('transform', `translate(0, ${nodeHeight+nodeGap})`);
    // level1 sub nodes
    base_ont1_subNodes = subNodeG.selectAll('g')
        .data(tree.root.subClasses).enter().append('g')
        .on('mouseover', handleMouseOver_base)
        .on('mouseout', handleMouseOut);
    drawSubNodes(base_ont1_subNodes, tree.root, isRightAlign);

    //2-2) ont2
    isRightAlign = false;
    tree = dataset.ont2;
    ontG = base_ont2G;
    //draw root node
    rootNodeG = ontG.append('g');
    rootNode = rootNodeG.append('g')
        .datum(tree.root);
    drawNode(rootNode, isRightAlign);
    subNodeG = rootNodeG.append('g')
        .classed('subNodeG', true)
        .attr('transform', `translate(0, ${nodeHeight+nodeGap})`);
    // level1 sub nodes
    base_ont2_subNodes = subNodeG.selectAll('g')
        .data(tree.root.subClasses).enter().append('g')
        .on('mouseover', handleMouseOver_base)
        .on('mouseout', handleMouseOut);
    drawSubNodes(base_ont2_subNodes, tree.root, isRightAlign);


    // 3. Draws mapped line
    // drawBaselineMapping(base_mapG, dataset.maps.alignments, ont1G, ont2G);

    // var testSubNodes = base_ont1G.select('.subNodeG').selectAll('.node');
    // console.log(testSubNodes);
    // var filtered = testSubNodes.filter(d => {
    //     console.log(d.entity1);
    //     return d.entity1 === testName;
    // });
    // var filtered = base_ont1_subNodes.filter(d => {return d.entity1 === testName;} );
    // console.log("filtered: ");
    // console.log(filtered);

    base_mapG.selectAll('line')
        .data(dataset.maps.alignments)
        .enter()
        .append('line')
        // .classed('mapping', true)
        .attr('style', "stroke:rgb(20,165,153);stroke-width:2;")
        .attr('x1', treeWidth + 4)
        .attr('x2', treeWidth + ontGap - 4)
        .attr('y1', (d,i) => {
            var y = 0;
            var fc = base_ont1_subNodes.filter((c,j) => {
                if(c.name === d.entity1) {
                    y = (j+1) * (nodeHeight + nodeGap) + 13;
                    console.log('class1: ',c.name ,' y1: ', y);
                }
                return c.name === d.entity1; 
            });
            return y;
        })
        .attr('y2', (d,i) => {
            var y = 0;
            var fc = base_ont2_subNodes.filter((c,j) => {
                if(c.name === d.entity2) {
                    y = (j+1) * (nodeHeight + nodeGap) + 13;
                    console.log('class2: ',c.name ,' y2: ', y);
                }
                return c.name === d.entity2; 
            });
            return y;
        });
    
}

function drawMatrixSvg()
{
    //1. Preps svg
    matrixSvg = d3.select("#matrix-svg");
    let g = matrixSvg.append('g')
        .attr('transform',`translate(-50, ${treeWidth-50})`);
    let ont1G = g.append('g')
        .attr('id','ont1G')
        .classed('align-right', true);
    let ont2G = g.append('g')
        .attr('id','ont2G')
        .attr('transform',`translate(${treeWidth},0), rotate(-90)`)
        .classed('tilted', true);
    let mapG = g.append('g')
        .attr('transform', `translate(${treeWidth},0)`)
        .attr('id','mapG');

    //2. Draws ontology trees
    // drawIndentedTree(ont1G, dataset.ont1, true);
    // drawIndentedTree(ont2G, dataset.ont2, false);
    //TEMP codes to make subNodes work with mapping!
    var isRightAlign;
    var tree;
    var ontG;
    //2-1) ont1
    // root node
    isRightAlign = true;
    tree = dataset.ont1;
    ontG = ont1G;
    //draw root node
    var rootNodeG = ontG.append('g');
    var rootNode = rootNodeG.append('g')
        .datum(tree.root);
    drawNode(rootNode, isRightAlign);
    var subNodeG = rootNodeG.append('g')
        .classed('subNodeG', true)
        .attr('transform', `translate(0, ${nodeHeight+nodeGap})`);
    // level1 sub nodes
    matr_ont1_subNodes = subNodeG.selectAll('g')
        .data(tree.root.subClasses).enter().append('g')
        .on('mouseover', handleMouseOver_matr)
        .on('mouseout', handleMouseOut);
    drawSubNodes(matr_ont1_subNodes, tree.root, isRightAlign);

    //2-2) ont2
    isRightAlign = false;
    tree = dataset.ont2;
    ontG = ont2G;
    //draw root node
    rootNodeG = ontG.append('g');
    rootNode = rootNodeG.append('g')
        .datum(tree.root);
    drawNode(rootNode, isRightAlign);
    subNodeG = rootNodeG.append('g')
        .classed('subNodeG', true)
        .attr('transform', `translate(0, ${nodeHeight+nodeGap})`);
    // level1 sub nodes
    matr_ont2_subNodes = subNodeG.selectAll('g')
        .data(tree.root.subClasses).enter().append('g')
        .on('mouseover', handleMouseOver_matr)
        .on('mouseout', handleMouseOut);
    drawSubNodes(matr_ont2_subNodes, tree.root, isRightAlign);

    mapG.selectAll('circle')
        .data(dataset.maps.alignments).enter()
        .append('circle')
        .classed('mapping', true)
        .attr('style', "fill:rgb(20,165,153);stroke:none")
        .attr('r', 10)
        .attr('cy', d => { 
            var y = 0;
            var fc = matr_ont1_subNodes.filter((c,j) => {
                if(c.name === d.entity1) {
                    y = (j+1) * (nodeHeight + nodeGap) + 13;
                    console.log('class1: ',c.name ,' y1: ', y);
                }
                return c.name === d.entity1; 
            });
            return y;
        })
        .attr('cx', d => {
            var x = 0;
            var fc = matr_ont2_subNodes.filter((c,j) => {
                if(c.name === d.entity2) {
                    x = (j+1) * (nodeHeight + nodeGap) + 13;
                    console.log('class2: ',c.name ,' x: ', x);
                }
                return c.name === d.entity2; 
            });
            return x;
        });

}

function handleMouseOver_base(d, i) {
    console.log('mouseover on ', d.name);

    d3.selectAll('.node').classed('highlight', false);
    // d3.select(this).classed('highlight', true);
    var name = d.name;
    base_ont1_subNodes.filter(dd => {return dd.name === name;})
        .classed('highlight', true);
    base_ont2_subNodes.filter(dd => {return dd.name === name;})
        .classed('highlight', true);

    if(d.name == null) {
        console.log('d.name == null, on mapping object?');
    }
}
function handleMouseOver_matr(d, i) {
    console.log('mouseover on ', d.name);

    d3.selectAll('.node').classed('highlight', false);
    // d3.select(this).classed('highlight', true);
    var name = d.name;
    matr_ont1_subNodes.filter(dd => {return dd.name === name;})
        .classed('highlight', true);
    matr_ont2_subNodes.filter(dd => {return dd.name === name;})
        .classed('highlight', true);

    if(d.name == null) {
        console.log('d.name == null, on mapping object?');
    }
}
function handleMouseOut(d, i) {
    // d3.selectAll('.node').classed('highlight', false);
    console.log('mouseout. clear \'highlight\' from all nodes.');
}

function drawIndentedTree(ontG, tree, isRightAlign)
{
    console.log(`drawIndentedTree() of '${tree.name}' ontology. ${tree.root.subClasses.length} classes at level 1.`);

    // TODO: draw indented tree in hierarchy
    // root node
    var rootNodeG = ontG.append('g');
    var rootNode = rootNodeG.append('g')
        .datum(tree.root);
    drawNode(rootNode, isRightAlign);
    var subNodeG = rootNodeG.append('g')
        .classed('subNodeG', true)
        .attr('transform', `translate(0, ${nodeHeight+nodeGap})`);

    // level1 sub nodes
    var subNodes = subNodeG.selectAll('g')
        .data(tree.root.subClasses).enter();
    drawSubNodes(subNodes, tree.root, isRightAlign);


}

function drawSubNodes(subNodes, cls, isRightAlign)
{
    var subClasses = cls.subClasses;
    console.log( subClasses.length + " sub classes under " + cls.name );

    if(subClasses.length == 0) { return; }

    // var nodes = g.selectAll('g')
    //     .data(subClasses)
    //     .enter().append('g');
    // var nodes = subNodes.append('g');
    var nodes = subNodes;

    drawNode(nodes, isRightAlign);

}

function drawNode(g, isRightAlign)
{
    g.classed('node', true)
        .attr('transform', (d,i) => { return `translate(${d.depth*indent}, ${i*30})`; });
    g.append('rect')
        .attr('width', nodeWidth);
    if(isRightAlign) {
        g.append('text').text(d => d.name)
            .attr('x', (nodeWidth - 6) + 'px').attr('y', '13px');
        g.attr('transform', (d,i) => {
            return `translate(${treeWidth - nodeWidth - d.depth*indent}, ${i*30})`;
        });
    } else {
        g.append('text').text(d => d.name)
            .attr('x', '6px').attr('y', '13px');
    }
}

function expand(cls, g)
{

}
function collapse(cls, g)
{
    // var subG = g.select(..
    
}


function drawBaselineMapping(g, cells, ont1G, ont2G)
{
    console.log(`drawBaselineMapping()  ${cells.length} alignments`);
    
    g.selectAll('line')
        .data(cells).enter().append('line')
        // .classed('mapping', true)
        .attr('style', "stroke:rgb(20,165,153);stroke-width:2")
        .attr('x1', treeWidth + 4)
        .attr('x2', treeWidth + ontGap - 4)
        .attr('y1', (d,i) => ClassNodeY(d,i,1))
        .attr('y2', (d,i) => ClassNodeY(d,i,2));

    //TODO: find the class node in the tree and get position
    var testName = "Person";
    console.log(`\'${testName}\' x,y: `);
    var fnodes = ont1G.select('subNodeG').selectAll('node')
        .filter(d => { console.log(d.name); return d.name === testName; })
        .classed('highlight', true);
    console.log(fnodes);
}

//TODO: calculate y corresponding to the entity's position
function ClassNodeY(d, i, ontNum)
{
    switch (ontNum) {
        case 1:
            console.log(`${i}. entity1: ${d.entity1}`);
            return i * (nodeHeight+nodeGap);
        case 2:
            console.log(`${i}. entity2: ${d.entity2}`);
            return 400 - i * (nodeHeight+nodeGap);
        default:
            console.log('error in ClassNodeY(), ontNum:'+ontNum);
    }
}