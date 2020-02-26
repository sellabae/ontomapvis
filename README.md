### D2 Data Visualization Lab
# Matrix-based Data Visualization of Ontology Mapping

## Todo2: interactive features
1. Collapsing non-leaf nodes
	- [ ] symbols for the nodes that indicates:
		- Expanded node that has children
		- Collpased node with children
		- Leaf node (with no children)
	- [ ] Collapse/Expand interaction for the indented trees
2. Different visualization for the mappings of hidden nodes  
When hidden nodes have a mapping
	- [ ] Changes mapping lines
	- [ ] Change mapping cell
3. Highlight the mappings
	- [ ] change color of theh text? mute others?
4. Tilt the texts in the matrix header for a better readability

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

## Later Todos
1. Interactive features for better visualization..
2. For different dataset