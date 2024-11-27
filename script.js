let personen =  [
    {
      "emails": ["flavlio@klo.ch", "fulvio@gasu.be"],
      "hardware": ["compilter-hause", "alte-scheisse"],
      "software": ["kompäilr", "werd", "salami-chat"],
      "id": "1000",
      "name": "John Doe"
    },
    {
      "emails": ["joe@klo.ch", "joe@gasu.be"],
      "hardware": ["kompi-hause", "neue-scheisse"],
      "software": ["assembler", "exu", "adoop"],
      "id": "1001",
      "name": "Jane Doe"
    },
    {
      "emails": ["jesoph@klo.ch", "fogel@gasu.be"],
      "hardware": ["stein-hause", "uralte-scheisse"],
      "software": ["stock", "faden", "stein"],
      "id": "1002",
      "name": "Bob Smith"
    }
  ]


let personenarray =  [
    [
         ["flavlio@klo.ch", "fulvio@gasu.be"],
         ["compilter-hause", "alte-scheisse"],
         ["kompäilr", "werd", "salami-chat"],
         1000,
         "John Doe"
    ],
    [
      ["joe@klo.ch", "joe@gasu.be"],
      ["kompi-hause", "neue-scheisse"],
      ["assembler", "exu", "adoop"],
      1001,
      "Jane Doe"
    ],
    [
      ["jesoph@klo.ch", "fogel@gasu.be"],
      ["stein-hause", "uralte-scheisse"],
      ["stock", "faden", "stein"],
      1002,
      "Bob Smith"
    ]
  ]


for (let i = 0; i < personen.length; i++) {
      let row = document.createElement("tr")
      row.id="reihe"+i
      row.innerHTML = `
        <td>${personen[i].id}</td>
        <td>${personen[i].name}</td>
        <td><button class="link-button" onclick="personChange(${i})">select</button></td>
      `;
      
      document.getElementById("masterbody").appendChild(row);
}

    
    
	openTab("Software");
	

	
  
  	function personChange(index){
		loadTab("Email", personen[index].emails);
		loadTab("Hardware", personen[index].hardware);
		loadTab("Software", personen[index].software);
 	    
	    for (i = 0; i < personen.length ; i++) {
          document.getElementById("reihe"+i).className = "";
        }
      
        document.getElementById("reihe"+index).className = "active";
	}
	
	function loadTab(name, current){
		
		//tabcontent = document.getElementsByClassName("tabcontent");
		tabdetail = document.getElementById("tab"+ name)
		while (tabdetail.rows.length > 1) {
			tabdetail.deleteRow(1);
		}    
		for (i = 0; i < current.length; i++) {
			//tabcontent[i].style.display = "none";
			let node = document.createElement("tr");
			node.innerText=""+current[i];
			tabdetail.appendChild(node);
		}
		
	}

    function openTab(detailname) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById('content'+ detailname).style.display = "block";
	  document.getElementById('btn' + detailname).className += " active";
    }