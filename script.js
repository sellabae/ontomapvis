let dataset = {
    domain: 'conference',
    ont1: edas,
    ont2: ekaw,
    mapping: mapping_edas_ekaw
};

var ont1Classes, ont2Classes, classMaps

var baselineSvg;
var svg2;

window.addEventListener('load', function() {
    console.log("window loaded.");
    $('#dataset-description').html(describeDataset());

    // extract classes from ontologies
    ont1Classes = extractClasses(dataset.ont1).sort(sortByClassName);
    ont2Classes = extractClasses(dataset.ont2).sort(sortByClassName);
    classMaps = dataset.mapping.Cell;

    // prep svg
    baselineSvg = d3.select("#baseline-svg");
    let g = baselineSvg.append('g')
        .attr('transform','translate(50,20)');
    let ont1G = g.append('g')
        .attr('id','ont1G');
    let ont2G = g.append('g')
        .attr('id','ont2G')
        .attr('transform','translate(400,0)');
    let mapG = g.append('g')
        .attr('id','mapG');

    // draw list
    drawIndentedTree(ont1G, ont1Classes);
    drawIndentedTree(ont2G, ont2Classes);
    // draw mapped line
    drawBaselineMapping(mapG, classMaps, ont1G, ont2G);

    
});


function describeDataset()
{
    var desc = '[Dataset]'
        +'<br>'+ '  domain: ' + dataset.domain
        +'<br>'+ `  onto1: \"${dataset.ont1.header.iri}\", classAttribute ${dataset.ont1.classAttribute.length}`
        +'<br>'+ `  onto2: \"${dataset.ont2.header.iri}\", classAttribute ${dataset.ont2.classAttribute.length}`
        +'<br>'+ '  mapping: ' + dataset.mapping.map.length;
    // console.log(desc);
    return desc;
}

function drawIndentedTree(g, classes)
{
    console.log(`drawIndentedTree()  ${classes.length} classes`);

    // TODO: draw indented tree in hierarchy
    // level1 nodes first, and subclasses in a group under them

    g.selectAll('text')
        .data(classes).enter().append('text')
        .classed('align-righht', true)
        .classed('node', true)
        .attr('y', (d,i) => i*20)
        .attr('x', (d) => {
            if (d.hasOwnProperty('superClasses'))
                return 20;
        })
        .text(d => ClassName(d));

}

function drawBaselineMapping(g, maps, ont1G, ont2G)
{
    console.log(`drawBaselineMapping()  ${maps.length} maps`);
    console.log(ont1G);

    g.selectAll('line')
        .data(maps).enter().append('line')
        // .classed('mapping', true)
        .attr('style', "stroke:rgb(20,165,153);stroke-width:2")
        .attr('x1', 300)
        .attr('x2', 390)
        .attr('y1', (d,i) => ClassNodeY(d,i,1))
        .attr('y2', (d,i) => ClassNodeY(d,i,2));

    //TODO: find the class node in the tree and get position
    var testIri = "http://ekaw#Document";
    console.log(`x,y of \'${testIri}\': `);
    var x = ont2G.selectAll('text')
        .filter(d => { return d.iri === testIri });
    console.log(x);
}

//TODO: calculate y corresponding to the entity's position
function ClassNodeY(d, i, ontNum)
{
    switch (ontNum) {
        case 1:
            console.log(`${i}. entity1: ${d.entity1[0]['@id']}`);
            return i*20;
        case 2:
            console.log(`${i}. entity2: ${d.entity2[0]['@id']}`);
            return 400-i*20;
        default:
            console.log('error in ClassNodeY(), ontNum:'+ontNum);
    }
}

function ClassName(d)
{
    if (d.iri.startsWith(d.baseIri)) {
        var className = d.iri.substring(d.baseIri.length+1, d.iri.length);
        // console.log(className);
        return className;
    } else {
        console.log('some weird name in ' + d.iri)
        return d.iri;
    }
}

function extractClasses(ont)
{
    var ontIri = ont.header.iri;
    var classes = ont.classAttribute.filter(function(d) {
        if(d.baseIri == ontIri) {
            return d;
        }
    });
    console.log(`extracted ${classes.length} classes out of ${ont.classAttribute.length} classAttributes from \'${ontIri}\'.`);
    console.log(classes);
    return classes;
}

function sortByClassName(a, b)
{
    return a.iri.localeCompare(b.iri);  //string comparison
}