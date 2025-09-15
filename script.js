let count = 0;

function addRow() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name === "" || age === "") {
    alert("Please fill both fields!");
    return;
  }

  count++;
  const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${count}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>
      <button class="btn" onclick="editRow(this)">Edit</button>
      <button class="btn-danger" onclick="deleteRow(this)">Delete</button>
    </td>
  `;

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

function editRow(button) {
  const row = button.parentElement.parentElement;
  const name = row.cells[1].innerText;
  const age = row.cells[2].innerText;

  document.getElementById("name").value = name;
  document.getElementById("age").value = age;

  deleteRow(button); // remove old row so we can re-add it after editing
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.parentNode.removeChild(row);
}
