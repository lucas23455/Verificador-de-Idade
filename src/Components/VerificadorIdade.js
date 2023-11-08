import React, { useState } from 'react';
import './VerificadorIdade.css'
import bebeM from './img/foto-bebe-m.png'
import jovemM from './img/foto-jovem-m.png'
import adultoM from './img/foto-adulto-m.png'
import idosoM from './img/foto-idoso-m.png'

import bebeF from './img/foto-bebe-f.png';
import jovemF from './img/foto-jovem-f.png';
import adultoF from './img/foto-adulto-f.png';
import idosoF from './img/foto-idoso-f.png';



const VerificadorIdade = () => {
    const [anoNascimento, setAnoNascimento] = useState('');
    const [sexo, setSexo] = useState('masculino');
    const [resultado, setResultado] = useState('Preencha os dados acima para ver o resultado!!');

    const verificar = () => {
        const data = new Date();
        const anoAtual = data.getFullYear();

        if (anoNascimento.length === 0 || Number(anoNascimento) > anoAtual) {
            window.alert('Digite os dados corretamente');
        } else {
            const idade = anoAtual - Number(anoNascimento);
            let genero = '';
            let imgSrc = '';

            if (sexo === 'masculino') {
                genero = 'homem';
                if (idade >= 0 && idade < 10) {
                    imgSrc = bebeM;
                } else if (idade < 21) {
                    imgSrc = jovemM;
                } else if (idade < 50) {
                    imgSrc = adultoM;
                } else {
                    imgSrc = idosoM;
                }
            } else {
                genero = 'mulher';
                if (idade >= 0 && idade < 10) {
                    imgSrc = bebeF;
                } else if (idade < 21) {
                    imgSrc = jovemF;
                } else if (idade < 50) {
                    imgSrc = adultoF;
                } else {
                    imgSrc = idosoF;
                }
            }

            setResultado(
                <div style={{ textAlign: 'center' }}>
                    <p>{`Detectamos ${genero} com ${idade} anos`}</p>
                    <img src={imgSrc} alt={`Foto de ${genero}`} />
                </div>
            );
        }
    };

    return (
        <div>
            <header>
                <h1>Verificador de idade</h1>
            </header>
            <section>
                <div>
                    <p>Ano de nascimento:
                        <input type="number" value={anoNascimento} onChange={(e) => setAnoNascimento(e.target.value)} />
                    </p>
                    <p>Sexo:
                        <input type="radio" name="sexo" value="masculino" checked={sexo === 'masculino'} onChange={() => setSexo('masculino')} />
                        <label htmlFor="masculino">Masculino</label>
                        <input type="radio" name="sexo" value="feminino" checked={sexo === 'feminino'} onChange={() => setSexo('feminino')} />
                        <label htmlFor="feminino">Feminino</label>
                    </p>
                    <p>
                        <input type="button" value="Verificar" onClick={verificar} />
                    </p>
                </div>
                <div id="res">
                    {resultado}
                </div>
            </section>
            <footer>
                <p>&copy;lucaspassos</p>
            </footer>
        </div>
    );
};

export default VerificadorIdade;
