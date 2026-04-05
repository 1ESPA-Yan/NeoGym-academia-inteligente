import { useState } from "react";

function CalculadoraImc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcularImc() {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a || a <= 0) {
      alert("Preencha os campos corretamente.");
      return;
    }

    const imc = p / (a * a);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal ✔";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade Grau I";
    else if (imc < 39.9) classificacao = "Obesidade Grau II";
    else classificacao = "Obesidade Grau III";

    setResultado({ imc: imc.toFixed(2), classificacao });
  }

  function limpar() {
    setPeso("");
    setAltura("");
    setResultado(null);
  }

  return (
    <div className="imc-container">
      <div className="imc-hero">
        <h1>Calculadora de <span>IMC</span></h1>
        <p>Descubra seu Índice de Massa Corporal</p>
      </div>

      <div className="imc-card">
        <div className="imc-form">
          <input
            type="number"
            placeholder="Peso (kg) — ex: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            type="number"
            placeholder="Altura (m) — ex: 1.75"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <button onClick={calcularImc}>Calcular</button>
        </div>

        {resultado && (
          <div className="imc-resultado">
            <h2>{resultado.imc}</h2>
            <p>{resultado.classificacao}</p>
            <button className="btn-limpar" onClick={limpar}>Calcular novamente</button>
          </div>
        )}
      </div>

      <div className="imc-tabela">
        <h3>Tabela de referência</h3>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Abaixo de 18,5</td><td>Abaixo do peso</td></tr>
            <tr><td>18,5 – 24,9</td><td>Peso normal</td></tr>
            <tr><td>25,0 – 29,9</td><td>Sobrepeso</td></tr>
            <tr><td>30,0 – 34,9</td><td>Obesidade Grau I</td></tr>
            <tr><td>35,0 – 39,9</td><td>Obesidade Grau II</td></tr>
            <tr><td>Acima de 40</td><td>Obesidade Grau III</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CalculadoraImc;