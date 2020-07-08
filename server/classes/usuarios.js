class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }


    /*
    se busca la posicion 0 del arreglo porque persona
    tiene varios campos y nosotros solo necesitamos el 
    campo del id osea el campo numero 0 
    */
    getPersona(id) {
        let persona = this.personas.filter(per => {
            return per.id === id;
        })[0];

        return persona; //objeto || undefined/null
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorsala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala == sala
        });
        return personasEnSala;
    }

    /*
    Hace un nuevo arreglo con las personas que no tengan el 
    mismo id. las que si lo tengan seran borradas. 
    */
    /**
     *  Hace un nuevo arreglo con las personas que no tengan el 
    mismo id. las que si lo tengan seran borradas. 
     * 
     * @param {id} id - id del usuario a borrar 
     */
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(per => {
            return per.id != id;
        });

        return personaBorrada;
    }


}

module.exports = {
    Usuarios
}