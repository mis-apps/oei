
module.exports = (servicios, modelos) => {
    const AplicacionServicio = {};

    // metodos Repository
    AplicacionServicio.listar = (params) => {
      return modelos.Aplicacion.findAll(AplicacionServicio.filtro(params));
    };

    AplicacionServicio.filtro = (condiciones) => {
      return condiciones ? { where: condiciones } : {};
    };

    return AplicacionServicio;
  };
