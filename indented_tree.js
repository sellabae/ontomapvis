//Global variable setting
var margin = {top: 30, right: 20, bottom: 30, left: 20},
    nodeHeight = 18,
    nodeWidth = 250,
    nodeIndent = 10;

//root: d3.tree object, align: left or righth
treechart = (root, align) => {
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
        .classed('leaf', d => d.children ? false : true)
        .attr("transform", d => `translate(${d.y},${d.x})`);
  
    node.append("circle")
        .attr("fill", d => d.children ? "#555" : "#999")
        .attr("r", 3);
  
    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", alignRight ? -6 : 6)
        .attr("text-anchor", alignRight ? "end" : "start")
        .text(d => d.data.name);
    //   .clone(true).lower()
    //     .attr("stroke", "white");

    //mouseover effect
    // node.append("rect").lower()
    //     .attr('width', nodeWidth)
    //     .attr('x', alignRight ? -nodeWidth : 0);
    // node.on('mouseover', d => {
    //     this.classed('highlight', true);
    // });

    
    return g.node();
  }


function tree(data, align) {
    console.log('tree() called.');
    let alignRight = align == "right" ? true : false;

    const root = d3.hierarchy(data);

    //Sets the root position
    root.dx = 10;
    root.dy = 0;
    const treeRoot =  d3.tree().nodeSize([root.dx, root.dy])(root)

    //TODO: flip the x,y later for clarity
    //Sets the node positions
    var index = -1;
    treeRoot.eachBefore(function(n) {
        n.x = ++index * nodeHeight;
        n.y = n.depth * nodeIndent * (alignRight ? -1 : 1);
    });

    return treeRoot;
}