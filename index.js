 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////
//////                    LOAD	PACKAGES	+		PREPARE DATA 	+   DEFINE INTERNAL FUNCTIONS                
//////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
google.load('visualization', '1', {packages: ['corechart','controls','table','treemap','geochart','gauge','sankey'], 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});

function drawVisualization() {

///////////////////////////////////////////////////////////////////////////////







var Business = ['Advertising',
'Agriculture',
'Architecture',
'Aviation',
'Banking',
'Business and Industry',
'Construction',
'Design',
'Economics',
'Engineering',
'Entrepreneurship',
'Health care',
'Higher Education',
'Management',
'Marketing',
'Nursing',
'Online',
'Personal Finance',
'Real Estate',
'Sales',
'Science',
'Small Business'];

var Entertainment = ['Games',
'Live Events',
'Movies',
'Music',
'Reading',
'TV'];

var Family = ['Dating',
'Fatherhood',
'Friendship',
'Marriage',
'Motherhood',
'Parenting',
'Wedding']

var Fitness = ['BodyBuilding',
'Meditation',
'Physical Exercise',
'Physical Fitnesss',
'Running',
'Weight Training',
'Yoga']

var FoodNDrink = ['Alcoholic Beverages',
'Beverages',
'Cooking',
'Cuisine',
'Food and Drink',
'Restaurants']

var Technology = ['Arts and Music',
'Current Events',
'Home and Garden',
'Pets',
'Politics and Social Issues',
'Travel',
'Vehicles',
'Audio Equipment',
'Camocorders',
'Cameras',
'E-book Readers',
'GPS Devices',
'Game Consoles',
'Mobile Phones',
'Portable Media Players',
'Projectors',
'Smartphones',
'Televisions',
'Electronics',
'Computers',
'Software']

var Shopping = ['Beauty',
'Clothing',
'Fashion Accessories',
'Shopping ',
'Toys']

var Sports = ['Boating',
'Camping',
'Fishing',
'Horseback riding',
'Hunting',
'Mountain biking',
'Surfing',
'Football',
'Auto racing',
'Baseball',
'Basketball',
'Golf',
'Marathons',
'Skiing',
'Snowboarding',
'Swimming',
'Tennis',
'Triathlons',
'Volleyball',
'Martial Arts']






var InterestList = Business.concat(Sports ,Shopping ,Technology ,FoodNDrink ,Fitness ,	Family ,Entertainment );







 
var NationList = [
    'America',
    'Europe',
    'Asia',
    'Australia',
    'Africa',
    'Brazil',
    'USA',
    'Mexico',
    'Canada',
    'France',
    'Germany',
    'Sweden',
    'Italy',
    'UK',
    'China',
    'Japan',
    'India',
    'Mongolia',
    'Israel',
    'Pakistan',
    'Congo',
    'S. Africa'    
];

var GenderList = [
    'Male',
    'Female'
];



var EducationList = [
    'PhD',
    'Highschool',
    'Elementary',
    'Undergraduate'
];



    var rawdata = [
        ['Gender', 'Age', 'Income','Nationality','Education','Disgust','Fear','Happiness','Sadness', 'Anger','Surprise' ,'Interest','Sub Interest','Engagement'],  [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()],    [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()], [GenderList[Math.floor(Math.random() * GenderList.length)],50*Math.random()+19,100000*Math.random()+10000,NationList[Math.floor(Math.random() * NationList.length)],				EducationList[Math.floor(Math.random() * EducationList.length)],Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),InterestList[Math.floor(Math.random() * InterestList.length)] ,        'A' ,        Math.random()]
        





      ];


    var data = google.visualization.arrayToDataTable(rawdata);

