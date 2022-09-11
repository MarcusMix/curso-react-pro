// const usuario = {
//   nome: 'John Doe',
//   login() {
//     console.log(`${this.nome} fez login!`);
//   },
//   logout() {
//     console.log(`${this.nome} fez logout!`);
//   }
// }

class Usuario {
    constructor(nome) {
      this.nome = nome
    }
  
    static sayHello() {
      console.log('Hello world!')
    }
  
    login() {
      console.log(`${this.nome} fez login!`)
    }
  
    logout() {
      console.log(`${this.nome} fez logout!`)
    }
  }
  
  const usuario = new Usuario('John Doe');
  const usuario2 = new Usuario('Jane Doe');
  
  usuario.login()
  usuario2.login()