// global setting variable
let margin = {top: 30, right: 20, bottom: 30, left: 20},
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
    console.log('treechart() called. align:' + align);
    let alignRight = align === "right" ? true : false;
    // const root = tree(data, align);

    //for node position exception
    let x0 = Infinity;
    let x1 = -x0;
    root.each(d => {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
    });

    //Creates a detached g to return
    const g = d3.create("svg:g");
    g.classed('tree', true)
        .attr("font-family", "sans-serif")
        .attr("font-size", '0.9em')
        .attr("transform", `translate(${root.dy / 3},${root.dx - x0})`);
      
    // //Tree Links
    // console.log(root.links());
    // const link = g.append("g")
    //   .attr("fill", "none")
    //   .attr("stroke", "#555")
    //   .attr("stroke-opacity", 0.4)
    //   .attr("stroke-width", 1.5)
    // .selectAll("path")
    //   .data(root.links())
    //   .join("path")
    //     .classed('nodelink', true)
    //     .attr("d", d3.linkHorizontal()  //TODO: Change the node link to edged path
    //         .x(d => d.y)
    //         .y(d => d.x));
    
    //Tree Nodes
    const node = g.append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
      .selectAll("g")
      .data(root.descendants())
      .join("g")
        .classed('node', true)
        .classed('branch', d => d.children ? true : false)
        .classed('leaf', d => d.children ? false : true)
        .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", alignRight ? -8 : 8)
        .attr("text-anchor", alignRight ? "end" : "start")
        .text(d => d.data.name);

    //nodemarks
    // different marks for leaf & non-leaf(branch) nodes
    const pointsStr = trianglePoints(nodemarkSize);
    g.selectAll('.node.branch')
        .append('polygon')
            .classed('nodemark', true)
            .attr('points', pointsStr)
            .attr('transform', alignRight ? 'rotate(180)' : '');
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

    //simplified node link with one vertical line
    g.selectAll('.node.branch')
        .append('line')
            .classed('depth-guide', true)
            .attr('x1', 0)
            .attr('y1', nodeHeight/2)
            .attr('x2', 0)
            .attr('y2', d => {
                console.log(`d: ${d.data.name} chil.len: ${d.children.length}`);
                return nodeHeight * d.children.length;
            });

    // Interactions
    // mouseover effect
    node.on('mouseover', (_, i, n) => {
        g.selectAll('.node').classed('muted', true);
        d3.select(n[i]).classed('muted', false)
            .classed('highlight', true);
    }).on('mouseout', (_, i, n) => {
        d3.select(n[i]).classed('highlight', false);
        g.selectAll('.node').classed('muted', false);
    });

    //branch interaction collapse/expand
    g.selectAll('.node.branch')
        .on('click', (_, i, n) => {
            const sel = d3.select(n[i]); //this selection
            sel.classed('expanded', sel.classed('expanded') ? false : true);
        });

    return g.node();
  }


function tree(data, align) {
    console.log('tree() called.');
    let alignRight = align == "right" ? true : false;

    const root = d3.hierarchy(data);

    //Sets the root position
    root.dx = 10;
    root.dy = 0;
    const treeRoot =  d3.tree().nodeSize([root.dx, root.dy])(root);

    //TODO: flip the x,y later for clarity
    //Sets the node positions
    var index = -1;
    treeRoot.eachBefore(function(n) {
        n.x = ++index * nodeHeight;
        n.y = n.depth * nodeIndent * (alignRight ? -1 : 1);
    });

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