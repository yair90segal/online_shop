import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateProductDto } from './dto/createProductDto';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async getAllProducts() {
    return await this.productRepository.find();
  }

  async createProduct(dto: CreateProductDto, file: Express.Multer.File) {
    const upload = await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('invalid file type');
    });

    if (!this.isUploadApiResponse(upload)) {
      throw new BadRequestException('Cloudinary upload failed');
    }

    const pruduct = this.productRepository.create({
      ...dto,
      cloudinaryUrl: upload.secure_url,
    });

    return await this.productRepository.save(pruduct);
  }

  async removeProduct() {}

  isUploadApiResponse(
    upload: UploadApiResponse | UploadApiErrorResponse,
  ): upload is UploadApiResponse {
    return (upload as UploadApiResponse).secure_url !== undefined;
  }
}
