module.exports = (servicios, modelos) => {

    const PersonaServicio = {};

    // metodos Repository
    PersonaServicio.listar = (params) => {
        return modelos.Persona.findAll(PersonaServicio.filtro(params));
    };

    PersonaServicio.encontrarUno = (params) => {
        return modelos.Persona.findOne(PersonaServicio.filtro(params));
    };

    PersonaServicio.construir = (params) => {
        return modelos.Persona.build(params);
    };

    PersonaServicio.guardar = (Persona, params) => {
        if (params) {
            Persona.set(params);
        }
        return Persona.save();
    };

    PersonaServicio.destruir = (Persona) => {
        return Persona.destroy();
    };

    PersonaServicio.filtro = (condiciones) => {
        return condiciones ? {
            where: condiciones
        } : {};
    };

    // metodos Factory
    PersonaServicio.crear = (params) => {
        return PersonaServicio.guardar(PersonaServicio.construir(params), params);
    };

    PersonaServicio.actualizar = (id, params) => {
        return PersonaServicio.obtener(id)
            .then((Persona) => {
                return PersonaServicio.guardar(Persona, params);
            });
    };

    PersonaServicio.obtener = (id) => {
        return PersonaServicio.encontrarUno({
                id
            })
            .then((Persona) => {
                if (!Persona) throw new Error('No se ha encontrado');
                return Persona;
            });
    }

    PersonaServicio.eliminar = (id) => {
        return PersonaServicio.obtener(id)
            .then(PersonaServicio.destruir);
    };

    return PersonaServicio;
};