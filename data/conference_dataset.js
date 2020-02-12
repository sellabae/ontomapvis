var edas;
var ekaw;
var mapping_edas_ekaw;

//////////////////////////////////////////////
//    Ontology1
//////////////////////////////////////////////

edas = {
    "_comment" : "Created with OWL2VOWL (version 0.3.7), http://vowl.visualdataweb.org",
    "header" : {
      "languages" : [ "undefined" ],
      "baseIris" : [ "http://www.w3.org/2000/01/rdf-schema", "http://www.w3.org/2001/XMLSchema", "http://edas" ],
      "prefixList" : {
        "owl" : "http://www.w3.org/2002/07/owl#",
        "rdf" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "p1" : "http://www.owl-ontologies.com/assert.owl#",
        "xsd" : "http://www.w3.org/2001/XMLSchema#",
        "" : "http://edas#",
        "xml" : "http://www.w3.org/XML/1998/namespace",
        "rdfs" : "http://www.w3.org/2000/01/rdf-schema#"
      },
      "iri" : "http://edas",
      "version" : "1.5",
      "comments" : {
        "undefined" : "EDAS Conference Menagement Ontology (for 4iz440)"
      },
      "other" : {
        "versionInfo" : [ {
          "identifier" : "versionInfo",
          "language" : "undefined",
          "value" : "1.5",
          "type" : "label"
        } ]
      }
    },
    "namespace" : [ ],
    "class" : [
      {
        "id" : "1",
        "type" : "owl:intersectionOf"
      }, {
        "id" : "22",
        "type" : "owl:Class"
      }, {
        "id" : "54",
        "type" : "owl:unionOf"
      }, {
        "id" : "15",
        "type" : "owl:Class"
      }, {
        "id" : "120",
        "type" : "owl:Class"
      }, {
        "id" : "122",
        "type" : "owl:Class"
      }, {
        "id" : "82",
        "type" : "owl:Class"
      }, {
        "id" : "94",
        "type" : "owl:Class"
      }, {
        "id" : "127",
        "type" : "owl:Class"
      }, {
        "id" : "156",
        "type" : "owl:Class"
      }, {
        "id" : "175",
        "type" : "owl:Class"
      }, {
        "id" : "177",
        "type" : "owl:Class"
      }, {
        "id" : "159",
        "type" : "owl:Class"
      }, {
        "id" : "171",
        "type" : "owl:Class"
      }, {
        "id" : "180",
        "type" : "owl:Class"
      }, {
        "id" : "191",
        "type" : "owl:Class"
      }, {
        "id" : "221",
        "type" : "owl:Class"
      }, {
        "id" : "223",
        "type" : "owl:Class"
      }, {
        "id" : "84",
        "type" : "owl:Class"
      }, {
        "id" : "224",
        "type" : "owl:Class"
      }, {
        "id" : "37",
        "type" : "owl:Class"
      }, {
        "id" : "87",
        "type" : "owl:Class"
      }, {
        "id" : "11",
        "type" : "owl:Class"
      }, {
        "id" : "235",
        "type" : "owl:Class"
      }, {
        "id" : "324",
        "type" : "owl:Class"
      }, {
        "id" : "303",
        "type" : "owl:Class"
      }, {
        "id" : "62",
        "type" : "owl:Class"
      }, {
        "id" : "121",
        "type" : "owl:Class"
      }, {
        "id" : "85",
        "type" : "owl:Class"
      }, {
        "id" : "60",
        "type" : "owl:Class"
      }, {
        "id" : "6",
        "type" : "owl:Class"
      }, {
        "id" : "56",
        "type" : "owl:Class"
      }, {
        "id" : "55",
        "type" : "owl:Class"
      }, {
        "id" : "27",
        "type" : "owl:Class"
      }, {
        "id" : "45",
        "type" : "owl:Class"
      }, {
        "id" : "439",
        "type" : "owl:Class"
      }, {
        "id" : "34",
        "type" : "owl:Class"
      }, {
        "id" : "345",
        "type" : "owl:Class"
      }, {
        "id" : "458",
        "type" : "owl:intersectionOf"
      }, {
        "id" : "20",
        "type" : "owl:Class"
      }, {
        "id" : "92",
        "type" : "owl:Class"
      }, {
        "id" : "448",
        "type" : "owl:Class"
      }, {
        "id" : "138",
        "type" : "owl:Class"
      }, {
        "id" : "53",
        "type" : "owl:Class"
      }, {
        "id" : "482",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "275",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "274",
        "type" : "owl:unionOf"
      }, {
        "id" : "489",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "183",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "492",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "512",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "413",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "517",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "398",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "503",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "160",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "320",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "525",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "527",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "529",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "336",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "534",
        "type" : "owl:intersectionOf"
      }, {
        "id" : "543",
        "type" : "owl:unionOf"
      }, {
        "id" : "375",
        "type" : "owl:unionOf"
      }, {
        "id" : "134",
        "type" : "owl:Class"
      }, {
        "id" : "546",
        "type" : "owl:unionOf"
      }, {
        "id" : "548",
        "type" : "owl:unionOf"
      }, {
        "id" : "415",
        "type" : "owl:unionOf"
      }, {
        "id" : "550",
        "type" : "owl:unionOf"
      }, {
        "id" : "506",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "553",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "443",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "63",
        "type" : "rdfs:Datatype"
      }, {
        "id" : "51",
        "type" : "owl:Class"
      }, {
        "id" : "172",
        "type" : "owl:intersectionOf"
      }, {
        "id" : "476",
        "type" : "owl:unionOf"
      }, {
        "id" : "574",
        "type" : "owl:unionOf"
      }, {
        "id" : "288",
        "type" : "owl:Class"
      }, {
        "id" : "2",
        "type" : "owl:Class"
      }, {
        "id" : "395",
        "type" : "owl:Class"
      }, {
        "id" : "125",
        "type" : "owl:Class"
      }, {
        "id" : "19",
        "type" : "owl:Class"
      }, {
        "id" : "143",
        "type" : "owl:Class"
      }, {
        "id" : "126",
        "type" : "owl:Class"
      }, {
        "id" : "25",
        "type" : "owl:Class"
      }, {
        "id" : "48",
        "type" : "owl:Class"
      }, {
        "id" : "42",
        "type" : "owl:Class"
      }, {
        "id" : "30",
        "type" : "owl:unionOf"
      }, {
        "id" : "155",
        "type" : "owl:Class"
      }, {
        "id" : "358",
        "type" : "owl:Class"
      }, {
        "id" : "313",
        "type" : "owl:Class"
      }, {
        "id" : "13",
        "type" : "owl:Class"
      }, {
        "id" : "66",
        "type" : "owl:Class"
      }, {
        "id" : "202",
        "type" : "owl:Class"
      }, {
        "id" : "151",
        "type" : "owl:Class"
      }, {
        "id" : "69",
        "type" : "owl:Class"
      }, {
        "id" : "32",
        "type" : "owl:Class"
      }, {
        "id" : "409",
        "type" : "owl:Class"
      }, {
        "id" : "130",
        "type" : "owl:Class"
      }, {
        "id" : "29",
        "type" : "owl:Class"
      }, {
        "id" : "168",
        "type" : "owl:Class"
      }, {
        "id" : "308",
        "type" : "owl:Class"
      }, {
        "id" : "176",
        "type" : "owl:Class"
      }, {
        "id" : "437",
        "type" : "owl:Class"
      }, {
        "id" : "367",
        "type" : "owl:Class"
      }, {
        "id" : "75",
        "type" : "owl:Class"
      }, {
        "id" : "58",
        "type" : "owl:Class"
      }, {
        "id" : "10",
        "type" : "owl:Class"
      }, {
        "id" : "17",
        "type" : "owl:Class"
      }, {
        "id" : "434",
        "type" : "owl:Class"
      }, {
        "id" : "57",
        "type" : "owl:Class"
      }, {
        "id" : "186",
        "type" : "owl:Class"
      }, {
        "id" : "89",
        "type" : "owl:Class"
      }, {
        "id" : "402",
        "type" : "owl:Class"
      }, {
        "id" : "430",
        "type" : "owl:Class"
      }, {
        "id" : "218",
        "type" : "owl:Class"
      }, {
        "id" : "23",
        "type" : "owl:Class"
      }, {
        "id" : "282",
        "type" : "owl:Class"
      }, {
        "id" : "411",
        "type" : "owl:Class"
      }, {
        "id" : "157",
        "type" : "owl:Class"
      }, {
        "id" : "8",
        "type" : "owl:Class"
      }, {
        "id" : "101",
        "type" : "owl:Class"
      }, {
        "id" : "406",
        "type" : "owl:Class"
      }, {
        "id" : "428",
        "type" : "owl:Class"
      }, {
        "id" : "147",
        "type" : "owl:Class"
      }, {
        "id" : "178",
        "type" : "owl:Class"
      }, {
        "id" : "105",
        "type" : "owl:Class"
      }, {
        "id" : "198",
        "type" : "owl:Class"
      }, {
        "id" : "99",
        "type" : "owl:Class"
      }, {
        "id" : "278",
        "type" : "owl:Class"
      }, {
        "id" : "5",
        "type" : "owl:Class"
      }, {
        "id" : "181",
        "type" : "owl:Class"
      } ],
    "classAttribute" : [
      {
        "iri" : "http://edas#Reviewer",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Reviewer"
        },
        "intersection" : [ "23" ],
        "attributes" : [ "intersection" ],
        "id" : "1"
      }, {
        "iri" : "http://edas#CADTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CADTopic"
        },
        "id" : "22",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#BreakEvent",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "BreakEvent"
        },
        "union" : [ "56", "57", "58" ],
        "subClasses" : [ "56", "57", "58" ],
        "attributes" : [ "union" ],
        "id" : "54",
        "superClasses" : [ "55" ]
      }, {
        "iri" : "http://edas#AntennasTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "AntennasTopic"
        },
        "id" : "15",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#Review",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Review"
        },
        "id" : "120",
        "superClasses" : [ "121" ]
      }, {
        "iri" : "http://edas#CallForPapers",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CallForPapers"
        },
        "comment" : {
          "undefined" : "Call For Papers"
        },
        "id" : "122",
        "superClasses" : [ "37" ]
      }, {
        "iri" : "http://edas#PowerlineTransmissionTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PowerlineTransmissionTopic"
        },
        "id" : "82",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#RejectRating",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "RejectRating"
        },
        "id" : "94",
        "superClasses" : [ "30" ]
      }, {
        "iri" : "http://edas#ComputerNetworksAapplicationsTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksAapplicationsTopic"
        },
        "id" : "127",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#ActivePaper",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ActivePaper"
        },
        "subClasses" : [ "157" ],
        "id" : "156",
        "superClasses" : [ "10" ]
      }, {
        "iri" : "http://edas#Excursion",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Excursion"
        },
        "id" : "175",
        "superClasses" : [ "176" ]
      }, {
        "iri" : "http://edas#MeetingRoomPlace",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MeetingRoomPlace"
        },
        "id" : "177",
        "superClasses" : [ "178" ]
      }, {
        "iri" : "http://edas#ContactInformation",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ContactInformation"
        },
        "id" : "159"
      }, {
        "iri" : "http://edas#Presenter",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Presenter"
        },
        "id" : "171",
        "superClasses" : [ "172" ]
      }, {
        "iri" : "http://edas#NGO",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "NGO"
        },
        "id" : "180",
        "superClasses" : [ "181" ]
      }, {
        "iri" : "http://edas#ConferenceDinner",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ConferenceDinner"
        },
        "id" : "191",
        "superClasses" : [ "168" ]
      }, {
        "iri" : "http://edas#RejectedPaper",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "RejectedPaper"
        },
        "id" : "221",
        "superClasses" : [ "10" ]
      }, {
        "iri" : "http://edas#ComputerNetworksOpticalTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksOpticalTopic"
        },
        "id" : "223",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#ComputerNetworksMeasurementsTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksMeasurementsTopic"
        },
        "id" : "84",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#CallForManuscripts",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CallForManuscripts"
        },
        "comment" : {
          "undefined" : "Call For Manuscripts"
        },
        "id" : "224",
        "superClasses" : [ "37" ]
      }, {
        "iri" : "http://edas#Call",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Call"
        },
        "subClasses" : [ "224", "122", "198" ],
        "id" : "37"
      }, {
        "iri" : "http://edas#WeekRejectRating",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "WeekRejectRating"
        },
        "id" : "87",
        "superClasses" : [ "30" ]
      }, {
        "iri" : "http://edas#Programme",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Programme"
        },
        "id" : "11",
        "superClasses" : [ "121" ]
      }, {
        "iri" : "http://edas#ReviewForm",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ReviewForm"
        },
        "id" : "235"
      }, {
        "iri" : "http://edas#Reception",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Reception"
        },
        "id" : "324",
        "superClasses" : [ "176" ]
      }, {
        "iri" : "http://edas#AcceptedPaper",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "AcceptedPaper"
        },
        "id" : "303",
        "superClasses" : [ "10" ]
      }, {
        "iri" : "http://edas#Sponsorship",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Sponsorship"
        },
        "subClasses" : [ "202" ],
        "id" : "62"
      }, {
        "iri" : "http://edas#Document",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Document"
        },
        "subClasses" : [ "10", "186", "120", "11", "218" ],
        "id" : "121"
      }, {
        "iri" : "http://edas#ComputerNetworksSecurityTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksSecurityTopic"
        },
        "id" : "85",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#OperatingTopicsystems",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "OperatingTopicsystems"
        },
        "id" : "60",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#CryptographyTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CryptographyTopic"
        },
        "id" : "6",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#MealBreak",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MealBreak"
        },
        "id" : "56",
        "superClasses" : [ "54" ]
      }, {
        "iri" : "http://edas#NonAcademicEvent",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "NonAcademicEvent"
        },
        "subClasses" : [ "168", "176", "54" ],
        "id" : "55",
        "superClasses" : [ "42" ]
      }, {
        "iri" : "http://edas#SatelliteAndSpaceCommunicationsTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "SatelliteAndSpaceCommunicationsTopic"
        },
        "id" : "27",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#PerformanceTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PerformanceTopic"
        },
        "id" : "45",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#AccommodationPlace",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "AccommodationPlace"
        },
        "id" : "439",
        "superClasses" : [ "178" ]
      }, {
        "iri" : "http://edas#SecurityTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "SecurityTopic"
        },
        "id" : "34",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#WithdrawnPaper",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "WithdrawnPaper"
        },
        "id" : "345",
        "superClasses" : [ "10" ]
      }, {
        "iri" : "http://edas#TwoLevelConference",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "TwoLevelConference"
        },
        "intersection" : [ "288" ],
        "attributes" : [ "intersection" ],
        "id" : "458"
      }, {
        "iri" : "http://edas#TalkEvent",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "TalkEvent"
        },
        "subClasses" : [ "143", "147" ],
        "id" : "20",
        "superClasses" : [ "134" ]
      }, {
        "iri" : "http://edas#ComputerNetworksManagementTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksManagementTopic"
        },
        "id" : "92",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#Country",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Country"
        },
        "individuals" : [ {
          "iri" : "http://edas#India",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "India"
          }
        }, {
          "iri" : "http://edas#Ukraine",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Ukraine"
          }
        }, {
          "iri" : "http://edas#Argentina",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Argentina"
          }
        }, {
          "iri" : "http://edas#Tanzania",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Tanzania"
          }
        }, {
          "iri" : "http://edas#EuropeanUnion",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "EuropeanUnion"
          }
        }, {
          "iri" : "http://edas#Spain",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Spain"
          }
        }, {
          "iri" : "http://edas#BosniaAndHerzegovina",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "BosniaAndHerzegovina"
          }
        }, {
          "iri" : "http://edas#Lebanon",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Lebanon"
          }
        }, {
          "iri" : "http://edas#Turkey",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Turkey"
          }
        }, {
          "iri" : "http://edas#Libya",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Libya"
          }
        }, {
          "iri" : "http://edas#Bangladesh",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Bangladesh"
          }
        }, {
          "iri" : "http://edas#Kenya",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Kenya"
          }
        }, {
          "iri" : "http://edas#UnitedKingdom",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "UnitedKingdom"
          }
        }, {
          "iri" : "http://edas#Finland",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Finland"
          }
        }, {
          "iri" : "http://edas#Peru",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Peru"
          }
        }, {
          "iri" : "http://edas#Tajikistan",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Tajikistan"
          }
        }, {
          "iri" : "http://edas#Germany",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Germany"
          }
        }, {
          "iri" : "http://edas#Bahamas",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Bahamas"
          }
        }, {
          "iri" : "http://edas#Cambodia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Cambodia"
          }
        }, {
          "iri" : "http://edas#Portugal",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Portugal"
          }
        }, {
          "iri" : "http://edas#Syria",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Syria"
          }
        }, {
          "iri" : "http://edas#Thailand",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Thailand"
          }
        }, {
          "iri" : "http://edas#Pakistan",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Pakistan"
          }
        }, {
          "iri" : "http://edas#Greece",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Greece"
          }
        }, {
          "iri" : "http://edas#Netherlands",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Netherlands"
          }
        }, {
          "iri" : "http://edas#SriLanka",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "SriLanka"
          }
        }, {
          "iri" : "http://edas#SouthAfrica",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "SouthAfrica"
          }
        }, {
          "iri" : "http://edas#Qatar",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Qatar"
          }
        }, {
          "iri" : "http://edas#Japan",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Japan"
          }
        }, {
          "iri" : "http://edas#Slovakia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Slovakia"
          }
        }, {
          "iri" : "http://edas#CzechRepublic",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "CzechRepublic"
          }
        }, {
          "iri" : "http://edas#Bulgaria",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Bulgaria"
          }
        }, {
          "iri" : "http://edas#Tunisia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Tunisia"
          }
        }, {
          "iri" : "http://edas#Ecuador",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Ecuador"
          }
        }, {
          "iri" : "http://edas#CocosIslands",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "CocosIslands"
          }
        }, {
          "iri" : "http://edas#Canada",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Canada"
          }
        }, {
          "iri" : "http://edas#Bahrain",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Bahrain"
          }
        }, {
          "iri" : "http://edas#Macao",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Macao"
          }
        }, {
          "iri" : "http://edas#Norway",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Norway"
          }
        }, {
          "iri" : "http://edas#Belgium",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Belgium"
          }
        }, {
          "iri" : "http://edas#HongKong",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "HongKong"
          }
        }, {
          "iri" : "http://edas#Taiwan",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Taiwan"
          }
        }, {
          "iri" : "http://edas#Uganda",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Uganda"
          }
        }, {
          "iri" : "http://edas#Zimbabwe",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Zimbabwe"
          }
        }, {
          "iri" : "http://edas#Nicaragua",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Nicaragua"
          }
        }, {
          "iri" : "http://edas#Mexico",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Mexico"
          }
        }, {
          "iri" : "http://edas#NewZealand",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "NewZealand"
          }
        }, {
          "iri" : "http://edas#Singapore",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Singapore"
          }
        }, {
          "iri" : "http://edas#Cyprus",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Cyprus"
          }
        }, {
          "iri" : "http://edas#Russia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Russia"
          }
        }, {
          "iri" : "http://edas#Oman",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Oman"
          }
        }, {
          "iri" : "http://edas#Armenia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Armenia"
          }
        }, {
          "iri" : "http://edas#Austria",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Austria"
          }
        }, {
          "iri" : "http://edas#Slovenia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Slovenia"
          }
        }, {
          "iri" : "http://edas#PuertoRico",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "PuertoRico"
          }
        }, {
          "iri" : "http://edas#Nepal",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Nepal"
          }
        }, {
          "iri" : "http://edas#Lithuania",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Lithuania"
          }
        }, {
          "iri" : "http://edas#Chile",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Chile"
          }
        }, {
          "iri" : "http://edas#Korea",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Korea"
          }
        }, {
          "iri" : "http://edas#Romania",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Romania"
          }
        }, {
          "iri" : "http://edas#SerbiaAndMontenegro",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "SerbiaAndMontenegro"
          }
        }, {
          "iri" : "http://edas#USA",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "USA"
          }
        }, {
          "iri" : "http://edas#Uruguay",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Uruguay"
          }
        }, {
          "iri" : "http://edas#Hungary",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Hungary"
          }
        }, {
          "iri" : "http://edas#Philippines",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Philippines"
          }
        }, {
          "iri" : "http://edas#Mauritius",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Mauritius"
          }
        }, {
          "iri" : "http://edas#Luxemburg",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Luxemburg"
          }
        }, {
          "iri" : "http://edas#Senegal",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Senegal"
          }
        }, {
          "iri" : "http://edas#SanMarino",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "SanMarino"
          }
        }, {
          "iri" : "http://edas#NorthKorea",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "NorthKorea"
          }
        }, {
          "iri" : "http://edas#Botswana",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Botswana"
          }
        }, {
          "iri" : "http://edas#Italy",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Italy"
          }
        }, {
          "iri" : "http://edas#Israel",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Israel"
          }
        }, {
          "iri" : "http://edas#Australia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Australia"
          }
        }, {
          "iri" : "http://edas#Macedonia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Macedonia"
          }
        }, {
          "iri" : "http://edas#Denmark",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Denmark"
          }
        }, {
          "iri" : "http://edas#Indonesia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Indonesia"
          }
        }, {
          "iri" : "http://edas#Venezuela",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Venezuela"
          }
        }, {
          "iri" : "http://edas#Ethiopia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Ethiopia"
          }
        }, {
          "iri" : "http://edas#Iceland",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Iceland"
          }
        }, {
          "iri" : "http://edas#Egypt",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Egypt"
          }
        }, {
          "iri" : "http://edas#Malaysia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Malaysia"
          }
        }, {
          "iri" : "http://edas#Malta",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Malta"
          }
        }, {
          "iri" : "http://edas#China",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "China"
          }
        }, {
          "iri" : "http://edas#Ireland",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Ireland"
          }
        }, {
          "iri" : "http://edas#Nigeria",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Nigeria"
          }
        }, {
          "iri" : "http://edas#France",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "France"
          }
        }, {
          "iri" : "http://edas#Kuwait",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Kuwait"
          }
        }, {
          "iri" : "http://edas#Brazil",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Brazil"
          }
        }, {
          "iri" : "http://edas#Colombia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Colombia"
          }
        }, {
          "iri" : "http://edas#DemocraticRepublicOfCongo",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "DemocraticRepublicOfCongo"
          }
        }, {
          "iri" : "http://edas#Ghana",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Ghana"
          }
        }, {
          "iri" : "http://edas#Belarus",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Belarus"
          }
        }, {
          "iri" : "http://edas#Switzerland",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Switzerland"
          }
        }, {
          "iri" : "http://edas#Azerbaijan",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Azerbaijan"
          }
        }, {
          "iri" : "http://edas#UAE",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "UAE"
          }
        }, {
          "iri" : "http://edas#Georgia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Georgia"
          }
        }, {
          "iri" : "http://edas#Estonia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Estonia"
          }
        }, {
          "iri" : "http://edas#Turkmenistan",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Turkmenistan"
          }
        }, {
          "iri" : "http://edas#Yemen",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Yemen"
          }
        }, {
          "iri" : "http://edas#Madagascar",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Madagascar"
          }
        }, {
          "iri" : "http://edas#Cuba",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Cuba"
          }
        }, {
          "iri" : "http://edas#Paraguay",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Paraguay"
          }
        }, {
          "iri" : "http://edas#Sweden",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Sweden"
          }
        }, {
          "iri" : "http://edas#Mongolia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Mongolia"
          }
        }, {
          "iri" : "http://edas#Vietnam",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Vietnam"
          }
        }, {
          "iri" : "http://edas#Jordan",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Jordan"
          }
        }, {
          "iri" : "http://edas#Latvia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Latvia"
          }
        }, {
          "iri" : "http://edas#Morocco",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Morocco"
          }
        }, {
          "iri" : "http://edas#SaudiArabia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "SaudiArabia"
          }
        }, {
          "iri" : "http://edas#Iran",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Iran"
          }
        }, {
          "iri" : "http://edas#Croatia",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Croatia"
          }
        }, {
          "iri" : "http://edas#Iraq",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Iraq"
          }
        }, {
          "iri" : "http://edas#Poland",
          "baseIri" : "http://edas",
          "labels" : {
            "IRI-based" : "Poland"
          }
        } ],
        "id" : "448"
      }, {
        "iri" : "http://edas#ComputerNetworksSwitchingTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksSwitchingTopic"
        },
        "id" : "138",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#MedicineTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MedicineTopic"
        },
        "id" : "53",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "482",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "275",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "instances" : 0,
        "union" : [ "23", "159" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "274"
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "489",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "183",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "492",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "512",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "413",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "517",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "398",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "503",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "160",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "320",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "525",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "527",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "529",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "336",
        "label" : {
          "IRI-based" : "dateTime"
        }
      }, {
        "iri" : "http://edas#SingleLevelConference",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "SingleLevelConference"
        },
        "intersection" : [ "288" ],
        "attributes" : [ "intersection" ],
        "id" : "534"
      }, {
        "instances" : 0,
        "union" : [ "1", "428", "282", "278" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "543"
      }, {
        "instances" : 0,
        "union" : [ "10", "288" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "375"
      }, {
        "iri" : "http://edas#AcademicEvent",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "AcademicEvent"
        },
        "subClasses" : [ "151", "155", "19", "20" ],
        "id" : "134",
        "superClasses" : [ "42" ]
      }, {
        "instances" : 0,
        "union" : [ "428", "282", "278" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "546"
      }, {
        "instances" : 0,
        "union" : [ "1", "428", "282", "278" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "548"
      }, {
        "instances" : 0,
        "union" : [ "10", "288" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "415"
      }, {
        "instances" : 0,
        "union" : [ "23", "134", "288", "48" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "550"
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "506",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "553",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#string",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "443",
        "label" : {
          "IRI-based" : "string"
        }
      }, {
        "iri" : "http://www.w3.org/2001/XMLSchema#int",
        "baseIri" : "http://www.w3.org/2001/XMLSchema",
        "id" : "63",
        "label" : {
          "IRI-based" : "int"
        }
      }, {
        "iri" : "http://edas#MultimediaTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MultimediaTopic"
        },
        "id" : "51",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#Author",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Author"
        },
        "subClasses" : [ "171" ],
        "intersection" : [ "23" ],
        "attributes" : [ "intersection" ],
        "id" : "172"
      }, {
        "instances" : 0,
        "union" : [ "23", "134", "288", "48" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "476"
      }, {
        "instances" : 0,
        "union" : [ "428", "282", "278" ],
        "attributes" : [ "anonymous", "union" ],
        "id" : "574"
      }, {
        "iri" : "http://edas#Conference",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Conference"
        },
        "comment" : {
          "undefined" : "Conference"
        },
        "id" : "288"
      }, {
        "iri" : "http://edas#PersonalReviewHistory",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PersonalReviewHistory"
        },
        "id" : "2",
        "superClasses" : [ "29" ]
      }, {
        "iri" : "http://edas#ComputerNetworksEnterpriseTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksEnterpriseTopic"
        },
        "id" : "395",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#NumericalReviewQuestion",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "NumericalReviewQuestion"
        },
        "id" : "125",
        "superClasses" : [ "126" ]
      }, {
        "iri" : "http://edas#OrganizationalMeeting",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "OrganizationalMeeting"
        },
        "id" : "19",
        "superClasses" : [ "134" ]
      }, {
        "iri" : "http://edas#WelcomeTalk",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "WelcomeTalk"
        },
        "id" : "143",
        "superClasses" : [ "20" ]
      }, {
        "iri" : "http://edas#ReviewQuestion",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ReviewQuestion"
        },
        "subClasses" : [ "125", "130" ],
        "id" : "126"
      }, {
        "iri" : "http://edas#TestOnlyTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "TestOnlyTopic"
        },
        "id" : "25",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#ConferenceSession",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ConferenceSession"
        },
        "id" : "48"
      }, {
        "iri" : "http://edas#ConferenceEvent",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ConferenceEvent"
        },
        "subClasses" : [ "134", "55" ],
        "id" : "42"
      }, {
        "iri" : "http://edas#ReviewRating",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ReviewRating"
        },
        "union" : [ "87", "94", "99", "105" ],
        "subClasses" : [ "87", "94", "99", "105" ],
        "attributes" : [ "union" ],
        "id" : "30"
      }, {
        "iri" : "http://edas#Workshop",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Workshop"
        },
        "id" : "155",
        "superClasses" : [ "134" ]
      }, {
        "iri" : "http://edas#SignalProcessingTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "SignalProcessingTopic"
        },
        "id" : "358",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#PendingPaper",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PendingPaper"
        },
        "id" : "313",
        "superClasses" : [ "10" ]
      }, {
        "iri" : "http://edas#Topic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Topic"
        },
        "subClasses" : [ "101", "69", "60", "66", "17", "75", "34", "5", "22", "32", "6", "8", "82", "51", "25", "53", "15", "45", "27", "358", "89" ],
        "id" : "13"
      }, {
        "iri" : "http://edas#MicroelectronicsTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MicroelectronicsTopic"
        },
        "id" : "66",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#TravelGrant",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "TravelGrant"
        },
        "id" : "202",
        "superClasses" : [ "62" ]
      }, {
        "iri" : "http://edas#PaperPresentation",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PaperPresentation"
        },
        "id" : "151",
        "superClasses" : [ "134" ]
      }, {
        "iri" : "http://edas#ParallelAndDistributedComputingTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ParallelAndDistributedComputingTopic"
        },
        "id" : "69",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#RadioCommunicationsTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "RadioCommunicationsTopic"
        },
        "id" : "32",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#AcademiaOrganization",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "AcademiaOrganization"
        },
        "id" : "409",
        "superClasses" : [ "181" ]
      }, {
        "iri" : "http://edas#TextualReviewQuestion",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "TextualReviewQuestion"
        },
        "id" : "130",
        "superClasses" : [ "126" ]
      }, {
        "iri" : "http://edas#PersonalHistory",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PersonalHistory"
        },
        "subClasses" : [ "367", "2" ],
        "id" : "29"
      }, {
        "iri" : "http://edas#MealEvent",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MealEvent"
        },
        "subClasses" : [ "191" ],
        "id" : "168",
        "superClasses" : [ "55" ]
      }, {
        "iri" : "http://edas#PublishedPaper",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PublishedPaper"
        },
        "id" : "308",
        "superClasses" : [ "10" ]
      }, {
        "iri" : "http://edas#SocialEvent",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "SocialEvent"
        },
        "subClasses" : [ "175", "324" ],
        "id" : "176",
        "superClasses" : [ "55" ]
      }, {
        "iri" : "http://edas#ConferenceVenuePlace",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ConferenceVenuePlace"
        },
        "id" : "437",
        "superClasses" : [ "178" ]
      }, {
        "iri" : "http://edas#PersonalPublicationHistory",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "PersonalPublicationHistory"
        },
        "id" : "367",
        "superClasses" : [ "29" ]
      }, {
        "iri" : "http://edas#CommunicationTheoryTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CommunicationTheoryTopic"
        },
        "id" : "75",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#FreeTimeBreak",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "FreeTimeBreak"
        },
        "id" : "58",
        "superClasses" : [ "54" ]
      }, {
        "iri" : "http://edas#Paper",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Paper"
        },
        "subClasses" : [ "156", "345", "221", "303", "308", "313" ],
        "id" : "10",
        "superClasses" : [ "121" ]
      }, {
        "iri" : "http://edas#ComputerArchitectureTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerArchitectureTopic"
        },
        "id" : "17",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#DiningPlace",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "DiningPlace"
        },
        "id" : "434",
        "superClasses" : [ "178" ]
      }, {
        "iri" : "http://edas#CoffeeBreak",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CoffeeBreak"
        },
        "id" : "57",
        "superClasses" : [ "54" ]
      }, {
        "iri" : "http://edas#MealMenu",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MealMenu"
        },
        "id" : "186",
        "superClasses" : [ "121" ]
      }, {
        "iri" : "http://edas#CommunicationsTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CommunicationsTopic"
        },
        "id" : "89",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#ComputerNetworksSensorTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksSensorTopic"
        },
        "id" : "402",
        "superClasses" : [ "5" ]
      }, {
        "iri" : "http://edas#Attendee",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Attendee"
        },
        "id" : "430",
        "superClasses" : [ "23" ]
      }, {
        "iri" : "http://edas#SlideSet",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "SlideSet"
        },
        "id" : "218",
        "superClasses" : [ "121" ]
      }, {
        "iri" : "http://edas#Person",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Person"
        },
        "subClasses" : [ "428", "430", "282", "278" ],
        "id" : "23"
      }, {
        "iri" : "http://edas#TPCMember",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "TPCMember"
        },
        "id" : "282",
        "superClasses" : [ "23" ]
      }, {
        "iri" : "http://edas#IndustryOrganization",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "IndustryOrganization"
        },
        "id" : "411",
        "superClasses" : [ "181" ]
      }, {
        "iri" : "http://edas#RatedPapers",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "RatedPapers"
        },
        "id" : "157",
        "superClasses" : [ "156" ]
      }, {
        "iri" : "http://edas#MobileComputingTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "MobileComputingTopic"
        },
        "id" : "8",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#WirelessCommunicationsTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "WirelessCommunicationsTopic"
        },
        "id" : "101",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#GovernmentOrganization",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "GovernmentOrganization"
        },
        "id" : "406",
        "superClasses" : [ "181" ]
      }, {
        "iri" : "http://edas#ConferenceChair",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ConferenceChair"
        },
        "id" : "428",
        "superClasses" : [ "23" ]
      }, {
        "iri" : "http://edas#ClosingTalk",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ClosingTalk"
        },
        "id" : "147",
        "superClasses" : [ "20" ]
      }, {
        "iri" : "http://edas#Place",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Place"
        },
        "subClasses" : [ "434", "177", "437", "439" ],
        "id" : "178"
      }, {
        "iri" : "http://edas#AccpetIfRoomRating",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "AccpetIfRoomRating"
        },
        "id" : "105",
        "superClasses" : [ "30" ]
      }, {
        "iri" : "http://edas#CallForReviews",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "CallForReviews"
        },
        "comment" : {
          "undefined" : "Call For Reviews"
        },
        "id" : "198",
        "superClasses" : [ "37" ]
      }, {
        "iri" : "http://edas#AcceptRating",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "AcceptRating"
        },
        "id" : "99",
        "superClasses" : [ "30" ]
      }, {
        "iri" : "http://edas#SessionChair",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "SessionChair"
        },
        "id" : "278",
        "superClasses" : [ "23" ]
      }, {
        "iri" : "http://edas#ComputerNetworksTopic",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "ComputerNetworksTopic"
        },
        "subClasses" : [ "85", "92", "138", "395", "84", "402", "127", "223" ],
        "id" : "5",
        "superClasses" : [ "13" ]
      }, {
        "iri" : "http://edas#Organization",
        "baseIri" : "http://edas",
        "instances" : 0,
        "label" : {
          "IRI-based" : "Organization"
        },
        "subClasses" : [ "406", "180", "409", "411" ],
        "id" : "181"
      } ],
      "property" : [ {
        "id" : "0",
        "type" : "owl:objectProperty"
      }, {
        "id" : "4",
        "type" : "owl:disjointWith"
      }, {
        "id" : "7",
        "type" : "owl:disjointWith"
      }, {
        "id" : "9",
        "type" : "owl:disjointWith"
      }, {
        "id" : "12",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "14",
        "type" : "owl:disjointWith"
      }, {
        "id" : "16",
        "type" : "owl:disjointWith"
      }, {
        "id" : "18",
        "type" : "owl:disjointWith"
      }, {
        "id" : "21",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "24",
        "type" : "owl:disjointWith"
      }, {
        "id" : "26",
        "type" : "owl:disjointWith"
      }, {
        "id" : "28",
        "type" : "owl:disjointWith"
      }, {
        "id" : "31",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "33",
        "type" : "owl:disjointWith"
      }, {
        "id" : "35",
        "type" : "owl:disjointWith"
      }, {
        "id" : "36",
        "type" : "owl:disjointWith"
      }, {
        "id" : "38",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "39",
        "type" : "owl:disjointWith"
      }, {
        "id" : "40",
        "type" : "owl:disjointWith"
      }, {
        "id" : "41",
        "type" : "owl:disjointWith"
      }, {
        "id" : "43",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "44",
        "type" : "owl:disjointWith"
      }, {
        "id" : "46",
        "type" : "owl:disjointWith"
      }, {
        "id" : "47",
        "type" : "owl:disjointWith"
      }, {
        "id" : "49",
        "type" : "owl:disjointWith"
      }, {
        "id" : "50",
        "type" : "owl:disjointWith"
      }, {
        "id" : "52",
        "type" : "owl:disjointWith"
      }, {
        "id" : "59",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "61",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "64",
        "type" : "owl:disjointWith"
      }, {
        "id" : "65",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "67",
        "type" : "owl:disjointWith"
      }, {
        "id" : "68",
        "type" : "owl:disjointWith"
      }, {
        "id" : "70",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "71",
        "type" : "owl:disjointWith"
      }, {
        "id" : "72",
        "type" : "owl:disjointWith"
      }, {
        "id" : "73",
        "type" : "owl:disjointWith"
      }, {
        "id" : "74",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "76",
        "type" : "owl:disjointWith"
      }, {
        "id" : "77",
        "type" : "owl:disjointWith"
      }, {
        "id" : "78",
        "type" : "owl:disjointWith"
      }, {
        "id" : "79",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "80",
        "type" : "owl:disjointWith"
      }, {
        "id" : "81",
        "type" : "owl:disjointWith"
      }, {
        "id" : "83",
        "type" : "owl:disjointWith"
      }, {
        "id" : "86",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "88",
        "type" : "owl:disjointWith"
      }, {
        "id" : "90",
        "type" : "owl:disjointWith"
      }, {
        "id" : "91",
        "type" : "owl:disjointWith"
      }, {
        "id" : "93",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "95",
        "type" : "owl:disjointWith"
      }, {
        "id" : "96",
        "type" : "owl:disjointWith"
      }, {
        "id" : "97",
        "type" : "owl:disjointWith"
      }, {
        "id" : "98",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "100",
        "type" : "owl:disjointWith"
      }, {
        "id" : "102",
        "type" : "owl:disjointWith"
      }, {
        "id" : "103",
        "type" : "owl:disjointWith"
      }, {
        "id" : "104",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "106",
        "type" : "owl:disjointWith"
      }, {
        "id" : "107",
        "type" : "owl:disjointWith"
      }, {
        "id" : "108",
        "type" : "owl:disjointWith"
      }, {
        "id" : "109",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "110",
        "type" : "owl:disjointWith"
      }, {
        "id" : "111",
        "type" : "owl:disjointWith"
      }, {
        "id" : "112",
        "type" : "owl:disjointWith"
      }, {
        "id" : "113",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "114",
        "type" : "owl:disjointWith"
      }, {
        "id" : "115",
        "type" : "owl:disjointWith"
      }, {
        "id" : "116",
        "type" : "owl:disjointWith"
      }, {
        "id" : "117",
        "type" : "owl:disjointWith"
      }, {
        "id" : "118",
        "type" : "owl:disjointWith"
      }, {
        "id" : "119",
        "type" : "owl:disjointWith"
      }, {
        "id" : "123",
        "type" : "owl:objectProperty"
      }, {
        "id" : "124",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "128",
        "type" : "owl:disjointWith"
      }, {
        "id" : "129",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "131",
        "type" : "owl:disjointWith"
      }, {
        "id" : "132",
        "type" : "owl:disjointWith"
      }, {
        "id" : "133",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "135",
        "type" : "owl:disjointWith"
      }, {
        "id" : "136",
        "type" : "owl:disjointWith"
      }, {
        "id" : "137",
        "type" : "owl:disjointWith"
      }, {
        "id" : "139",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "140",
        "type" : "owl:disjointWith"
      }, {
        "id" : "141",
        "type" : "owl:disjointWith"
      }, {
        "id" : "142",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "144",
        "type" : "owl:disjointWith"
      }, {
        "id" : "145",
        "type" : "owl:disjointWith"
      }, {
        "id" : "146",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "148",
        "type" : "owl:disjointWith"
      }, {
        "id" : "149",
        "type" : "owl:disjointWith"
      }, {
        "id" : "150",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "152",
        "type" : "owl:disjointWith"
      }, {
        "id" : "153",
        "type" : "owl:disjointWith"
      }, {
        "id" : "154",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "158",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "161",
        "type" : "owl:disjointWith"
      }, {
        "id" : "162",
        "type" : "owl:disjointWith"
      }, {
        "id" : "163",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "164",
        "type" : "owl:disjointWith"
      }, {
        "id" : "165",
        "type" : "owl:disjointWith"
      }, {
        "id" : "166",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "167",
        "type" : "owl:disjointWith"
      }, {
        "id" : "169",
        "type" : "owl:disjointWith"
      }, {
        "id" : "170",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "173",
        "type" : "owl:disjointWith"
      }, {
        "id" : "174",
        "type" : "owl:disjointWith"
      }, {
        "id" : "179",
        "type" : "owl:disjointWith"
      }, {
        "id" : "182",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "184",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "185",
        "type" : "owl:disjointWith"
      }, {
        "id" : "187",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "188",
        "type" : "owl:disjointWith"
      }, {
        "id" : "189",
        "type" : "owl:disjointWith"
      }, {
        "id" : "190",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "192",
        "type" : "owl:disjointWith"
      }, {
        "id" : "193",
        "type" : "owl:disjointWith"
      }, {
        "id" : "194",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "195",
        "type" : "owl:disjointWith"
      }, {
        "id" : "196",
        "type" : "owl:disjointWith"
      }, {
        "id" : "197",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "199",
        "type" : "owl:disjointWith"
      }, {
        "id" : "200",
        "type" : "owl:disjointWith"
      }, {
        "id" : "201",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "203",
        "type" : "owl:disjointWith"
      }, {
        "id" : "204",
        "type" : "owl:disjointWith"
      }, {
        "id" : "205",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "206",
        "type" : "owl:disjointWith"
      }, {
        "id" : "207",
        "type" : "owl:disjointWith"
      }, {
        "id" : "208",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "209",
        "type" : "owl:disjointWith"
      }, {
        "id" : "210",
        "type" : "owl:disjointWith"
      }, {
        "id" : "211",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "212",
        "type" : "owl:disjointWith"
      }, {
        "id" : "213",
        "type" : "owl:disjointWith"
      }, {
        "id" : "214",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "215",
        "type" : "owl:disjointWith"
      }, {
        "id" : "216",
        "type" : "owl:disjointWith"
      }, {
        "id" : "217",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "219",
        "type" : "owl:disjointWith"
      }, {
        "id" : "220",
        "type" : "owl:disjointWith"
      }, {
        "id" : "222",
        "type" : "owl:disjointWith"
      }, {
        "id" : "225",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "226",
        "type" : "owl:disjointWith"
      }, {
        "id" : "227",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "228",
        "type" : "owl:disjointWith"
      }, {
        "id" : "229",
        "type" : "owl:disjointWith"
      }, {
        "id" : "230",
        "type" : "owl:disjointWith"
      }, {
        "id" : "231",
        "type" : "owl:disjointWith"
      }, {
        "id" : "232",
        "type" : "owl:disjointWith"
      }, {
        "id" : "233",
        "type" : "owl:disjointWith"
      }, {
        "id" : "234",
        "type" : "owl:disjointWith"
      }, {
        "id" : "236",
        "type" : "owl:disjointWith"
      }, {
        "id" : "237",
        "type" : "owl:disjointWith"
      }, {
        "id" : "238",
        "type" : "owl:disjointWith"
      }, {
        "id" : "239",
        "type" : "owl:disjointWith"
      }, {
        "id" : "240",
        "type" : "owl:disjointWith"
      }, {
        "id" : "241",
        "type" : "owl:disjointWith"
      }, {
        "id" : "242",
        "type" : "owl:disjointWith"
      }, {
        "id" : "243",
        "type" : "owl:disjointWith"
      }, {
        "id" : "244",
        "type" : "owl:disjointWith"
      }, {
        "id" : "245",
        "type" : "owl:disjointWith"
      }, {
        "id" : "246",
        "type" : "owl:disjointWith"
      }, {
        "id" : "247",
        "type" : "owl:disjointWith"
      }, {
        "id" : "248",
        "type" : "owl:disjointWith"
      }, {
        "id" : "249",
        "type" : "owl:disjointWith"
      }, {
        "id" : "250",
        "type" : "owl:disjointWith"
      }, {
        "id" : "251",
        "type" : "owl:disjointWith"
      }, {
        "id" : "252",
        "type" : "owl:disjointWith"
      }, {
        "id" : "253",
        "type" : "owl:disjointWith"
      }, {
        "id" : "254",
        "type" : "owl:disjointWith"
      }, {
        "id" : "255",
        "type" : "owl:disjointWith"
      }, {
        "id" : "256",
        "type" : "owl:disjointWith"
      }, {
        "id" : "257",
        "type" : "owl:disjointWith"
      }, {
        "id" : "258",
        "type" : "owl:disjointWith"
      }, {
        "id" : "259",
        "type" : "owl:disjointWith"
      }, {
        "id" : "260",
        "type" : "owl:disjointWith"
      }, {
        "id" : "261",
        "type" : "owl:disjointWith"
      }, {
        "id" : "262",
        "type" : "owl:objectProperty"
      }, {
        "id" : "264",
        "type" : "owl:disjointWith"
      }, {
        "id" : "265",
        "type" : "owl:disjointWith"
      }, {
        "id" : "266",
        "type" : "owl:disjointWith"
      }, {
        "id" : "267",
        "type" : "owl:disjointWith"
      }, {
        "id" : "268",
        "type" : "owl:disjointWith"
      }, {
        "id" : "269",
        "type" : "owl:disjointWith"
      }, {
        "id" : "270",
        "type" : "owl:disjointWith"
      }, {
        "id" : "271",
        "type" : "owl:disjointWith"
      }, {
        "id" : "272",
        "type" : "owl:disjointWith"
      }, {
        "id" : "273",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "276",
        "type" : "owl:disjointWith"
      }, {
        "id" : "277",
        "type" : "owl:disjointWith"
      }, {
        "id" : "279",
        "type" : "owl:disjointWith"
      }, {
        "id" : "280",
        "type" : "owl:disjointWith"
      }, {
        "id" : "281",
        "type" : "owl:disjointWith"
      }, {
        "id" : "283",
        "type" : "owl:disjointWith"
      }, {
        "id" : "284",
        "type" : "owl:disjointWith"
      }, {
        "id" : "285",
        "type" : "owl:disjointWith"
      }, {
        "id" : "286",
        "type" : "owl:disjointWith"
      }, {
        "id" : "287",
        "type" : "owl:disjointWith"
      }, {
        "id" : "289",
        "type" : "owl:disjointWith"
      }, {
        "id" : "290",
        "type" : "owl:disjointWith"
      }, {
        "id" : "291",
        "type" : "owl:disjointWith"
      }, {
        "id" : "292",
        "type" : "owl:disjointWith"
      }, {
        "id" : "293",
        "type" : "owl:disjointWith"
      }, {
        "id" : "294",
        "type" : "owl:objectProperty"
      }, {
        "id" : "296",
        "type" : "owl:disjointWith"
      }, {
        "id" : "297",
        "type" : "owl:disjointWith"
      }, {
        "id" : "298",
        "type" : "owl:disjointWith"
      }, {
        "id" : "299",
        "type" : "owl:disjointWith"
      }, {
        "id" : "300",
        "type" : "owl:disjointWith"
      }, {
        "id" : "301",
        "type" : "owl:disjointWith"
      }, {
        "id" : "302",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "304",
        "type" : "owl:disjointWith"
      }, {
        "id" : "305",
        "type" : "owl:disjointWith"
      }, {
        "id" : "306",
        "type" : "owl:disjointWith"
      }, {
        "id" : "307",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "309",
        "type" : "owl:disjointWith"
      }, {
        "id" : "310",
        "type" : "owl:disjointWith"
      }, {
        "id" : "311",
        "type" : "owl:disjointWith"
      }, {
        "id" : "312",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "314",
        "type" : "owl:disjointWith"
      }, {
        "id" : "315",
        "type" : "owl:disjointWith"
      }, {
        "id" : "316",
        "type" : "owl:disjointWith"
      }, {
        "id" : "317",
        "type" : "owl:disjointWith"
      }, {
        "id" : "318",
        "type" : "owl:disjointWith"
      }, {
        "id" : "319",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "321",
        "type" : "owl:disjointWith"
      }, {
        "id" : "322",
        "type" : "owl:objectProperty"
      }, {
        "id" : "325",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "326",
        "type" : "owl:disjointWith"
      }, {
        "id" : "327",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "328",
        "type" : "owl:disjointWith"
      }, {
        "id" : "329",
        "type" : "owl:disjointWith"
      }, {
        "id" : "330",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "331",
        "type" : "owl:disjointWith"
      }, {
        "id" : "332",
        "type" : "owl:disjointWith"
      }, {
        "id" : "333",
        "type" : "owl:disjointWith"
      }, {
        "id" : "334",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "335",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "337",
        "type" : "owl:disjointWith"
      }, {
        "id" : "338",
        "type" : "owl:disjointWith"
      }, {
        "id" : "339",
        "type" : "owl:disjointWith"
      }, {
        "id" : "340",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "341",
        "type" : "owl:disjointWith"
      }, {
        "id" : "342",
        "type" : "owl:disjointWith"
      }, {
        "id" : "343",
        "type" : "owl:disjointWith"
      }, {
        "id" : "344",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "346",
        "type" : "owl:disjointWith"
      }, {
        "id" : "347",
        "type" : "owl:disjointWith"
      }, {
        "id" : "348",
        "type" : "owl:disjointWith"
      }, {
        "id" : "349",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "350",
        "type" : "owl:disjointWith"
      }, {
        "id" : "351",
        "type" : "owl:disjointWith"
      }, {
        "id" : "352",
        "type" : "owl:disjointWith"
      }, {
        "id" : "353",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "354",
        "type" : "owl:disjointWith"
      }, {
        "id" : "355",
        "type" : "owl:disjointWith"
      }, {
        "id" : "356",
        "type" : "owl:disjointWith"
      }, {
        "id" : "357",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "359",
        "type" : "owl:disjointWith"
      }, {
        "id" : "360",
        "type" : "owl:disjointWith"
      }, {
        "id" : "361",
        "type" : "owl:disjointWith"
      }, {
        "id" : "362",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "363",
        "type" : "owl:disjointWith"
      }, {
        "id" : "364",
        "type" : "owl:disjointWith"
      }, {
        "id" : "365",
        "type" : "owl:disjointWith"
      }, {
        "id" : "366",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "368",
        "type" : "owl:disjointWith"
      }, {
        "id" : "369",
        "type" : "owl:disjointWith"
      }, {
        "id" : "370",
        "type" : "owl:disjointWith"
      }, {
        "id" : "371",
        "type" : "owl:disjointWith"
      }, {
        "id" : "372",
        "type" : "owl:disjointWith"
      }, {
        "id" : "373",
        "type" : "owl:disjointWith"
      }, {
        "id" : "374",
        "type" : "owl:objectProperty"
      }, {
        "id" : "376",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "377",
        "type" : "owl:disjointWith"
      }, {
        "id" : "378",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "379",
        "type" : "owl:disjointWith"
      }, {
        "id" : "380",
        "type" : "owl:disjointWith"
      }, {
        "id" : "381",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "382",
        "type" : "owl:disjointWith"
      }, {
        "id" : "383",
        "type" : "owl:disjointWith"
      }, {
        "id" : "384",
        "type" : "owl:disjointWith"
      }, {
        "id" : "385",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "386",
        "type" : "owl:disjointWith"
      }, {
        "id" : "387",
        "type" : "owl:disjointWith"
      }, {
        "id" : "388",
        "type" : "owl:disjointWith"
      }, {
        "id" : "389",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "390",
        "type" : "owl:disjointWith"
      }, {
        "id" : "391",
        "type" : "owl:disjointWith"
      }, {
        "id" : "392",
        "type" : "owl:disjointWith"
      }, {
        "id" : "393",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "394",
        "type" : "owl:disjointWith"
      }, {
        "id" : "396",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "397",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "399",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "400",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "401",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "403",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "404",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "405",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "407",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "408",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "410",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "412",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "414",
        "type" : "owl:objectProperty"
      }, {
        "id" : "416",
        "type" : "owl:disjointWith"
      }, {
        "id" : "417",
        "type" : "owl:disjointWith"
      }, {
        "id" : "418",
        "type" : "owl:objectProperty"
      }, {
        "id" : "419",
        "type" : "owl:disjointWith"
      }, {
        "id" : "420",
        "type" : "owl:disjointWith"
      }, {
        "id" : "421",
        "type" : "owl:disjointWith"
      }, {
        "id" : "422",
        "type" : "owl:disjointWith"
      }, {
        "id" : "423",
        "type" : "owl:disjointWith"
      }, {
        "id" : "424",
        "type" : "owl:disjointWith"
      }, {
        "id" : "425",
        "type" : "owl:disjointWith"
      }, {
        "id" : "426",
        "type" : "owl:disjointWith"
      }, {
        "id" : "427",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "429",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "431",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "432",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "433",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "435",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "436",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "438",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "440",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "441",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "442",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "444",
        "type" : "owl:disjointWith"
      }, {
        "id" : "445",
        "type" : "owl:disjointWith"
      }, {
        "id" : "446",
        "type" : "owl:disjointWith"
      }, {
        "id" : "447",
        "type" : "owl:disjointWith"
      }, {
        "id" : "449",
        "type" : "owl:disjointWith"
      }, {
        "id" : "450",
        "type" : "owl:disjointWith"
      }, {
        "id" : "451",
        "type" : "owl:disjointWith"
      }, {
        "id" : "452",
        "type" : "owl:disjointWith"
      }, {
        "id" : "453",
        "type" : "owl:disjointWith"
      }, {
        "id" : "454",
        "type" : "owl:disjointWith"
      }, {
        "id" : "455",
        "type" : "owl:disjointWith"
      }, {
        "id" : "456",
        "type" : "owl:disjointWith"
      }, {
        "id" : "457",
        "type" : "owl:disjointWith"
      }, {
        "id" : "459",
        "type" : "owl:disjointWith"
      }, {
        "id" : "460",
        "type" : "owl:disjointWith"
      }, {
        "id" : "461",
        "type" : "owl:disjointWith"
      }, {
        "id" : "462",
        "type" : "owl:disjointWith"
      }, {
        "id" : "463",
        "type" : "owl:disjointWith"
      }, {
        "id" : "464",
        "type" : "owl:disjointWith"
      }, {
        "id" : "465",
        "type" : "owl:disjointWith"
      }, {
        "id" : "466",
        "type" : "owl:disjointWith"
      }, {
        "id" : "467",
        "type" : "owl:disjointWith"
      }, {
        "id" : "468",
        "type" : "owl:disjointWith"
      }, {
        "id" : "469",
        "type" : "owl:disjointWith"
      }, {
        "id" : "470",
        "type" : "owl:disjointWith"
      }, {
        "id" : "471",
        "type" : "owl:disjointWith"
      }, {
        "id" : "472",
        "type" : "owl:disjointWith"
      }, {
        "id" : "473",
        "type" : "owl:disjointWith"
      }, {
        "id" : "474",
        "type" : "owl:disjointWith"
      }, {
        "id" : "475",
        "type" : "owl:objectProperty"
      }, {
        "id" : "477",
        "type" : "owl:disjointWith"
      }, {
        "id" : "478",
        "type" : "owl:disjointWith"
      }, {
        "id" : "479",
        "type" : "owl:disjointWith"
      }, {
        "id" : "480",
        "type" : "owl:disjointWith"
      }, {
        "id" : "481",
        "type" : "owl:disjointWith"
      }, {
        "id" : "483",
        "type" : "owl:disjointWith"
      }, {
        "id" : "484",
        "type" : "owl:disjointWith"
      }, {
        "id" : "485",
        "type" : "owl:disjointWith"
      }, {
        "id" : "486",
        "type" : "owl:disjointWith"
      }, {
        "id" : "487",
        "type" : "owl:disjointWith"
      }, {
        "id" : "488",
        "type" : "owl:disjointWith"
      }, {
        "id" : "490",
        "type" : "owl:disjointWith"
      }, {
        "id" : "491",
        "type" : "owl:disjointWith"
      }, {
        "id" : "493",
        "type" : "owl:disjointWith"
      }, {
        "id" : "494",
        "type" : "owl:disjointWith"
      }, {
        "id" : "495",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "496",
        "type" : "owl:disjointWith"
      }, {
        "id" : "497",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "498",
        "type" : "owl:disjointWith"
      }, {
        "id" : "499",
        "type" : "rdfs:SubClassOf"
      }, {
        "id" : "500",
        "type" : "owl:disjointWith"
      }, {
        "id" : "501",
        "type" : "owl:objectProperty"
      }, {
        "id" : "502",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "504",
        "type" : "owl:disjointWith"
      }, {
        "id" : "505",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "507",
        "type" : "owl:disjointWith"
      }, {
        "id" : "508",
        "type" : "owl:disjointWith"
      }, {
        "id" : "509",
        "type" : "owl:disjointWith"
      }, {
        "id" : "510",
        "type" : "owl:disjointWith"
      }, {
        "id" : "511",
        "type" : "owl:disjointWith"
      }, {
        "id" : "513",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "514",
        "type" : "owl:disjointWith"
      }, {
        "id" : "515",
        "type" : "owl:disjointWith"
      }, {
        "id" : "516",
        "type" : "owl:disjointWith"
      }, {
        "id" : "518",
        "type" : "owl:disjointWith"
      }, {
        "id" : "519",
        "type" : "owl:disjointWith"
      }, {
        "id" : "520",
        "type" : "owl:disjointWith"
      }, {
        "id" : "521",
        "type" : "owl:disjointWith"
      }, {
        "id" : "522",
        "type" : "owl:disjointWith"
      }, {
        "id" : "523",
        "type" : "owl:disjointWith"
      }, {
        "id" : "524",
        "type" : "owl:disjointWith"
      }, {
        "id" : "526",
        "type" : "owl:disjointWith"
      }, {
        "id" : "528",
        "type" : "owl:disjointWith"
      }, {
        "id" : "530",
        "type" : "owl:disjointWith"
      }, {
        "id" : "531",
        "type" : "owl:disjointWith"
      }, {
        "id" : "532",
        "type" : "owl:objectProperty"
      }, {
        "id" : "533",
        "type" : "owl:disjointWith"
      }, {
        "id" : "535",
        "type" : "owl:disjointWith"
      }, {
        "id" : "536",
        "type" : "owl:disjointWith"
      }, {
        "id" : "537",
        "type" : "owl:disjointWith"
      }, {
        "id" : "538",
        "type" : "owl:disjointWith"
      }, {
        "id" : "539",
        "type" : "owl:disjointWith"
      }, {
        "id" : "540",
        "type" : "owl:disjointWith"
      }, {
        "id" : "541",
        "type" : "owl:disjointWith"
      }, {
        "id" : "263",
        "type" : "owl:objectProperty"
      }, {
        "id" : "542",
        "type" : "owl:disjointWith"
      }, {
        "id" : "544",
        "type" : "owl:disjointWith"
      }, {
        "id" : "545",
        "type" : "owl:disjointWith"
      }, {
        "id" : "547",
        "type" : "owl:disjointWith"
      }, {
        "id" : "549",
        "type" : "owl:disjointWith"
      }, {
        "id" : "551",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "552",
        "type" : "owl:disjointWith"
      }, {
        "id" : "554",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "555",
        "type" : "owl:disjointWith"
      }, {
        "id" : "556",
        "type" : "owl:disjointWith"
      }, {
        "id" : "557",
        "type" : "owl:disjointWith"
      }, {
        "id" : "558",
        "type" : "owl:disjointWith"
      }, {
        "id" : "559",
        "type" : "owl:disjointWith"
      }, {
        "id" : "560",
        "type" : "owl:disjointWith"
      }, {
        "id" : "561",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "562",
        "type" : "owl:disjointWith"
      }, {
        "id" : "563",
        "type" : "owl:disjointWith"
      }, {
        "id" : "564",
        "type" : "owl:disjointWith"
      }, {
        "id" : "565",
        "type" : "owl:disjointWith"
      }, {
        "id" : "566",
        "type" : "owl:someValuesFrom"
      }, {
        "id" : "567",
        "type" : "owl:disjointWith"
      }, {
        "id" : "568",
        "type" : "owl:disjointWith"
      }, {
        "id" : "569",
        "type" : "owl:disjointWith"
      }, {
        "id" : "570",
        "type" : "owl:disjointWith"
      }, {
        "id" : "571",
        "type" : "owl:disjointWith"
      }, {
        "id" : "572",
        "type" : "owl:disjointWith"
      }, {
        "id" : "573",
        "type" : "owl:disjointWith"
      }, {
        "id" : "575",
        "type" : "owl:disjointWith"
      }, {
        "id" : "323",
        "type" : "owl:objectProperty"
      }, {
        "id" : "576",
        "type" : "owl:disjointWith"
      }, {
        "id" : "577",
        "type" : "owl:disjointWith"
      }, {
        "id" : "578",
        "type" : "owl:disjointWith"
      }, {
        "id" : "579",
        "type" : "owl:disjointWith"
      }, {
        "id" : "580",
        "type" : "owl:objectProperty"
      }, {
        "id" : "581",
        "type" : "owl:objectProperty"
      }, {
        "id" : "582",
        "type" : "owl:disjointWith"
      }, {
        "id" : "583",
        "type" : "owl:objectProperty"
      }, {
        "id" : "585",
        "type" : "owl:disjointWith"
      }, {
        "id" : "586",
        "type" : "owl:objectProperty"
      }, {
        "id" : "588",
        "type" : "owl:disjointWith"
      }, {
        "id" : "589",
        "type" : "owl:objectProperty"
      }, {
        "id" : "590",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "591",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "3",
        "type" : "owl:objectProperty"
      }, {
        "id" : "592",
        "type" : "owl:disjointWith"
      }, {
        "id" : "593",
        "type" : "owl:disjointWith"
      }, {
        "id" : "594",
        "type" : "owl:disjointWith"
      }, {
        "id" : "595",
        "type" : "owl:disjointWith"
      }, {
        "id" : "596",
        "type" : "owl:disjointWith"
      }, {
        "id" : "597",
        "type" : "owl:disjointWith"
      }, {
        "id" : "598",
        "type" : "owl:disjointWith"
      }, {
        "id" : "599",
        "type" : "owl:disjointWith"
      }, {
        "id" : "600",
        "type" : "owl:disjointWith"
      }, {
        "id" : "601",
        "type" : "owl:disjointWith"
      }, {
        "id" : "602",
        "type" : "owl:disjointWith"
      }, {
        "id" : "603",
        "type" : "owl:objectProperty"
      }, {
        "id" : "604",
        "type" : "owl:disjointWith"
      }, {
        "id" : "605",
        "type" : "owl:disjointWith"
      }, {
        "id" : "606",
        "type" : "owl:disjointWith"
      }, {
        "id" : "607",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "608",
        "type" : "owl:disjointWith"
      }, {
        "id" : "609",
        "type" : "owl:disjointWith"
      }, {
        "id" : "610",
        "type" : "owl:disjointWith"
      }, {
        "id" : "611",
        "type" : "owl:disjointWith"
      }, {
        "id" : "612",
        "type" : "owl:disjointWith"
      }, {
        "id" : "613",
        "type" : "owl:disjointWith"
      }, {
        "id" : "614",
        "type" : "owl:disjointWith"
      }, {
        "id" : "615",
        "type" : "owl:disjointWith"
      }, {
        "id" : "616",
        "type" : "owl:disjointWith"
      }, {
        "id" : "617",
        "type" : "owl:objectProperty"
      }, {
        "id" : "584",
        "type" : "owl:objectProperty"
      }, {
        "id" : "618",
        "type" : "owl:disjointWith"
      }, {
        "id" : "619",
        "type" : "owl:disjointWith"
      }, {
        "id" : "620",
        "type" : "owl:disjointWith"
      }, {
        "id" : "621",
        "type" : "owl:disjointWith"
      }, {
        "id" : "622",
        "type" : "owl:disjointWith"
      }, {
        "id" : "623",
        "type" : "owl:disjointWith"
      }, {
        "id" : "624",
        "type" : "owl:disjointWith"
      }, {
        "id" : "625",
        "type" : "owl:disjointWith"
      }, {
        "id" : "626",
        "type" : "owl:disjointWith"
      }, {
        "id" : "627",
        "type" : "owl:disjointWith"
      }, {
        "id" : "628",
        "type" : "owl:disjointWith"
      }, {
        "id" : "629",
        "type" : "owl:disjointWith"
      }, {
        "id" : "630",
        "type" : "owl:disjointWith"
      }, {
        "id" : "631",
        "type" : "owl:disjointWith"
      }, {
        "id" : "632",
        "type" : "owl:disjointWith"
      }, {
        "id" : "633",
        "type" : "owl:disjointWith"
      }, {
        "id" : "634",
        "type" : "owl:disjointWith"
      }, {
        "id" : "635",
        "type" : "owl:disjointWith"
      }, {
        "id" : "636",
        "type" : "owl:disjointWith"
      }, {
        "id" : "637",
        "type" : "owl:disjointWith"
      }, {
        "id" : "638",
        "type" : "owl:disjointWith"
      }, {
        "id" : "639",
        "type" : "owl:disjointWith"
      }, {
        "id" : "640",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "587",
        "type" : "owl:objectProperty"
      }, {
        "id" : "641",
        "type" : "owl:disjointWith"
      }, {
        "id" : "642",
        "type" : "owl:disjointWith"
      }, {
        "id" : "643",
        "type" : "owl:disjointWith"
      }, {
        "id" : "644",
        "type" : "owl:disjointWith"
      }, {
        "id" : "645",
        "type" : "owl:disjointWith"
      }, {
        "id" : "646",
        "type" : "owl:disjointWith"
      }, {
        "id" : "647",
        "type" : "owl:disjointWith"
      }, {
        "id" : "648",
        "type" : "owl:disjointWith"
      }, {
        "id" : "649",
        "type" : "owl:disjointWith"
      }, {
        "id" : "650",
        "type" : "owl:disjointWith"
      }, {
        "id" : "651",
        "type" : "owl:disjointWith"
      }, {
        "id" : "652",
        "type" : "owl:disjointWith"
      }, {
        "id" : "653",
        "type" : "owl:disjointWith"
      }, {
        "id" : "654",
        "type" : "owl:disjointWith"
      }, {
        "id" : "655",
        "type" : "owl:disjointWith"
      }, {
        "id" : "656",
        "type" : "owl:objectProperty"
      }, {
        "id" : "657",
        "type" : "owl:objectProperty"
      }, {
        "id" : "658",
        "type" : "owl:objectProperty"
      }, {
        "id" : "659",
        "type" : "owl:objectProperty"
      }, {
        "id" : "660",
        "type" : "owl:objectProperty"
      }, {
        "id" : "662",
        "type" : "owl:datatypeProperty"
      }, {
        "id" : "663",
        "type" : "owl:disjointWith"
      }, {
        "id" : "664",
        "type" : "owl:disjointWith"
      }, {
        "id" : "665",
        "type" : "owl:disjointWith"
      }, {
        "id" : "666",
        "type" : "owl:disjointWith"
      }, {
        "id" : "667",
        "type" : "owl:disjointWith"
      }, {
        "id" : "668",
        "type" : "owl:disjointWith"
      }, {
        "id" : "669",
        "type" : "owl:disjointWith"
      }, {
        "id" : "670",
        "type" : "owl:disjointWith"
      }, {
        "id" : "671",
        "type" : "owl:disjointWith"
      }, {
        "id" : "672",
        "type" : "owl:disjointWith"
      }, {
        "id" : "661",
        "type" : "owl:objectProperty"
      }, {
        "id" : "295",
        "type" : "owl:objectProperty"
      } ],
    "propertyAttribute" : [ {
      "iri" : "http://edas#hasReviewHistory",
      "inverse" : "3",
      "baseIri" : "http://edas",
      "range" : "2",
      "label" : {
        "IRI-based" : "hasReviewHistory"
      },
      "domain" : "1",
      "attributes" : [ "object" ],
      "id" : "0"
    }, {
      "range" : "6",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "4"
    }, {
      "range" : "6",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "7"
    }, {
      "range" : "11",
      "domain" : "10",
      "attributes" : [ "anonymous", "object" ],
      "id" : "9"
    }, {
      "range" : "13",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "12"
    }, {
      "range" : "15",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "14"
    }, {
      "range" : "15",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "16"
    }, {
      "range" : "20",
      "domain" : "19",
      "attributes" : [ "anonymous", "object" ],
      "id" : "18"
    }, {
      "range" : "13",
      "domain" : "22",
      "attributes" : [ "anonymous", "object" ],
      "id" : "21"
    }, {
      "range" : "25",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "24"
    }, {
      "range" : "27",
      "domain" : "15",
      "attributes" : [ "anonymous", "object" ],
      "id" : "26"
    }, {
      "range" : "30",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "28"
    }, {
      "range" : "13",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "31"
    }, {
      "range" : "34",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "33"
    }, {
      "range" : "15",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "35"
    }, {
      "range" : "29",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "36"
    }, {
      "range" : "13",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "38"
    }, {
      "range" : "5",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "39"
    }, {
      "range" : "15",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "40"
    }, {
      "range" : "42",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "41"
    }, {
      "range" : "13",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "43"
    }, {
      "range" : "45",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "44"
    }, {
      "range" : "22",
      "domain" : "15",
      "attributes" : [ "anonymous", "object" ],
      "id" : "46"
    }, {
      "range" : "48",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "47"
    }, {
      "range" : "5",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "49"
    }, {
      "range" : "15",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "50"
    }, {
      "range" : "45",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "52"
    }, {
      "range" : "13",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "59"
    }, {
      "iri" : "http://edas#hasCostAmount",
      "baseIri" : "http://edas",
      "range" : "63",
      "label" : {
        "IRI-based" : "hasCostAmount"
      },
      "domain" : "62",
      "attributes" : [ "datatype" ],
      "id" : "61"
    }, {
      "range" : "25",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "64"
    }, {
      "range" : "13",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "65"
    }, {
      "range" : "34",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "67"
    }, {
      "range" : "51",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "68"
    }, {
      "range" : "13",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "70"
    }, {
      "range" : "5",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "71"
    }, {
      "range" : "22",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "72"
    }, {
      "range" : "51",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "73"
    }, {
      "range" : "13",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "74"
    }, {
      "range" : "5",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "76"
    }, {
      "range" : "6",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "77"
    }, {
      "range" : "51",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "78"
    }, {
      "range" : "13",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "79"
    }, {
      "range" : "53",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "80"
    }, {
      "range" : "6",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "81"
    }, {
      "range" : "85",
      "domain" : "84",
      "attributes" : [ "anonymous", "object" ],
      "id" : "83"
    }, {
      "range" : "30",
      "domain" : "87",
      "attributes" : [ "anonymous", "object" ],
      "id" : "86"
    }, {
      "range" : "89",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "88"
    }, {
      "range" : "6",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "90"
    }, {
      "range" : "84",
      "domain" : "92",
      "attributes" : [ "anonymous", "object" ],
      "id" : "91"
    }, {
      "range" : "30",
      "domain" : "94",
      "attributes" : [ "anonymous", "object" ],
      "id" : "93"
    }, {
      "range" : "75",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "95"
    }, {
      "range" : "6",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "96"
    }, {
      "range" : "75",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "97"
    }, {
      "range" : "30",
      "domain" : "99",
      "attributes" : [ "anonymous", "object" ],
      "id" : "98"
    }, {
      "range" : "5",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "100"
    }, {
      "range" : "6",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "102"
    }, {
      "range" : "27",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "103"
    }, {
      "range" : "30",
      "domain" : "105",
      "attributes" : [ "anonymous", "object" ],
      "id" : "104"
    }, {
      "range" : "5",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "106"
    }, {
      "range" : "6",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "107"
    }, {
      "range" : "51",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "108"
    }, {
      "range" : "13",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "109"
    }, {
      "range" : "5",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "110"
    }, {
      "range" : "27",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "111"
    }, {
      "range" : "89",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "112"
    }, {
      "range" : "13",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "113"
    }, {
      "range" : "27",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "114"
    }, {
      "range" : "6",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "115"
    }, {
      "range" : "22",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "116"
    }, {
      "range" : "5",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "117"
    }, {
      "range" : "6",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "118"
    }, {
      "range" : "22",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "119"
    }, {
      "iri" : "http://edas#hasAttendee",
      "baseIri" : "http://edas",
      "range" : "23",
      "label" : {
        "IRI-based" : "hasAttendee"
      },
      "domain" : "42",
      "attributes" : [ "object" ],
      "id" : "123"
    }, {
      "range" : "126",
      "domain" : "125",
      "attributes" : [ "anonymous", "object" ],
      "id" : "124"
    }, {
      "range" : "89",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "128"
    }, {
      "range" : "126",
      "domain" : "130",
      "attributes" : [ "anonymous", "object" ],
      "id" : "129"
    }, {
      "range" : "6",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "131"
    }, {
      "range" : "75",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "132"
    }, {
      "range" : "42",
      "domain" : "134",
      "attributes" : [ "anonymous", "object" ],
      "id" : "133"
    }, {
      "range" : "5",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "135"
    }, {
      "range" : "89",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "136"
    }, {
      "range" : "138",
      "domain" : "84",
      "attributes" : [ "anonymous", "object" ],
      "id" : "137"
    }, {
      "range" : "42",
      "domain" : "55",
      "attributes" : [ "anonymous", "object" ],
      "id" : "139"
    }, {
      "range" : "66",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "140"
    }, {
      "range" : "22",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "141"
    }, {
      "range" : "20",
      "domain" : "143",
      "attributes" : [ "anonymous", "object" ],
      "id" : "142"
    }, {
      "range" : "60",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "144"
    }, {
      "range" : "51",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "145"
    }, {
      "range" : "20",
      "domain" : "147",
      "attributes" : [ "anonymous", "object" ],
      "id" : "146"
    }, {
      "range" : "32",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "148"
    }, {
      "range" : "69",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "149"
    }, {
      "range" : "134",
      "domain" : "151",
      "attributes" : [ "anonymous", "object" ],
      "id" : "150"
    }, {
      "range" : "8",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "152"
    }, {
      "range" : "27",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "153"
    }, {
      "range" : "134",
      "domain" : "155",
      "attributes" : [ "anonymous", "object" ],
      "id" : "154"
    }, {
      "iri" : "http://edas#hasCity",
      "baseIri" : "http://edas",
      "range" : "160",
      "label" : {
        "IRI-based" : "hasCity"
      },
      "domain" : "159",
      "attributes" : [ "datatype" ],
      "id" : "158"
    }, {
      "range" : "25",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "161"
    }, {
      "range" : "60",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "162"
    }, {
      "range" : "134",
      "domain" : "19",
      "attributes" : [ "anonymous", "object" ],
      "id" : "163"
    }, {
      "range" : "15",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "164"
    }, {
      "range" : "25",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "165"
    }, {
      "range" : "134",
      "domain" : "20",
      "attributes" : [ "anonymous", "object" ],
      "id" : "166"
    }, {
      "range" : "168",
      "domain" : "54",
      "attributes" : [ "anonymous", "object" ],
      "id" : "167"
    }, {
      "range" : "82",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "169"
    }, {
      "range" : "172",
      "domain" : "171",
      "attributes" : [ "anonymous", "object" ],
      "id" : "170"
    }, {
      "range" : "6",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "173"
    }, {
      "range" : "66",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "174"
    }, {
      "range" : "15",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "179"
    }, {
      "iri" : "http://edas#hasStartDateTime",
      "baseIri" : "http://edas",
      "range" : "183",
      "label" : {
        "IRI-based" : "hasStartDateTime"
      },
      "domain" : "42",
      "attributes" : [ "datatype" ],
      "id" : "182"
    }, {
      "range" : "55",
      "domain" : "168",
      "attributes" : [ "anonymous", "object" ],
      "id" : "184"
    }, {
      "range" : "10",
      "domain" : "186",
      "attributes" : [ "anonymous", "object" ],
      "id" : "185"
    }, {
      "range" : "55",
      "domain" : "176",
      "attributes" : [ "anonymous", "object" ],
      "id" : "187"
    }, {
      "range" : "89",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "188"
    }, {
      "range" : "11",
      "domain" : "186",
      "attributes" : [ "anonymous", "object" ],
      "id" : "189"
    }, {
      "range" : "55",
      "domain" : "54",
      "attributes" : [ "anonymous", "object" ],
      "id" : "190"
    }, {
      "range" : "6",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "192"
    }, {
      "range" : "22",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "193"
    }, {
      "range" : "37",
      "domain" : "122",
      "attributes" : [ "anonymous", "object" ],
      "id" : "194"
    }, {
      "range" : "17",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "195"
    }, {
      "range" : "75",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "196"
    }, {
      "range" : "37",
      "domain" : "198",
      "attributes" : [ "anonymous", "object" ],
      "id" : "197"
    }, {
      "range" : "69",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "199"
    }, {
      "range" : "17",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "200"
    }, {
      "range" : "62",
      "domain" : "202",
      "attributes" : [ "anonymous", "object" ],
      "id" : "201"
    }, {
      "range" : "22",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "203"
    }, {
      "range" : "89",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "204"
    }, {
      "range" : "121",
      "domain" : "10",
      "attributes" : [ "anonymous", "object" ],
      "id" : "205"
    }, {
      "range" : "45",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "206"
    }, {
      "range" : "17",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "207"
    }, {
      "range" : "121",
      "domain" : "186",
      "attributes" : [ "anonymous", "object" ],
      "id" : "208"
    }, {
      "range" : "51",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "209"
    }, {
      "range" : "17",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "210"
    }, {
      "range" : "121",
      "domain" : "120",
      "attributes" : [ "anonymous", "object" ],
      "id" : "211"
    }, {
      "range" : "27",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "212"
    }, {
      "range" : "17",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "213"
    }, {
      "range" : "121",
      "domain" : "11",
      "attributes" : [ "anonymous", "object" ],
      "id" : "214"
    }, {
      "range" : "34",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "215"
    }, {
      "range" : "25",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "216"
    }, {
      "range" : "121",
      "domain" : "218",
      "attributes" : [ "anonymous", "object" ],
      "id" : "217"
    }, {
      "range" : "75",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "219"
    }, {
      "range" : "17",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "220"
    }, {
      "range" : "82",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "222"
    }, {
      "range" : "156",
      "domain" : "157",
      "attributes" : [ "anonymous", "object" ],
      "id" : "225"
    }, {
      "range" : "17",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "226"
    }, {
      "range" : "37",
      "domain" : "224",
      "attributes" : [ "anonymous", "object" ],
      "id" : "227"
    }, {
      "range" : "159",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "228"
    }, {
      "range" : "45",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "229"
    }, {
      "range" : "75",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "230"
    }, {
      "range" : "48",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "231"
    }, {
      "range" : "45",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "232"
    }, {
      "range" : "89",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "233"
    }, {
      "range" : "235",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "234"
    }, {
      "range" : "25",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "236"
    }, {
      "range" : "126",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "237"
    }, {
      "range" : "42",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "238"
    }, {
      "range" : "45",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "239"
    }, {
      "range" : "42",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "240"
    }, {
      "range" : "138",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "241"
    }, {
      "range" : "45",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "242"
    }, {
      "range" : "30",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "243"
    }, {
      "range" : "84",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "244"
    }, {
      "range" : "27",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "245"
    }, {
      "range" : "66",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "246"
    }, {
      "range" : "85",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "247"
    }, {
      "range" : "75",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "248"
    }, {
      "range" : "66",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "249"
    }, {
      "range" : "92",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "250"
    }, {
      "range" : "89",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "251"
    }, {
      "range" : "89",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "252"
    }, {
      "range" : "13",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "253"
    }, {
      "range" : "45",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "254"
    }, {
      "range" : "75",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "255"
    }, {
      "range" : "42",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "256"
    }, {
      "range" : "45",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "257"
    }, {
      "range" : "75",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "258"
    }, {
      "range" : "181",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "259"
    }, {
      "range" : "94",
      "domain" : "87",
      "attributes" : [ "anonymous", "object" ],
      "id" : "260"
    }, {
      "range" : "48",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "261"
    }, {
      "iri" : "http://edas#belongsToEvent",
      "inverse" : "263",
      "baseIri" : "http://edas",
      "range" : "42",
      "label" : {
        "IRI-based" : "belongsToEvent"
      },
      "domain" : "11",
      "attributes" : [ "object" ],
      "id" : "262"
    }, {
      "range" : "48",
      "domain" : "181",
      "attributes" : [ "anonymous", "object" ],
      "id" : "264"
    }, {
      "range" : "99",
      "domain" : "87",
      "attributes" : [ "anonymous", "object" ],
      "id" : "265"
    }, {
      "range" : "42",
      "domain" : "48",
      "attributes" : [ "anonymous", "object" ],
      "id" : "266"
    }, {
      "range" : "42",
      "domain" : "181",
      "attributes" : [ "anonymous", "object" ],
      "id" : "267"
    }, {
      "range" : "105",
      "domain" : "99",
      "attributes" : [ "anonymous", "object" ],
      "id" : "268"
    }, {
      "range" : "48",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "269"
    }, {
      "range" : "147",
      "domain" : "143",
      "attributes" : [ "anonymous", "object" ],
      "id" : "270"
    }, {
      "range" : "94",
      "domain" : "99",
      "attributes" : [ "anonymous", "object" ],
      "id" : "271"
    }, {
      "range" : "127",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "272"
    }, {
      "iri" : "http://edas#hasEmail",
      "baseIri" : "http://edas",
      "range" : "275",
      "label" : {
        "IRI-based" : "hasEmail"
      },
      "domain" : "274",
      "attributes" : [ "datatype" ],
      "id" : "273"
    }, {
      "range" : "25",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "276"
    }, {
      "range" : "172",
      "domain" : "278",
      "attributes" : [ "anonymous", "object" ],
      "id" : "277"
    }, {
      "range" : "89",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "279"
    }, {
      "range" : "126",
      "domain" : "181",
      "attributes" : [ "anonymous", "object" ],
      "id" : "280"
    }, {
      "range" : "172",
      "domain" : "282",
      "attributes" : [ "anonymous", "object" ],
      "id" : "281"
    }, {
      "range" : "27",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "283"
    }, {
      "range" : "181",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "284"
    }, {
      "range" : "20",
      "domain" : "151",
      "attributes" : [ "anonymous", "object" ],
      "id" : "285"
    }, {
      "range" : "89",
      "domain" : "27",
      "attributes" : [ "anonymous", "object" ],
      "id" : "286"
    }, {
      "range" : "288",
      "domain" : "181",
      "attributes" : [ "anonymous", "object" ],
      "id" : "287"
    }, {
      "range" : "19",
      "domain" : "151",
      "attributes" : [ "anonymous", "object" ],
      "id" : "289"
    }, {
      "range" : "27",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "290"
    }, {
      "range" : "159",
      "domain" : "181",
      "attributes" : [ "anonymous", "object" ],
      "id" : "291"
    }, {
      "range" : "155",
      "domain" : "151",
      "attributes" : [ "anonymous", "object" ],
      "id" : "292"
    }, {
      "range" : "27",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "293"
    }, {
      "iri" : "http://edas#hasMenu",
      "inverse" : "295",
      "baseIri" : "http://edas",
      "range" : "186",
      "label" : {
        "IRI-based" : "hasMenu"
      },
      "domain" : "168",
      "attributes" : [ "object" ],
      "id" : "294"
    }, {
      "range" : "181",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "296"
    }, {
      "range" : "105",
      "domain" : "87",
      "attributes" : [ "anonymous", "object" ],
      "id" : "297"
    }, {
      "range" : "27",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "298"
    }, {
      "range" : "15",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "299"
    }, {
      "range" : "235",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "300"
    }, {
      "range" : "25",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "301"
    }, {
      "range" : "10",
      "domain" : "303",
      "attributes" : [ "anonymous", "object" ],
      "id" : "302"
    }, {
      "range" : "53",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "304"
    }, {
      "range" : "48",
      "domain" : "235",
      "attributes" : [ "anonymous", "object" ],
      "id" : "305"
    }, {
      "range" : "27",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "306"
    }, {
      "range" : "10",
      "domain" : "308",
      "attributes" : [ "anonymous", "object" ],
      "id" : "307"
    }, {
      "range" : "25",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "309"
    }, {
      "range" : "42",
      "domain" : "235",
      "attributes" : [ "anonymous", "object" ],
      "id" : "310"
    }, {
      "range" : "25",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "311"
    }, {
      "range" : "10",
      "domain" : "313",
      "attributes" : [ "anonymous", "object" ],
      "id" : "312"
    }, {
      "range" : "181",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "314"
    }, {
      "range" : "235",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "315"
    }, {
      "range" : "25",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "316"
    }, {
      "range" : "181",
      "domain" : "121",
      "attributes" : [ "anonymous", "object" ],
      "id" : "317"
    }, {
      "range" : "235",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "318"
    }, {
      "iri" : "http://edas#hasPostalCode",
      "baseIri" : "http://edas",
      "range" : "320",
      "label" : {
        "IRI-based" : "hasPostalCode"
      },
      "domain" : "159",
      "attributes" : [ "datatype" ],
      "id" : "319"
    }, {
      "range" : "235",
      "domain" : "181",
      "attributes" : [ "anonymous", "object" ],
      "id" : "321"
    }, {
      "iri" : "http://edas#hasMember",
      "inverse" : "323",
      "baseIri" : "http://edas",
      "range" : "23",
      "label" : {
        "IRI-based" : "hasMember"
      },
      "domain" : "288",
      "attributes" : [ "object" ],
      "id" : "322"
    }, {
      "range" : "29",
      "domain" : "2",
      "attributes" : [ "anonymous", "object" ],
      "id" : "325"
    }, {
      "range" : "22",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "326"
    }, {
      "range" : "168",
      "domain" : "191",
      "attributes" : [ "anonymous", "object" ],
      "id" : "327"
    }, {
      "range" : "126",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "328"
    }, {
      "range" : "89",
      "domain" : "22",
      "attributes" : [ "anonymous", "object" ],
      "id" : "329"
    }, {
      "range" : "176",
      "domain" : "175",
      "attributes" : [ "anonymous", "object" ],
      "id" : "330"
    }, {
      "range" : "53",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "331"
    }, {
      "range" : "126",
      "domain" : "48",
      "attributes" : [ "anonymous", "object" ],
      "id" : "332"
    }, {
      "range" : "22",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "333"
    }, {
      "range" : "176",
      "domain" : "324",
      "attributes" : [ "anonymous", "object" ],
      "id" : "334"
    }, {
      "iri" : "http://edas#startDate",
      "baseIri" : "http://edas",
      "range" : "336",
      "label" : {
        "IRI-based" : "startDate"
      },
      "maxCardinality" : "1",
      "domain" : "288",
      "comment" : {
        "undefined" : "Conference Start Date and Time"
      },
      "attributes" : [ "datatype" ],
      "id" : "335"
    }, {
      "range" : "53",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "337"
    }, {
      "range" : "126",
      "domain" : "42",
      "attributes" : [ "anonymous", "object" ],
      "id" : "338"
    }, {
      "range" : "22",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "339"
    }, {
      "range" : "10",
      "domain" : "156",
      "attributes" : [ "anonymous", "object" ],
      "id" : "340"
    }, {
      "range" : "27",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "341"
    }, {
      "range" : "126",
      "domain" : "235",
      "attributes" : [ "anonymous", "object" ],
      "id" : "342"
    }, {
      "range" : "22",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "343"
    }, {
      "range" : "10",
      "domain" : "345",
      "attributes" : [ "anonymous", "object" ],
      "id" : "344"
    }, {
      "range" : "53",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "346"
    }, {
      "range" : "126",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "347"
    }, {
      "range" : "303",
      "domain" : "345",
      "attributes" : [ "anonymous", "object" ],
      "id" : "348"
    }, {
      "range" : "10",
      "domain" : "221",
      "attributes" : [ "anonymous", "object" ],
      "id" : "349"
    }, {
      "range" : "53",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "350"
    }, {
      "range" : "15",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "351"
    }, {
      "range" : "89",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "352"
    }, {
      "range" : "13",
      "domain" : "27",
      "attributes" : [ "anonymous", "object" ],
      "id" : "353"
    }, {
      "range" : "53",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "354"
    }, {
      "range" : "15",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "355"
    }, {
      "range" : "27",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "356"
    }, {
      "range" : "13",
      "domain" : "358",
      "attributes" : [ "anonymous", "object" ],
      "id" : "357"
    }, {
      "range" : "89",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "359"
    }, {
      "range" : "15",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "360"
    }, {
      "range" : "66",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "361"
    }, {
      "range" : "13",
      "domain" : "89",
      "attributes" : [ "anonymous", "object" ],
      "id" : "362"
    }, {
      "range" : "34",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "363"
    }, {
      "range" : "15",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "364"
    }, {
      "range" : "27",
      "domain" : "22",
      "attributes" : [ "anonymous", "object" ],
      "id" : "365"
    }, {
      "range" : "29",
      "domain" : "367",
      "attributes" : [ "anonymous", "object" ],
      "id" : "366"
    }, {
      "range" : "6",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "368"
    }, {
      "range" : "89",
      "domain" : "15",
      "attributes" : [ "anonymous", "object" ],
      "id" : "369"
    }, {
      "range" : "22",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "370"
    }, {
      "range" : "53",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "371"
    }, {
      "range" : "126",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "372"
    }, {
      "range" : "75",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "373"
    }, {
      "iri" : "http://edas#isTopicOf",
      "baseIri" : "http://edas",
      "range" : "375",
      "label" : {
        "IRI-based" : "isTopicOf"
      },
      "domain" : "13",
      "attributes" : [ "object" ],
      "id" : "374"
    }, {
      "range" : "13",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "376"
    }, {
      "range" : "75",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "377"
    }, {
      "range" : "13",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "378"
    }, {
      "range" : "15",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "379"
    }, {
      "range" : "25",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "380"
    }, {
      "range" : "13",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "381"
    }, {
      "range" : "22",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "382"
    }, {
      "range" : "15",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "383"
    }, {
      "range" : "22",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "384"
    }, {
      "range" : "13",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "385"
    }, {
      "range" : "53",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "386"
    }, {
      "range" : "15",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "387"
    }, {
      "range" : "69",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "388"
    }, {
      "range" : "13",
      "domain" : "15",
      "attributes" : [ "anonymous", "object" ],
      "id" : "389"
    }, {
      "range" : "53",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "390"
    }, {
      "range" : "15",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "391"
    }, {
      "range" : "69",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "392"
    }, {
      "range" : "13",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "393"
    }, {
      "range" : "127",
      "domain" : "395",
      "attributes" : [ "anonymous", "object" ],
      "id" : "394"
    }, {
      "range" : "5",
      "domain" : "138",
      "attributes" : [ "anonymous", "object" ],
      "id" : "396"
    }, {
      "iri" : "http://edas#paperDueOn",
      "baseIri" : "http://edas",
      "range" : "398",
      "label" : {
        "IRI-based" : "paperDueOn"
      },
      "maxCardinality" : "1",
      "domain" : "288",
      "comment" : {
        "undefined" : "Conference Paper Date and Time Deadline"
      },
      "attributes" : [ "datatype" ],
      "id" : "397"
    }, {
      "range" : "5",
      "domain" : "395",
      "attributes" : [ "anonymous", "object" ],
      "id" : "399"
    }, {
      "range" : "5",
      "domain" : "84",
      "attributes" : [ "anonymous", "object" ],
      "id" : "400"
    }, {
      "range" : "5",
      "domain" : "402",
      "attributes" : [ "anonymous", "object" ],
      "id" : "401"
    }, {
      "range" : "5",
      "domain" : "127",
      "attributes" : [ "anonymous", "object" ],
      "id" : "403"
    }, {
      "range" : "5",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "404"
    }, {
      "range" : "181",
      "domain" : "406",
      "attributes" : [ "anonymous", "object" ],
      "id" : "405"
    }, {
      "range" : "181",
      "domain" : "180",
      "attributes" : [ "anonymous", "object" ],
      "id" : "407"
    }, {
      "range" : "181",
      "domain" : "409",
      "attributes" : [ "anonymous", "object" ],
      "id" : "408"
    }, {
      "range" : "181",
      "domain" : "411",
      "attributes" : [ "anonymous", "object" ],
      "id" : "410"
    }, {
      "iri" : "http://edas#hasCostCurrency",
      "baseIri" : "http://edas",
      "range" : "413",
      "label" : {
        "IRI-based" : "hasCostCurrency"
      },
      "domain" : "62",
      "attributes" : [ "datatype" ],
      "id" : "412"
    }, {
      "iri" : "http://edas#hasTopic",
      "inverse" : "374",
      "baseIri" : "http://edas",
      "range" : "13",
      "label" : {
        "IRI-based" : "hasTopic"
      },
      "cardinality" : "1",
      "domain" : "415",
      "attributes" : [ "object" ],
      "id" : "414"
    }, {
      "range" : "138",
      "domain" : "395",
      "attributes" : [ "anonymous", "object" ],
      "id" : "416"
    }, {
      "range" : "402",
      "domain" : "395",
      "attributes" : [ "anonymous", "object" ],
      "id" : "417"
    }, {
      "iri" : "http://edas#relatedToEvent",
      "baseIri" : "http://edas",
      "range" : "151",
      "label" : {
        "IRI-based" : "relatedToEvent"
      },
      "domain" : "303",
      "attributes" : [ "object" ],
      "id" : "418"
    }, {
      "range" : "62",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "419"
    }, {
      "range" : "62",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "420"
    }, {
      "range" : "288",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "421"
    }, {
      "range" : "159",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "422"
    }, {
      "range" : "121",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "423"
    }, {
      "range" : "13",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "424"
    }, {
      "range" : "30",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "425"
    }, {
      "range" : "235",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "426"
    }, {
      "range" : "23",
      "domain" : "428",
      "attributes" : [ "anonymous", "object" ],
      "id" : "427"
    }, {
      "range" : "23",
      "domain" : "430",
      "attributes" : [ "anonymous", "object" ],
      "id" : "429"
    }, {
      "range" : "23",
      "domain" : "282",
      "attributes" : [ "anonymous", "object" ],
      "id" : "431"
    }, {
      "range" : "23",
      "domain" : "278",
      "attributes" : [ "anonymous", "object" ],
      "id" : "432"
    }, {
      "range" : "178",
      "domain" : "434",
      "attributes" : [ "anonymous", "object" ],
      "id" : "433"
    }, {
      "range" : "178",
      "domain" : "177",
      "attributes" : [ "anonymous", "object" ],
      "id" : "435"
    }, {
      "range" : "178",
      "domain" : "437",
      "attributes" : [ "anonymous", "object" ],
      "id" : "436"
    }, {
      "range" : "178",
      "domain" : "439",
      "attributes" : [ "anonymous", "object" ],
      "id" : "438"
    }, {
      "range" : "5",
      "domain" : "85",
      "attributes" : [ "anonymous", "object" ],
      "id" : "440"
    }, {
      "range" : "5",
      "domain" : "92",
      "attributes" : [ "anonymous", "object" ],
      "id" : "441"
    }, {
      "iri" : "http://edas#hasFirstName",
      "baseIri" : "http://edas",
      "range" : "443",
      "label" : {
        "IRI-based" : "hasFirstName"
      },
      "domain" : "23",
      "attributes" : [ "datatype" ],
      "id" : "442"
    }, {
      "range" : "62",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "444"
    }, {
      "range" : "48",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "445"
    }, {
      "range" : "126",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "446"
    }, {
      "range" : "448",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "447"
    }, {
      "range" : "235",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "449"
    }, {
      "range" : "42",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "450"
    }, {
      "range" : "181",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "451"
    }, {
      "range" : "121",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "452"
    }, {
      "range" : "13",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "453"
    }, {
      "range" : "48",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "454"
    }, {
      "range" : "358",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "455"
    }, {
      "range" : "358",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "456"
    }, {
      "range" : "358",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "457"
    }, {
      "range" : "448",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "459"
    }, {
      "range" : "48",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "460"
    }, {
      "range" : "358",
      "domain" : "27",
      "attributes" : [ "anonymous", "object" ],
      "id" : "461"
    }, {
      "range" : "358",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "462"
    }, {
      "range" : "288",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "463"
    }, {
      "range" : "159",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "464"
    }, {
      "range" : "42",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "465"
    }, {
      "range" : "181",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "466"
    }, {
      "range" : "448",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "467"
    }, {
      "range" : "448",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "468"
    }, {
      "range" : "448",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "469"
    }, {
      "range" : "121",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "470"
    }, {
      "range" : "126",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "471"
    }, {
      "range" : "235",
      "domain" : "448",
      "attributes" : [ "anonymous", "object" ],
      "id" : "472"
    }, {
      "range" : "448",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "473"
    }, {
      "range" : "85",
      "domain" : "395",
      "attributes" : [ "anonymous", "object" ],
      "id" : "474"
    }, {
      "iri" : "http://edas#relatesTo",
      "baseIri" : "http://edas",
      "range" : "476",
      "label" : {
        "IRI-based" : "relatesTo"
      },
      "domain" : "121",
      "attributes" : [ "object" ],
      "id" : "475"
    }, {
      "range" : "395",
      "domain" : "92",
      "attributes" : [ "anonymous", "object" ],
      "id" : "477"
    }, {
      "range" : "395",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "478"
    }, {
      "range" : "84",
      "domain" : "395",
      "attributes" : [ "anonymous", "object" ],
      "id" : "479"
    }, {
      "range" : "402",
      "domain" : "84",
      "attributes" : [ "anonymous", "object" ],
      "id" : "480"
    }, {
      "range" : "25",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "481"
    }, {
      "range" : "402",
      "domain" : "223",
      "attributes" : [ "anonymous", "object" ],
      "id" : "483"
    }, {
      "range" : "17",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "484"
    }, {
      "range" : "127",
      "domain" : "402",
      "attributes" : [ "anonymous", "object" ],
      "id" : "485"
    }, {
      "range" : "32",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "486"
    }, {
      "range" : "402",
      "domain" : "92",
      "attributes" : [ "anonymous", "object" ],
      "id" : "487"
    }, {
      "range" : "27",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "488"
    }, {
      "range" : "32",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "490"
    }, {
      "range" : "89",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "491"
    }, {
      "range" : "138",
      "domain" : "402",
      "attributes" : [ "anonymous", "object" ],
      "id" : "493"
    }, {
      "range" : "32",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "494"
    }, {
      "range" : "54",
      "domain" : "56",
      "attributes" : [ "anonymous", "object" ],
      "id" : "495"
    }, {
      "range" : "75",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "496"
    }, {
      "range" : "54",
      "domain" : "57",
      "attributes" : [ "anonymous", "object" ],
      "id" : "497"
    }, {
      "range" : "32",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "498"
    }, {
      "range" : "54",
      "domain" : "58",
      "attributes" : [ "anonymous", "object" ],
      "id" : "499"
    }, {
      "range" : "27",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "500"
    }, {
      "iri" : "http://edas#relatedToPaper",
      "inverse" : "418",
      "baseIri" : "http://edas",
      "range" : "303",
      "label" : {
        "IRI-based" : "relatedToPaper"
      },
      "domain" : "151",
      "attributes" : [ "object" ],
      "id" : "501"
    }, {
      "iri" : "http://edas#hasEndDateTime",
      "baseIri" : "http://edas",
      "range" : "503",
      "label" : {
        "IRI-based" : "hasEndDateTime"
      },
      "domain" : "42",
      "attributes" : [ "datatype" ],
      "id" : "502"
    }, {
      "range" : "85",
      "domain" : "402",
      "attributes" : [ "anonymous", "object" ],
      "id" : "504"
    }, {
      "iri" : "http://edas#hasStreet",
      "baseIri" : "http://edas",
      "range" : "506",
      "label" : {
        "IRI-based" : "hasStreet"
      },
      "domain" : "159",
      "attributes" : [ "datatype" ],
      "id" : "505"
    }, {
      "range" : "55",
      "domain" : "134",
      "attributes" : [ "anonymous", "object" ],
      "id" : "507"
    }, {
      "range" : "358",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "508"
    }, {
      "range" : "358",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "509"
    }, {
      "range" : "358",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "510"
    }, {
      "range" : "358",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "511"
    }, {
      "iri" : "http://edas#hasSubmissionDeadline",
      "baseIri" : "http://edas",
      "range" : "489",
      "label" : {
        "IRI-based" : "hasSubmissionDeadline"
      },
      "domain" : "37",
      "attributes" : [ "datatype", "functional" ],
      "id" : "513"
    }, {
      "range" : "358",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "514"
    }, {
      "range" : "358",
      "domain" : "5",
      "attributes" : [ "anonymous", "object" ],
      "id" : "515"
    }, {
      "range" : "22",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "516"
    }, {
      "range" : "358",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "518"
    }, {
      "range" : "34",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "519"
    }, {
      "range" : "358",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "520"
    }, {
      "range" : "34",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "521"
    }, {
      "range" : "34",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "522"
    }, {
      "range" : "34",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "523"
    }, {
      "range" : "303",
      "domain" : "313",
      "attributes" : [ "anonymous", "object" ],
      "id" : "524"
    }, {
      "range" : "313",
      "domain" : "345",
      "attributes" : [ "anonymous", "object" ],
      "id" : "526"
    }, {
      "range" : "32",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "528"
    }, {
      "range" : "32",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "530"
    }, {
      "range" : "22",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "531"
    }, {
      "iri" : "http://edas#attendeeAt",
      "inverse" : "123",
      "baseIri" : "http://edas",
      "range" : "42",
      "label" : {
        "IRI-based" : "attendeeAt"
      },
      "domain" : "23",
      "attributes" : [ "object" ],
      "id" : "532"
    }, {
      "range" : "358",
      "domain" : "22",
      "attributes" : [ "anonymous", "object" ],
      "id" : "533"
    }, {
      "range" : "358",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "535"
    }, {
      "range" : "358",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "536"
    }, {
      "range" : "358",
      "domain" : "15",
      "attributes" : [ "anonymous", "object" ],
      "id" : "537"
    }, {
      "range" : "358",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "538"
    }, {
      "range" : "358",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "539"
    }, {
      "range" : "89",
      "domain" : "358",
      "attributes" : [ "anonymous", "object" ],
      "id" : "540"
    }, {
      "range" : "48",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "541"
    }, {
      "iri" : "http://edas#hasProgramme",
      "baseIri" : "http://edas",
      "range" : "11",
      "label" : {
        "IRI-based" : "hasProgramme"
      },
      "domain" : "42",
      "attributes" : [ "object" ],
      "id" : "263"
    }, {
      "range" : "159",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "542"
    }, {
      "range" : "411",
      "domain" : "406",
      "attributes" : [ "anonymous", "object" ],
      "id" : "544"
    }, {
      "range" : "235",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "545"
    }, {
      "range" : "178",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "547"
    }, {
      "range" : "288",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "549"
    }, {
      "iri" : "http://edas#manuscriptDueOn",
      "baseIri" : "http://edas",
      "range" : "492",
      "label" : {
        "IRI-based" : "manuscriptDueOn"
      },
      "maxCardinality" : "1",
      "domain" : "288",
      "comment" : {
        "undefined" : "Conference Manuscript Date and Time Deadline"
      },
      "attributes" : [ "datatype" ],
      "id" : "551"
    }, {
      "range" : "42",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "552"
    }, {
      "iri" : "http://edas#hasLastName",
      "baseIri" : "http://edas",
      "range" : "529",
      "label" : {
        "IRI-based" : "hasLastName"
      },
      "domain" : "23",
      "attributes" : [ "datatype" ],
      "id" : "554"
    }, {
      "range" : "181",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "555"
    }, {
      "range" : "13",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "556"
    }, {
      "range" : "30",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "557"
    }, {
      "range" : "126",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "558"
    }, {
      "range" : "11",
      "domain" : "218",
      "attributes" : [ "anonymous", "object" ],
      "id" : "559"
    }, {
      "range" : "218",
      "domain" : "120",
      "attributes" : [ "anonymous", "object" ],
      "id" : "560"
    }, {
      "iri" : "http://edas#endDate",
      "baseIri" : "http://edas",
      "range" : "512",
      "label" : {
        "IRI-based" : "endDate"
      },
      "maxCardinality" : "1",
      "domain" : "288",
      "comment" : {
        "undefined" : "Conference End Date and Time"
      },
      "attributes" : [ "datatype" ],
      "id" : "561"
    }, {
      "range" : "121",
      "domain" : "178",
      "attributes" : [ "anonymous", "object" ],
      "id" : "562"
    }, {
      "range" : "138",
      "domain" : "92",
      "attributes" : [ "anonymous", "object" ],
      "id" : "563"
    }, {
      "range" : "178",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "564"
    }, {
      "range" : "85",
      "domain" : "138",
      "attributes" : [ "anonymous", "object" ],
      "id" : "565"
    }, {
      "iri" : "http://edas#hasRating",
      "baseIri" : "http://edas",
      "range" : "30",
      "label" : {
        "IRI-based" : "hasRating"
      },
      "domain" : "157",
      "attributes" : [ "functional", "object", "someValues" ],
      "id" : "566"
    }, {
      "range" : "85",
      "domain" : "92",
      "attributes" : [ "anonymous", "object" ],
      "id" : "567"
    }, {
      "range" : "218",
      "domain" : "10",
      "attributes" : [ "anonymous", "object" ],
      "id" : "568"
    }, {
      "range" : "82",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "569"
    }, {
      "range" : "218",
      "domain" : "186",
      "attributes" : [ "anonymous", "object" ],
      "id" : "570"
    }, {
      "range" : "89",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "571"
    }, {
      "range" : "105",
      "domain" : "94",
      "attributes" : [ "anonymous", "object" ],
      "id" : "572"
    }, {
      "range" : "89",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "573"
    }, {
      "range" : "308",
      "domain" : "221",
      "attributes" : [ "anonymous", "object" ],
      "id" : "575"
    }, {
      "iri" : "http://edas#isMemberOf",
      "baseIri" : "http://edas",
      "range" : "288",
      "label" : {
        "IRI-based" : "isMemberOf"
      },
      "domain" : "23",
      "attributes" : [ "object" ],
      "id" : "323"
    }, {
      "range" : "221",
      "domain" : "345",
      "attributes" : [ "anonymous", "object" ],
      "id" : "576"
    }, {
      "range" : "303",
      "domain" : "221",
      "attributes" : [ "anonymous", "object" ],
      "id" : "577"
    }, {
      "range" : "313",
      "domain" : "221",
      "attributes" : [ "anonymous", "object" ],
      "id" : "578"
    }, {
      "range" : "221",
      "domain" : "156",
      "attributes" : [ "anonymous", "object" ],
      "id" : "579"
    }, {
      "iri" : "http://edas#isLocationOf",
      "inverse" : "581",
      "baseIri" : "http://edas",
      "range" : "42",
      "label" : {
        "IRI-based" : "isLocationOf"
      },
      "domain" : "178",
      "attributes" : [ "object" ],
      "id" : "580"
    }, {
      "iri" : "http://edas#hasLocation",
      "baseIri" : "http://edas",
      "range" : "178",
      "label" : {
        "IRI-based" : "hasLocation"
      },
      "domain" : "42",
      "attributes" : [ "object" ],
      "id" : "581"
    }, {
      "range" : "409",
      "domain" : "406",
      "attributes" : [ "anonymous", "object" ],
      "id" : "582"
    }, {
      "iri" : "http://edas#initiates",
      "inverse" : "584",
      "baseIri" : "http://edas",
      "range" : "37",
      "label" : {
        "IRI-based" : "initiates"
      },
      "domain" : "574",
      "attributes" : [ "object" ],
      "id" : "583"
    }, {
      "range" : "180",
      "domain" : "406",
      "attributes" : [ "anonymous", "object" ],
      "id" : "585"
    }, {
      "iri" : "http://edas#isReviewing",
      "inverse" : "587",
      "baseIri" : "http://edas",
      "range" : "10",
      "label" : {
        "IRI-based" : "isReviewing"
      },
      "domain" : "548",
      "attributes" : [ "object" ],
      "id" : "586"
    }, {
      "range" : "172",
      "domain" : "428",
      "attributes" : [ "anonymous", "object" ],
      "id" : "588"
    }, {
      "iri" : "http://edas#hasRating",
      "baseIri" : "http://edas",
      "range" : "30",
      "label" : {
        "IRI-based" : "hasRating"
      },
      "domain" : "156",
      "attributes" : [ "functional", "object" ],
      "id" : "589"
    }, {
      "iri" : "http://edas#registrationDueOn",
      "baseIri" : "http://edas",
      "range" : "527",
      "label" : {
        "IRI-based" : "registrationDueOn"
      },
      "maxCardinality" : "1",
      "domain" : "288",
      "comment" : {
        "undefined" : "Conference Registration Date and Time Deadline"
      },
      "attributes" : [ "datatype" ],
      "id" : "590"
    }, {
      "iri" : "http://edas#hasPhone",
      "baseIri" : "http://edas",
      "range" : "525",
      "label" : {
        "IRI-based" : "hasPhone"
      },
      "domain" : "159",
      "attributes" : [ "datatype" ],
      "id" : "591"
    }, {
      "iri" : "http://edas#isReviewHistoryOf",
      "baseIri" : "http://edas",
      "range" : "1",
      "label" : {
        "IRI-based" : "isReviewHistoryOf"
      },
      "domain" : "2",
      "attributes" : [ "object" ],
      "id" : "3"
    }, {
      "range" : "48",
      "domain" : "288",
      "attributes" : [ "anonymous", "object" ],
      "id" : "592"
    }, {
      "range" : "288",
      "domain" : "10",
      "attributes" : [ "anonymous", "object" ],
      "id" : "593"
    }, {
      "range" : "288",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "594"
    }, {
      "range" : "126",
      "domain" : "288",
      "attributes" : [ "anonymous", "object" ],
      "id" : "595"
    }, {
      "range" : "288",
      "domain" : "235",
      "attributes" : [ "anonymous", "object" ],
      "id" : "596"
    }, {
      "range" : "288",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "597"
    }, {
      "range" : "127",
      "domain" : "92",
      "attributes" : [ "anonymous", "object" ],
      "id" : "598"
    }, {
      "range" : "127",
      "domain" : "84",
      "attributes" : [ "anonymous", "object" ],
      "id" : "599"
    }, {
      "range" : "85",
      "domain" : "127",
      "attributes" : [ "anonymous", "object" ],
      "id" : "600"
    }, {
      "range" : "127",
      "domain" : "138",
      "attributes" : [ "anonymous", "object" ],
      "id" : "601"
    }, {
      "range" : "288",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "602"
    }, {
      "iri" : "http://edas#isProviderOf",
      "baseIri" : "http://edas",
      "range" : "62",
      "label" : {
        "IRI-based" : "isProviderOf"
      },
      "domain" : "181",
      "attributes" : [ "object" ],
      "id" : "603"
    }, {
      "range" : "159",
      "domain" : "235",
      "attributes" : [ "anonymous", "object" ],
      "id" : "604"
    }, {
      "range" : "126",
      "domain" : "159",
      "attributes" : [ "anonymous", "object" ],
      "id" : "605"
    }, {
      "range" : "159",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "606"
    }, {
      "iri" : "http://edas#hasSubmissionInstructions",
      "baseIri" : "http://edas",
      "range" : "553",
      "label" : {
        "IRI-based" : "hasSubmissionInstructions"
      },
      "domain" : "37",
      "attributes" : [ "datatype", "functional" ],
      "id" : "607"
    }, {
      "range" : "48",
      "domain" : "159",
      "attributes" : [ "anonymous", "object" ],
      "id" : "608"
    }, {
      "range" : "288",
      "domain" : "159",
      "attributes" : [ "anonymous", "object" ],
      "id" : "609"
    }, {
      "range" : "313",
      "domain" : "308",
      "attributes" : [ "anonymous", "object" ],
      "id" : "610"
    }, {
      "range" : "308",
      "domain" : "345",
      "attributes" : [ "anonymous", "object" ],
      "id" : "611"
    }, {
      "range" : "303",
      "domain" : "308",
      "attributes" : [ "anonymous", "object" ],
      "id" : "612"
    }, {
      "range" : "42",
      "domain" : "288",
      "attributes" : [ "anonymous", "object" ],
      "id" : "613"
    }, {
      "range" : "42",
      "domain" : "159",
      "attributes" : [ "anonymous", "object" ],
      "id" : "614"
    }, {
      "range" : "34",
      "domain" : "51",
      "attributes" : [ "anonymous", "object" ],
      "id" : "615"
    }, {
      "range" : "159",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "616"
    }, {
      "iri" : "http://edas#hasRelatedPaper",
      "baseIri" : "http://edas",
      "range" : "10",
      "label" : {
        "IRI-based" : "hasRelatedPaper"
      },
      "domain" : "172",
      "attributes" : [ "object" ],
      "id" : "617"
    }, {
      "iri" : "http://edas#isInitiatedBy",
      "baseIri" : "http://edas",
      "range" : "546",
      "label" : {
        "IRI-based" : "isInitiatedBy"
      },
      "domain" : "37",
      "attributes" : [ "object" ],
      "id" : "584"
    }, {
      "range" : "409",
      "domain" : "180",
      "attributes" : [ "anonymous", "object" ],
      "id" : "618"
    }, {
      "range" : "121",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "619"
    }, {
      "range" : "411",
      "domain" : "409",
      "attributes" : [ "anonymous", "object" ],
      "id" : "620"
    }, {
      "range" : "48",
      "domain" : "121",
      "attributes" : [ "anonymous", "object" ],
      "id" : "621"
    }, {
      "range" : "34",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "622"
    }, {
      "range" : "159",
      "domain" : "121",
      "attributes" : [ "anonymous", "object" ],
      "id" : "623"
    }, {
      "range" : "34",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "624"
    }, {
      "range" : "42",
      "domain" : "121",
      "attributes" : [ "anonymous", "object" ],
      "id" : "625"
    }, {
      "range" : "27",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "626"
    }, {
      "range" : "288",
      "domain" : "121",
      "attributes" : [ "anonymous", "object" ],
      "id" : "627"
    }, {
      "range" : "34",
      "domain" : "75",
      "attributes" : [ "anonymous", "object" ],
      "id" : "628"
    }, {
      "range" : "121",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "629"
    }, {
      "range" : "89",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "630"
    }, {
      "range" : "235",
      "domain" : "121",
      "attributes" : [ "anonymous", "object" ],
      "id" : "631"
    }, {
      "range" : "34",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "632"
    }, {
      "range" : "159",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "633"
    }, {
      "range" : "34",
      "domain" : "82",
      "attributes" : [ "anonymous", "object" ],
      "id" : "634"
    }, {
      "range" : "308",
      "domain" : "156",
      "attributes" : [ "anonymous", "object" ],
      "id" : "635"
    }, {
      "range" : "20",
      "domain" : "155",
      "attributes" : [ "anonymous", "object" ],
      "id" : "636"
    }, {
      "range" : "121",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "637"
    }, {
      "range" : "411",
      "domain" : "180",
      "attributes" : [ "anonymous", "object" ],
      "id" : "638"
    }, {
      "range" : "126",
      "domain" : "121",
      "attributes" : [ "anonymous", "object" ],
      "id" : "639"
    }, {
      "iri" : "http://edas#hasName",
      "baseIri" : "http://edas",
      "range" : "517",
      "label" : {
        "IRI-based" : "hasName"
      },
      "cardinality" : "1",
      "domain" : "288",
      "comment" : {
        "undefined" : "Conference Full Name"
      },
      "attributes" : [ "datatype" ],
      "id" : "640"
    }, {
      "iri" : "http://edas#isReviewedBy",
      "baseIri" : "http://edas",
      "range" : "543",
      "label" : {
        "IRI-based" : "isReviewedBy"
      },
      "domain" : "10",
      "attributes" : [ "object" ],
      "id" : "587"
    }, {
      "range" : "45",
      "domain" : "69",
      "attributes" : [ "anonymous", "object" ],
      "id" : "641"
    }, {
      "range" : "30",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "642"
    }, {
      "range" : "34",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "643"
    }, {
      "range" : "13",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "644"
    }, {
      "range" : "22",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "645"
    }, {
      "range" : "121",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "646"
    }, {
      "range" : "45",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "647"
    }, {
      "range" : "288",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "648"
    }, {
      "range" : "120",
      "domain" : "10",
      "attributes" : [ "anonymous", "object" ],
      "id" : "649"
    }, {
      "range" : "303",
      "domain" : "156",
      "attributes" : [ "anonymous", "object" ],
      "id" : "650"
    }, {
      "range" : "120",
      "domain" : "186",
      "attributes" : [ "anonymous", "object" ],
      "id" : "651"
    }, {
      "range" : "313",
      "domain" : "156",
      "attributes" : [ "anonymous", "object" ],
      "id" : "652"
    }, {
      "range" : "11",
      "domain" : "120",
      "attributes" : [ "anonymous", "object" ],
      "id" : "653"
    }, {
      "range" : "345",
      "domain" : "156",
      "attributes" : [ "anonymous", "object" ],
      "id" : "654"
    }, {
      "range" : "19",
      "domain" : "155",
      "attributes" : [ "anonymous", "object" ],
      "id" : "655"
    }, {
      "iri" : "http://edas#providedBy",
      "inverse" : "603",
      "baseIri" : "http://edas",
      "range" : "181",
      "label" : {
        "IRI-based" : "providedBy"
      },
      "domain" : "62",
      "attributes" : [ "object" ],
      "id" : "656"
    }, {
      "iri" : "http://edas#hasCountry",
      "baseIri" : "http://edas",
      "range" : "448",
      "label" : {
        "IRI-based" : "hasCountry"
      },
      "cardinality" : "1",
      "domain" : "288",
      "attributes" : [ "functional", "object" ],
      "id" : "657"
    }, {
      "iri" : "http://edas#hasRelatedDocument",
      "inverse" : "475",
      "baseIri" : "http://edas",
      "range" : "121",
      "label" : {
        "IRI-based" : "hasRelatedDocument"
      },
      "domain" : "550",
      "attributes" : [ "object" ],
      "id" : "658"
    }, {
      "iri" : "http://edas#isWrittenBy",
      "inverse" : "617",
      "baseIri" : "http://edas",
      "range" : "172",
      "label" : {
        "IRI-based" : "isWrittenBy"
      },
      "domain" : "10",
      "attributes" : [ "object" ],
      "id" : "659"
    }, {
      "iri" : "http://edas#hasCall",
      "inverse" : "661",
      "baseIri" : "http://edas",
      "range" : "37",
      "label" : {
        "IRI-based" : "hasCall"
      },
      "domain" : "134",
      "attributes" : [ "object" ],
      "id" : "660"
    }, {
      "iri" : "http://edas#hasBiography",
      "baseIri" : "http://edas",
      "range" : "482",
      "label" : {
        "IRI-based" : "hasBiography"
      },
      "domain" : "23",
      "attributes" : [ "datatype" ],
      "id" : "662"
    }, {
      "range" : "23",
      "domain" : "37",
      "attributes" : [ "anonymous", "object" ],
      "id" : "663"
    }, {
      "range" : "29",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "664"
    }, {
      "range" : "30",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "665"
    }, {
      "range" : "42",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "666"
    }, {
      "range" : "181",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "667"
    }, {
      "range" : "62",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "668"
    }, {
      "range" : "288",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "669"
    }, {
      "range" : "126",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "670"
    }, {
      "range" : "448",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "671"
    }, {
      "range" : "178",
      "domain" : "23",
      "attributes" : [ "anonymous", "object" ],
      "id" : "672"
    }, {
      "iri" : "http://edas#forEvent",
      "baseIri" : "http://edas",
      "range" : "134",
      "label" : {
        "IRI-based" : "forEvent"
      },
      "domain" : "37",
      "attributes" : [ "object" ],
      "id" : "661"
    }, {
      "iri" : "http://edas#isMenuOf",
      "baseIri" : "http://edas",
      "range" : "168",
      "label" : {
        "IRI-based" : "isMenuOf"
      },
      "domain" : "186",
      "attributes" : [ "object" ],
      "id" : "295"
    } ]
  };


