const getAdsDetailsByDoctorId =
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
           
           {{#boolTargetState}}
        {
          "terms": {
            "targetState": {{#toJson}}boolTargetStateValue{{/toJson}}
          }
        }
        {{/boolTargetState}}
          
          {{#boolTargetDistrict}}
        {
          "terms": {
            "targetDistrict": {{#toJson}}boolTargetDistrictValue{{/toJson}}
          }
        }
        {{/boolTargetDistrict}}
        
        {{#boolDoctorId}}
        {
          "term": {
            "doctorId": {{doctorIdValue}}
          }
        }
        {{/boolDoctorId}}
          
        
      ]
        {{#boolFilter}} 
      , 
           
      "filter": [
         {
          "exists": {
            "field": "banner"
          }
        } 
        {{#filterTargetDistrict}}
        ,
        {
          "terms": {
            "targetDistrict": {{#toJson}}targetDistrictValue{{/toJson}}
          }
        }
        {{/filterTargetDistrict}}
        {{#filterTargetState}}
        ,
        {
          "terms": {
            "targetState": {{#toJson}}targetStateValue{{/toJson}}
          }
        }
        {{/filterTargetState}}
        {{#filterStatus}}
        ,       
        {
          "term": {
            "status": "{{statusValue}}"
          }
        }{{/filterStatus}}
      ]
      {{/boolFilter}}
    }
  },
   "aggs": {
        "TotalAggs": {
        "global": {},
        "aggs": {
            {{#avgClicksAggregation}}
            "avgClicksAggs": {
            "filter": {
                 "bool": {     
         "must": [
        
        {
          "term": {
            "doctorId": {{doctorIdValue}}
          }
        }
        
      ]
      
    }
            }
            ,
            "aggs": {
                "avgClicksAggs": {
                "avg": {
                    "field": "clicks"
                }
                }
            }
            }
            {{/avgClicksAggregation}}
            
            {{#avgAppearancesAggregation}}
            {{#avgAppearancesAggregationComma}},{{/avgAppearancesAggregationComma}}
            "avgAppearancesAggs": {
            "filter": {
                 "bool": {     
         "must": [
        
        {
          "term": {
            "doctorId": {{doctorIdValue}}
          }
        }
        
      ]
      
    }
            }
            ,
            "aggs": {
                "avgAppearancesAggs": {
                "avg": {
                    "field": "appearances"
                }
                }
            }
            }
            {{/avgAppearancesAggregation}}
            
            {{#minClicksAggregation}}
            {{#minClicksAggregationComma}},{{/minClicksAggregationComma}}
            "minClicksAggs": {
            "filter": {
                 "bool": {     
         "must": [
        
        {
          "term": {
            "doctorId": {{doctorIdValue}}
          }
        }
        
      ]
      
    }
            }
            ,
            "aggs": {
                "minClicksAggs": {
                "min": {
                    "field": "clicks"
                }
                }
            }
            }
            {{/minClicksAggregation}}
            
            {{#maxClicksAggregation}}
            {{#maxClicksAggregationComma}},{{/maxClicksAggregationComma}}
            "maxClicksAggs": {
            "filter": {
                 "bool": {     
         "must": [
        
        {
          "term": {
            "doctorId": {{doctorIdValue}}
          }
        }
        
      ]
      
    }
            }
            ,
            "aggs": {
                "maxClicksAggs": {
                "max": {
                    "field": "clicks"
                }
                }
            }
            }
            {{/maxClicksAggregation}}
            
             {{#minAppearancesAggregation}}
            {{#minAppearancesAggregationComma}},{{/minAppearancesAggregationComma}}
            "minAppearancesAggs": {
            "filter": {
                 "bool": {     
         "must": [
        
        {
          "term": {
            "doctorId": {{doctorIdValue}}
          }
        }
        
      ]
      
    }
            }
            ,
            "aggs": {
                "minAppearancesAggs": {
                "min": {
                    "field": "appearances"
                }
                }
            }
            }
            {{/minAppearancesAggregation}}
            
            {{#maxAppearancesAggregation}}
            {{#maxAppearancesAggregationComma}},{{/maxAppearancesAggregationComma}}
            "maxAppearancesAggs": {
            "filter": {
                 "bool": {     
         "must": [
        
        {
          "term": {
            "doctorId": {{doctorIdValue}}
          }
        }
        
      ]
      
    }
            }
            ,
            "aggs": {
                "maxAppearancesAggs": {
                "max": {
                    "field": "appearances"
                }
                }
            }
            }
            {{/maxAppearancesAggregation}}
        }
        }
    }
} """
  }
                                  }


                                  
module.exports = {getAdsDetailsByDoctorId}