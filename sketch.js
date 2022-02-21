let interfaz

function setup() {
  createCanvas(500, 500)
  interfaz = new Interfaz(new Array)

  interfaz.agregarVehiculo(new Carros("carro", "serie", "Ferrari", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Carros("carro", "serie", "Audi", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Carros("carro", "serie", "Chevrolet", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Carros("carro", "serie", "Mercedez", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))

  interfaz.agregarVehiculo(new Motos("moto", "serie", "Yamaha", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Motos("moto", "serie", "Ducati", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Motos("moto", "serie", "N-max", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))
  interfaz.agregarVehiculo(new Motos("moto", "serie", "Suzuki", "cilindraje", "numeroPasajeros", "tiempoGarantia", "valorImpuestos",
    "cajaCambios", "consumoGasolina", "tipoGasolina"))

  let opcion1 = window.prompt("Seleciona el tipo de vehículo: \n 1.Carros \n 2.Motos")
  switch (opcion1) {
    case "1":
      let opcion2 = window.prompt("Seleciona la marca de carro: \n 1.Ferrari \n 2.Audi \n 3.Chevrolet \n 4.Mercedez")
      switch (opcion2) {
        case "1":
          interfaz.verVehiculosPorMarca("Ferrari")
          break

        case "2":
          interfaz.verVehiculosPorMarca("Audi")
          break

        case "3":
          interfaz.verVehiculosPorMarca("Chevrolet")
          break

        case "4":
          interfaz.verVehiculosPorMarca("Mercedez")
          break

      }

        case "2":
          let opcion3 = window.prompt("Seleciona la marca de moto: \n 1.Yamaha \n 2.Ducati \n 3.N-max \n 4.Suzuki")
          switch (opcion3) {
            case "1":
              interfaz.verVehiculosPorMarca("Yamaha")
              break

            case "2":
              interfaz.verVehiculosPorMarca("Ducati")
              break

            case "3":
              interfaz.verVehiculosPorMarca("N-max")
              break

            case "4":
              interfaz.verVehiculosPorMarca("Suzuki")
              break
          }

          /* case "3":
             interfaz.tipoVehiculo = "Toyota"
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")
             break

           case "4":
             interfaz.tipoVehiculo = "Mazda"
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")
             interfaz.verCarros(modelo, serie, "marca", cilindraje, numeroPasajeros, tiempoGarantia, valorImpuestos,
               "cajaCambios", consumoGasolina, "tipoGasolina")*/
      }
  }