---
layout: post
title: "What can I do for climate change?"
date: "2019-10-14"
categories: [climate work]
---

I think climate change is the biggest threat to this planet that I can do something about. I expect to live out my life without being heavily impacted by it, but I still care. David Attenborough is my hero. I love nature and want it all to continue existing. I love life and want future people to be able to love it too.

To decide what to do about it I want to know the areas I can have the greatest impact. The climate science researchers saying that our progress isn't nearly fast convinces me that intense focus where it matters most is what is needed. To find which areas I can maximise my impact in I've tried to find granular information on which subsectors contribute most to climate change and it turns out it isn't easy to find.

As a citizen we mostly see this presented at the level of sectors per country. This is the most detailed picture I found.

![emissions_by_sector](/assets/emissions_by_sector.png)
*(I did follow the in to the WIOD and attempted to understand and replicate the methodology for the data. That's for another post...)*

But to make an informed decision of where to act we need more detailed information.

- Which subsectors in these industries are the worst?
- Which sections of the subsectors?
- Which sectors are growing the fastest?
- Which problems already have many people researching and building solutions?
- Which areas are few people working in?
- Which have funding available from governments and cities?

I wanted answers to these questions and all are (very) difficult to find answers to. But if climate change is one of our greatest problems, this information should be available so that technology and action can be accelerated.

I have looked deeply into a single question; I attempted to find the most detailed level of information about where emissions come from. I investigated the UK emissions estimates and found myself following link trails through PDFs and websites. Various excel sheets are spread across various locations. If you want to go deeper than just the data and see the models that were used to generate the estimates it gets even more awkward. Let me show you.

![office-national-statistics-methodology](/assets/emissions_step1.png)
*A good start at the [Office for National Statistics](https://www.ons.gov.uk/economy/environmentalaccounts/topicspecificmethodology)*

![environmental-accounts-on-air-emissions](/assets/emissions_step2.png)
*I could find the dataset I wanted at [Environmental accounts on air emissions QMI](https://www.ons.gov.uk/economy/environmentalaccounts/methodologies/environmentalaccountsonairemissionsqmi)*

![naei-reports](/assets/emissions_step3.png)
*In the previous report I got directed to the [National Atmospheric Emissions Inventory](https://naei.beis.gov.uk/reports/)*

![naei-road-transport-emission-factors-report](/assets/emissions_step4.png)
*I tried to find data on the creation of one area of emissions so I selected one of their [PDF reports](https://naei.beis.gov.uk/resources/2017_Road_Transport_Emission_Factor_Note_v1.2.pdf). This refered me to more data sources. COPERT would cost me $5000 a year for the software and emission factors. The EEA do have open data. Some of the other links in the document were dead.* 

![eea-emission-factors](/assets/emissions_step5.png)
*I did find emission factors at the EEA website. Though I don't know which ones the ONS/NAEI used to make the estimates. Plus, I don't know how the different sources were combined. [The query and filter I tried](http://efdb.apps.eea.europa.eu/?source=%7B%22query%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22term%22%3A%7B%22code%22%3A%221.A.3.b.i%20Road%20transport%2C%20passenger%20cars%22%7D%7D%2C%7B%22query_string%22%3A%7B%22query%22%3A%22road%20transport%22%2C%22default_operator%22%3A%22OR%22%2C%22analyze_wildcard%22%3Atrue%7D%7D%5D%7D%7D%2C%22display_type%22%3A%22tabular%22%7D).*

![business-conversion-factors-report](/assets/emissions_step6.png)
*I also followed the link to the [Department for Business, Energy & Industrial Strategy](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/829336/2019_Green-house-gas-reporting-methodology.pdf). There are also conversion factors here. But what I found interesting was the circular reference back to the NAEI. I gave up here.*

Maybe experts can easily navigate around these datasets but many of the people who will build things to mitigate climate change are not experts in emissions calculations.

Model reproducibility is a problem in science more generally and we need to get better at it. I don't think its a deep or new insight to say it would help us in our climate change work. I think its possible. The reports contain equations, lets link this up to all the emission factors used, the activity data used, and make it possible for creators to generate the emissions of each sector. Maybe let me switch between different data sources to see how consitent estimates are.

Most people won't need this level of detail, but those of us who want to find the best climate change mitigation companies to work for, or where to do a phD, or where to start our own projects, we do need this information.