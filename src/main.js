/**
 * This class is the main facade of the whole engine.
 * All application (and game) state is stored here and
 * processed in other classes and methods.
 */
import EngineConfig from '../config/engine.config.json' with {type: 'json'};

export default class GEM {
    __instance; /**@typedef {instance of GEM} __instance*/

    get getInstance() {
        if (!this.__instance) this.__instance = new GEM();
        return this.__instance
    }
}