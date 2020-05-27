var tasks = {
  conference: [
    {
      "qtype": "reading",
      "question": "How many mappings are there in the visualization in total?",
      "atype": "number",
      "answer": "12"
    },
    {
      "qtype": "reading",
      "question": "How many classes is \"SessionChair\" in Ontology A mapped to?",
      "atype": "number",
      "answer": "2"
    },
    {
      "qtype": "reading",
      "question": "What is \"AcademicEvent\" in Ontology A mapped to in Ontology B?",
      "atype": "class",
      "answer": "Scientific_Event"
    },
    {
      "qtype": "reading",
      "question": "Does this mapping from \"AcademiaOrganization\" (in Ontology A) to \"Academic_Institution\" (in Ontology B) exists in the visualization?",
      "atype": "y/n",
      "answer": "No"
    },
    {
      "qtype": "validation",
      "question": "Is \"Attendee\" in Ontology A correctly mapped?",
      "atype": "y/n",
      "answer": "No"
    },
    {
      "qtype": "validation",
      "question": "Do you think the mapping between \"AcademicEvent\" and \"Scientific_Event\" presented in the visualization is correct?",
      "atype": "y/n",
      "answer": "Yes"
    },
    {
      "qtype": "creation",
      "question": "Author in Ontology A is mapped to an incorrect pair. Which class in Ontology B should it be mapped to instead?",
      "atype": "class",
      "answer": "Paper_Author"
    },
    {
      "qtype": "creation",
      "question": "ConferenceDinner in Ontology A has no mapping shown in the visualization. Can it be mapped to another class in Ontology B?",
      "atype": "y/n",
      "answer": "Yes"
    },
    {
      "qtype": "creation",
      "question": "ConferenceDinner in Ontology A actually has a mapping pair but not shown. Which class in Ontology B should it be mapped to?",
      "atype": "class",
      "answer": "Conference_Banquet"
    }
  ],
  anatomy: [
    {
      "qtype": "reading",
      "question": "How many mappings are there in the visualization in total?",
      "atype": "number",
      "answer": "12"
    },
    {
      "qtype": "reading",
      "question": "How many classes is \"Bone\" in Ontology A mapped to?",
      "atype": "number",
      "answer": "0"
    },
    {
      "qtype": "reading",
      "question": "What is \"Cartilage\" in Ontology A mapped to in Ontology B?",
      "atype": "class",
      "answer": "cartilage"
    },
    {
      "qtype": "reading",
      "question": "Does this mapping from \"Leg\" (in Ontology A) to \"leg\" (in Ontology B) exists in the visualization?",
      "atype": "y/n",
      "answer": "No"
    },
    {
      "qtype": "validation",
      "question": "Is \"Mucus\" in Ontology A correctly mapped?",
      "atype": "y/n",
      "answer": "No"
    },
    {
      "qtype": "validation",
      "question": "Do you think the mapping between \"Body_Fluid_or_Substance\" and \"body fluid/substance\" presented in the visualization is correct?",
      "atype": "y/n",
      "answer": "Yes"
    },
    {
      "qtype": "creation",
      "question": "Skull in Ontology A is mapped to an incorrect pair. Which class in Ontology B should it be mapped to instead?",
      "atype": "class",
      "answer": "cranium"
    },
    {
      "qtype": "creation",
      "question": "Viscera in Ontology A has no mapping shown in the visualization. Can it be mapped to another class in Ontology B?",
      "atype": "y/n",
      "answer": "Yes"
    },
    {
      "qtype": "creation",
      "question": "Viscera in Ontology A actually has a mapping pair but not shown. Which class in Ontology B should it be mapped to?",
      "atype": "class",
      "answer": "visceral organ system"
    }
  ]
};