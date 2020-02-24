var edas;
var ekaw;
var mapping_edas_ekaw;

edas = {
    "name": "edas",
    "baseNS": "http://edas",
    "classCount": 103,
    "root": {
      "depth": 0,
      "name": "Thing",
      "subClasses": [
        {
          "depth": 1,
          "name": "Person",
          "subClasses": [
            {
              "depth": 2,
              "name": "ConferenceChair",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "TPCMember",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Attendee",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "SessionChair",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "SingleLevelConference",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "Topic",
          "subClasses": [
            {
              "depth": 2,
              "name": "MicroelectronicsTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "MultimediaTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "SignalProcessingTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "CommunicationsTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "OperatingTopicsystems",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "CryptographyTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "ParallelAndDistributedComputingTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "ComputerArchitectureTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "SatelliteAndSpaceCommunicationsTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "MedicineTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "TestOnlyTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "CADTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "SecurityTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "RadioCommunicationsTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "CommunicationTheoryTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "AntennasTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "WirelessCommunicationsTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "ComputerNetworksTopic",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "ComputerNetworksSecurityTopic",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "ComputerNetworksMeasurementsTopic",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "ComputerNetworksAapplicationsTopic",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "ComputerNetworksOpticalTopic",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "ComputerNetworksSensorTopic",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "ComputerNetworksSwitchingTopic",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "ComputerNetworksEnterpriseTopic",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "ComputerNetworksManagementTopic",
                  "subClasses": []
                }
              ]
            },
            {
              "depth": 2,
              "name": "PowerlineTransmissionTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "MobileComputingTopic",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "PerformanceTopic",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Country",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "ReviewForm",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "Author",
          "subClasses": [
            {
              "depth": 2,
              "name": "Presenter",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Reviewer",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "PersonalHistory",
          "subClasses": [
            {
              "depth": 2,
              "name": "PersonalPublicationHistory",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "PersonalReviewHistory",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "ReviewQuestion",
          "subClasses": [
            {
              "depth": 2,
              "name": "TextualReviewQuestion",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "NumericalReviewQuestion",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "ContactInformation",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "TwoLevelConference",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "ConferenceSession",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "Place",
          "subClasses": [
            {
              "depth": 2,
              "name": "AccommodationPlace",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "MeetingRoomPlace",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "DiningPlace",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "ConferenceVenuePlace",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Sponsorship",
          "subClasses": [
            {
              "depth": 2,
              "name": "TravelGrant",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Organization",
          "subClasses": [
            {
              "depth": 2,
              "name": "AcademiaOrganization",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "IndustryOrganization",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "NGO",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "GovernmentOrganization",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Call",
          "subClasses": [
            {
              "depth": 2,
              "name": "CallForManuscripts",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "CallForReviews",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "CallForPapers",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Document",
          "subClasses": [
            {
              "depth": 2,
              "name": "SlideSet",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "MealMenu",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Programme",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Review",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Paper",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "ActivePaper",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "RatedPapers",
                      "subClasses": []
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "RejectedPaper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "PendingPaper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "PublishedPaper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "WithdrawnPaper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "AcceptedPaper",
                  "subClasses": []
                }
              ]
            }
          ]
        },
        {
          "depth": 1,
          "name": "ConferenceEvent",
          "subClasses": [
            {
              "depth": 2,
              "name": "NonAcademicEvent",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "SocialEvent",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "Reception",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Excursion",
                      "subClasses": []
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "BreakEvent",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "CoffeeBreak",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "MealBreak",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "FreeTimeBreak",
                      "subClasses": []
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "MealEvent",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "ConferenceDinner",
                      "subClasses": []
                    }
                  ]
                }
              ]
            },
            {
              "depth": 2,
              "name": "AcademicEvent",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "TalkEvent",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "WelcomeTalk",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "ClosingTalk",
                      "subClasses": []
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "PaperPresentation",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Workshop",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "OrganizationalMeeting",
                  "subClasses": []
                }
              ]
            }
          ]
        },
        {
          "depth": 1,
          "name": "ReviewRating",
          "subClasses": [
            {
              "depth": 2,
              "name": "AcceptRating",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "AccpetIfRoomRating",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "RejectRating",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "WeekRejectRating",
              "subClasses": []
            }
          ]
        }
      ]
    }
  };

ekaw = {
    "name": "ekaw",
    "baseNS": "http://ekaw",
    "classCount": 73,
    "root": {
      "depth": 0,
      "name": "Thing",
      "subClasses": [
        {
          "depth": 1,
          "name": "Organisation",
          "subClasses": [
            {
              "depth": 2,
              "name": "Academic_Institution",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "University",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Research_Institute",
                  "subClasses": []
                }
              ]
            },
            {
              "depth": 2,
              "name": "Proceedings_Publisher",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Organising_Agency",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Event",
          "subClasses": [
            {
              "depth": 2,
              "name": "Scientific_Event",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "Conference",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Individual_Presentation",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "Tutorial",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Contributed_Talk",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Invited_Talk",
                      "subClasses": []
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "Session",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "Conference_Session",
                      "subClasses": [
                        {
                          "depth": 5,
                          "name": "Industrial_Session",
                          "subClasses": []
                        }
                      ]
                    },
                    {
                      "depth": 4,
                      "name": "Poster_Session",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Demo_Session",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Workshop_Session",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Regular_Session",
                      "subClasses": []
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "Workshop",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Track",
                  "subClasses": []
                }
              ]
            },
            {
              "depth": 2,
              "name": "Social_Event",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "Conference_Banquet",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Conference_Trip",
                  "subClasses": []
                }
              ]
            }
          ]
        },
        {
          "depth": 1,
          "name": "Location",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "Person",
          "subClasses": [
            {
              "depth": 2,
              "name": "Paper_Author",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Conference_Participant",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "Workshop_Chair",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Session_Chair",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Tutorial_Chair",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Late-Registered_Participant",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Demo_Chair",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "OC_Member",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "OC_Chair",
                      "subClasses": []
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "Early-Registered_Participant",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "PC_Chair",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Presenter",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "Invited_Speaker",
                      "subClasses": []
                    }
                  ]
                }
              ]
            },
            {
              "depth": 2,
              "name": "Student",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Possible_Reviewer",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "PC_Member",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "SC_Member",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "PC_Chair",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Session_Chair",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Workshop_Chair",
                      "subClasses": []
                    },
                    {
                      "depth": 4,
                      "name": "Tutorial_Chair",
                      "subClasses": []
                    }
                  ]
                }
              ]
            },
            {
              "depth": 2,
              "name": "Agency_Staff_Member",
              "subClasses": []
            }
          ]
        },
        {
          "depth": 1,
          "name": "Research_Topic",
          "subClasses": []
        },
        {
          "depth": 1,
          "name": "Document",
          "subClasses": [
            {
              "depth": 2,
              "name": "Flyer",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Abstract",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "Invited_Talk_Abstract",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Tutorial_Abstract",
                  "subClasses": []
                }
              ]
            },
            {
              "depth": 2,
              "name": "Paper",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "Poster_Paper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Conference_Paper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Camera_Ready_Paper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Industrial_Paper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Regular_Paper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Demo_Paper",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Submitted_Paper",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "Assigned_Paper",
                      "subClasses": [
                        {
                          "depth": 5,
                          "name": "Evaluated_Paper",
                          "subClasses": [
                            {
                              "depth": 6,
                              "name": "Rejected_Paper",
                              "subClasses": []
                            },
                            {
                              "depth": 6,
                              "name": "Accepted_Paper",
                              "subClasses": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "depth": 3,
                  "name": "Workshop_Paper",
                  "subClasses": []
                }
              ]
            },
            {
              "depth": 2,
              "name": "Multi-author_Volume",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "Proceedings",
                  "subClasses": [
                    {
                      "depth": 4,
                      "name": "Conference_Proceedings",
                      "subClasses": []
                    }
                  ]
                }
              ]
            },
            {
              "depth": 2,
              "name": "Programme_Brochure",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Web_Site",
              "subClasses": []
            },
            {
              "depth": 2,
              "name": "Review",
              "subClasses": [
                {
                  "depth": 3,
                  "name": "Positive_Review",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Neutral_Review",
                  "subClasses": []
                },
                {
                  "depth": 3,
                  "name": "Negative_Review",
                  "subClasses": []
                }
              ]
            }
          ]
        }
      ]
    }
  };

