function proceso() {
    let nota_1 = parseFloat(document.getElementById("nota_1").value);
    let nota_2 = parseFloat(document.getElementById("nota_2").value);
    let result = 0;
    
    for(let nota_3 = 0; nota_3 < 8; nota_3 += 0.1){
        if(nota_1 * 0.3 + nota_2 * 0.3 >= 3){
            result = "Ya pasaste!\n";
        }

        else if(nota_1 * 0.3 + nota_2 * 0.3 + nota_3 * 0.4 >= 3){
            if(nota_3 > 5){
                result = "Deberías cancelar la materia, para pasar necesitas: " + nota_3.toFixed(1);
                document.getElementById("resultText").style.fontSize="20px";
                document.getElementById("resultText").style.fontWeight="300";
                document.getElementById("resultBox").style.paddingBlock="50px";
                document.getElementById("debesSacar").innerText="";
                document.getElementById("animo").innerText="";
                break;
            } else{
                document.getElementById("resultText").style.fontWeight="bold";
                document.getElementById("resultText").style.fontSize="60px";
                document.getElementById("debesSacar").innerText="Debes sacar:";
                document.getElementById("animo").innerText="¡Ánimo!";
            }
            result = nota_3.toFixed(1);
            break;
        }
    }
    document.getElementById("resultText").innerHTML = result;
    document.getElementById("resultBox").style.display = "block";
}

function fueraDeRango(minota){
    if(minota>5 || minota<0){
        return null;
    }
}
