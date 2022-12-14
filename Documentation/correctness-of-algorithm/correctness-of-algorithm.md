# Algorithm Correctness
  
  It is very difficult to prove that our algorithm generates a correct and optimal solution as time table generating problem is one of the NP-Hard problems
  and as we are using Heuristic approach in our algorithm it becomes even more difficult to prove the correctness of our algorithm. NP-Hard problems gives 
  us the solution which is nearest to the best possible solution. So in light of all these factors, it was pretty much difficult to prove it. We came up with 
  Inductive Hypothesis to prove the correctness bt we are not sure that it is possible or not.
  
## Inductive Hypothesis

  After k'th iteration, our algorithm will generate a timetable for section[k] which is expected to be without clashes with the other classes.
   
## Base Case
  
  As k=0, the TT[] will be filled with zero's and there will be no clashes whatsoever as there is no data is placed in the TT[]. So we can say that our 
  inductive hypothesis holds for k=0.

## Inductive Step
  
 It is our to do step to prove that our algorithm generates a clash free Time table for section[k] after k'th iteration.
 Let's say we have input 
 Instances = [
      {
        teacher: "Samyan",
        sections: ["A"],
        subject: "AOA",
        numLectures: "3",
        numLabs: null,
      },
      {
        teacher: "Samyan",
        sections: ["B"],
        subject: "AOA",
        numLectures: "3",
        numLabs: null,
      },
      {
        teacher: "Samyan",
        sections: ["C"],
        subject: "AOA",
        numLectures: "3",
        numLabs: null,
      },
      {
        teacher: "Awais Hasan",
        sections: ["A"],
        subject: "DBMS",
        numLectures: "3",
        numLabs: null,
      },
      {
        teacher: "Awais Hasan",
        sections: ["B"],
        subject: "DBMS",
        numLectures: "3",
        numLabs: null,
      },
      {
        teacher: "Awais Hasan",
        sections: ["C"],
        subject: "DBMS",
        numLectures: "3",
        numLabs: null,
      },
    ]
    
    
    Given Time SLots = [3, 3, 2, 3, 2] // Each Index Represents a day
    Teachers = ["Samyan", "Awais Hasan"]
    Sections = ["A", "B", "C"]
  
  Let's say at k=0 we have 
  
     TT = [[[0,0,0] , [0,0,0] , [0,0] , [0,0,0] , [0,0]],   //0th index nested array represents Section A time table
           [[0,0,0] , [0,0,0] , [0,0] , [0,0,0] , [0,0]],   //1th index nested array represents Section B time table
           [[0,0,0] , [0,0,0] , [0,0] , [0,0,0] , [0,0]]]   //2th index nested array represents Section C time table
 
 Now after dry running our code for k=1 we sould have time table generated for section[k],
 
     TT = TT = [[[[0,0,["Awais Hasan", "A", "DBMS"]] , [0,0,0] , [0,["Samyan", "A", "AOA"]] , [0,["Samyan", "A", "AOA"],["Awais Hasan", "A", "DBMS"]] , 
          [["Awais Hasan", "A",    "DBMS"],["Samyan", "A", "AOA"]]],   //0th index nested array represents Section A time table
           [[0,0,0] , [0,0,0] , [0,0] , [0,0,0] , [0,0]],   //1th index nested array represents Section B time table
           [[0,0,0] , [0,0,0] , [0,0] , [0,0,0] , [0,0]]]   //2th index nested array represents Section C time table
 
 In k=2th iteration we should have time table for section[k-1] as well as for section[k]
 
     TT = [[[[0,0,["Awais Hasan", "A", "DBMS"]] , [0,0,0] , [0,["Samyan", "A", "AOA"]] , [0,["Samyan", "A", "AOA"],["Awais Hasan", "A", "DBMS"]] , 
          [["Awais Hasan", "A",    "DBMS"],["Samyan", "A", "AOA"]]],   //0th index nested array represents Section A time table
          [[["Awais Hasan", "B",    "DBMS"],["Samyan", "B", "AOA"],0] , [0,["Samyan", "B", "AOA"],["Awais Hasan", "B",    "DBMS"]] , [["Awais Hasan", "B",    "DBMS"],0] ,               [["Samyan", "B", "AOA"],0,0] , [0,0]],   //1th index nested array represents Section B time table
          [[0,0,0] , [0,0,0] , [0,0] , [0,0,0] , [0,0]]]   //2th index nested array represents Section C time table
          
 In k=3rd iteration we should have time table for section[k] as well as for  section[k-1] and section[k-2]:

     TT = [[[[0,0,["Awais Hasan", "A", "DBMS"]] , [0,0,0] , [0,["Samyan", "A", "AOA"]] , [0,["Samyan", "A", "AOA"],["Awais Hasan", "A", "DBMS"]] , 
          [["Awais Hasan", "A",    "DBMS"],["Samyan", "A", "AOA"]]],   //0th index nested array represents Section A time table
          [[["Awais Hasan", "B",    "DBMS"],["Samyan", "B", "AOA"],0] , [0,["Samyan", "B", "AOA"],["Awais Hasan", "B",    "DBMS"]] , [["Awais Hasan", "B",    "DBMS"],0] ,               [["Samyan", "B", "AOA"],0,0] , [0,0]],   //1th index nested array represents Section B time table
          [[["Samyan", "C", "AOA"],["Awais Hasan", "C",    "DBMS"],0] , [0,0,0] , [0,["Awais Hasan", "C",    "DBMS"]] , [["Awais Hasan", "C",    "DBMS"],0,
          ["Samyan", "C",    "AOA"]] , [["Samyan", "C", "AOA"],0]]]   //2th index nested array represents Section C time table
          
 Now after k iterations we have a time table generated for all the sections in the section Array without any conflict.
 
## Conclusion
 
 It is proved that our algorithm provides us with a timetable for all the sections in section[] after kth iteration.