mapping_edas_ekaw = {
	"onto1": "http://edas",
	"onto2": "http://ekaw",
	"alignments": [
		{
			"entity1": "ConferenceDinner",
			"entity2": "Conference_Banquet",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "AcademicEvent",
			"entity2": "Scientific_Event",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "AcceptedPaper",
			"entity2": "Accepted_Paper",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "isReviewedBy",
			"entity2": "hasReviewer",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Place",
			"entity2": "Location",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "AcademiaOrganization",
			"entity2": "Academic_Institution",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "SocialEvent",
			"entity2": "Social_Event",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "isReviewing",
			"entity2": "reviewerOfPaper",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Organization",
			"entity2": "Organisation",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Author",
			"entity2": "Paper_Author",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "isLocationOf",
			"entity2": "locationOf",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Topic",
			"entity2": "Research_Topic",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Document",
			"entity2": "Document",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "RejectedPaper",
			"entity2": "Rejected_Paper",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "ConferenceEvent",
			"entity2": "Event",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "SessionChair",
			"entity2": "Session_Chair",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Person",
			"entity2": "Person",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Programme",
			"entity2": "Programme_Brochure",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Review",
			"entity2": "Review",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Workshop",
			"entity2": "Workshop",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Paper",
			"entity2": "Paper",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "Attendee",
			"entity2": "Conference_Participant",
			"relation": "=",
			"measure": 1.0
		},
		{
			"entity1": "hasLocation",
			"entity2": "heldIn",
			"relation": "=",
			"measure": 1.0
		}
	]
};