const doctorTemplate =
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
  },
      "aggs": {
        "TotalAggs": {
        "global": {},
        "aggs": {
            {{#genderAggregation}}
            "genderAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "genderAggs": {
                "terms": {
                    "field": "gender"
                    //"size": 10
                }
                }
            }
            }
            {{/genderAggregation}}
            
            {{#cityAggregation}}
            {{#cityAggregationComma}},{{/cityAggregationComma}}
            "cityAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
             "aggs": {
                "cityAggs": {
                "terms": {
                    "field": "city.keyword"
                    //"size": 10
                }
                }
            }
            }
            {{/cityAggregation}}
            {{#districtAggregation}}
            {{#districtAggregationComma}},{{/districtAggregationComma}}
            "districtAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
             "aggs": {
                "districtAggs": {
                "terms": {
                    "field": "district.keyword"
                    //"size": 10
                }
                }
            }
            }
            {{/districtAggregation}}
            {{#countryAggregation}}
            {{#countryAggregationComma}},{{/countryAggregationComma}}
            "countryAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "countryAggs": {
                "terms": {
                    "field": "country"
                    //"size": 10
                }
                }
            }
            }
            {{/countryAggregation}}
            {{#stateAggregation}}
            {{#stateAggregationComma}},{{/stateAggregationComma}}
            "stateAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "stateAggs": {
                "terms": {
                    "field": "state"
                    //"size": 10
                }
                }
            }
            }
            {{/stateAggregation}}
            {{#specializationAggregation}}
            {{#specializationAggregationComma}},{{/specializationAggregationComma}}
            "specializationAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
             ,
            "aggs": {
                "specializationAggs": {
                "terms": {
                    "field": "specialization.keyword"
                    //"size": 10
                }
                }
            }
            }
            {{/specializationAggregation}}
            
            {{#languagesAggregation}}
            {{#languagesAggregationComma}},{{/languagesAggregationComma}}
            "languagesAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "languagesAggs": {
                "terms": {
                    "field": "languages"
                    //"size": 10
                }
                }
            }
            }
            {{/languagesAggregation}}
            {{#ailmentsTreatedAggregation}}
            {{#ailmentsTreatedAggregationComma}},{{/ailmentsTreatedAggregationComma}}
            "ailmentsTreatedAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "ailmentsTreatedAggs": {
                "terms": {
                    "field": "ailmentsTreated.keyword"
                    //"size": 10
                }
                }
            }
            }
            {{/ailmentsTreatedAggregation}}
            
             {{#averageRatingAggregation}}
            {{#averageRatingAggregationComma}},{{/averageRatingAggregationComma}}
            "averageRatingAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
            ,
            "aggs": {
                "averageRatingAggs": {
                //"histogram": {
                //    "field": "averageRating",
                //    "interval": 1,
               //     "min_doc_count":0
               // }
               
               "range": {
                "field": "averageRating",
                "ranges": [
                    {
                    "key": "4 & above", 
                    "from": "4",
                    "to": "5"
                    },
                    {
                    "key": "3 & above", 
                    "from": "3",
                    "to": "5"
                    },
                    {
                    "key": "2 & above", 
                    "from": "2",
                    "to": "5"
                    },
                    {
                    "key": "1 & above", 
                    "from": "1",
                    "to": "5"
                    },
                    {
                    "key": "Zero & above", 
                    "from": "0",
                    "to": "5"
                    }
                ]
                }
                }
            }
            }
            {{/averageRatingAggregation}}
            
             {{#yearsOfExperienceAggregation}}
            {{#yearsOfExperienceAggregationComma}},{{/yearsOfExperienceAggregationComma}}
            "yearsOfExperienceAggs": {
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
              "state^4",
              "ailmentsTreated^12",
              "*name^14",
              "city^6",
              "locality^7",
              "specialization^10",
              "address^8",
              "designation^9",
              "diagnosisKeywordList^2",
              "testsKeywordList",
              "symptomsKeywordList^11",
              "district^5",
              "country^3",
              "associatedClinics.clinicName^13"
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
            "field": "name"
          }
        } 
        {{#filterGender}}
        ,
        {
          "terms": {
            "gender": {{#toJson}}genderValue{{/toJson}}
          }
        }
        {{/filterGender}}
        {{#filterAverageRating}}
        ,       
        {
          "range": {
            "averageRating": {
              "gte": {{gteAverageRatingValue}}
            }
          }
        }{{/filterAverageRating}}
        {{#filterYearsOfExperience}}
        ,       
        {
          "range": {
            "yearsOfExperience": {
              "gte": {{gteYearsOfExperienceValue}}
            }
          }
        }{{/filterYearsOfExperience}}
        {{#filterAilmentsTreated}}
        ,        
        {
          "terms": {
            "ailmentsTreated.keyword": {{#toJson}}ailmentsTreatedValue{{/toJson}}
          }
        }
        {{/filterAilmentsTreated}}
        {{#filterCountry}}
        ,        
        {
          "terms": {
            "country": {{#toJson}}countryValue{{/toJson}}
          }
        } {{/filterCountry}}
        {{#filterState}}
        ,        
        {
          "terms": {
            "state": {{#toJson}}stateValue{{/toJson}}
          }
        } {{/filterState}}
        {{#filterCity}}
        ,        
        {
          "terms": {
            "city.keyword": {{#toJson}}cityValue{{/toJson}}
          }
        }
        {{/filterCity}}
         {{#filterDistrict}}
        ,        
        {
          "terms": {
            "district.keyword": {{#toJson}}districtValue{{/toJson}}
          }
        }
        {{/filterDistrict}}
        {{#filterIsVideoAllowed}}
        ,        
        {
          "term": {
            "isVideoAllowed": "{{isVideoAllowedValue}}"
          }
        }{{/filterIsVideoAllowed}}
         {{#filterIsPersonAllowed}}
        ,        
        {
          "term": {
            "isPersonAllowed": "{{isPersonAllowedValue}}"
          }
        }{{/filterIsPersonAllowed}}
        {{#filterSpecialization}}
        ,        
        {
          "terms": {
            "specialization.keyword": {{#toJson}}specializationValue{{/toJson}}
          }
        }{{/filterSpecialization}}
        {{#filterLanguage}}
        ,       
        {
          "terms": {
            "languages": {{#toJson}}languagesValue{{/toJson}}
            
          }
        }
        {{/filterLanguage}}
      ]
      {{/boolFilter}}
    }
            }
             ,
            "aggs": {
                "yearsOfExperienceAggs": {
                //"histogram": {
                  //  "field": "yearOfExperience",
                    //"interval": 10,
                    //"min_doc_count":0
               // }
               
               "range": {
                "field": "yearsOfExperience",
                "ranges": [
                    {
                    "key": "40+ experience", 
                    "from": "40"
                    },
                    {
                    "key": "30+ experience", 
                    "from": "30"
                    },
                    {
                    "key": "20+ experience", 
                    "from": "20"
                    },
                    {
                    "key": "10+ experience", 
                    "from": "10"
                    },
                    {
                    "key": "Zero+ experience", 
                    "from": "0"
                    }
                ]
                }
                }
            }
            }
            {{/yearsOfExperienceAggregation}}
            
        }
        }
    }
} """
  }
}


module.exports = {doctorTemplate}