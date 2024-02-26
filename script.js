function calcularDolar() {
    
    let real = document.getElementById("input-real").value
    let dolar = document.getElementById("input-dolar").value
    
    resultado = real / dolar

    document.getElementById("valor-final-dolar").innerText = "$ " + resultado.toFixed(2);
    
    alert("R$" + " " + resultado);

    
    


}