//////////////////////////////////////////////
//    Ontology 2
//////////////////////////////////////////////

  ekaw = {
    "_comment" : "Created with OWL2VOWL (version 0.3.7), http://vowl.visualdataweb.org",
    "header" : {
      "languages" : [ "undefined" ],
      "baseIris" : [ "http://www.w3.org/2000/01/rdf-schema", "http://ekaw", "http://www.w3.org/2001/XMLSchema" ],
      "prefixList" : {
        "daml" : "http://www.daml.org/2001/03/daml+oil#",
        "owl" : "http://www.w3.org/2002/07/owl#",
        "rdf" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "xsd" : "http://www.w3.org/2001/XMLSchema#",
        "" : "http://ekaw#",
        "dc" : "http://purl.org/dc/elements/1.1/",
        "xml" : "http://www.w3.org/XML/1998/namespace",
        "rdfs" : "http://www.w3.org/2000/01/rdf-schema#"
      },
      "iri" : "http://ekaw"
    },
    "namespace" : [ ],
    "class" : [ {
      "id" : "14",
      "type" : "owl:Class"
    }, {
      "id" : "25",
      "type" : "owl:Class"
    }, {
      "id" : "28",
      "type" : "owl:Class"
    }, {
      "id" : "29",
      "type" : "owl:Class"
    }, {
      "id" : "34",
      "type" : "owl:Class"
    }, {
      "id" : "26",
      "type" : "owl:Class"
    }, {
      "id" : "1",
      "type" : "owl:Class"
    }, {
      "id" : "56",
      "type" : "owl:Class"
    }, {
      "id" : "17",
      "type" : "owl:Class"
    }, {
      "id" : "40",
      "type" : "owl:Class"
    }, {
      "id" : "65",
      "type" : "owl:Class"
    }, {
      "id" : "66",
      "type" : "owl:Class"
    }, {
      "id" : "32",
      "type" : "owl:Class"
    }, {
      "id" : "2",
      "type" : "owl:Class"
    }, {
      "id" : "13",
      "type" : "owl:Class"
    }, {
      "id" : "78",
      "type" : "owl:Class"
    }, {
      "id" : "53",
      "type" : "owl:Class"
    }, {
      "id" : "30",
      "type" : "owl:Class"
    }, {
      "id" : "27",
      "type" : "owl:Class"
    }, {
      "id" : "93",
      "type" : "owl:Class"
    }, {
      "id" : "115",
      "type" : "owl:Class"
    }, {
      "id" : "18",
      "type" : "owl:Class"
    }, {
      "id" : "62",
      "type" : "owl:Class"
    }, {
      "id" : "20",
      "type" : "owl:Class"
    }, {
      "id" : "10",
      "type" : "owl:Class"
    }, {
      "id" : "104",
      "type" : "owl:Class"
    }, {
      "id" : "79",
      "type" : "owl:Class"
    }, {
      "id" : "132",
      "type" : "owl:Class"
    }, {
      "id" : "96",
      "type" : "owl:Class"
    }, {
      "id" : "86",
      "type" : "owl:Class"
    }, {
      "id" : "8",
      "type" : "owl:Class"
    }, {
      "id" : "84",
      "type" : "owl:Class"
    }, {
      "id" : "47",
      "type" : "owl:Class"
    }, {
      "id" : "153",
      "type" : "owl:Class"
    }, {
      "id" : "157",
      "type" : "owl:Class"
    }, {
      "id" : "58",
      "type" : "owl:Class"
    }, {
      "id" : "46",
      "type" : "owl:Class"
    }, {
      "id" : "94",
      "type" : "owl:Class"
    }, {
      "id" : "122",
      "type" : "owl:Class"
    }, {
      "id" : "31",
      "type" : "owl:Class"
    }, {
      "id" : "106",
      "type" : "owl:Class"
    }, {
      "id" : "12",
      "type" : "owl:Class"
    }, {
      "id" : "155",
      "type" : "owl:Class"
    }, {
      "id" : "125",
      "type" : "owl:Class"
    }, {
      "id" : "44",
      "type" : "owl:Class"
    }, {
      "id" : "60",
      "type" : "owl:Class"
    }, {
      "id" : "45",
      "type" : "owl:Class"
    }, {
      "id" : "145",
      "type" : "owl:Class"
    }, {
      "id" : "39",
      "type" : "owl:Class"
    }, {
      "id" : "150",
      "type" : "owl:Class"
    }, {
      "id" : "147",
      "type" : "owl:Class"
    }, {
      "id" : "116",
      "type" : "owl:Class"
    }, {
      "id" : "110",
      "type" : "owl:Class"
    }, {
      "id" : "4",
      "type" : "owl:Class"
    }, {
      "id" : "98",
      "type" : "owl:Class"
    }, {
      "id" : "42",
      "type" : "owl:Class"
    }, {
      "id" : "134",
      "type" : "owl:Class"
    }, {
      "id" : "6",
      "type" : "owl:Class"
    }, {
      "id" : "43",
      "type" : "owl:Class"
    }, {
      "id" : "33",
      "type" : "owl:Class"
    }, {
      "id" : "92",
      "type" : "owl:Class"
    }, {
      "id" : "120",
      "type" : "owl:Class"
    }, {
      "id" : "143",
      "type" : "owl:Class"
    }, {
      "id" : "140",
      "type" : "owl:Class"
    }, {
      "id" : "108",
      "type" : "owl:Class"
    }, {
      "id" : "160",
      "type" : "owl:Class"
    }, {
      "id" : "163",
      "type" : "owl:Thing"
    }, {
      "id" : "75",
      "type" : "owl:Thing"
    }, {
      "id" : "22",
      "type" : "owl:Class"
    }, {
      "id" : "137",
      "type" : "owl:Class"
    }, {
      "id" : "15",
      "type" : "owl:Class"
    }, {
      "id" : "194",
      "type" : "owl:unionOf"
    }, {
      "id" : "135",
      "type" : "owl:unionOf"
    }, {
      "id" : "36",
      "type" : "owl:Thing"
    }, {
      "id" : "139",
      "type" : "owl:unionOf"
    }, {
      "id" : "71",
      "type" : "owl:Class"
    }, {
      "id" : "72",
      "type" : "owl:unionOf"
    }, {
      "id" : "113",
      "type" : "owl:unionOf"
    }, {
      "id" : "259",
      "type" : "owl:unionOf"
    }, {
      "id" : "55",
      "type" : "owl:Class"
    }, {
      "id" : "206",
      "type" : "owl:unionOf"
    }, {
      "id" : "148",
      "type" : "owl:unionOf"
    }, {
      "id" : "263",
      "type" : "owl:unionOf"
    }, {
      "id" : "101",
      "type" : "owl:Class"
    }, {
      "id" : "141",
      "type" : "owl:Class"
    } ],
    "classAttribute" : [ {
      "iri" : "http://ekaw#SC_Member",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "SC_Member"
      },
      "id" : "14",
      "superClasses" : [ "15" ]
    }, {
      "iri" : "http://ekaw#Conference_Session",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Conference_Session"
      },
      "subClasses" : [ "27" ],
      "id" : "25",
      "superClasses" : [ "26" ]
    }, {
      "iri" : "http://ekaw#Academic_Institution",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Academic_Institution"
      },
      "subClasses" : [ "30", "31" ],
      "id" : "28",
      "superClasses" : [ "29" ]
    }, {
      "iri" : "http://ekaw#Organisation",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Organisation"
      },
      "subClasses" : [ "32", "33", "28" ],
      "id" : "29"
    }, {
      "iri" : "http://ekaw#PC_Chair",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "PC_Chair"
      },
      "id" : "34",
      "superClasses" : [ "15", "6" ]
    }, {
      "iri" : "http://ekaw#Session",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Session"
      },
      "subClasses" : [ "44", "45", "46", "47", "25" ],
      "id" : "26",
      "superClasses" : [ "43" ]
    }, {
      "iri" : "http://ekaw#Possible_Reviewer",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Possible_Reviewer"
      },
      "subClasses" : [ "15" ],
      "id" : "1",
      "superClasses" : [ "2" ]
    }, {
      "iri" : "http://ekaw#Location",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Location"
      },
      "id" : "56"
    }, {
      "iri" : "http://ekaw#Conference_Banquet",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Conference_Banquet"
      },
      "id" : "17",
      "superClasses" : [ "18" ]
    }, {
      "iri" : "http://ekaw#Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Paper"
      },
      "subClasses" : [ "13", "53", "55", "58", "60", "62", "39", "42" ],
      "id" : "40",
      "superClasses" : [ "22" ]
    }, {
      "iri" : "http://ekaw#Session_Chair",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Session_Chair"
      },
      "id" : "65",
      "superClasses" : [ "15", "6" ]
    }, {
      "iri" : "http://ekaw#Web_Site",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Web_Site"
      },
      "id" : "66",
      "superClasses" : [ "22" ]
    }, {
      "iri" : "http://ekaw#Proceedings_Publisher",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Proceedings_Publisher"
      },
      "id" : "32",
      "superClasses" : [ "29" ]
    }, {
      "iri" : "http://ekaw#Person",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Person"
      },
      "subClasses" : [ "1", "4", "6", "8", "10" ],
      "id" : "2"
    }, {
      "iri" : "http://ekaw#Submitted_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Submitted_Paper"
      },
      "subClasses" : [ "12" ],
      "id" : "13",
      "superClasses" : [ "40" ]
    }, {
      "iri" : "http://ekaw#Conference_Proceedings",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Conference_Proceedings"
      },
      "id" : "78",
      "superClasses" : [ "79" ]
    }, {
      "iri" : "http://ekaw#Poster_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Poster_Paper"
      },
      "id" : "53",
      "superClasses" : [ "40" ]
    }, {
      "iri" : "http://ekaw#University",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "University"
      },
      "id" : "30",
      "superClasses" : [ "28" ]
    }, {
      "iri" : "http://ekaw#Industrial_Session",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Industrial_Session"
      },
      "id" : "27",
      "superClasses" : [ "25" ]
    }, {
      "iri" : "http://ekaw#Neutral_Review",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Neutral_Review"
      },
      "id" : "93",
      "superClasses" : [ "94" ]
    }, {
      "iri" : "http://ekaw#Rejected_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Rejected_Paper"
      },
      "id" : "115",
      "superClasses" : [ "116" ]
    }, {
      "iri" : "http://ekaw#Social_Event",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Social_Event"
      },
      "subClasses" : [ "17", "20" ],
      "id" : "18",
      "superClasses" : [ "92" ]
    }, {
      "iri" : "http://ekaw#Workshop_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Workshop_Paper"
      },
      "id" : "62",
      "superClasses" : [ "40" ]
    }, {
      "iri" : "http://ekaw#Conference_Trip",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Conference_Trip"
      },
      "id" : "20",
      "superClasses" : [ "18" ]
    }, {
      "iri" : "http://ekaw#Agency_Staff_Member",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Agency_Staff_Member"
      },
      "id" : "10",
      "superClasses" : [ "2" ]
    }, {
      "iri" : "http://ekaw#Conference",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Conference"
      },
      "comment" : {
        "undefined" : "One edition of a conference"
      },
      "id" : "104",
      "superClasses" : [ "43" ]
    }, {
      "iri" : "http://ekaw#Proceedings",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Proceedings"
      },
      "subClasses" : [ "78" ],
      "id" : "79",
      "superClasses" : [ "98" ]
    }, {
      "iri" : "http://ekaw#Late-Registered_Participant",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Late-Registered_Participant"
      },
      "id" : "132",
      "superClasses" : [ "6" ]
    }, {
      "iri" : "http://ekaw#Abstract",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Abstract"
      },
      "subClasses" : [ "140", "141" ],
      "id" : "96",
      "superClasses" : [ "22" ]
    }, {
      "iri" : "http://ekaw#Tutorial_Chair",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Tutorial_Chair"
      },
      "id" : "86",
      "superClasses" : [ "15", "6" ]
    }, {
      "iri" : "http://ekaw#Student",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Student"
      },
      "id" : "8",
      "superClasses" : [ "2" ]
    }, {
      "iri" : "http://ekaw#Programme_Brochure",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Programme_Brochure"
      },
      "id" : "84",
      "superClasses" : [ "22" ]
    }, {
      "iri" : "http://ekaw#Regular_Session",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Regular_Session"
      },
      "id" : "47",
      "superClasses" : [ "26" ]
    }, {
      "iri" : "http://ekaw#Negative_Review",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Negative_Review"
      },
      "id" : "153",
      "superClasses" : [ "94" ]
    }, {
      "iri" : "http://ekaw#OC_Chair",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "OC_Chair"
      },
      "id" : "157",
      "superClasses" : [ "122" ]
    }, {
      "iri" : "http://ekaw#Regular_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Regular_Paper"
      },
      "id" : "58",
      "superClasses" : [ "40" ]
    }, {
      "iri" : "http://ekaw#Demo_Session",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Demo_Session"
      },
      "id" : "46",
      "superClasses" : [ "26" ]
    }, {
      "iri" : "http://ekaw#Review",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Review"
      },
      "subClasses" : [ "93", "153", "155" ],
      "id" : "94",
      "superClasses" : [ "22" ]
    }, {
      "iri" : "http://ekaw#OC_Member",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "OC_Member"
      },
      "subClasses" : [ "157" ],
      "id" : "122",
      "superClasses" : [ "6" ]
    }, {
      "iri" : "http://ekaw#Research_Institute",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Research_Institute"
      },
      "id" : "31",
      "superClasses" : [ "28" ]
    }, {
      "iri" : "http://ekaw#Workshop",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Workshop"
      },
      "id" : "106",
      "superClasses" : [ "43" ]
    }, {
      "iri" : "http://ekaw#Assigned_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Assigned_Paper"
      },
      "subClasses" : [ "116" ],
      "id" : "12",
      "superClasses" : [ "13" ]
    }, {
      "iri" : "http://ekaw#Positive_Review",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Positive_Review"
      },
      "id" : "155",
      "superClasses" : [ "94" ]
    }, {
      "iri" : "http://ekaw#Presenter",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Presenter"
      },
      "subClasses" : [ "160" ],
      "id" : "125",
      "superClasses" : [ "6" ]
    }, {
      "iri" : "http://ekaw#Poster_Session",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Poster_Session"
      },
      "id" : "44",
      "superClasses" : [ "26" ]
    }, {
      "iri" : "http://ekaw#Industrial_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Industrial_Paper"
      },
      "id" : "60",
      "superClasses" : [ "40" ]
    }, {
      "iri" : "http://ekaw#Workshop_Session",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Workshop_Session"
      },
      "id" : "45",
      "superClasses" : [ "26" ]
    }, {
      "iri" : "http://ekaw#Tutorial",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Tutorial"
      },
      "id" : "145",
      "superClasses" : [ "110" ]
    }, {
      "iri" : "http://ekaw#Camera_Ready_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Camera_Ready_Paper"
      },
      "id" : "39",
      "superClasses" : [ "40" ]
    }, {
      "iri" : "http://ekaw#Invited_Talk",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Invited_Talk"
      },
      "id" : "150",
      "superClasses" : [ "110" ]
    }, {
      "iri" : "http://ekaw#Contributed_Talk",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Contributed_Talk"
      },
      "id" : "147",
      "superClasses" : [ "110" ]
    }, {
      "iri" : "http://ekaw#Evaluated_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Evaluated_Paper"
      },
      "subClasses" : [ "115", "143" ],
      "id" : "116",
      "superClasses" : [ "12" ]
    }, {
      "iri" : "http://ekaw#Individual_Presentation",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Individual_Presentation"
      },
      "subClasses" : [ "145", "147", "150" ],
      "id" : "110",
      "superClasses" : [ "43" ]
    }, {
      "iri" : "http://ekaw#Paper_Author",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Paper_Author"
      },
      "id" : "4",
      "superClasses" : [ "2" ]
    }, {
      "iri" : "http://ekaw#Multi-author_Volume",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Multi-author_Volume"
      },
      "subClasses" : [ "79" ],
      "id" : "98",
      "superClasses" : [ "22" ]
    }, {
      "iri" : "http://ekaw#Demo_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Demo_Paper"
      },
      "id" : "42",
      "superClasses" : [ "40" ]
    }, {
      "iri" : "http://ekaw#Early-Registered_Participant",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Early-Registered_Participant"
      },
      "id" : "134",
      "superClasses" : [ "6" ]
    }, {
      "iri" : "http://ekaw#Conference_Participant",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Conference_Participant"
      },
      "subClasses" : [ "86", "34", "132", "134", "137", "120", "122", "125", "65" ],
      "id" : "6",
      "superClasses" : [ "2" ]
    }, {
      "iri" : "http://ekaw#Scientific_Event",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Scientific_Event"
      },
      "subClasses" : [ "26", "104", "106", "108", "110" ],
      "id" : "43",
      "superClasses" : [ "92" ]
    }, {
      "iri" : "http://ekaw#Organising_Agency",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Organising_Agency"
      },
      "id" : "33",
      "superClasses" : [ "29" ]
    }, {
      "iri" : "http://ekaw#Event",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Event"
      },
      "subClasses" : [ "18", "43" ],
      "id" : "92"
    }, {
      "iri" : "http://ekaw#Demo_Chair",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Demo_Chair"
      },
      "id" : "120",
      "superClasses" : [ "6" ]
    }, {
      "iri" : "http://ekaw#Accepted_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Accepted_Paper"
      },
      "comment" : {
        "undefined" : "Accepted paper to become part of proceedings. \nNote that camera-ready paper is not considered as 'accepted paper', as it was accepted in a different form!"
      },
      "id" : "143",
      "superClasses" : [ "116" ]
    }, {
      "iri" : "http://ekaw#Invited_Talk_Abstract",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Invited_Talk_Abstract"
      },
      "id" : "140",
      "superClasses" : [ "96" ]
    }, {
      "iri" : "http://ekaw#Track",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Track"
      },
      "id" : "108",
      "superClasses" : [ "43" ]
    }, {
      "iri" : "http://ekaw#Invited_Speaker",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Invited_Speaker"
      },
      "id" : "160",
      "superClasses" : [ "125" ]
    }, {
      "iri" : "http://www.w3.org/2002/07/owl#Thing",
      "baseIri" : "http://owl2vowl.de",
      "id" : "163",
      "label" : {
        "undefined" : "Thing"
      }
    }, {
      "iri" : "http://www.w3.org/2002/07/owl#Thing",
      "baseIri" : "http://owl2vowl.de",
      "id" : "75",
      "label" : {
        "undefined" : "Thing"
      }
    }, {
      "iri" : "http://ekaw#Document",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Document"
      },
      "subClasses" : [ "96", "98", "40", "101", "94", "66", "84" ],
      "id" : "22"
    }, {
      "iri" : "http://ekaw#Workshop_Chair",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Workshop_Chair"
      },
      "id" : "137",
      "superClasses" : [ "15", "6" ]
    }, {
      "iri" : "http://ekaw#PC_Member",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "PC_Member"
      },
      "subClasses" : [ "86", "34", "14", "137", "65" ],
      "id" : "15",
      "superClasses" : [ "1" ]
    }, {
      "instances" : 0,
      "union" : [ "96", "40" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "194"
    }, {
      "instances" : 0,
      "union" : [ "2", "29" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "135"
    }, {
      "iri" : "http://www.w3.org/2002/07/owl#Thing",
      "baseIri" : "http://owl2vowl.de",
      "id" : "36",
      "label" : {
        "undefined" : "Thing"
      }
    }, {
      "instances" : 0,
      "union" : [ "96", "40" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "139"
    }, {
      "iri" : "http://ekaw#Research_Topic",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Research_Topic"
      },
      "id" : "71"
    }, {
      "instances" : 0,
      "union" : [ "40", "92" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "72"
    }, {
      "instances" : 0,
      "union" : [ "66", "84" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "113"
    }, {
      "instances" : 0,
      "union" : [ "98", "101", "66", "84" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "259"
    }, {
      "iri" : "http://ekaw#Conference_Paper",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Conference_Paper"
      },
      "id" : "55",
      "superClasses" : [ "40" ]
    }, {
      "instances" : 0,
      "union" : [ "66", "84" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "206"
    }, {
      "instances" : 0,
      "union" : [ "2", "29" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "148"
    }, {
      "instances" : 0,
      "union" : [ "40", "92" ],
      "attributes" : [ "anonymous", "union" ],
      "id" : "263"
    }, {
      "iri" : "http://ekaw#Flyer",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Flyer"
      },
      "id" : "101",
      "superClasses" : [ "22" ]
    }, {
      "iri" : "http://ekaw#Tutorial_Abstract",
      "baseIri" : "http://ekaw",
      "instances" : 0,
      "label" : {
        "IRI-based" : "Tutorial_Abstract"
      },
      "id" : "141",
      "superClasses" : [ "96" ]
    } ],
    "property" : [ {
      "id" : "0",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "3",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "5",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "7",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "9",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "11",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "16",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "19",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "21",
      "type" : "owl:objectProperty"
    }, {
      "id" : "35",
      "type" : "owl:objectProperty"
    }, {
      "id" : "38",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "41",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "48",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "49",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "50",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "51",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "52",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "54",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "57",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "59",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "61",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "63",
      "type" : "owl:objectProperty"
    }, {
      "id" : "64",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "67",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "68",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "69",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "70",
      "type" : "owl:objectProperty"
    }, {
      "id" : "74",
      "type" : "owl:objectProperty"
    }, {
      "id" : "80",
      "type" : "owl:objectProperty"
    }, {
      "id" : "82",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "83",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "85",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "87",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "88",
      "type" : "owl:objectProperty"
    }, {
      "id" : "91",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "95",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "97",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "99",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "100",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "102",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "103",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "105",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "107",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "109",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "111",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "112",
      "type" : "owl:objectProperty"
    }, {
      "id" : "117",
      "type" : "owl:objectProperty"
    }, {
      "id" : "119",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "121",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "123",
      "type" : "owl:objectProperty"
    }, {
      "id" : "124",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "126",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "127",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "128",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "81",
      "type" : "owl:objectProperty"
    }, {
      "id" : "129",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "130",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "131",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "133",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "90",
      "type" : "owl:objectProperty"
    }, {
      "id" : "136",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "138",
      "type" : "owl:objectProperty"
    }, {
      "id" : "142",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "144",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "146",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "77",
      "type" : "owl:objectProperty"
    }, {
      "id" : "149",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "151",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "152",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "154",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "156",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "158",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "159",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "161",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "118",
      "type" : "owl:objectProperty"
    }, {
      "id" : "162",
      "type" : "owl:objectProperty"
    }, {
      "id" : "76",
      "type" : "owl:objectProperty"
    }, {
      "id" : "164",
      "type" : "owl:objectProperty"
    }, {
      "id" : "165",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "166",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "167",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "168",
      "type" : "owl:disjointWith"
    }, {
      "id" : "169",
      "type" : "owl:disjointWith"
    }, {
      "id" : "170",
      "type" : "owl:disjointWith"
    }, {
      "id" : "171",
      "type" : "owl:disjointWith"
    }, {
      "id" : "172",
      "type" : "owl:disjointWith"
    }, {
      "id" : "173",
      "type" : "owl:disjointWith"
    }, {
      "id" : "174",
      "type" : "owl:disjointWith"
    }, {
      "id" : "175",
      "type" : "owl:disjointWith"
    }, {
      "id" : "176",
      "type" : "owl:disjointWith"
    }, {
      "id" : "177",
      "type" : "owl:disjointWith"
    }, {
      "id" : "178",
      "type" : "owl:disjointWith"
    }, {
      "id" : "179",
      "type" : "owl:objectProperty"
    }, {
      "id" : "180",
      "type" : "owl:disjointWith"
    }, {
      "id" : "181",
      "type" : "owl:disjointWith"
    }, {
      "id" : "182",
      "type" : "owl:disjointWith"
    }, {
      "id" : "183",
      "type" : "owl:disjointWith"
    }, {
      "id" : "184",
      "type" : "owl:disjointWith"
    }, {
      "id" : "185",
      "type" : "owl:disjointWith"
    }, {
      "id" : "186",
      "type" : "owl:disjointWith"
    }, {
      "id" : "187",
      "type" : "owl:disjointWith"
    }, {
      "id" : "188",
      "type" : "owl:disjointWith"
    }, {
      "id" : "189",
      "type" : "owl:disjointWith"
    }, {
      "id" : "190",
      "type" : "owl:disjointWith"
    }, {
      "id" : "191",
      "type" : "owl:disjointWith"
    }, {
      "id" : "192",
      "type" : "owl:disjointWith"
    }, {
      "id" : "193",
      "type" : "owl:objectProperty"
    }, {
      "id" : "89",
      "type" : "owl:objectProperty"
    }, {
      "id" : "195",
      "type" : "owl:disjointWith"
    }, {
      "id" : "37",
      "type" : "owl:objectProperty"
    }, {
      "id" : "24",
      "type" : "owl:objectProperty"
    }, {
      "id" : "196",
      "type" : "owl:disjointWith"
    }, {
      "id" : "197",
      "type" : "owl:disjointWith"
    }, {
      "id" : "198",
      "type" : "owl:disjointWith"
    }, {
      "id" : "199",
      "type" : "owl:disjointWith"
    }, {
      "id" : "200",
      "type" : "owl:disjointWith"
    }, {
      "id" : "201",
      "type" : "owl:disjointWith"
    }, {
      "id" : "202",
      "type" : "owl:disjointWith"
    }, {
      "id" : "203",
      "type" : "owl:disjointWith"
    }, {
      "id" : "204",
      "type" : "owl:disjointWith"
    }, {
      "id" : "205",
      "type" : "owl:objectProperty"
    }, {
      "id" : "114",
      "type" : "owl:objectProperty"
    }, {
      "id" : "207",
      "type" : "owl:disjointWith"
    }, {
      "id" : "208",
      "type" : "owl:disjointWith"
    }, {
      "id" : "209",
      "type" : "owl:disjointWith"
    }, {
      "id" : "210",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "211",
      "type" : "owl:disjointWith"
    }, {
      "id" : "212",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "213",
      "type" : "owl:disjointWith"
    }, {
      "id" : "214",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "215",
      "type" : "owl:disjointWith"
    }, {
      "id" : "216",
      "type" : "owl:disjointWith"
    }, {
      "id" : "217",
      "type" : "owl:disjointWith"
    }, {
      "id" : "218",
      "type" : "owl:disjointWith"
    }, {
      "id" : "219",
      "type" : "owl:someValuesFrom"
    }, {
      "id" : "220",
      "type" : "owl:disjointWith"
    }, {
      "id" : "221",
      "type" : "owl:disjointWith"
    }, {
      "id" : "222",
      "type" : "owl:disjointWith"
    }, {
      "id" : "223",
      "type" : "owl:objectProperty"
    }, {
      "id" : "224",
      "type" : "owl:disjointWith"
    }, {
      "id" : "225",
      "type" : "owl:disjointWith"
    }, {
      "id" : "226",
      "type" : "owl:disjointWith"
    }, {
      "id" : "23",
      "type" : "owl:objectProperty"
    }, {
      "id" : "227",
      "type" : "owl:disjointWith"
    }, {
      "id" : "228",
      "type" : "owl:disjointWith"
    }, {
      "id" : "229",
      "type" : "owl:disjointWith"
    }, {
      "id" : "230",
      "type" : "owl:disjointWith"
    }, {
      "id" : "231",
      "type" : "owl:disjointWith"
    }, {
      "id" : "232",
      "type" : "owl:disjointWith"
    }, {
      "id" : "233",
      "type" : "owl:disjointWith"
    }, {
      "id" : "234",
      "type" : "owl:disjointWith"
    }, {
      "id" : "235",
      "type" : "owl:objectProperty"
    }, {
      "id" : "236",
      "type" : "owl:disjointWith"
    }, {
      "id" : "237",
      "type" : "owl:disjointWith"
    }, {
      "id" : "238",
      "type" : "owl:disjointWith"
    }, {
      "id" : "239",
      "type" : "owl:disjointWith"
    }, {
      "id" : "240",
      "type" : "owl:someValuesFrom"
    }, {
      "id" : "241",
      "type" : "owl:someValuesFrom"
    }, {
      "id" : "242",
      "type" : "owl:disjointWith"
    }, {
      "id" : "243",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "244",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "245",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "246",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "247",
      "type" : "rdfs:SubClassOf"
    }, {
      "id" : "248",
      "type" : "owl:disjointWith"
    }, {
      "id" : "249",
      "type" : "owl:objectProperty"
    }, {
      "id" : "251",
      "type" : "owl:disjointWith"
    }, {
      "id" : "252",
      "type" : "owl:disjointWith"
    }, {
      "id" : "253",
      "type" : "owl:objectProperty"
    }, {
      "id" : "254",
      "type" : "owl:disjointWith"
    }, {
      "id" : "255",
      "type" : "owl:disjointWith"
    }, {
      "id" : "256",
      "type" : "owl:disjointWith"
    }, {
      "id" : "257",
      "type" : "owl:disjointWith"
    }, {
      "id" : "258",
      "type" : "owl:objectProperty"
    }, {
      "id" : "260",
      "type" : "owl:disjointWith"
    }, {
      "id" : "250",
      "type" : "owl:objectProperty"
    }, {
      "id" : "261",
      "type" : "owl:disjointWith"
    }, {
      "id" : "262",
      "type" : "owl:disjointWith"
    }, {
      "id" : "73",
      "type" : "owl:objectProperty"
    }, {
      "id" : "264",
      "type" : "owl:someValuesFrom"
    }, {
      "id" : "265",
      "type" : "owl:disjointWith"
    }, {
      "id" : "266",
      "type" : "owl:someValuesFrom"
    }, {
      "id" : "267",
      "type" : "owl:disjointWith"
    }, {
      "id" : "268",
      "type" : "owl:someValuesFrom"
    } ],
    "propertyAttribute" : [ {
      "range" : "2",
      "domain" : "1",
      "attributes" : [ "anonymous", "object" ],
      "id" : "0"
    }, {
      "range" : "2",
      "domain" : "4",
      "attributes" : [ "anonymous", "object" ],
      "id" : "3"
    }, {
      "range" : "2",
      "domain" : "6",
      "attributes" : [ "anonymous", "object" ],
      "id" : "5"
    }, {
      "range" : "2",
      "domain" : "8",
      "attributes" : [ "anonymous", "object" ],
      "id" : "7"
    }, {
      "range" : "2",
      "domain" : "10",
      "attributes" : [ "anonymous", "object" ],
      "id" : "9"
    }, {
      "range" : "13",
      "domain" : "12",
      "attributes" : [ "anonymous", "object" ],
      "id" : "11"
    }, {
      "range" : "18",
      "domain" : "17",
      "attributes" : [ "anonymous", "object" ],
      "id" : "16"
    }, {
      "range" : "18",
      "domain" : "20",
      "attributes" : [ "anonymous", "object" ],
      "id" : "19"
    }, {
      "iri" : "http://ekaw#writtenBy",
      "inverse" : "23",
      "baseIri" : "http://ekaw",
      "range" : "2",
      "label" : {
        "IRI-based" : "writtenBy"
      },
      "domain" : "22",
      "subproperty" : [ "24" ],
      "attributes" : [ "object" ],
      "id" : "21"
    }, {
      "iri" : "http://ekaw#volumeContainsPaper",
      "inverse" : "37",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "volumeContainsPaper"
      },
      "minCardinality" : "1",
      "domain" : "36",
      "attributes" : [ "object" ],
      "id" : "35"
    }, {
      "range" : "40",
      "domain" : "39",
      "attributes" : [ "anonymous", "object" ],
      "id" : "38"
    }, {
      "range" : "40",
      "domain" : "42",
      "attributes" : [ "anonymous", "object" ],
      "id" : "41"
    }, {
      "range" : "26",
      "domain" : "47",
      "attributes" : [ "anonymous", "object" ],
      "id" : "48"
    }, {
      "range" : "26",
      "domain" : "25",
      "attributes" : [ "anonymous", "object" ],
      "id" : "49"
    }, {
      "range" : "1",
      "domain" : "15",
      "attributes" : [ "anonymous", "object" ],
      "id" : "50"
    }, {
      "range" : "40",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "51"
    }, {
      "range" : "40",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "52"
    }, {
      "range" : "40",
      "domain" : "55",
      "attributes" : [ "anonymous", "object" ],
      "id" : "54"
    }, {
      "range" : "40",
      "domain" : "58",
      "attributes" : [ "anonymous", "object" ],
      "id" : "57"
    }, {
      "range" : "40",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "59"
    }, {
      "range" : "40",
      "domain" : "62",
      "attributes" : [ "anonymous", "object" ],
      "id" : "61"
    }, {
      "iri" : "http://ekaw#hasReviewer",
      "baseIri" : "http://ekaw",
      "range" : "1",
      "label" : {
        "IRI-based" : "hasReviewer"
      },
      "minCardinality" : "3",
      "domain" : "40",
      "attributes" : [ "object" ],
      "id" : "63"
    }, {
      "range" : "26",
      "domain" : "44",
      "attributes" : [ "anonymous", "object" ],
      "id" : "64"
    }, {
      "range" : "29",
      "domain" : "28",
      "attributes" : [ "anonymous", "object" ],
      "id" : "67"
    }, {
      "range" : "26",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "68"
    }, {
      "range" : "26",
      "domain" : "46",
      "attributes" : [ "anonymous", "object" ],
      "id" : "69"
    }, {
      "iri" : "http://ekaw#topicCoveredBy",
      "inverse" : "73",
      "baseIri" : "http://ekaw",
      "range" : "72",
      "label" : {
        "IRI-based" : "topicCoveredBy"
      },
      "domain" : "71",
      "attributes" : [ "object" ],
      "id" : "70"
    }, {
      "iri" : "http://ekaw#scientificallyOrganisedBy",
      "inverse" : "76",
      "baseIri" : "http://ekaw",
      "range" : "28",
      "label" : {
        "IRI-based" : "scientificallyOrganisedBy"
      },
      "superproperty" : [ "77" ],
      "domain" : "75",
      "attributes" : [ "object" ],
      "id" : "74"
    }, {
      "iri" : "http://ekaw#partOf",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "partOf"
      },
      "domain" : "36",
      "subproperty" : [ "81" ],
      "attributes" : [ "transitive", "object" ],
      "id" : "80"
    }, {
      "range" : "22",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "82"
    }, {
      "range" : "22",
      "domain" : "84",
      "attributes" : [ "anonymous", "object" ],
      "id" : "83"
    }, {
      "range" : "15",
      "domain" : "86",
      "attributes" : [ "anonymous", "object" ],
      "id" : "85"
    }, {
      "range" : "15",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "87"
    }, {
      "iri" : "http://ekaw#technicallyOrganises",
      "inverse" : "89",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "technicallyOrganises"
      },
      "superproperty" : [ "90" ],
      "domain" : "29",
      "attributes" : [ "object" ],
      "id" : "88"
    }, {
      "range" : "92",
      "domain" : "43",
      "attributes" : [ "anonymous", "object" ],
      "id" : "91"
    }, {
      "range" : "22",
      "domain" : "96",
      "attributes" : [ "anonymous", "object" ],
      "id" : "95"
    }, {
      "range" : "22",
      "domain" : "98",
      "attributes" : [ "anonymous", "object" ],
      "id" : "97"
    }, {
      "range" : "22",
      "domain" : "40",
      "attributes" : [ "anonymous", "object" ],
      "id" : "99"
    }, {
      "range" : "22",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "100"
    }, {
      "range" : "22",
      "domain" : "94",
      "attributes" : [ "anonymous", "object" ],
      "id" : "102"
    }, {
      "range" : "43",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "103"
    }, {
      "range" : "43",
      "domain" : "106",
      "attributes" : [ "anonymous", "object" ],
      "id" : "105"
    }, {
      "range" : "43",
      "domain" : "108",
      "attributes" : [ "anonymous", "object" ],
      "id" : "107"
    }, {
      "range" : "43",
      "domain" : "110",
      "attributes" : [ "anonymous", "object" ],
      "id" : "109"
    }, {
      "range" : "92",
      "domain" : "18",
      "attributes" : [ "anonymous", "object" ],
      "id" : "111"
    }, {
      "iri" : "http://ekaw#eventOnList",
      "inverse" : "114",
      "baseIri" : "http://ekaw",
      "range" : "113",
      "label" : {
        "IRI-based" : "eventOnList"
      },
      "domain" : "92",
      "attributes" : [ "object" ],
      "id" : "112"
    }, {
      "iri" : "http://ekaw#hasEvent",
      "inverse" : "81",
      "baseIri" : "http://ekaw",
      "range" : "92",
      "label" : {
        "IRI-based" : "hasEvent"
      },
      "superproperty" : [ "118" ],
      "domain" : "92",
      "attributes" : [ "object" ],
      "id" : "117"
    }, {
      "range" : "6",
      "domain" : "120",
      "attributes" : [ "anonymous", "object" ],
      "id" : "119"
    }, {
      "range" : "6",
      "domain" : "122",
      "attributes" : [ "anonymous", "object" ],
      "id" : "121"
    }, {
      "iri" : "http://ekaw#referencedIn",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "referencedIn"
      },
      "domain" : "36",
      "attributes" : [ "object" ],
      "id" : "123"
    }, {
      "range" : "6",
      "domain" : "125",
      "attributes" : [ "anonymous", "object" ],
      "id" : "124"
    }, {
      "range" : "6",
      "domain" : "65",
      "attributes" : [ "anonymous", "object" ],
      "id" : "126"
    }, {
      "range" : "43",
      "domain" : "26",
      "attributes" : [ "anonymous", "object" ],
      "id" : "127"
    }, {
      "range" : "98",
      "domain" : "79",
      "attributes" : [ "anonymous", "object" ],
      "id" : "128"
    }, {
      "iri" : "http://ekaw#partOfEvent",
      "baseIri" : "http://ekaw",
      "range" : "92",
      "label" : {
        "IRI-based" : "partOfEvent"
      },
      "superproperty" : [ "80" ],
      "domain" : "92",
      "attributes" : [ "transitive", "object" ],
      "id" : "81"
    }, {
      "range" : "6",
      "domain" : "86",
      "attributes" : [ "anonymous", "object" ],
      "id" : "129"
    }, {
      "range" : "6",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "130"
    }, {
      "range" : "6",
      "domain" : "132",
      "attributes" : [ "anonymous", "object" ],
      "id" : "131"
    }, {
      "range" : "6",
      "domain" : "134",
      "attributes" : [ "anonymous", "object" ],
      "id" : "133"
    }, {
      "iri" : "http://ekaw#organises",
      "inverse" : "77",
      "baseIri" : "http://ekaw",
      "range" : "92",
      "label" : {
        "IRI-based" : "organises"
      },
      "domain" : "135",
      "subproperty" : [ "88", "76" ],
      "attributes" : [ "object" ],
      "id" : "90"
    }, {
      "range" : "6",
      "domain" : "137",
      "attributes" : [ "anonymous", "object" ],
      "id" : "136"
    }, {
      "iri" : "http://ekaw#paperPresentedAs",
      "baseIri" : "http://ekaw",
      "range" : "110",
      "label" : {
        "IRI-based" : "paperPresentedAs"
      },
      "domain" : "139",
      "attributes" : [ "object" ],
      "id" : "138"
    }, {
      "range" : "116",
      "domain" : "143",
      "attributes" : [ "anonymous", "object" ],
      "id" : "142"
    }, {
      "range" : "110",
      "domain" : "145",
      "attributes" : [ "anonymous", "object" ],
      "id" : "144"
    }, {
      "range" : "110",
      "domain" : "147",
      "attributes" : [ "anonymous", "object" ],
      "id" : "146"
    }, {
      "iri" : "http://ekaw#organisedBy",
      "baseIri" : "http://ekaw",
      "range" : "148",
      "label" : {
        "IRI-based" : "organisedBy"
      },
      "domain" : "92",
      "subproperty" : [ "74", "89" ],
      "attributes" : [ "object" ],
      "id" : "77"
    }, {
      "range" : "110",
      "domain" : "150",
      "attributes" : [ "anonymous", "object" ],
      "id" : "149"
    }, {
      "range" : "94",
      "domain" : "93",
      "attributes" : [ "anonymous", "object" ],
      "id" : "151"
    }, {
      "range" : "94",
      "domain" : "153",
      "attributes" : [ "anonymous", "object" ],
      "id" : "152"
    }, {
      "range" : "94",
      "domain" : "155",
      "attributes" : [ "anonymous", "object" ],
      "id" : "154"
    }, {
      "range" : "122",
      "domain" : "157",
      "attributes" : [ "anonymous", "object" ],
      "id" : "156"
    }, {
      "range" : "12",
      "domain" : "116",
      "attributes" : [ "anonymous", "object" ],
      "id" : "158"
    }, {
      "range" : "125",
      "domain" : "160",
      "attributes" : [ "anonymous", "object" ],
      "id" : "159"
    }, {
      "range" : "116",
      "domain" : "115",
      "attributes" : [ "anonymous", "object" ],
      "id" : "161"
    }, {
      "iri" : "http://ekaw#hasPart",
      "inverse" : "80",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "hasPart"
      },
      "domain" : "36",
      "subproperty" : [ "162", "117" ],
      "attributes" : [ "transitive", "object" ],
      "id" : "118"
    }, {
      "iri" : "http://ekaw#inverse_of_partOf_7",
      "baseIri" : "http://ekaw",
      "range" : "92",
      "label" : {
        "IRI-based" : "inverse_of_partOf_7"
      },
      "superproperty" : [ "118" ],
      "domain" : "163",
      "attributes" : [ "object" ],
      "id" : "162"
    }, {
      "iri" : "http://ekaw#scientificallyOrganises",
      "baseIri" : "http://ekaw",
      "range" : "75",
      "label" : {
        "IRI-based" : "scientificallyOrganises"
      },
      "superproperty" : [ "90" ],
      "domain" : "28",
      "attributes" : [ "object" ],
      "id" : "76"
    }, {
      "iri" : "http://ekaw#updatedVersionOf",
      "baseIri" : "http://ekaw",
      "range" : "22",
      "label" : {
        "IRI-based" : "updatedVersionOf"
      },
      "domain" : "22",
      "attributes" : [ "object" ],
      "id" : "164"
    }, {
      "range" : "79",
      "domain" : "78",
      "attributes" : [ "anonymous", "object" ],
      "id" : "165"
    }, {
      "range" : "96",
      "domain" : "140",
      "attributes" : [ "anonymous", "object" ],
      "id" : "166"
    }, {
      "range" : "96",
      "domain" : "141",
      "attributes" : [ "anonymous", "object" ],
      "id" : "167"
    }, {
      "range" : "42",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "168"
    }, {
      "range" : "25",
      "domain" : "45",
      "attributes" : [ "anonymous", "object" ],
      "id" : "169"
    }, {
      "range" : "46",
      "domain" : "44",
      "attributes" : [ "anonymous", "object" ],
      "id" : "170"
    }, {
      "range" : "92",
      "domain" : "2",
      "attributes" : [ "anonymous", "object" ],
      "id" : "171"
    }, {
      "range" : "22",
      "domain" : "2",
      "attributes" : [ "anonymous", "object" ],
      "id" : "172"
    }, {
      "range" : "56",
      "domain" : "2",
      "attributes" : [ "anonymous", "object" ],
      "id" : "173"
    }, {
      "range" : "2",
      "domain" : "29",
      "attributes" : [ "anonymous", "object" ],
      "id" : "174"
    }, {
      "range" : "26",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "175"
    }, {
      "range" : "18",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "176"
    }, {
      "range" : "150",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "177"
    }, {
      "range" : "108",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "178"
    }, {
      "iri" : "http://ekaw#references",
      "inverse" : "123",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "references"
      },
      "domain" : "36",
      "attributes" : [ "object" ],
      "id" : "179"
    }, {
      "range" : "106",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "180"
    }, {
      "range" : "47",
      "domain" : "46",
      "attributes" : [ "anonymous", "object" ],
      "id" : "181"
    }, {
      "range" : "147",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "182"
    }, {
      "range" : "62",
      "domain" : "55",
      "attributes" : [ "anonymous", "object" ],
      "id" : "183"
    }, {
      "range" : "26",
      "domain" : "145",
      "attributes" : [ "anonymous", "object" ],
      "id" : "184"
    }, {
      "range" : "47",
      "domain" : "44",
      "attributes" : [ "anonymous", "object" ],
      "id" : "185"
    }, {
      "range" : "62",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "186"
    }, {
      "range" : "145",
      "domain" : "106",
      "attributes" : [ "anonymous", "object" ],
      "id" : "187"
    }, {
      "range" : "145",
      "domain" : "18",
      "attributes" : [ "anonymous", "object" ],
      "id" : "188"
    }, {
      "range" : "145",
      "domain" : "147",
      "attributes" : [ "anonymous", "object" ],
      "id" : "189"
    }, {
      "range" : "150",
      "domain" : "108",
      "attributes" : [ "anonymous", "object" ],
      "id" : "190"
    }, {
      "range" : "150",
      "domain" : "18",
      "attributes" : [ "anonymous", "object" ],
      "id" : "191"
    }, {
      "range" : "150",
      "domain" : "147",
      "attributes" : [ "anonymous", "object" ],
      "id" : "192"
    }, {
      "iri" : "http://ekaw#presentationOfPaper",
      "inverse" : "138",
      "baseIri" : "http://ekaw",
      "range" : "194",
      "label" : {
        "IRI-based" : "presentationOfPaper"
      },
      "cardinality" : "1",
      "domain" : "110",
      "attributes" : [ "object" ],
      "id" : "193"
    }, {
      "iri" : "http://ekaw#technicallyOrganisedBy",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "technicallyOrganisedBy"
      },
      "superproperty" : [ "77" ],
      "domain" : "36",
      "attributes" : [ "object" ],
      "id" : "89"
    }, {
      "range" : "84",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "195"
    }, {
      "iri" : "http://ekaw#paperInVolume",
      "baseIri" : "http://ekaw",
      "range" : "36",
      "label" : {
        "IRI-based" : "paperInVolume"
      },
      "domain" : "36",
      "attributes" : [ "object" ],
      "id" : "37"
    }, {
      "iri" : "http://ekaw#reviewWrittenBy",
      "baseIri" : "http://ekaw",
      "range" : "1",
      "label" : {
        "IRI-based" : "reviewWrittenBy"
      },
      "superproperty" : [ "21" ],
      "domain" : "94",
      "attributes" : [ "object" ],
      "id" : "24"
    }, {
      "range" : "98",
      "domain" : "101",
      "attributes" : [ "anonymous", "object" ],
      "id" : "196"
    }, {
      "range" : "150",
      "domain" : "26",
      "attributes" : [ "anonymous", "object" ],
      "id" : "197"
    }, {
      "range" : "150",
      "domain" : "106",
      "attributes" : [ "anonymous", "object" ],
      "id" : "198"
    }, {
      "range" : "155",
      "domain" : "93",
      "attributes" : [ "anonymous", "object" ],
      "id" : "199"
    }, {
      "range" : "93",
      "domain" : "153",
      "attributes" : [ "anonymous", "object" ],
      "id" : "200"
    }, {
      "range" : "101",
      "domain" : "40",
      "attributes" : [ "anonymous", "object" ],
      "id" : "201"
    }, {
      "range" : "101",
      "domain" : "94",
      "attributes" : [ "anonymous", "object" ],
      "id" : "202"
    }, {
      "range" : "155",
      "domain" : "153",
      "attributes" : [ "anonymous", "object" ],
      "id" : "203"
    }, {
      "range" : "137",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "204"
    }, {
      "iri" : "http://ekaw#reviewOfPaper",
      "baseIri" : "http://ekaw",
      "range" : "40",
      "label" : {
        "IRI-based" : "reviewOfPaper"
      },
      "domain" : "94",
      "attributes" : [ "object" ],
      "id" : "205"
    }, {
      "iri" : "http://ekaw#listsEvent",
      "baseIri" : "http://ekaw",
      "range" : "92",
      "label" : {
        "IRI-based" : "listsEvent"
      },
      "domain" : "206",
      "attributes" : [ "object" ],
      "id" : "114"
    }, {
      "range" : "132",
      "domain" : "134",
      "attributes" : [ "anonymous", "object" ],
      "id" : "207"
    }, {
      "range" : "79",
      "domain" : "40",
      "attributes" : [ "anonymous", "object" ],
      "id" : "208"
    }, {
      "range" : "84",
      "domain" : "79",
      "attributes" : [ "anonymous", "object" ],
      "id" : "209"
    }, {
      "range" : "15",
      "domain" : "14",
      "attributes" : [ "anonymous", "object" ],
      "id" : "210"
    }, {
      "range" : "143",
      "domain" : "115",
      "attributes" : [ "anonymous", "object" ],
      "id" : "211"
    }, {
      "range" : "15",
      "domain" : "137",
      "attributes" : [ "anonymous", "object" ],
      "id" : "212"
    }, {
      "range" : "101",
      "domain" : "79",
      "attributes" : [ "anonymous", "object" ],
      "id" : "213"
    }, {
      "range" : "15",
      "domain" : "65",
      "attributes" : [ "anonymous", "object" ],
      "id" : "214"
    }, {
      "range" : "60",
      "domain" : "58",
      "attributes" : [ "anonymous", "object" ],
      "id" : "215"
    }, {
      "range" : "53",
      "domain" : "60",
      "attributes" : [ "anonymous", "object" ],
      "id" : "216"
    }, {
      "range" : "94",
      "domain" : "79",
      "attributes" : [ "anonymous", "object" ],
      "id" : "217"
    }, {
      "range" : "39",
      "domain" : "116",
      "attributes" : [ "anonymous", "object" ],
      "id" : "218"
    }, {
      "iri" : "http://ekaw#presentationOfPaper",
      "inverse" : "138",
      "baseIri" : "http://ekaw",
      "range" : "39",
      "label" : {
        "IRI-based" : "presentationOfPaper"
      },
      "domain" : "147",
      "attributes" : [ "object", "someValues" ],
      "id" : "219"
    }, {
      "range" : "33",
      "domain" : "28",
      "attributes" : [ "anonymous", "object" ],
      "id" : "220"
    }, {
      "range" : "26",
      "domain" : "147",
      "attributes" : [ "anonymous", "object" ],
      "id" : "221"
    }, {
      "range" : "147",
      "domain" : "18",
      "attributes" : [ "anonymous", "object" ],
      "id" : "222"
    }, {
      "iri" : "http://ekaw#hasReview",
      "inverse" : "205",
      "baseIri" : "http://ekaw",
      "range" : "94",
      "label" : {
        "IRI-based" : "hasReview"
      },
      "minCardinality" : "3",
      "domain" : "40",
      "attributes" : [ "object" ],
      "id" : "223"
    }, {
      "range" : "98",
      "domain" : "94",
      "attributes" : [ "anonymous", "object" ],
      "id" : "224"
    }, {
      "range" : "108",
      "domain" : "106",
      "attributes" : [ "anonymous", "object" ],
      "id" : "225"
    }, {
      "range" : "108",
      "domain" : "18",
      "attributes" : [ "anonymous", "object" ],
      "id" : "226"
    }, {
      "iri" : "http://ekaw#authorOf",
      "baseIri" : "http://ekaw",
      "range" : "22",
      "label" : {
        "IRI-based" : "authorOf"
      },
      "domain" : "2",
      "attributes" : [ "object" ],
      "id" : "23"
    }, {
      "range" : "94",
      "domain" : "40",
      "attributes" : [ "anonymous", "object" ],
      "id" : "227"
    }, {
      "range" : "98",
      "domain" : "40",
      "attributes" : [ "anonymous", "object" ],
      "id" : "228"
    }, {
      "range" : "26",
      "domain" : "108",
      "attributes" : [ "anonymous", "object" ],
      "id" : "229"
    }, {
      "range" : "108",
      "domain" : "147",
      "attributes" : [ "anonymous", "object" ],
      "id" : "230"
    }, {
      "range" : "84",
      "domain" : "98",
      "attributes" : [ "anonymous", "object" ],
      "id" : "231"
    }, {
      "range" : "84",
      "domain" : "94",
      "attributes" : [ "anonymous", "object" ],
      "id" : "232"
    }, {
      "range" : "42",
      "domain" : "58",
      "attributes" : [ "anonymous", "object" ],
      "id" : "233"
    }, {
      "range" : "84",
      "domain" : "40",
      "attributes" : [ "anonymous", "object" ],
      "id" : "234"
    }, {
      "iri" : "http://ekaw#reviewerOfPaper",
      "inverse" : "63",
      "baseIri" : "http://ekaw",
      "range" : "40",
      "label" : {
        "IRI-based" : "reviewerOfPaper"
      },
      "domain" : "1",
      "attributes" : [ "object" ],
      "id" : "235"
    }, {
      "range" : "53",
      "domain" : "58",
      "attributes" : [ "anonymous", "object" ],
      "id" : "236"
    }, {
      "range" : "110",
      "domain" : "106",
      "attributes" : [ "anonymous", "object" ],
      "id" : "237"
    }, {
      "range" : "42",
      "domain" : "53",
      "attributes" : [ "anonymous", "object" ],
      "id" : "238"
    }, {
      "range" : "39",
      "domain" : "143",
      "attributes" : [ "anonymous", "object" ],
      "id" : "239"
    }, {
      "iri" : "http://ekaw#updatedVersionOf",
      "baseIri" : "http://ekaw",
      "range" : "143",
      "label" : {
        "IRI-based" : "updatedVersionOf"
      },
      "domain" : "39",
      "attributes" : [ "object", "someValues" ],
      "id" : "240"
    }, {
      "iri" : "http://ekaw#writtenBy",
      "inverse" : "23",
      "baseIri" : "http://ekaw",
      "range" : "6",
      "label" : {
        "IRI-based" : "writtenBy"
      },
      "domain" : "39",
      "subproperty" : [ "24" ],
      "attributes" : [ "object", "someValues" ],
      "id" : "241"
    }, {
      "range" : "39",
      "domain" : "13",
      "attributes" : [ "anonymous", "object" ],
      "id" : "242"
    }, {
      "range" : "28",
      "domain" : "31",
      "attributes" : [ "anonymous", "object" ],
      "id" : "243"
    }, {
      "range" : "28",
      "domain" : "30",
      "attributes" : [ "anonymous", "object" ],
      "id" : "244"
    }, {
      "range" : "29",
      "domain" : "33",
      "attributes" : [ "anonymous", "object" ],
      "id" : "245"
    }, {
      "range" : "29",
      "domain" : "32",
      "attributes" : [ "anonymous", "object" ],
      "id" : "246"
    }, {
      "range" : "25",
      "domain" : "27",
      "attributes" : [ "anonymous", "object" ],
      "id" : "247"
    }, {
      "range" : "79",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "248"
    }, {
      "iri" : "http://ekaw#locationOf",
      "inverse" : "250",
      "baseIri" : "http://ekaw",
      "range" : "92",
      "label" : {
        "IRI-based" : "locationOf"
      },
      "domain" : "56",
      "attributes" : [ "object" ],
      "id" : "249"
    }, {
      "range" : "84",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "251"
    }, {
      "range" : "94",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "252"
    }, {
      "iri" : "http://ekaw#hasUpdatedVersion",
      "inverse" : "164",
      "baseIri" : "http://ekaw",
      "range" : "22",
      "label" : {
        "IRI-based" : "hasUpdatedVersion"
      },
      "domain" : "22",
      "attributes" : [ "object" ],
      "id" : "253"
    }, {
      "range" : "40",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "254"
    }, {
      "range" : "86",
      "domain" : "34",
      "attributes" : [ "anonymous", "object" ],
      "id" : "255"
    }, {
      "range" : "145",
      "domain" : "104",
      "attributes" : [ "anonymous", "object" ],
      "id" : "256"
    }, {
      "range" : "150",
      "domain" : "145",
      "attributes" : [ "anonymous", "object" ],
      "id" : "257"
    }, {
      "iri" : "http://ekaw#publisherOf",
      "baseIri" : "http://ekaw",
      "range" : "259",
      "label" : {
        "IRI-based" : "publisherOf"
      },
      "domain" : "29",
      "attributes" : [ "object" ],
      "id" : "258"
    }, {
      "range" : "108",
      "domain" : "145",
      "attributes" : [ "anonymous", "object" ],
      "id" : "260"
    }, {
      "iri" : "http://ekaw#heldIn",
      "baseIri" : "http://ekaw",
      "range" : "56",
      "label" : {
        "IRI-based" : "heldIn"
      },
      "domain" : "92",
      "attributes" : [ "object" ],
      "id" : "250"
    }, {
      "range" : "98",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "261"
    }, {
      "range" : "101",
      "domain" : "66",
      "attributes" : [ "anonymous", "object" ],
      "id" : "262"
    }, {
      "iri" : "http://ekaw#coversTopic",
      "baseIri" : "http://ekaw",
      "range" : "71",
      "label" : {
        "IRI-based" : "coversTopic"
      },
      "domain" : "263",
      "attributes" : [ "object" ],
      "id" : "73"
    }, {
      "iri" : "http://ekaw#partOfEvent",
      "baseIri" : "http://ekaw",
      "range" : "104",
      "label" : {
        "IRI-based" : "partOfEvent"
      },
      "superproperty" : [ "80" ],
      "domain" : "25",
      "attributes" : [ "transitive", "object", "someValues" ],
      "id" : "264"
    }, {
      "range" : "26",
      "domain" : "106",
      "attributes" : [ "anonymous", "object" ],
      "id" : "265"
    }, {
      "iri" : "http://ekaw#hasEvent",
      "inverse" : "81",
      "baseIri" : "http://ekaw",
      "range" : "110",
      "label" : {
        "IRI-based" : "hasEvent"
      },
      "superproperty" : [ "118" ],
      "domain" : "26",
      "attributes" : [ "object", "someValues" ],
      "id" : "266"
    }, {
      "range" : "106",
      "domain" : "18",
      "attributes" : [ "anonymous", "object" ],
      "id" : "267"
    }, {
      "iri" : "http://ekaw#hasReview",
      "inverse" : "205",
      "baseIri" : "http://ekaw",
      "range" : "155",
      "label" : {
        "IRI-based" : "hasReview"
      },
      "domain" : "143",
      "attributes" : [ "object", "someValues" ],
      "id" : "268"
    } ]
  };


