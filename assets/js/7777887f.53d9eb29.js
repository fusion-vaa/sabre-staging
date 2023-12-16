"use strict";(self.webpackChunkfusion_docs=self.webpackChunkfusion_docs||[]).push([[745],{6469:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(5893),a=i(1151);const o={sidebar_position:5},r="Chatper 3: Flight Planning",s={id:"UAL/fom/flight_planning",title:"Chatper 3: Flight Planning",description:"Not intended for real world pilotage. For entertainment purposes only. Consult your manufacturer, operator, and/or local regulatory body for all operational requirements.",source:"@site/docs/UAL/02-fom/flight_planning.md",sourceDirName:"UAL/02-fom",slug:"/UAL/fom/flight_planning",permalink:"/sabre-staging/docs/UAL/fom/flight_planning",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"UALSidebar",previous:{title:"Chapter 2: General Operations and Policies",permalink:"/sabre-staging/docs/UAL/fom/general_operations_and_policies"},next:{title:"Chapter 4: Operational Flight Plan (OFP) Format",permalink:"/sabre-staging/docs/UAL/fom/ofp"}},l={},d=[{value:"\u201cMANUAL ROUTE PLANNING REQUIRED\u201d",id:"manual-route-planning-required",level:2},{value:"Cost Index",id:"cost-index",level:2},{value:"Weight and Balance",id:"weight-and-balance",level:2},{value:"Fuel Requirements",id:"fuel-requirements",level:2},{value:"Extra Fuel and ETOPS Planning",id:"extra-fuel-and-etops-planning",level:3},{value:"SimBrief Contingency/Reserve Fuel Options",id:"simbrief-contingencyreserve-fuel-options",level:3},{value:"Domestic Fuel Reserves",id:"domestic-fuel-reserves",level:3},{value:"International (Flag) Fuel Reserves",id:"international-flag-fuel-reserves",level:3},{value:"Weather Minima",id:"weather-minima",level:3},{value:"Alternate Airports",id:"alternate-airports",level:3},{value:"Diversions",id:"diversions",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"chatper-3-flight-planning",children:"Chatper 3: Flight Planning"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Not intended for real world pilotage. For entertainment purposes only. Consult your manufacturer, operator, and/or local regulatory body for all operational requirements."})}),"\n",(0,n.jsx)(t.h2,{id:"manual-route-planning-required",children:"\u201cMANUAL ROUTE PLANNING REQUIRED\u201d"}),"\n",(0,n.jsx)(t.p,{children:"The current state of vAMSYS's integration with SimBrief includes a limitation when it comes to regarding Standard Instrument Departures (SIDs) and Standard Arrival Routes (STARs)."}),"\n",(0,n.jsx)(t.p,{children:"If you book a flight with the Dispatch via SimBrief method, the route given by vAMSYS will start with the exit waypoint of the SID that SimBrief selected and will end at the entry waypoint for the STAR."}),"\n",(0,n.jsx)(t.p,{children:"If you book a flight with the Dispatch via SimBrief method, the route given by vAMSYS will start with the exit waypoint of the SID that SimBrief selected and will end at the entry waypoint for the STAR."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"TRYTN3 LOOSE MEM J42 GVE KORRY4"})}),"\n",(0,n.jsx)(t.p,{children:"However, if you booked with the Dispatch via SimBrief method, you would only be given the following:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"LOOSE DCT MEM J42 GVE"})}),"\n",(0,n.jsxs)(t.p,{children:["Unfortunately, as it is a limitation of the platform in the current version, ",(0,n.jsx)(t.strong,{children:"vAAL"})," does not have any control over this part of the dispatch process in vAMSYS. We will advocate for more robust route generation functionality in future versions."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Pilots should not construe the lack of SID or STAR in the route in vAMSYS as permission, an endorsement, or a requirement to fly the route without the appropriate SID and/or STAR.  The opposite is true: the pilot is expected and required to plan the flight with the appropriate SID and/or STAR and to include those in the filed flight plan, where appropriate, if flying online."})}),"\n",(0,n.jsx)(t.h2,{id:"cost-index",children:"Cost Index"}),"\n",(0,n.jsx)(t.p,{children:"We recommend the following cost indexes."}),"\n",(0,n.jsx)(t.p,{children:"For flights with a duration less than 4 hours:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A320 Family: CI 27"}),"\n",(0,n.jsx)(t.li,{children:"B737 Family: CI 35"}),"\n",(0,n.jsx)(t.li,{children:"B772: CI 85"}),"\n",(0,n.jsx)(t.li,{children:"B77W: CI 90"}),"\n",(0,n.jsx)(t.li,{children:"B787 Family: CI 90"}),"\n",(0,n.jsx)(t.li,{children:"MD-80 (Historic): CI 24"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For flights with a duration greater than 4 hours:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A320 Family: CI 22"}),"\n",(0,n.jsx)(t.li,{children:"B737 Family: CI 30"}),"\n",(0,n.jsx)(t.li,{children:"B772: CI 80"}),"\n",(0,n.jsx)(t.li,{children:"B77W: CI 85"}),"\n",(0,n.jsx)(t.li,{children:"B787 Family: CI 85"}),"\n",(0,n.jsx)(t.li,{children:"MD-80 (Historic): CI 21"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Some aircraft profiles on SimBrief, such as the MD-80 family, erroneously do not allow you to set a cost index and instead only give you a speed-based cruise profile. You may be able to set a cost index in the aircraft itself. Use your best judgment to sync the two."}),"\n",(0,n.jsx)(t.h2,{id:"weight-and-balance",children:"Weight and Balance"}),"\n",(0,n.jsxs)(t.p,{children:["Each aircraft add-on is modeled by the developer to represent different subvariants and reference aircraft, and so it is impossible for there to be a standardized aircraft weights and payloads across the ",(0,n.jsx)(t.strong,{children:"vAAL"})," fleet."]}),"\n",(0,n.jsx)(t.p,{children:"Some addons, such as the FSLabs Airbus family, will allow some customization of aircraft weight and payloads. Each addon will also vary regarding the standard weight for passengers and bags."}),"\n",(0,n.jsx)(t.p,{children:"When booking a flight with the Dispatch via SimBrief method, the default values of 230 pounds per passenger (175 for the person, 55 for their bags) will be used. The Cargo field in the booking screen will therefore always be empty as the weight of bags is already factored into the passenger weight."}),"\n",(0,n.jsx)(t.h2,{id:"fuel-requirements",children:"Fuel Requirements"}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"It is each pilot\u2019s responsibility to ensure when planning their flight that they carry enough fuel on board to reach their destination, as well as fuel for any required alternates and/or contingency fuel."}),(0,n.jsxs)(t.p,{children:["Pegasus will detect ",(0,n.jsx)(t.em,{children:"any and all"})," instances of fuel changes in-flight, and any PIREP with a fuel increase during flight is subject to immediate invalidation without appeal by the admin/staff team."]}),(0,n.jsx)(t.p,{children:"If a flight cannot be completed due to the fuel load, the pilot should divert to the closest company airport rather than increase fuel in flight."})]}),"\n",(0,n.jsx)(t.h3,{id:"extra-fuel-and-etops-planning",children:"Extra Fuel and ETOPS Planning"}),"\n",(0,n.jsx)(t.p,{children:"When booking a flight via the Dispatch via SimBrief method, a pop-up window will appear offering an Extra Fuel amount \u2013 defaulted to zero pounds \u2013 and a tick box to enable ETOPS planning."}),"\n",(0,n.jsx)(t.p,{children:"The ETOPS Planning tick box corresponds to the ETOPS Planning tick box in the New Flight screen on the SimBrief site and selects whether SimBrief should find ETOPS alternates if the route requires them."}),"\n",(0,n.jsx)(t.h3,{id:"simbrief-contingencyreserve-fuel-options",children:"SimBrief Contingency/Reserve Fuel Options"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"vAAL"})," requires 10% contingency fuel and 45 minutes (domestic) or 30 minutes (flag) reserve fuel."]}),"\n",(0,n.jsx)(t.h3,{id:"domestic-fuel-reserves",children:"Domestic Fuel Reserves"}),"\n",(0,n.jsx)(t.p,{children:"All flights within the contiguous United States must be dispatched with enough fuel to a) reach the planned destination airport, b) fly to and land at the most distant alternate airport included in the dispatched flight plan, and c) to fly for 45 additional minutes at normal cruising fuel consumption."}),"\n",(0,n.jsx)(t.h3,{id:"international-flag-fuel-reserves",children:"International (Flag) Fuel Reserves"}),"\n",(0,n.jsx)(t.p,{children:"Any flights with the departure or arrival airport outside of the contiguous United States must be dispatched with enough fuel to a) reach the planned destination airport, b) fly for a period of 10% of the total time required to fly from the departure airport to the arrival airport, c) fly to and land at the most distant alternate airport included in the dispatched flight plan, and d) fly for thirty (30) minutes at holding speed at 1,500 feet above the alternate airport under standard weather conditions."}),"\n",(0,n.jsx)(t.h3,{id:"weather-minima",children:"Weather Minima"}),"\n",(0,n.jsx)(t.p,{children:"A flight may not depart if the arrival airport is forecasted to have visibility below the published approach minimums at the time of arrival. If the weather deteriorates enroute, visibility must be above the published minimums for that approach prior to beginning the final approach segment. If visibility drops after beginning the final approach segment, the approach may be continued but a missed approach must be executed if the runway cannot be seen visually at minimums."}),"\n",(0,n.jsx)(t.h3,{id:"alternate-airports",children:"Alternate Airports"}),"\n",(0,n.jsx)(t.p,{children:"All flights must be dispatched with at least one (1) alternate airport included in the flight plan, unless the following condition is met: for at least one (1) hour before and one (1) hour after the estimated time of arrival at the destination airport the forecasted weather indicates the ceiling will be at least 2,000 feet above the airport elevation and the visibility will be at least 3 miles."}),"\n",(0,n.jsx)(t.h2,{id:"diversions",children:"Diversions"}),"\n",(0,n.jsxs)(t.p,{children:["The way that vAMSYS currently handles diversions is not ideal, but must be worked around for now. ",(0,n.jsx)(t.strong,{children:"vAAL"})," will continue to lobby vAMSYS for improvements to this part of the system in the future as we recognize it does not function in a way that makes much sense from the stand point of real world diversions."]}),"\n",(0,n.jsx)(t.p,{children:"If you divert (in the eyes of vAMSYS this simply means to land at any destination other than your booked destination) during your flight, vAMSYS will move you to your booked destination. The PIREP will be flagged as a diversion being detected and you will be asked to leave a comment on your PIREP stating the reason \u2014 this comment is required for us to approve the PIREP."}),"\n",(0,n.jsx)(t.p,{children:"If you try to book a flight afterwards, your flight selections will be the same as if you had reached your intended destination. Meaning, you can\u2019t easily simulate continuing to your destination from the airport you diverted to."}),"\n",(0,n.jsx)(t.p,{children:"Therefore, we recommend both for the purposes of realism and also to make it easier for you to try and simulate continuing your diverted flight, we recommend you land at the closest company airport whenever this is both practical and \u201csafe\u201d to do so. This will make the odds of being able to have a bookable flight to either your destination or a hub available if you jumpseat to the airport you diverted to."}),"\n",(0,n.jsx)(t.p,{children:"Generally speaking, we do not add special/custom flights to the system to allow people to pick up a diverted flight and take it to the destination, but feel free to ask in Discord and if someone has time and you are willing to wait we may do so."})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var n=i(7294);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);