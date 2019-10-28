---
layout: d3_test
title: "Emissions visualisation - A first attempt"
date: "2019-10-28"
---
I think detailed emissions data is important for us to make decisions. Not just the high level graphs usually in government communication but detailed, explorable data. The raw data is not so easy to find but emailing with the UK's NAEI pointed me to this dataset 
> Non-fuel emissions in the Environmental Accounts are consistent with the emissions and activity data in the [NAEI pivot tables](https://naei.beis.gov.uk/data/)

The data contains emissions for 1990-2017 and drills down into detailed categories. This is the kind of data I'd like to be able to explore to better understand the impacts of different industries and sub-industries as well as to evaluate solution ideas. 

I'm going to improve this adding different countries, including how the emissions have changed overtime, adding more explorable elements so different industries can be isolated and compared. All sorts. I'll update in the newsletter when new features are available. 

It's still a little buggy, but it's just version 1 and I wanted to get an idea of what is possible. 

The chart simply displays the 2017 data with the units [MT CO2e](http://landmark2020.eu/glossary/co2-equivalent/) and colours by the greenhouse gas. Make sure to scroll down to see the popup showing what emission you're hovering over. 