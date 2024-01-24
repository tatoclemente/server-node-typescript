import { Server } from "./presentation/server"

(() => {
  main()
})()


async function main() {
  // Todo: await base de datos

  // Todo: inicio de nuestro servidor
  new Server({
    port: 8080,
  })
  .start()
  
}