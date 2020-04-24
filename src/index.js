import "./styles.css";

/*
console.log("0" + new Date(2019, 9, 3).toLocaleDateString());
console.log(randomDate(new Date(2012, 0, 1), new Date()));
let testDate = randomDate(new Date(2012, 0, 1), new Date());

let ferienDate = new Date(2019, 9, 3);
console.log(ferienDate.getDay() - 1);
console.log(ferienDate.setDate());

let MyDateString =
  ("0" + ferienDate.getDate()).slice(-2) +
  "." +
  ("0" + (ferienDate.getMonth() + 1)).slice(-2) +
  "." +
  ferienDate.getFullYear();

console.log(MyDateString);

*/
document.getElementById("app").innerHTML = `
	<table>
<tbody>
<tr  id="testD">
<td>12.03.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>27 (3,30€)</b></td>
<td><b>25 (3,30€)</b></td>
<td><b>33 (3,30€)</b></td>
<td><b>42 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>13.03.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>23 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>13.03.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>27 (3,30€)</b></td>
<td><b>25 (3,30€)</b></td>
<td><b>33 (3,30€)</b></td>
<td><b>42 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>14.03.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>27 (3,30€)</b></td>
<td><b>25 (3,30€)</b></td>
<td><b>33 (3,30€)</b></td>
<td><b>42 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>15.03.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>27 (3,30€)</b></td>
<td><b>25 (3,30€)</b></td>
<td><b>33 (3,30€)</b></td>
<td><b>42 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>16.03.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>119 (3,30€)</b></td>
<td><b>333 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>37 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>11.04.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>119 (3,30€)</b></td>
<td><b>333 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>37 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>12.04.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>119 (3,30€)</b></td>
<td><b>333 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>37 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>01.05.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>119 (3,30€)</b></td>
<td><b>333 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>37 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>12.05.2019</td>
<td><b>23 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>119 (3,30€)</b></td>
<td><b>333 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>11 (3,30€)</b></td>
<td><b>37 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>12.06.2019</td>
<td><b>2 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>11.07.2019</td>
<td><b>2 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>29.08.2019</td>
<td><b>2 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>30.08.2019</td>
<td><b>2 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr  id="testD">
<td>30.09.2019</td>
<td><b>2 (3,30€)</b></td>
<td><b>2 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td><b>4 (3,30€)</b></td>
<td><b>1 (3,30€)</b></td>
<td><b>3 (3,30€)</b></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

</tbody>
</table>


`;

const Ferien = new Set([
  "03.10.2019",
  "04.10.2019",
  "07.10.2019",
  "08.10.2019",
  "09.10.2019",
  "10.10.2019",
  "11.10.2019",
  "03.10.2019",
  "14.10.2019",
  "15.10.2019",
  "16.10.2019",
  "17.10.2019",
  "18.10.2019",
  "31.10.2019",
  "01.11.2019",
  "20.12.2019",
  "23.12.2019",
  "24.12.2019",
  "25.12.2019",
  "26.12.2019",
  "27.12.2019",
  "30.12.2019",
  "31.12.2019",
  "01.01.2020",
  "02.01.2020",
  "03.01.2020",
  "31.01.2020",
  "02.03.2020",
  "03.03.2020",
  "04.03.2020",
  "05.03.2020",
  "06.03.2020",
  "09.03.2020",
  "10.03.2020",
  "11.03.2020",
  "12.03.2020",
  "13.03.2020",
  "18.05.2020",
  "19.05.2020",
  "20.05.2020",
  "22.05.2020",
  "25.06.2020",
  "26.06.2020",
  "29.06.2020",
  "30.06.2020",
  "01.07.2020",
  "02.07.2020",
  "03.07.2020",
  "04.07.2020",
  "05.07.2020",
  "06.07.2020",
  "07.07.2020",
  "08.07.2020",
  "09.07.2020",
  "10.07.2020",
  "11.07.2020",
  "12.07.2020",
  "13.07.2020",
  "14.07.2020",
  "15.07.2020",
  "16.07.2020",
  "17.07.2020",
  "18.07.2020",
  "19.07.2020",
  "20.07.2020",
  "21.07.2020",
  "22.07.2020",
  "23.07.2020",
  "24.07.2020",
  "25.07.2020",
  "26.07.2020",
  "27.07.2020",
  "28.07.2020",
  "29.07.2020",
  "30.07.2020",
  "31.07.2020",
  "03.08.2020",
  "04.08.2020",
  "05.08.2020"
]);

const monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

let butt = document.getElementById("butt");
butt.addEventListener("click", sumTable);