//////////////////////////////////////////////
//    Mapping
//////////////////////////////////////////////

mapping_edas_ekaw = {
    "@context":{
        "@base": "http://knowledgeweb.semanticweb.org/heterogeneity/alignment",   
        "xsd":"http://www.w3.org/2001/XMLSchema#"
    },
    "@type":["Alignment"],
    "xml":[{"@value":"yes"}],
    "level":[{"@value":"0"}],
    "type":[{"@value":"??"}],
    "onto1":[{"@id":"http://edas"}],
    "onto2":[{"@id":"http://ekaw"}],
    "map":[
        {"@id":"_:b1"},
        {"@id":"_:b2"},
        {"@id":"_:b3"},
        {"@id":"_:b4"},
        {"@id":"_:b5"},
        {"@id":"_:b6"},
        {"@id":"_:b7"},
        {"@id":"_:b8"},
        {"@id":"_:b9"},
        {"@id":"_:b10"},
        {"@id":"_:b11"},
        {"@id":"_:b12"},
        {"@id":"_:b13"},
        {"@id":"_:b14"},
        {"@id":"_:b15"},
        {"@id":"_:b16"},
        {"@id":"_:b17"},
        {"@id":"_:b18"},
        {"@id":"_:b19"},
        {"@id":"_:b20"},
        {"@id":"_:b21"},
        {"@id":"_:b22"},
        {"@id":"_:b23"}
    ],
    "Cell":[
        {
            "@id":"_:b1",
            "@type":["Cell"],
            "entity1":[{"@id":"http://edas#ConferenceDinner"}],
            "entity2":[{"@id":"http://ekaw#Conference_Banquet"}],
            "measure":[{"@value":"1.0","@type":"xsd:float"}],
            "relation":[{"@value":"="}]
        },
        {
            "@id":"_:b10",
            "@type":["Cell"],
            "entity1":[{"@id":"http://edas#Author"}],
            "entity2":[{"@id":"http://ekaw#Paper_Author"}],
            "measure":[{"@value":"1.0","@type":"xsd:float"}],
            "relation":[{"@value":"="}]
        },
        {
            "@id":"_:b11",
            "@type":["Cell"],
            "entity1":[{"@id":"http://edas#isLocationOf"}],
            "entity2":[{"@id":"http://ekaw#locationOf"}],
            "measure":[{"@value":"1.0","@type":"xsd:float"}],
            "relation":[{"@value":"="}]
        },
        {
            "@id":"_:b12",
            "@type":["Cell"],
            "entity1":[{"@id":"http://edas#Topic"}],
            "entity2":[{"@id":"http://ekaw#Research_Topic"}],
            "measure":[{"@value":"1.0","@type":"xsd:float"}],
            "relation":[{"@value":"="}]
        },
        {
            "@id":"_:b13","@type":["Cell"],
            "entity1":[{"@id":"http://edas#Document"}],
            "entity2":[{"@id":"http://ekaw#Document"}],
            "measure":[{"@value":"1.0","@type":"xsd:float"}],
            "relation":[{"@value":"="}]
        },
        {
            "@id":"_:b14","@type":["Cell"],
            "entity1":[{"@id":"http://edas#RejectedPaper"}],
            "entity2":[{"@id":"http://ekaw#Rejected_Paper"}],
            "measure":[{"@value":"1.0","@type":"xsd:float"}],
            "relation":[{"@value":"="}]
        },
        {
            "@id":"_:b15","@type":["Cell"],"entity1":[{"@id":"http://edas#ConferenceEvent"}],"entity2":[{"@id":"http://ekaw#Event"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b16","@type":["Cell"],"entity1":[{"@id":"http://edas#SessionChair"}],"entity2":[{"@id":"http://ekaw#Session_Chair"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b17","@type":["Cell"],"entity1":[{"@id":"http://edas#Person"}],"entity2":[{"@id":"http://ekaw#Person"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b18","@type":["Cell"],"entity1":[{"@id":"http://edas#Programme"}],"entity2":[{"@id":"http://ekaw#Programme_Brochure"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b19","@type":["Cell"],"entity1":[{"@id":"http://edas#Review"}],"entity2":[{"@id":"http://ekaw#Review"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b2","@type":["Cell"],"entity1":[{"@id":"http://edas#AcademicEvent"}],"entity2":[{"@id":"http://ekaw#Scientific_Event"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b20","@type":["Cell"],"entity1":[{"@id":"http://edas#Workshop"}],"entity2":[{"@id":"http://ekaw#Workshop"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b21","@type":["Cell"],"entity1":[{"@id":"http://edas#Paper"}],"entity2":[{"@id":"http://ekaw#Paper"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b22","@type":["Cell"],"entity1":[{"@id":"http://edas#Attendee"}],"entity2":[{"@id":"http://ekaw#Conference_Participant"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b23","@type":["Cell"],"entity1":[{"@id":"http://edas#hasLocation"}],"entity2":[{"@id":"http://ekaw#heldIn"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b3","@type":["Cell"],"entity1":[{"@id":"http://edas#AcceptedPaper"}],"entity2":[{"@id":"http://ekaw#Accepted_Paper"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b4","@type":["Cell"],"entity1":[{"@id":"http://edas#isReviewedBy"}],"entity2":[{"@id":"http://ekaw#hasReviewer"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b5","@type":["Cell"],"entity1":[{"@id":"http://edas#Place"}],"entity2":[{"@id":"http://ekaw#Location"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b6","@type":["Cell"],"entity1":[{"@id":"http://edas#AcademiaOrganization"}],"entity2":[{"@id":"http://ekaw#Academic_Institution"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b7","@type":["Cell"],"entity1":[{"@id":"http://edas#SocialEvent"}],"entity2":[{"@id":"http://ekaw#Social_Event"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b8","@type":["Cell"],"entity1":[{"@id":"http://edas#isReviewing"}],"entity2":[{"@id":"http://ekaw#reviewerOfPaper"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        },
        {
            "@id":"_:b9","@type":["Cell"],"entity1":[{"@id":"http://edas#Organization"}],"entity2":[{"@id":"http://ekaw#Organisation"}],"measure":[{"@value":"1.0","@type":"xsd:float"}],"relation":[{"@value":"="}]
        }
    ],

    "Ontology":[
        {
            "@id":"http://edas",
            "@type":["Ontology"],
            "location":[{"@value":"http://nb.vse.cz/~svabo/oaei2010/edas.owl"}],
            "entity":[
                {"@id":"http://edas#AcademiaOrganization"},
                {"@id":"http://edas#AcademicEvent"},
                {"@id":"http://edas#AcceptedPaper"},
                {"@id":"http://edas#Attendee"},
                {"@id":"http://edas#Author"},
                {"@id":"http://edas#ConferenceDinner"},
                {"@id":"http://edas#ConferenceEvent"},
                {"@id":"http://edas#Document"},
                {"@id":"http://edas#Organization"},
                {"@id":"http://edas#Paper"},
                {"@id":"http://edas#Person"},
                {"@id":"http://edas#Place"},
                {"@id":"http://edas#Programme"},
                {"@id":"http://edas#RejectedPaper"},
                {"@id":"http://edas#Review"},
                {"@id":"http://edas#SessionChair"},
                {"@id":"http://edas#SocialEvent"},
                {"@id":"http://edas#Topic"},
                {"@id":"http://edas#Workshop"},
                {"@id":"http://edas#hasLocation"},
                {"@id":"http://edas#isLocationOf"},
                {"@id":"http://edas#isReviewedBy"},
                {"@id":"http://edas#isReviewing"}
            ]
        },
        {
            "@id":"http://ekaw",
            "@type":["Ontology"],
            "location":[{"@value":"http://nb.vse.cz/~svabo/oaei2010/ekaw.owl"}],
            "entity":[
                {"@id":"http://ekaw#Academic_Institution"},
                {"@id":"http://ekaw#Accepted_Paper"},
                {"@id":"http://ekaw#Conference_Banquet"},
                {"@id":"http://ekaw#Conference_Participant"},
                {"@id":"http://ekaw#Document"},
                {"@id":"http://ekaw#Event"},
                {"@id":"http://ekaw#Location"},
                {"@id":"http://ekaw#Organisation"},
                {"@id":"http://ekaw#Paper"},
                {"@id":"http://ekaw#Paper_Author"},
                {"@id":"http://ekaw#Person"},
                {"@id":"http://ekaw#Programme_Brochure"},
                {"@id":"http://ekaw#Rejected_Paper"},
                {"@id":"http://ekaw#Research_Topic"},
                {"@id":"http://ekaw#Review"},
                {"@id":"http://ekaw#Scientific_Event"},
                {"@id":"http://ekaw#Session_Chair"},
                {"@id":"http://ekaw#Social_Event"},
                {"@id":"http://ekaw#Workshop"},
                {"@id":"http://ekaw#hasReviewer"},
                {"@id":"http://ekaw#heldIn"},
                {"@id":"http://ekaw#locationOf"},
                {"@id":"http://ekaw#reviewerOfPaper"}
            ]
        }
    ],
    "ids":[
        {"@id":"Alignment"},
        {"@id":"Cell"},
        {"@id":"Ontology"}
    ]
};
