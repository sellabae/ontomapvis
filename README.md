### D2 Data Visualization Lab
# Matrix-based Data Visualization of Ontology Mapping

## Todo2: interactive features
### Improve static visualization parts
#### indented tree (ontology) vis
- [x] node selection helper with a transparent rect
- [x] better readability for matrix header -> tilted node texts
	- [x] tilt the selection-helper rect too
- [ ] Change the node marks
	- [x] triangle
		- [x] left-pointed triangle for right aligned tree?
	- [ ] + and - ??
- [ ] vertical lines under branches for a better view of tree hierarchy
#### mapping vis
- [ ] better organization of baseline mapping lines.
-> s-c-s-c-s (s:straight, c:curved line)
### Interactive features
1. Collapsible tree
[Collapsible Tree / D3 / Observable](https://observablehq.com/@d3/collapsible-tree)
	- [ ] collapsible branch nodes
2. Update mappings for hidden nodes
	- [ ] baseline: dotted line
	- [ ] matrix: dotted pattern?
3. Highlight alignments
	- [ ] baseline: mouseover on line, mapped class
	- [ ] matrix: mouseover on cell, mapped class
4. Freeze the matrix headers
	- [ ] freeze them to be visible even when scrolled out
### Others
- [ ] Order nodes by name
- [ ] Redundant nodes with same class name within a tree
-> should be mapped both if mapping exists.
- [ ] Improve finding a class from d3.tree object to work better.
- [ ] Separate baseline & matrix mapping generating codes from script.js
	- [ ] Calculate svg width/height authmatically
- Get ready for different datasets

---
## Todo1: prototype
Create a prototype of mapping visualization with conference dataset
### Break it down
1. Prep the data
	- [x] Convert .owl and .rdf to .json
	- [x] Use JenaAPI to extract only the classes from ontologies and Save it in simplest json.
2. Visualize an ontology as an indented tree 
	- [x] Show a list of classes from an ontology in .owl file
	- [x] Make the subclasses indented
3. Baseline mapping visualization
	- [x] Visualize two ontologies side by side in mirrored
	- [x] Draw lines for the class mappings from .rdf file
4. Matrix mapping visualization
	- [x] Draw a matrix
	- [x] Visualize two ontologies on the column/row headers
	- [x] Mark cells for the class mappings from .rdf file