///////////////////////////////////////////////////////////////////////////////

      function getSum(datatemp, column) {
        var total = 0;
        for (i = 0; i < datatemp.getNumberOfRows(); i++)
          total = total + datatemp.getValue(i, column);
        return total;
      };

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////
//////                    DEFINE     SCREENER    TOOLS   FOR    USER INPUT                
//////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    var IncomePicker = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'IncomeControl',
        'options': {
            'filterColumnLabel': 'Income'
            }                                                  });
        
    var AgePicker = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'AgeControl',
        'options': {
            'filterColumnLabel': 'Age'
            }                                                  });

    var GenderPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'GenderControl',
        'options': {
            'filterColumnLabel': 'Gender',
            'ui': {
                'labelStacking': 'vertical',
                'allowTyping': false,
                'allowMultiple': true,
                'allowNone': true
            }            }                                     });

      var EducationPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'EducationControl',
        'options': {
            'filterColumnLabel': 'Education',
            'ui': {
                'labelStacking': 'vertical',
                'allowTyping': false,
                'allowMultiple': true,
                'allowNone': true
            }            }                                                  });  

    var NationalityPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'NationControl',
        'options': {
            'filterColumnLabel': 'Nationality',
            'ui': {
                'labelStacking': 'vertical',
                'allowTyping': false,
                'allowMultiple': true,
                'allowNone': true
            }            }                                                  });



    var InterestPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'InterestControl',
        'options': {
            'filterColumnLabel': 'Interest',
            'ui': {
                'labelStacking': 'vertical',
                'allowTyping': false,
                'allowMultiple': true,
                'allowNone': true
            }            }                                                  });

      
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////
//////                                  DEFINE     CHARTS                    
//////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        var barChart = new google.visualization.ChartWrapper({
            'chartType': 'BarChart',
            'containerId': 'Barchart1',
            'options': {
                 title: 'Emotion Response by Age', 
                 chartArea: {'width': '90%', 'height': '90%'}
                },
            'view': {
                'columns': [1, 5,6,7,8,9,10]
            }
        });

        var EmotionSumPieChart = new google.visualization.ChartWrapper({
            'chartType': 'PieChart',
            'containerId': 'Piechart1',
            'options': {
                title: 'Average Emotions Felt ',
                pieSliceText: 'label',
                chartArea: {'width': '80%', 'height': '90%'},
                is3D: true
            }
        });
            
        var GaugeChart = new google.visualization.Gauge(document.getElementById('Gaugechart_div'));

        var Bubblechart = new google.visualization.BubbleChart(document.getElementById('noAura'));

        var SankeyChart = new google.visualization.Sankey(document.getElementById('sankey_basic'));

        var ParticipantTableChart = new google.visualization.Table(document.getElementById('fulltablechart'));

        var GeoChart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        var TreeChart = new google.visualization.TreeMap(document.getElementById('Treechart_div'));




















////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////
//////            Prepare DataTable of Average Emotion Reponse by Interest and Demographics                             
//////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    google.visualization.events.addListener(barChart, 'ready', function () {

        var FilteredData = barChart.getDataTable();
        

        var EngagementByInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(13),
            column: 13,
            aggregation: google.visualization.data.sum
        }]);
        
        var HappinessByInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(7),
            column: 7,
            aggregation: google.visualization.data.sum
        }]);

        var FearByInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(6),
            column: 6,
            aggregation: google.visualization.data.sum
        }]);
        
        var SadnessByInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(8),
            column: 8,
            aggregation: google.visualization.data.sum
        }]);
        
        var SurpriseByInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(10),
            column: 10,
            aggregation: google.visualization.data.sum
        }]);
        
        var AngerByInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(9),
            column: 9,
            aggregation: google.visualization.data.sum
        }]);
        
        
        var DisgustByInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(5),
            column: 5,
            aggregation: google.visualization.data.sum
        }]);

        var AgebyInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(1),
            column: 1,
            aggregation: google.visualization.data.avg
        }]);

        var IncomebyInterest = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(11),
            column: 11,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(2),
            column: 2,
            aggregation: google.visualization.data.avg
        }]);


	  var EmotionInterestData = new google.visualization.DataTable()
              EmotionInterestData.addColumn('string', 'Interest'); 
              EmotionInterestData.addColumn('number', 'Age');
              EmotionInterestData.addColumn('number', 'Income'); 
              EmotionInterestData.addColumn('number', 'Engagement');
              EmotionInterestData.addColumn('number', 'Happiness');

    for (i = 0; i < HappinessByInterest.getNumberOfRows(); i++){
        	        EmotionInterestData.addRow([
                  EngagementByInterest.getValue(i, 0),   
                  AgebyInterest.getValue(i, 1),
                  IncomebyInterest.getValue(i, 1),
                  EngagementByInterest.getValue(i, 1),
                  HappinessByInterest.getValue(i, 1)
			]);     
      }


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////
//////                             UPDATE EACH CHART WITH FILTERED DATA                             
//////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

			  var SumEmotionsData = new google.visualization.DataTable()

              SumEmotionsData.addColumn('string', 'Emotion'); // Implicit domain column.
              SumEmotionsData.addColumn('number', 'Intensity'); // Implicit data column.
              SumEmotionsData.addRow(['Disgust',   getSum(FilteredData, 5)  ]);
              SumEmotionsData.addRow(['Fear',      getSum(FilteredData, 6)  ]);
              SumEmotionsData.addRow(['Happiness',     getSum(FilteredData,7)  ]);
              SumEmotionsData.addRow(['Sadness',     getSum(FilteredData, 8)  ]);
              SumEmotionsData.addRow(['Anger',     getSum(FilteredData, 9)  ]);
              SumEmotionsData.addRow(['Surprise',     getSum(FilteredData, 10)  ]);
              EmotionSumPieChart.setDataTable(SumEmotionsData);