let finalOutput = [];
let finalOutputFerien = [];
let sumMonth = 0;
let sumFerien = 0;
let month = [];
let monthFerien = [];
let daysInMonth = -1;

let regExCell = new RegExp(/(\(3,30€\))/);
let myTry = document.getElementsByTagName("tr");
//accesing data from the original table

let start = myTry[0]
  .getElementsByTagName("td")
  .item(0)
  .textContent.split(".");
let currMonth = new Date(start[2], start[1] - 1, start[0]).getMonth();

for (let j = 0; j < myTry.length; j++) {
  let myRow = myTry[j].getElementsByTagName("b");
  let mealsAmount = [];
  let day = [];

  for (let i = 0; i < myRow.length; i++) {
    mealsAmount[i] = parseInt(
      myRow[i].textContent.replace(regExCell, "").trim(),
      10
    );
  }

  day.push(myTry[j].getElementsByTagName("td").item(0).textContent);
  day.push(mealsAmount.reduce((prev, curr) => prev + curr));

  let dateArr = day[0].split(".");
  let myDate = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

  if (!month.length > 0) {
    month[0] = monthNames[currMonth];
    console.log(currMonth);
  }

  if (myDate.getMonth() !== currMonth) {
    console.log(currMonth);
    currMonth++;
    daysInMonth++;
  }

  if (month[0] === monthNames[currMonth]) {
    sumMonth += day[1];
    daysInMonth++;
  } else {
    console.log(month);
    month.push(sumMonth);
    month.push(daysInMonth);
    finalOutput.push(month);
    month = [];
    sumMonth = 0;
    daysInMonth = 0;
    sumMonth += day[1];
  }

  // OK LETS FILTER THE DAYS INTO MONTHS HERE

  // Jahr hinzugefügt falls sich Monate Überschneiden vom Vorjahr
  // sollte im Idealfall nicht passieren aber sollte kein Problem machen
}
console.log(monthNames[currMonth]);
if (!month.length > 0) {
  month[0] = monthNames[currMonth];
  console.log(currMonth);
}
month.push(sumMonth);
daysInMonth++;
month.push(daysInMonth);
finalOutput.push(month);

/*Month.push(sumMonth);
finalOutput.push(Month);
MonthFerien.push(sumFerien);
finalOutputFerien.push(MonthFerien);
*/
function sumTable() {
  let tbl = document.createElement("table");
  var tbdy = document.createElement("tbody");
  let trLegend = document.createElement("tr");
  let tdMonth = document.createElement("td");
  let tdAnzahl = document.createElement("td");
  let tdTage = document.createElement("td");

  tdMonth.appendChild(document.createTextNode("Monat"));
  tdAnzahl.appendChild(document.createTextNode("Anzahl"));
  tdTage.appendChild(document.createTextNode("Tage"));

  trLegend.appendChild(tdMonth);
  trLegend.appendChild(tdAnzahl);
  trLegend.appendChild(tdTage);
  tbl.appendChild(trLegend);
  let tblFerien = document.createElement("table");
  var tbdyFerien = document.createElement("tbody");

  tbl.style.marginTop = "10px";
  tbl.setAttribute("border", "1");
  tbl.style.width = "10%";
  for (let i = 0; i < finalOutput.length; i++) {
    //Calculations plus  Filtering Main table  Creating Holiday table

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdSum = document.createElement("td");
    let tdDays = document.createElement("td");
    td.appendChild(document.createTextNode(finalOutput[i][0]));
    tdSum.appendChild(document.createTextNode(finalOutput[i][1]));
    tdDays.appendChild(document.createTextNode(finalOutput[i][2]));
    tr.appendChild(td);
    tr.appendChild(tdSum);
    tr.appendChild(tdDays);
    tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
  }
  // filtering all Dates included in the Set Ferien into finalOutputFerien
  for (let j = 0; j < finalOutputFerien.length; j++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdSum = document.createElement("td");
    td.appendChild(document.createTextNode(finalOutputFerien[j][0]));
    tdSum.appendChild(document.createTextNode(finalOutputFerien[j][1]));
    tr.appendChild(td);
    tr.appendChild(tdSum);
    tbdyFerien.appendChild(tr);
    tblFerien.appendChild(tbdyFerien);
  }

  document.getElementById("app").appendChild(tbl);
  document.getElementById("app").appendChild(tblFerien);
}

console.log(finalOutput);

//console.log(mealsAmount.reduce( (prev, curr) => prev + curr ));
//console.log(myTry[0].getElementsByTagName("td").item(0).textContent);
//console.log(myCells[1].textContent.replace(regExCell,'').trim());
