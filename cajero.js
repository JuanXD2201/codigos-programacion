
        function mostrarMenu() {
            let opcion;
            do {
                opcion = prompt("Seleccione una opción:\n1. Consultar saldo\n2. Retirar efectivo\n3. Depositar efectivo\n4. Salir");

                switch (opcion) {
                    case '1':
                        alert("Su saldo es: $1000");
                        break;
                    case '2':
                        alert("Retiro exitoso.");
                        break;
                    case '3':
                        alert("Depósito exitoso.");
                        break;
                    case '4':
                        alert("Gracias por usar el cajero automático. ¡Hasta luego!");
                        break;
                    default:
                        alert("Opción no válida. Por favor, intente nuevamente.");
                }
            } while (opcion !== '4');
        }

        mostrarMenu();