////////////////////////////////////////////////////////////////////////////////////////////////////////////



	  var SankeyData = new google.visualization.DataTable()
              SankeyData.addColumn('string', 'Interest'); 
              SankeyData.addColumn('string', 'Emotion');
              SankeyData.addColumn('number', 'Intensity'); 

    for (i = 0; i < HappinessByInterest.getNumberOfRows(); i++){
        	        SankeyData.addRow([
                  HappinessByInterest.getValue(i, 0),   
                  'Happiness',
                  HappinessByInterest.getValue(i, 1)
			]);     
      }

    for (i = 0; i < SadnessByInterest.getNumberOfRows(); i++){
        	        SankeyData.addRow([
                  SadnessByInterest.getValue(i, 0),   
                  'Sadness',
                  SadnessByInterest.getValue(i, 1)
			]);     
      }

    for (i = 0; i < SurpriseByInterest.getNumberOfRows(); i++){
        	        SankeyData.addRow([
                  SurpriseByInterest.getValue(i, 0),   
                  'Surprise',
                  SurpriseByInterest.getValue(i, 1)
			]);     
      }

    for (i = 0; i < AngerByInterest.getNumberOfRows(); i++){
        	        SankeyData.addRow([
                  AngerByInterest.getValue(i, 0),   
                  'Anger',
                  AngerByInterest.getValue(i, 1)
			]);     
      }

    for (i = 0; i < FearByInterest.getNumberOfRows(); i++){
        	        SankeyData.addRow([
                  FearByInterest.getValue(i, 0),   
                  'Fear',
                  FearByInterest.getValue(i, 1)
			]);     
      }

    for (i = 0; i < DisgustByInterest.getNumberOfRows(); i++){
        	        SankeyData.addRow([
                  DisgustByInterest.getValue(i, 0),   
                  'Disgust',
                  DisgustByInterest.getValue(i, 1)
			]);     
      }


////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  var TreeData = new google.visualization.DataTable()
              TreeData.addColumn('string', 'ID'); 
              TreeData.addColumn('string', 'Parent');
              TreeData.addColumn('number', 'Income'); 
              TreeData.addColumn('number', 'Engagement');
              TreeData.addRow([
             'Global',   
              null,
              0,
              0
              ]);     

              TreeData.addRow([
              'Business',   
              'Global',
              0,
              0
              ]);     

              TreeData.addRow([
              'Entertainment',   
              'Global',
              0,
              0
              ]);    

              TreeData.addRow([
              'Family',   
              'Global',
              0,
              0
              ]);     

              TreeData.addRow([
              'Fitness',   
              'Global',
              0,
              0
              ]);     

              TreeData.addRow([
              'FoodNDrink',   
              'Global',
              0,
              0
              ]);     

              TreeData.addRow([
              'Technology',   
              'Global',
              0,
              0
              ]);     

              TreeData.addRow([
              'Shopping',   
              'Global',
              0,
              0
              ]);     

              TreeData.addRow([
              'Sports',   
              'Global',
              0,
              0
              ]);     















    for (i = 0; i < HappinessByInterest.getNumberOfRows(); i++){
    
    
      if (Business.indexOf((EngagementByInterest.getValue(i, 0))) > -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'Business',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }

      if (Entertainment.indexOf((EngagementByInterest.getValue(i, 0)))> -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'Entertainment',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }

      if (Family.indexOf((EngagementByInterest.getValue(i, 0))) > -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'Family',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }       

      if (Fitness.indexOf((EngagementByInterest.getValue(i, 0))) > -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'Fitness',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }       

      if (FoodNDrink.indexOf((EngagementByInterest.getValue(i, 0))) > -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'FoodNDrink',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }       

      if (Technology.indexOf((EngagementByInterest.getValue(i, 0))) > -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'Technology',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }       
      if (Shopping.indexOf((EngagementByInterest.getValue(i, 0))) > -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'Shopping',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }       
      if (Sports.indexOf((EngagementByInterest.getValue(i, 0))) > -1) {
              TreeData.addRow([
              EngagementByInterest.getValue(i, 0),   
              'Sports',
              EngagementByInterest.getValue(i, 1),
              HappinessByInterest.getValue(i, 1)
              ]);     
          }       
     }
        
    



////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var Geodata = google.visualization.data.group(FilteredData, [{
            type: 'string',
            label: FilteredData.getColumnLabel(3),
            column: 3,
        }], [{
            type: 'number',
            label: FilteredData.getColumnLabel(13),
            column: 13,
            aggregation: google.visualization.data.avg
        }]);




      
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////
//////                                  DRAW      CHARTS                    
//////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    




        GaugeChart.draw(SumEmotionsData)

        EmotionSumPieChart.draw();

        Bubblechart.draw(EmotionInterestData)

        ParticipantTableChart.draw(data, {showRowNumber: true, width: '100%', height: '100%'});

        SankeyChart.draw(SankeyData)

  	    GeoChart.draw(Geodata)

        TreeChart.draw(TreeData, {
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true
        });



    });
    
    // Create the dashboard.
    var dash = new google.visualization.Dashboard(document.getElementById('dashboard'));
    dash.bind([IncomePicker,InterestPicker,GenderPicker,AgePicker,EducationPicker, NationalityPicker], [barChart]);
    dash.draw(data);
}

google.setOnLoadCallback(drawVisualization);
