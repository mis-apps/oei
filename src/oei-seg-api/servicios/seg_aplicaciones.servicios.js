module.exports = (servicios, modelos) => {
    const segAplicacionesServicio = {};
  
    // metodos Repository
    segAplicacionesServicio.listar = (params) => {
      return modelos.segAplicaciones.findAll(segAplicacionesServicio.filtro(params));
    };
  
    segAplicacionesServicio.encontrarUno = (params) => {
      return modelos.segAplicaciones.findOne(segAplicacionesServicio.filtro(params));
    };
  
    segAplicacionesServicio.construir = (params) => {
      return modelos.segAplicaciones.build(params);
    };
  
    segAplicacionesServicio.guardar = (segAplicaciones, params) => {
        segAplicaciones.set(params);
      return segAplicaciones.save();
    };
  
    segAplicacionesServicio.destruir = (segAplicaciones) => {
      return segAplicaciones.destroy();
    };
  
    segAplicacionesServicio.filtro = (condiciones) => {
      return condiciones ? { where: condiciones } : {};
    };
  
    // metodos Factory
    segAplicacionesServicio.crear = (params) => {
      return segAplicacionesServicio.guardar(segAplicacionesServicio.construir(params));
    };
  
    segAplicacionesServicio.actualizar = (id, params) => {
      return segAplicacionesServicio.obtener(id)
      .then((segAplicaciones) => {
        return segAplicacionesServicio.guardar(segAplicaciones, params);
      });
    };
  
    segAplicacionesServicio.obtener = (id) => {
      return comentarioSsegAplicacionesServicioervicio.encontrarUno({ id })
      .then((segAplicaciones) => {
        if (!segAplicaciones) throw new Error('No se ha encontrado');
        return segAplicaciones;
      });
    }
  
    segAplicacionesServicio.eliminar = (id) => {
      return segAplicacionesServicio.obtener(id)
      .then(segAplicacionesServicio.destruir);
    };
  
    return segAplicacionesServicio;
  };
  