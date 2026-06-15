const form = document.getElementById('form');
const res = document.getElementById('res');
const resultado = document.getElementById('resultado');
const tbodyResultado = document.getElementById('tbodyResultado');
const btnRefazer = document.getElementById('btnRefazer');

function classificarIMC(imc) {
    if (imc < 17) return 'Muito abaixo do peso';
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Acima do peso';
    if (imc < 35) return 'Obesidade I';
    if (imc < 40) return 'Obesidade II (severa)';
    return 'Obesidade III (mórbida)';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const alturaM = alturaCm / 100;

    const imc = peso / (alturaM * alturaM);
    const classificacao = classificarIMC(imc);

    tbodyResultado.innerHTML = `
        <tr>
            <td>${peso}</td>
            <td>${alturaM.toFixed(2)}</td>
            <td>${imc.toFixed(2)}</td>
            <td>${classificacao}</td>
        </tr>
    `;

    form.style.display = 'none';
    res.style.display = 'none';
    resultado.style.display = 'flex';
});

btnRefazer.addEventListener('click', () => {
    form.reset();
    form.style.display = 'flex';
    res.style.display = 'block';
    resultado.style.display = 'none';
});