// console.log(user);

var table = "";
      table += "<tr>"
      table += "<th>" + "Sl.No" + "</th>"
      table += "<th>" + "Name" + "</th>"
      table += "<th>" + "Phone Number" + "</th>"
      table += "<th>" + "Strret" + "</th>"
      table += "</tr>"
for (let r = 0; r <user.length; r++) {
      table += "<tr>";
               let sn = r+1;
               table += "<td>" + sn + "</td>";
               table += "<td>" + user[r].name + "</td>";
               table += "<td>" + user[r].phone + "</td>";
               table += "<td>" + user[r].address.street + "</td>";
      table += "</tr>";
}
console.log('<table>' + table + '</table>');

               