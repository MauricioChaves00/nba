import { Injectable, Inject } from '@nestjs/common'; 
import { Producto } from './entities/producto.entity'; 
@Injectable() 
export class ProductosService { 
  constructor( 
    @Inject('PRODUCTOS_REPOSITORY') 
    private productosRepository: typeof Producto 
  ) {} 
  async findAll(): Promise<Producto[]> { 
    return this.productosRepository.findAll<Producto>(); 
  } 
}


