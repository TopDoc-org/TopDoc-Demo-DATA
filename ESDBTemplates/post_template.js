const postSearchTemplate =
{
  "script": {
    "lang": "mustache",
    "source": """
    {
    "size": {{sizeValue}}, 
     "from": {{fromValue}},
     {{#boolSort}}
     "sort":[
       {"{{sortField}}":{"order":"{{sortOrder}}"}}
    ],
     {{/boolSort}}
    "query": {
    "bool": {     
         "must": [
        {
          {{#boolMustMatchAll}}
          "match_all": {}
          {{/boolMustMatchAll}}
          {{#boolMustMultiMatch}}
          "multi_match": {
            "query": "{{queryValue}}",
            "fields": [
              "body.post^5",
              "createdBy.name^4",
              "commentedBy.name^2",
              "commentedBy.commentBody^1",
              "hashtags^3",
              "flairs^6"
            ],
              "fuzziness" : "AUTO",
              "prefix_length" : 2
          }
          {{/boolMustMultiMatch}}
        }
      ]
      {{#boolShould}}
      ,  
       "should": [
        {
          "multi_match": {
            "query": "{{queryValue}}",
            "fields": [
              "body.post^5",
              "createdBy.name^4",
              "commentedBy.name^2",
              "commentedBy.commentBody^1",
              "hashtags^3",
              "flairs^6"
            ]
          }
        }
      ]
      {{/boolShould}}
      {{#boolFilter}} 
      , 
           
      "filter": [
         {
          "exists": {
            "field": "id"
          }
        } 
        {{#filterPostVisibility}}
        ,
        {
          "terms": {
            "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
          }
        }
        {{/filterPostVisibility}}
        {{#filterFlairs}}
        ,
        {
          "terms": {
            "flairs": {{#toJson}}flairsValue{{/toJson}}
          }
        }
        {{/filterFlairs}}
        {{#filterPostFrom}}
        ,       
        {
          "terms": {
            "postFrom": {{#toJson}}postFromValue{{/toJson}}
          }
        }
        {{/filterPostFrom}}
        {{#filterStatus}}
        ,        
        {
          "terms": {
            "status": {{#toJson}}statusValue{{/toJson}}
          }
        }
        {{/filterStatus}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "language": {{#toJson}}languageValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
        {{#filterFlaggedBy.name}}
        , 
        {
          "nested": {
            "path": "flaggedBy",
            "query": {
              "term": {
                "flaggedBy.name": {
                 "value": "{{flaggedBy.nameValue}}"
                }
              }
            }
          }
        }
        {{/filterFlaggedBy.name}}
        {{#filterFlaggedBy.id}}
        ,       
        {
          "nested": {
            "path": "flaggedBy",
            "query": {
              "term": {
                "flaggedBy.id": {
                  "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                }
              }
            }
          }
        }
        {{/filterFlaggedBy.id}}
      ]
      {{/boolFilter}}
    }
  },
      "aggs": {
        "TotalAggs": {
        "global": {},
        "aggs": {
          {{#statusAggregation}}
          "statusAggs": {
          "filter": {
              "bool": {     
                "must": [
                  {
                    {{#boolMustMatchAll}}
                    "match_all": {}
                    {{/boolMustMatchAll}}
                    {{#boolMustMultiMatch}}
                    "multi_match": {
                      "query": "{{queryValue}}",
                      "fields": [
                        "body.post^5",
                        "createdBy.name^4",
                        "commentedBy.name^2",
                        "commentedBy.commentBody^1",
                        "hashtags^3",
                        "flairs^6"
                      ],
                        "fuzziness" : "AUTO",
                        "prefix_length" : 2
                    }
                    {{/boolMustMultiMatch}}
                  }
                ]
                {{#boolFilter}} 
                , 
                     
                "filter": [
                   {
                    "exists": {
                      "field": "id"
                    }
                  } 
                  {{#filterPostVisibility}}
                  ,
                  {
                    "terms": {
                      "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
                    }
                  }
                  {{/filterPostVisibility}}
                  {{#filterFlairs}}
                  ,
                  {
                    "terms": {
                      "flairs": {{#toJson}}flairsValue{{/toJson}}
                    }
                  }
                  {{/filterFlairs}}
                  {{#filterPostFrom}}
                  ,       
                  {
                    "terms": {
                      "postFrom": {{#toJson}}postFromValue{{/toJson}}
                    }
                  }
                  {{/filterPostFrom}}
                  {{#filterStatus}}
                  ,        
                  {
                    "terms": {
                      "status": {{#toJson}}statusValue{{/toJson}}
                    }
                  }
                  {{/filterStatus}}
                  {{#filterLanguage}}
                  ,       
                  {
                    "terms": {
                      "language": {{#toJson}}languageValue{{/toJson}}
                      
                    }
                  }
                  {{/filterLanguage}}
                  {{#filterFlaggedBy.name}}
                  , 
                  {
                    "nested": {
                      "path": "flaggedBy",
                      "query": {
                        "term": {
                          "flaggedBy.name": {
                           "value": "{{flaggedBy.nameValue}}"
                          }
                        }
                      }
                    }
                  }
                  {{/filterFlaggedBy.name}}
                  {{#filterFlaggedBy.id}}
                  ,       
                  {
                    "nested": {
                      "path": "flaggedBy",
                      "query": {
                        "term": {
                          "flaggedBy.id": {
                            "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                          }
                        }
                      }
                    }
                  }
                  {{/filterFlaggedBy.id}}
                ]
                {{/boolFilter}}
  }
          }
          ,
          "aggs": {
              "statusAggs": {
              "terms": {
                  "field": "status"
                  
              }
              }
          }
          }
          {{/statusAggregation}}

            {{#postVisibilityAggregation}}
            {{#postVisibilityAggregationComma}},{{/postVisibilityAggregationComma}}
            "postVisibilityAggs": {
              "filter": {
                "bool": {     
                  "must": [
                    {
                      {{#boolMustMatchAll}}
                      "match_all": {}
                      {{/boolMustMatchAll}}
                      {{#boolMustMultiMatch}}
                      "multi_match": {
                        "query": "{{queryValue}}",
                        "fields": [
                          "body.post^5",
                          "createdBy.name^4",
                          "commentedBy.name^2",
                          "commentedBy.commentBody^1",
                          "hashtags^3",
                          "flairs^6"
                        ],
                          "fuzziness" : "AUTO",
                          "prefix_length" : 2
                      }
                      {{/boolMustMultiMatch}}
                    }
                  ]
                  {{#boolFilter}} 
                  , 
                       
                  "filter": [
                     {
                      "exists": {
                        "field": "id"
                      }
                    } 
                    {{#filterPostVisibility}}
                    ,
                    {
                      "terms": {
                        "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
                      }
                    }
                    {{/filterPostVisibility}}
                    {{#filterFlairs}}
                    ,
                    {
                      "terms": {
                        "flairs": {{#toJson}}flairsValue{{/toJson}}
                      }
                    }
                    {{/filterFlairs}}
                    {{#filterPostFrom}}
                    ,       
                    {
                      "terms": {
                        "postFrom": {{#toJson}}postFromValue{{/toJson}}
                      }
                    }
                    {{/filterPostFrom}}
                    {{#filterStatus}}
                    ,        
                    {
                      "terms": {
                        "status": {{#toJson}}statusValue{{/toJson}}
                      }
                    }
                    {{/filterStatus}}
                    {{#filterLanguage}}
                    ,       
                    {
                      "terms": {
                        "language": {{#toJson}}languageValue{{/toJson}}
                        
                      }
                    }
                    {{/filterLanguage}}
                    {{#filterFlaggedBy.name}}
                    , 
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.name": {
                             "value": "{{flaggedBy.nameValue}}"
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.name}}
                    {{#filterFlaggedBy.id}}
                    ,       
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.id": {
                              "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.id}}
                  ]
                  {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "postVisibilityAggs": {
                "terms": {
                    "field": "postVisibility"
                    
                }
                }
            }
            }
            {{/postVisibilityAggregation}}
            
            {{#languageAggregation}}
            {{#languageAggregationComma}},{{/languageAggregationComma}}
            "languageAggs": {
              "filter": {
                "bool": {     
                  "must": [
                    {
                      {{#boolMustMatchAll}}
                      "match_all": {}
                      {{/boolMustMatchAll}}
                      {{#boolMustMultiMatch}}
                      "multi_match": {
                        "query": "{{queryValue}}",
                        "fields": [
                          "body.post^5",
                          "createdBy.name^4",
                          "commentedBy.name^2",
                          "commentedBy.commentBody^1",
                          "hashtags^3",
                          "flairs^6"
                        ],
                          "fuzziness" : "AUTO",
                          "prefix_length" : 2
                      }
                      {{/boolMustMultiMatch}}
                    }
                  ]
                  {{#boolFilter}} 
                  , 
                       
                  "filter": [
                     {
                      "exists": {
                        "field": "id"
                      }
                    } 
                    {{#filterPostVisibility}}
                    ,
                    {
                      "terms": {
                        "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
                      }
                    }
                    {{/filterPostVisibility}}
                    {{#filterFlairs}}
                    ,
                    {
                      "terms": {
                        "flairs": {{#toJson}}flairsValue{{/toJson}}
                      }
                    }
                    {{/filterFlairs}}
                    {{#filterPostFrom}}
                    ,       
                    {
                      "terms": {
                        "postFrom": {{#toJson}}postFromValue{{/toJson}}
                      }
                    }
                    {{/filterPostFrom}}
                    {{#filterStatus}}
                    ,        
                    {
                      "terms": {
                        "status": {{#toJson}}statusValue{{/toJson}}
                      }
                    }
                    {{/filterStatus}}
                    {{#filterLanguage}}
                    ,       
                    {
                      "terms": {
                        "language": {{#toJson}}languageValue{{/toJson}}
                        
                      }
                    }
                    {{/filterLanguage}}
                    {{#filterFlaggedBy.name}}
                    , 
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.name": {
                             "value": "{{flaggedBy.nameValue}}"
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.name}}
                    {{#filterFlaggedBy.id}}
                    ,       
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.id": {
                              "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.id}}
                  ]
                  {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "languageAggs": {
                "terms": {
                    "field": "language"
                    
                }
                }
            }
            }
            {{/languageAggregation}}

            {{#postFromAggregation}}
            {{#postFromAggregationComma}},{{/postFromAggregationComma}}
            "postFromAggs": {
              "filter": {
                "bool": {     
                  "must": [
                    {
                      {{#boolMustMatchAll}}
                      "match_all": {}
                      {{/boolMustMatchAll}}
                      {{#boolMustMultiMatch}}
                      "multi_match": {
                        "query": "{{queryValue}}",
                        "fields": [
                          "body.post^5",
                          "createdBy.name^4",
                          "commentedBy.name^2",
                          "commentedBy.commentBody^1",
                          "hashtags^3",
                          "flairs^6"
                        ],
                          "fuzziness" : "AUTO",
                          "prefix_length" : 2
                      }
                      {{/boolMustMultiMatch}}
                    }
                  ]
                  {{#boolFilter}} 
      , 
           
      "filter": [
         {
          "exists": {
            "field": "id"
          }
        } 
        {{#filterPostVisibility}}
        ,
        {
          "terms": {
            "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
          }
        }
        {{/filterPostVisibility}}
        {{#filterFlairs}}
        ,
        {
          "terms": {
            "flairs": {{#toJson}}flairsValue{{/toJson}}
          }
        }
        {{/filterFlairs}}
        {{#filterPostFrom}}
        ,       
        {
          "terms": {
            "postFrom": {{#toJson}}postFromValue{{/toJson}}
          }
        }
        {{/filterPostFrom}}
        {{#filterStatus}}
        ,        
        {
          "terms": {
            "status": {{#toJson}}statusValue{{/toJson}}
          }
        }
        {{/filterStatus}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "language": {{#toJson}}languageValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
        {{#filterFlaggedBy.name}}
        , 
        {
          "nested": {
            "path": "flaggedBy",
            "query": {
              "term": {
                "flaggedBy.name": {
                 "value": "{{flaggedBy.nameValue}}"
                }
              }
            }
          }
        }
        {{/filterFlaggedBy.name}}
        {{#filterFlaggedBy.id}}
        ,       
        {
          "nested": {
            "path": "flaggedBy",
            "query": {
              "term": {
                "flaggedBy.id": {
                  "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                }
              }
            }
          }
        }
        {{/filterFlaggedBy.id}}
      ]
      {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "postFromAggs": {
                "terms": {
                    "field": "postFrom"
                    
                }
                }
            }
            }
            {{/postFromAggregation}}
            
            
           
            {{#flaggedByNameAggregation}}
            {{#flaggedByNameAggregationComma}},{{/flaggedByNameAggregationComma}}
            "flaggedByNameAggs": {
              "filter": {
                "bool": {     
                  "must": [
                    {
                      {{#boolMustMatchAll}}
                      "match_all": {}
                      {{/boolMustMatchAll}}
                      {{#boolMustMultiMatch}}
                      "multi_match": {
                        "query": "{{queryValue}}",
                        "fields": [
                          "body.post^5",
                          "createdBy.name^4",
                          "commentedBy.name^2",
                          "commentedBy.commentBody^1",
                          "hashtags^3",
                          "flairs^6"
                        ],
                          "fuzziness" : "AUTO",
                          "prefix_length" : 2
                      }
                      {{/boolMustMultiMatch}}
                    }
                  ]
                  {{#boolFilter}} 
                  , 
                       
                  "filter": [
                     {
                      "exists": {
                        "field": "id"
                      }
                    } 
                    {{#filterPostVisibility}}
                    ,
                    {
                      "terms": {
                        "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
                      }
                    }
                    {{/filterPostVisibility}}
                    {{#filterFlairs}}
                    ,
                    {
                      "terms": {
                        "flairs": {{#toJson}}flairsValue{{/toJson}}
                      }
                    }
                    {{/filterFlairs}}
                    {{#filterPostFrom}}
                    ,       
                    {
                      "terms": {
                        "postFrom": {{#toJson}}postFromValue{{/toJson}}
                      }
                    }
                    {{/filterPostFrom}}
                    {{#filterStatus}}
                    ,        
                    {
                      "terms": {
                        "status": {{#toJson}}statusValue{{/toJson}}
                      }
                    }
                    {{/filterStatus}}
                    {{#filterLanguage}}
                    ,       
                    {
                      "terms": {
                        "language": {{#toJson}}languageValue{{/toJson}}
                        
                      }
                    }
                    {{/filterLanguage}}
                    {{#filterFlaggedBy.name}}
                    , 
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.name": {
                             "value": "{{flaggedBy.nameValue}}"
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.name}}
                    {{#filterFlaggedBy.id}}
                    ,       
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.id": {
                              "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.id}}
                  ]
                  {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "flaggedByNameAggs": {
                "terms": {
                    "field": "flaggedBy.name"
                    
                }
                }
            }
            }
            {{/flaggedByNameAggregation}}


            {{#flaggedByIdAggregation}}
            {{#flaggedByIdAggregationComma}},{{/flaggedByIdAggregationComma}}
            "flaggedByIdAggs": {
              "filter": {
                "bool": {     
                  "must": [
                    {
                      {{#boolMustMatchAll}}
                      "match_all": {}
                      {{/boolMustMatchAll}}
                      {{#boolMustMultiMatch}}
                      "multi_match": {
                        "query": "{{queryValue}}",
                        "fields": [
                          "body.post^5",
                          "createdBy.name^4",
                          "commentedBy.name^2",
                          "commentedBy.commentBody^1",
                          "hashtags^3",
                          "flairs^6"
                        ],
                          "fuzziness" : "AUTO",
                          "prefix_length" : 2
                      }
                      {{/boolMustMultiMatch}}
                    }
                  ]
                  {{#boolFilter}} 
                  , 
                       
                  "filter": [
                     {
                      "exists": {
                        "field": "id"
                      }
                    } 
                    {{#filterPostVisibility}}
                    ,
                    {
                      "terms": {
                        "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
                      }
                    }
                    {{/filterPostVisibility}}
                    {{#filterFlairs}}
                    ,
                    {
                      "terms": {
                        "flairs": {{#toJson}}flairsValue{{/toJson}}
                      }
                    }
                    {{/filterFlairs}}
                    {{#filterPostFrom}}
                    ,       
                    {
                      "terms": {
                        "postFrom": {{#toJson}}postFromValue{{/toJson}}
                      }
                    }
                    {{/filterPostFrom}}
                    {{#filterStatus}}
                    ,        
                    {
                      "terms": {
                        "status": {{#toJson}}statusValue{{/toJson}}
                      }
                    }
                    {{/filterStatus}}
                    {{#filterLanguage}}
                    ,       
                    {
                      "terms": {
                        "language": {{#toJson}}languageValue{{/toJson}}
                        
                      }
                    }
                    {{/filterLanguage}}
                    {{#filterFlaggedBy.name}}
                    , 
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.name": {
                             "value": "{{flaggedBy.nameValue}}"
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.name}}
                    {{#filterFlaggedBy.id}}
                    ,       
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.id": {
                              "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.id}}
                  ]
                  {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "flaggedByIdAggs": {
                "terms": {
                    "field": "flaggedBy.id"
                    
                }
                }
            }
            }
            {{/flaggedByIdAggregation}}
            
            {{#flairsAggregation}}
            {{#flairsAggregationComma}},{{/flairsAggregationComma}}
            "flairsAggs": {
              "filter": {
                "bool": {     
                  "must": [
                    {
                      {{#boolMustMatchAll}}
                      "match_all": {}
                      {{/boolMustMatchAll}}
                      {{#boolMustMultiMatch}}
                      "multi_match": {
                        "query": "{{queryValue}}",
                        "fields": [
                          "body.post^5",
                          "createdBy.name^4",
                          "commentedBy.name^2",
                          "commentedBy.commentBody^1",
                          "hashtags^3",
                          "flairs^6"
                        ],
                          "fuzziness" : "AUTO",
                          "prefix_length" : 2
                      }
                      {{/boolMustMultiMatch}}
                    }
                  ]
                  {{#boolFilter}} 
                  , 
                       
                  "filter": [
                     {
                      "exists": {
                        "field": "id"
                      }
                    } 
                    {{#filterPostVisibility}}
                    ,
                    {
                      "terms": {
                        "postVisibility": {{#toJson}}postVisibilityValue{{/toJson}}
                      }
                    }
                    {{/filterPostVisibility}}
                    {{#filterFlairs}}
                    ,
                    {
                      "terms": {
                        "flairs": {{#toJson}}flairsValue{{/toJson}}
                      }
                    }
                    {{/filterFlairs}}
                    {{#filterPostFrom}}
                    ,       
                    {
                      "terms": {
                        "postFrom": {{#toJson}}postFromValue{{/toJson}}
                      }
                    }
                    {{/filterPostFrom}}
                    {{#filterStatus}}
                    ,        
                    {
                      "terms": {
                        "status": {{#toJson}}statusValue{{/toJson}}
                      }
                    }
                    {{/filterStatus}}
                    {{#filterLanguage}}
                    ,       
                    {
                      "terms": {
                        "language": {{#toJson}}languageValue{{/toJson}}
                        
                      }
                    }
                    {{/filterLanguage}}
                    {{#filterFlaggedBy.name}}
                    , 
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.name": {
                             "value": "{{flaggedBy.nameValue}}"
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.name}}
                    {{#filterFlaggedBy.id}}
                    ,       
                    {
                      "nested": {
                        "path": "flaggedBy",
                        "query": {
                          "term": {
                            "flaggedBy.id": {
                              "value": {{#toJson}}flaggedBy.idValue{{/toJson}}
                            }
                          }
                        }
                      }
                    }
                    {{/filterFlaggedBy.id}}
                  ]
                  {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "flairsAggs": {
                "terms": {
                    "field": "flairs"
                    
                }
                }
            }
            }
            {{/flairsAggregation}}
            
        }
        }
    }
} """
  }
}

module.exports = { postSearchTemplate };
