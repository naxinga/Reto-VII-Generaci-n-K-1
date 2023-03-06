import React from 'react';

export const P1 = () => {

    function calculateIntervalDays(fromDate, toDate = '10/03/2023') {
        var dateOne = new Date (fromDate);
        var dateTwo = new Date (toDate);

        var days = dateOne-dateTwo;
        
        return (
            days
        )
    }
    
    function removeVocalsAndSpaces(name) {
        let lowName = name.toLowerCase();
        return lowName.replace(/[aeiou]/ig,'');
    }
    
    function handleInputName() {
    }
    
    function handleInputDate() {
    }

    

    return(
        <>

        <p>Probando</p>

        
        <p>
            {console.log(removeVocalsAndSpaces("Hola"))}
        </p>
        </>
    )
}


/*Hoy = new Date();//Fecha actual del sistema

var AnyoFecha = Fecha1.getFullYear();
var MesFecha = Fecha1.getMonth();
var DiaFecha = Fecha1.getDate();

var AnyoHoy = Hoy.getFullYear();
var MesHoy = Hoy.getMonth();
var DiaHoy = Hoy.getDate();

if (AnyoFecha < AnyoHoy){
    alert ("La fecha introducida es anterior a Hoy");
}
else{
    if (AnyoFecha == AnyoHoy && MesFecha < MesHoy){
        alert ("La fecha introducida es anterior a Hoy");			
    }
    else{
        if (AnyoFecha == AnyoHoy && MesFecha == MesHoy && DiaFecha < DiaHoy){
            alert ("La fecha introducida es anterior a Hoy");
        }
        else{
            if (AnyoFecha == AnyoHoy && MesFecha == MesHoy && DiaFecha == DiaHoy){
                 alert ("Has introducido la fecha de Hoy");
            }
            else{
                alert ("La fecha introducida es posterior a Hoy");
            }
        }
    }
}*/