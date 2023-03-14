import React from 'react';

export const P1 = () => {

    function calculateIntervalDays(fromDate, toDate = '10/03/2023') {
        const date = new Date(fromDate);
        const toDateObj = new Date(toDate);
        const timeDiff = toDateObj.getTime() - date.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
      }
      
      function removeVocalsAndSpaces(name) {
        return name.replace(/[aeiouáéíóúü\s]/gi, "");
      }
      
      function handleInputName() {
        const nameInput = document.getElementById("name");
        const name = nameInput.value;
        const nameWithoutVocalsAndSpaces = removeVocalsAndSpaces(name);
        nameInput.value = nameWithoutVocalsAndSpaces;
      }
      
      function handleInputDate() {
        const dateInput = document.getElementById("date");
        const dateStr = dateInput.value;
        const daysInput = document.getElementById("days");
        const days = calculateIntervalDays(dateStr);
        daysInput.value = days;
      }



    return (
        <form>
            <label for="name">Nombre:</label>
            <input type="text" id="name" onblur="handleInputName()" />
            <br />
            <label for="nameWithoutVocalsAndSpaces">Nombre sin vocales:</label>
            <input type="text" id="nameWithoutVocalsAndSpaces" disabled />
            <br />
            <label for="date">Fecha:</label>
            <input type="text" id="date" onblur="handleInputDate()" />
            <br />
            <label for="days">Días transcurridos hasta el 10/03/2023:</label>
            <input type="text" id="days" disabled />
            {console.log(calculateIntervalDays("16/06/2023",'10/03/2023'))}
        </form>
    )
}


