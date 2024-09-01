import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter{
  constructor(sources){
    super()

    // Options
    this.sources = sources

    // Setup
    this.items = {}
    this.toLoad = this.sources.length
    this.loaded = 0
  }
}