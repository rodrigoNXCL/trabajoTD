$(document).ready(function() {
    let peliculaSeleccionada = '';

    // Capturar la película seleccionada cuando se hace clic en "Reservar"
    $('.reservar-btn').on('click', function() {
        peliculaSeleccionada = $(this).closest('.card').find('.card-title').text();
        $('#película').val(peliculaSeleccionada);
    });

    // Manejar el envío del formulario de reserva
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        confirmarReserva();
    });

    // Manejar el clic en "Confirmar reserva"
    $('.btn-success').on('click', function(e) {
        e.preventDefault();

        // Validar que todos los campos estén llenos
        if (validarFormulario()) {
            confirmarReserva();
        } else {
            mostrarError();
        }
    });

    // Función para validar el formulario
    function validarFormulario() {
        const pelicula = $('#película').val().trim();
        const horario = $('select[name="select"]').val();
        const asientos = $('input[type="text"]').eq(1).val().trim();
        const numeroTarjeta = $('input[type="text"]').eq(2).val().trim();
        const nombreTitular = $('input[type="text"]').eq(3).val().trim();
        const cvv = $('input[type="text"]').eq(4).val().trim();

        return pelicula && horario && asientos && numeroTarjeta && nombreTitular && cvv;
    }

    // Función para mostrar error de validación
    function mostrarError() {
        // Crea la alert del eerror
        const alertaError = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alertaError">
                <strong>¡Error!</strong> Por favor, completa todos los campos antes de confirmar la reserva.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        $('.modal-body').prepend(alertaError);

        setTimeout(function() {
            $('#alertaError').fadeOut();
        }, 5000);
    }

    // Función principal para confirmar la reserva
    function confirmarReserva() {
        const datosReserva = obtenerDatosFormulario();

        $('#staticBackdrop').modal('hide');

        mostrarProcesamiento();

        // Simular tiempo de procesamiento del pago
        setTimeout(() => {
            // Ocultar animación de procesamiento
            ocultarProcesamiento();

            // Mostrar modal de confirmación
            mostrarModalConfirmacion(datosReserva);

            // Mostrar alerta de éxito
            mostrarAlertaExito();

            // Limpiar formulario
            limpiarFormulario();
        }, 2000);
    }

    // Función para obtener los datos del formulario
    function obtenerDatosFormulario() {
        return {
            pelicula: $('#película').val(),
            horario: $('select[name="select"] option:selected').text(),
            asientos: $('input[type="text"]').eq(1).val(),
            numeroTarjeta: '**** **** **** ' + $('input[type="text"]').eq(2).val().slice(-4),
            nombreTitular: $('input[type="text"]').eq(3).val(),
            cvv: '***'
        };
    }

    // Función para mostrar animación de procesamiento
    function mostrarProcesamiento() {
        const modalProcesamiento = `
            <div class="modal fade" id="modalProcesamiento" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center p-5">
                            <div class="spinner-border text-primary mb-3" role="status" style="width: 3rem; height: 3rem;">
                                <span class="visually-hidden">Cargando...</span>
                            </div>
                            <h5>Procesando pago...</h5>
                            <p class="text-muted">Por favor espere mientras procesamos su reserva</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $('body').append(modalProcesamiento);
        $('#modalProcesamiento').modal('show');
    }

    // Función para ocultar animación de procesamiento
    function ocultarProcesamiento() {
        $('#modalProcesamiento').modal('hide');
        setTimeout(() => {
            $('#modalProcesamiento').remove();
        }, 500);
    }

    // Función para mostrar el modal de confirmación
    function mostrarModalConfirmacion(datos) {
        const modalConfirmacion = `
            <div class="modal fade" id="modalConfirmacion" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title">
                                <i class="bi bi-check-circle-fill me-2"></i>
                                ¡Reserva Confirmada!
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="text-primary">Detalles de la Película</h6>
                                    <p><strong>Película:</strong> ${datos.pelicula}</p>
                                    <p><strong>Horario:</strong> ${datos.horario}</p>
                                    <p><strong>Asientos:</strong> ${datos.asientos}</p>
                                </div>
                                <div class="col-md-6">
                                    <h6 class="text-primary">Detalles del Pago</h6>
                                    <p><strong>Tarjeta:</strong> ${datos.numeroTarjeta}</p>
                                    <p><strong>Titular:</strong> ${datos.nombreTitular}</p>
                                    <p><strong>Estado:</strong> <span class="badge bg-success">Aprobado</span></p>
                                </div>
                            </div>
                            <div class="alert alert-info mt-3">
                                <h6><i class="bi bi-info-circle me-2"></i>Información Importante</h6>
                                <ul class="mb-0">
                                    <li>Llegue 15 minutos antes de la función</li>
                                    <li>Presente su documento de identidad en taquilla</li>
                                    <li>Código de reserva: CF-${Math.random().toString(36).substr(2, 9).toUpperCase()}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" onclick="descargarTicket()">
                                <i class="bi bi-download me-2"></i>Descargar Ticket
                            </button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $('#modalConfirmacion').remove();
        $('body').append(modalConfirmacion);
        $('#modalConfirmacion').modal('show');
    }

    // Función para mostrar alerta de éxito
    function mostrarAlertaExito() {
        const alertaExito = `
            <div class="alert alert-success alert-dismissible fade show position-fixed" 
                 style="top: 20px; right: 20px; z-index: 9999; width: 300px;" 
                 id="alertaExito" role="alert">
                <i class="bi bi-check-circle-fill me-2"></i>
                <strong>¡Éxito!</strong> Su reserva ha sido confirmada.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;

        $('body').append(alertaExito);

        setTimeout(() => {
            $('#alertaExito').fadeOut(() => {
                $('#alertaExito').remove();
            });
        }, 5000);
    }

    // Función para limpiar el formulario
    function limpiarFormulario() {
        $('#contactForm')[0].reset();
        $('#película').val('');
    }

    // Función para simular descarga de ticket
    window.descargarTicket = function() {
        // mockup de la descarga
        const alertaDescarga = `
            <div class="alert alert-info alert-dismissible fade show position-fixed" 
                 style="top: 80px; right: 20px; z-index: 9999; width: 300px;" 
                 id="alertaDescarga" role="alert">
                <i class="bi bi-download me-2"></i>
                Descargando ticket... (Simulado)
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;

        $('body').append(alertaDescarga);

        setTimeout(() => {
            $('#alertaDescarga').fadeOut(() => {
                $('#alertaDescarga').remove();
            });
        }, 3000);
    };

    // Agregar animación a los botones de reservar
    $('.reservar-btn').hover(
        function() {
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );

    // Agregar validación en tiempo real para campos numéricos
    $('input[type="text"]').on('input', function() {
        const fieldName = $(this).prev('label').text();

        // Validación para número de tarjeta
        if (fieldName.includes('tarjeta')) {
            let value = $(this).val().replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            $(this).val(value);

            if (value.replace(/\s/g, '').length > 16) {
                $(this).val(value.substring(0, 19));
            }
        }

        // Validación para CVV
        if (fieldName.includes('CVV')) {
            let value = $(this).val().replace(/\D/g, '');
            if (value.length > 3) {
                $(this).val(value.substring(0, 3));
            } else {
                $(this).val(value);
            }
        }

        // Validación para cantidad de asientos
        if (fieldName.includes('asientos')) {
            let value = $(this).val().replace(/\D/g, '');
            if (value > 10) {
                $(this).val('10');
            } else {
                $(this).val(value);
            }
        }
    });
});