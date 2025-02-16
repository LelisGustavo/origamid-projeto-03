// // Animação Números
import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {

    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }

  }

  return criarAnimais();

}

// import AnimaNumeros from './anima-numeros.js';

// export default function initFetchAnimais() {
//   function createAnimal(animal) {
//     const div = document.createElement('div');
//     div.classList.add('numero-animal');
//     div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
//     return div;
//   }

//   async function fetchAnimais(url) {
//     try {
//       const animaisResponse = await fetch(url);
//       const animaisJSON = await animaisResponse.json();
//       const numerosGrid = document.querySelector('.numeros-grid');
//       animaisJSON.forEach((animal) => {
//         const divAnimal = createAnimal(animal);
//         numerosGrid.appendChild(divAnimal);
//       });
//       const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
//       animaNumeros.init();
//     } catch (erro) {
//       console.log(erro);
//     }
//   }

//   fetchAnimais('./animaisapi.json');
// }
