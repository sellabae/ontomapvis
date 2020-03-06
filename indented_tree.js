// global setting variable
const margin = {top: 30, right: 20, bottom: 30, left: 20};
const nodeHeight = 20,
      nodeWidth = 300,
      nodeIndent = 10;
      nodeMarkSize = 4.5;

const triangle = trianglePoints(nodeMarkSize);
const verticalLink = d => `M ${d.source.x},${d.source.y} V ${d.target.y}`;


function hierarchy(data) {
    console.log('hierarcy() called.');
    //Creates hierarchy from data
    const root = d3.hierarchy(data);
    //Sets the root position
    root.dx = 10;  //??: seems not necessary??
    root.dy = 0;
    root.descendants().forEach((d, i) => {
        d.id = i;   //assign id to all nodes in breadth-first order
        //TODO: Organize the below in the way it's practically used.
        d.isBranch = d.children ? true : false;
        if(d.isBranch) d.collapsed = false; //assign the property 'd.collapsed' only to branch nodes
        d.hidden = false;

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
    console.log(`Computes tree layout. tree(root='${root.data.name}' align='${align}')`);
    let alignRight = (align == "right") ? true : false;

    //Creates tree root to return
    const treeRoot =  d3.tree().nodeSize([root.dx, root.dy])(root);
    //Sets the node positions
    var index = -1;
    treeRoot.eachBefore(function(d) {   //breadth-first pre-order traversal
        d.x = d.depth * nodeIndent * (alignRight ? -1 : 1); //gets indented
        d.y = ++index * nodeHeight;                         //lists down
    });
    // console.log(treeRoot);
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
        .classed('gLink', true)
        .attr('transform', `translate(0,${nodeHeight/2.5})`);
    const gNode = gTree.append("g")
        .classed('gNode', true);

    function update(source) {
        const duration = d3.event && d3.event.altKey ? 1000 : 100;
        const nodes = root.descendants().reverse();  //for the z-order of svg elements
        const links = linksToLastChild(root);

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
            .attr("opacity", 0)
            .on("click", (d,i,n) => {
                //for branc node, d.children: shown children, d._children: owned children.
                //for leaf node, d.children:undefined, d._children: undefined
                //gives null if d was the expanded branch to stop drawing,
                //or restores from _children if d was collapsed branch.
                d.children = d.children ? null : d._children;   
                if(d.children == null) {
                    d.collapsed = true;
                    //TODO: give hidden mark to its descendants -> the code below is not valid
                    //since collapsible tree works with _children not children to hold actual subnodes.
                    // d.descendants().forEach(d => {d.hidden = true;});
                    // d.hidden = false; //exclude self!
                    // console.log(`${d.data.name}'s descendants gets hidden=true`);
                    // console.log(d.descendants());
                }
                if(d._children) { //only for branch nodes with children
                    //update the expanded nodemark for branch nodes
                    //TODO: better place to do this? move somewhere else
                    const sel = d3.select(n[i]); //this selection
                    if(sel.classed('branch')) {
                        sel.classed('expanded', !sel.classed('expanded'));
                    }
                    //update recursively
                    update(d);
                }
            });
        // Appends nodemark, tedt, and select elper
        nodeEnter.append(d => {
                if(d._children) return d3.create("svg:polygon").attr('points', triangle).node();  //branch nodemark
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

        // Update the deapth guide lines…
        const link = gLink.selectAll("path")
            .data(links, d => d.target.id);
        // Enter any new links at the parent's previous position.
        const linkEnter = link.enter().append("path")
            .classed('nodelink', true)
            .attr("d", d => {
                const o = {x: source.x0, y: source.y0};
                return verticalLink({source: o, target: o});
            });
        // Transition links to their new position.
        link.merge(linkEnter).transition(transition)
            .attr("d", verticalLink);
        // Transition exiting nodes to the parent's new position.
        link.exit().transition(transition).remove()
            .attr("d", d => {
                const o = {x: source.x, y: source.y};
                return verticalLink({source: o, target: o});
            });

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
 * Generates a list of links that connects a parent to the last child of its last child.
 * from the hierarchy root.
 * This is to simplify the node link lines.
 * @param {*} root 
 */
function linksToLastChild (root) {
    const list = [];
    for (var node of root.descendants()) {
        if (node.children) {    //branch node with children
            list.push({source: node, target: getLastChild(node)});
        }
    }
    return list;

    // Recursively find the last of the last child
    function getLastChild (node) {
        if (node.children) {
            return getLastChild(node.children[node.children.length - 1]);
        } else {
            return node;
        }
    }
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


/**
 * Calculates triangle points
 * @param {number} s radius size
 */
function trianglePoints(s) {
    // d3.create('polygon');
    return `-${s-1},-${s} -${s-1},${s} ${s-1},0 -${s-1},-${s}`;
}