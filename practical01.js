function generateInputs() {
  let num = document.getElementById("numSubjects").value;
  let container = document.getElementById("marksContainer");
  container.innerHTML = "";

  for (let i = 1; i <= num; i++) {
    container.innerHTML += `<input type="number" placeholder="Marks for Subject ${i}" class="marks"><br>`;
  }
}

function calculateResult() {
  let marks = document.getElementsByClassName("marks");
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += Number(marks[i].value);
  }

  let average = total / marks.length;
  let grade = "";

  if (average >= 90) grade = "A+";
  else if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 50) grade = "C";
  else grade = "Fail";

  document.getElementById("result").innerHTML = `
    Total: ${total} <br>
    Average: ${average.toFixed(2)} <br>
    Grade: ${grade}
  `;
}

