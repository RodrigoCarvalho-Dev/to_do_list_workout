const exercicio_1_segunda = document.querySelector("#exercicio_1_segunda");
const exercicio_2_segunda = document.querySelector("#exercicio_2_segunda");
const exercicio_3_segunda = document.querySelector("#exercicio_3_segunda");
const exercicio_4_segunda = document.querySelector("#exercicio_4_segunda");
const exercicio_5_segunda = document.querySelector("#exercicio_5_segunda");
const exercicio_6_segunda = document.querySelector("#exercicio_6_segunda");
const exercicio_7_segunda = document.querySelector("#exercicio_7_segunda");
const exercicio_8_segunda = document.querySelector("#exercicio_8_segunda");

const resultado_1 = document.querySelector("#resultado_1");
const resultado_2 = document.querySelector("#resultado_2")
const resultado_3 = document.querySelector("#resultado_3")
const resultado_4 = document.querySelector("#resultado_4")
const resultado_5 = document.querySelector("#resultado_5")
const resultado_6 = document.querySelector("#resultado_6")
const resultado_7 = document.querySelector("#resultado_7")
const resultado_8 = document.querySelector("#resultado_8")
const button_remove = document.querySelector("#segunda_button_remove")
const form = document.querySelector("#form");
const button_segunda = document.querySelector("#segunda_button");

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    
    let exercicio_1_segunda_valor = exercicio_1_segunda.value
    let exercicio_2_segunda_valor = exercicio_2_segunda.value
    let exercicio_3_segunda_valor = exercicio_3_segunda.value
    let exercicio_4_segunda_valor = exercicio_4_segunda.value
    let exercicio_5_segunda_valor = exercicio_5_segunda.value
    let exercicio_6_segunda_valor = exercicio_6_segunda.value
    let exercicio_7_segunda_valor = exercicio_7_segunda.value
    let exercicio_8_segunda_valor = exercicio_8_segunda.value

    if(exercicio_1_segunda.checked){
       resultado_1.innerHTML = "exercicio 1 completo"
    }else{
    }
    if(exercicio_2_segunda.checked){
        resultado_2.innerHTML = "exercicio 2 completo"
    }
    if(exercicio_3_segunda.checked){
        resultado_3.innerHTML = "exercicio 3 completo"
    }
    if(exercicio_4_segunda.checked){
        resultado_4.innerHTML = "exercicio 4 completo"
    }
    if(exercicio_5_segunda.checked){
        resultado_5.innerHTML = "exercicio 5 completo"
    }
    if(exercicio_6_segunda.checked){
        resultado_6.innerHTML = "exercicio 6 completo"
    }
    if(exercicio_7_segunda.checked){
        resultado_7.innerHTML = "exercicio 7 completo"
    }
    if(exercicio_8_segunda.checked){
        resultado_8.innerHTML = "exercicio 8 completo"
    }
    

    
    
})

button_remove.addEventListener("click" , (e) => {
    e.preventDefault

    resultado_1.textContent = ""
    resultado_2.textContent = ""
    resultado_3.textContent = ""
    resultado_4.textContent = ""
    resultado_5.textContent = ""
    resultado_6.textContent = ""
    resultado_7.textContent = ""
    resultado_8.textContent = ""
} )