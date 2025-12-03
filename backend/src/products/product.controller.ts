import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/createProductDto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createProduct(
    @Body() dto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.productService.createProduct(dto, file);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.removeProduct(id);
  }
}
