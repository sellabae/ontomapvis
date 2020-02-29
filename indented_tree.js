// global setting variable
const margin = {top: 30, right: 20, bottom: 30, left: 20},
      nodeHeight = 20,
      nodeWidth = 300,
      nodeIndent = 10;
      nodemarkSize = 4.5;

/**
 * Draws an indented tree from d3.tree root
 * and returns a svg:g element.
 * @param {d3.tree object} root 
 * @param {string} align left or right
 */
function treechart(root, align) {
    console.log(`treechart(root, align=${align})`);
    let alignRight = align === "right" ? true : false;
    // const root = tree(data, align);

    //for node position exception
    let y0 = Infinity;
    let y1 = -y0;
    root.each(d => {
      if (d.y > y1) y1 = d.y;
      if (d.y < y0) y0 = d.y;
    });

    //Creates a detached g to return
    const g = d3.create("svg:g");
    g.classed('tree', true)
        .attr("transform", `translate(${root.dy / 3},${root.dx - y0})`);
    console.log(`?? translate(${root.dy / 3},${root.dx - y0})`);
      
    //Tree Nodes
    const node = g.selectAll("g")
      .data(root.descendants())
      .join("g")
        .attr('id', d => `n${d.id}`)
        .classed('node', true)
        .classed('branch', d => d.children ? true : false)
        .classed('leaf', d => d.children ? false : true)
        .attr("transform", d => `translate(${d.x},${d.y})`);
    
    //initial setting for fully expanded view
    g.selectAll('.branch').classed('expanded', true);

    //node text
    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", alignRight ? -8 : 8)
        .attr("text-anchor", alignRight ? "end" : "start")
        .text(d => d.data.name);

    //nodemark
    // different marks for leaf & non-leaf(branch) nodes
    const pointsStr = trianglePoints(nodemarkSize);
    g.selectAll('.node.branch')
        .append('polygon')
            .classed('nodemark', true)
            .attr('points', pointsStr);
    g.selectAll('.node.leaf')
        .append("circle")
            .classed('nodemark', true)
            .attr("r", 2);

    //selection helper with transparent rect
    node.append("rect").lower()
        .classed('selection-helper', true)
        .attr('width', nodeWidth)
        .attr('height', nodeHeight)
        .attr('x', alignRight ? -nodeWidth+8 : -8)
        .attr('y', -nodeHeight/2);

    //hierarchy guide with one vertical line per branch
    const guideGap = nodeHeight/1.6;
    g.selectAll('.node.branch')
        .append('line')
            .classed('hierarchy-guide', true)
            .attr('x1', 0)
            .attr('y1', guideGap)
            .attr('x2', 0)
            .attr('y2', d => nodeHeight * d.descendants().length - guideGap);

    // Interactions
    // mouseover effect
    node.on('mouseover', (_,i,n) => highlightNode(d3.select(n[i]), g))
        .on('mouseout', () => unmuteAllNode(g));

    //branch interaction collapse/expand
    g.selectAll('.node.branch')
        .on('click', (_, i, n) => {
            // console.log(n[i]); //the current DOM element
            const sel = d3.select(n[i]); //this selection
            sel.classed('expanded', 
                sel.classed('expanded') ? false : true
            );
        });

    return g.node();
}

/**
 * Highlight a node and mute the others
 * @param {*} thisNode the node to highlight
 * @param {*} gTree the tree 'svg:g' where the node belong
 */
function highlightNode(thisNode, gTree) {
    gTree.selectAll('.node').classed('muted', true);
    thisNode.classed('muted', false)
        .classed('highlight', true);
    //TODO: highlight the parent's guide line not its own guide.
}
function unmuteAllNode(gTree) {
    gTree.selectAll('.node')
        .classed('highlight', false)
        .classed('muted', false);
}
  

function tree(data, align) {
    // console.log('tree() called.');
    let alignRight = (align == "right") ? true : false;

    const root = d3.hierarchy(data);

    //Sets the root position
    root.dx = 10;  //TODO: seems not necessary??
    root.dy = 0;
    root.descendants().forEach((d, i) => {
        d.id = i;   //assign id to all nodes
    });
    const treeRoot =  d3.tree().nodeSize([root.dx, root.dy])(root);

    //Sets the node positions
    var index = -1;
    treeRoot.eachBefore(function(n) {   //breadth-first pre-order traversal
        n.y = ++index * nodeHeight;
        n.x = n.depth * nodeIndent * (alignRight ? -1 : 1);
    });
    console.log(treeRoot);
    return treeRoot;
}

/**
 * Calculates triangle points
 * @param {number} s radius size
 */
function trianglePoints(s) {
    // d3.create('polygon');
    return `-${s-1},-${s} -${s-1},${s} ${s-1},0 -${s-1},-${s}`;
}