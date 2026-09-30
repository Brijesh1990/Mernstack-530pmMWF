what is table ?
In HTML, a table is created using the <table> tag, along with <tr> (table row), <th> (table header), and <td> (table data).

Here are simple and clear examples of different kinds of HTML tables:


<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>22</td>
  </tr>
</table>



<table border="1">
  <tr>
    <th rowspan="2">Name</th>
    <th colspan="2">Scores</th>
  </tr>
  <tr>
    <th>Math</th>
    <th>English</th>
  </tr>
  <tr>
    <td>John</td>
    <td>95</td>
    <td>88</td>
  </tr>
</table>


