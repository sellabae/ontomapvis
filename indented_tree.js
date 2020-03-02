// global setting variable
const margin = {top: 30, right: 20, bottom: 30, left: 20};
const nodeHeight = 20,
      nodeWidth = 300,
      nodeIndent = 10;
      nodeMarkSize = 4.5;

const pointsStr = trianglePoints(nodeMarkSize);
const diagonal = d3.linkHorizontal().x(d => d.x).y(d => d.y);

function hierarchy(data) {
    console.log('hierarcy() called.');
    //Creates hierarchy from data
    const root = d3.hierarchy(data);
    //Sets the root position
    root.dx = 10;  //??: seems not necessary??
    root.dy = 0;
    root.descendants().forEach((d, i) => {
        d.id = i;   //assign id to all nodes in breadth-first order
        d._children = d.children;
        // if (d.depth && d.data.name.length !== 7) d.children = null; //??: what is this for?
    });
    console.log(root);
    return root;
}

/**
 * Builds and returns d3.tree object
 * by calculating the x,y positions of nodes in the tree.
 * @param {*} root d3.hierarchy root object
 * @param {*} align left or right
 * @return {d3.tree object} d3.tree object
 */
function tree(root, align) {
    console.log('tree() called.');
    let alignRight = (align == "right") ? true : false;

    //Creates tree root to return
    const treeRoot =  d3.tree().nodeSize([root.dx, root.dy])(root);
    //Sets the node positions
    var index = -1;
    treeRoot.eachBefore(function(d) {   //breadth-first pre-order traversal
        d.x = d.depth * nodeIndent * (alignRight ? -1 : 1); //gets indented
        d.y = ++index * nodeHeight;                         //lists down
    });
    console.log(treeRoot);
    return treeRoot;
}

/**
 * Draws an indented tree from d3.hierarchy root
 * and returns a svg:g element.
 * @param {d3.hierarchy object} root d3.hierarchy root
 * @param {string} align left or right
 */
function treechart(root, align) {
    console.log(`treechart(root, align=${align})`);
    let alignRight = align === "right" ? true : false;
    // const root = tree(data, align);

    //TODO: delete this
    // //for node position exception
    // let y0 = Infinity;
    // let y1 = -y0;
    // root.each(d => {
    //   if (d.y > y1) y1 = d.y;
    //   if (d.y < y0) y0 = d.y;
    // });

    //Creates a detached g to return
    const gTree = d3.create("svg:g")
        .classed('tree', true)
        .attr("transform", `translate(0,10)`); //??: why?
    const gLink = gTree.append("g")         //TODO: put the hierarchy guide here
        .classed('gLink', true);
    const gNode = gTree.append("g")
        .classed('gNode', true);

    function update(source) {
        const duration = d3.event && d3.event.altKey ? 1000 : 100;
        const nodes = root.descendants().reverse();  //for the z-order of svg elements
        const links = root.links();

        // Coputes the new tree layout.
        tree(root, align);

        //TODO: auto resize the viewBox
        let lowest = 400;
        //...
        const transition = gTree.transition()
            .duration(duration);
        
        // Updates the nodes...
        const node = gNode.selectAll("g")
            .data(nodes, d => d.id);

        // Enters any new nodes at the parent's previous position.
        const nodeEnter = node.enter().append("g").classed('node', true)
            .attr('id', d => `n${d.id}`)
            .classed('branch expanded', d => d._children ? true : false) //added expanded as initial state
            .classed('leaf', d => d._children ? false : true)
            .attr("transform", d => `translate(${source.x0},${source.y0})`)
            .attr("opacity", 0);
        // Handles events on nodeEnter
        nodeEnter
            .on('mouseover', (_,i,n) => highlightNode(d3.select(n[i]), gNode))
            .on('mouseout', () => unmuteAllNode(gNode))
            .on("click", (d,i,n) => {
                d.children = d.children ? null : d._children;
                //update the expanded nodemark for branch nodes
                //TODO: better place to do this? move somewhere else
                const sel = d3.select(n[i]); //this selection
                if(sel.classed('branch')) {
                    sel.classed('expanded', !sel.classed('expanded'));
                }
                //update recursively
                update(d);
            });
        // Appends nodemark, tedt, and select elper
        nodeEnter.append(d => {
                if(d._children) return d3.create("svg:polygon").attr('points', pointsStr).node();  //branch nodemark
                else            return d3.create("svg:circle").attr('r', 2).node();                //leaf nodemark
            }).classed('nodemark', true);
        nodeEnter.append("text")
            .attr("dy", "0.31em")
            .attr("x", alignRight ? -8 : 8)
            .attr("text-anchor", alignRight ? "end" : "start")
            .text(d => d.data.name);
        nodeEnter.append("rect").classed('node-select-helper', true)
            .attr('fill', 'transparent')
            .attr('width', nodeWidth)
            .attr('height', nodeHeight)
            .attr('x', alignRight ? -nodeWidth+8 : -8)
            .attr('y', -nodeHeight/2)
            .lower();

        // Transition nodes to their new position.
        const nodeUpdate = node.merge(nodeEnter).transition(transition)
            .attr("transform", (d,i,n) => `translate(${d.x},${d.y})`)
            .attr("opacity", 1);
            
        // Transition exiting nodes to the parent's new position.
        const nodeExit = node.exit().transition(transition).remove()
            .attr("transform", d => `translate(${source.x},${source.y})`)
            .attr("opacity", 0);

        // Update the links…
        const link = gLink.selectAll("path")
            .data(links, d => d.target.id);
        // Enter any new links at the parent's previous position.
        const linkEnter = link.enter().append("path")
            .classed('nodelink', true)
            .attr("d", d => {
                const o = {x: source.x0, y: source.y0};
                return diagonal({source: o, target: o});
            });
        // Transition links to their new position.
        link.merge(linkEnter).transition(transition)
            .attr("d", diagonal);
        // Transition exiting nodes to the parent's new position.
        link.exit().transition(transition).remove()
            .attr("d", d => {
                const o = {x: source.x, y: source.y};
                return diagonal({source: o, target: o});
            });

        // //TODO: do this with gLink and links
        // //hierarchy guide with one vertical line per branch
        // const guideGap = nodeHeight/1.6;
        // gNode.selectAll('.branch.node')
        //     .append('line')
        //         .classed('hierarchy-guide', true)
        //         .attr('x1', 0)
        //         .attr('y1', guideGap)
        //         .attr('x2', 0)
        //         .attr('y2', d => nodeHeight * d.descendants().length - guideGap);

        // Stash the old positions for transition.  <- for expand animation
        root.eachBefore(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    update(root);

    return gTree.node(); //returning the html element
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


/**
 * Calculates triangle points
 * @param {number} s radius size
 */
function trianglePoints(s) {
    // d3.create('polygon');
    return `-${s-1},-${s} -${s-1},${s} ${s-1},0 -${s-1},-${s}`;
}