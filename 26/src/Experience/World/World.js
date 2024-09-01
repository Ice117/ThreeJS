import * as THREE from 'three'
import Experience from "../Experience"
import Environment from './Environment.js'

export default class world {
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene

    // Test mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshStandardMaterial()
    )
    this.scene.add(testMesh)

    // Setup
    this.environment = new Environment()

  }
}