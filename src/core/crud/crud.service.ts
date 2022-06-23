import { Inject, BadGatewayException } from '@nestjs/common';
import { Repository, DeepPartial, DeleteResult } from 'typeorm';
import { Model } from 'mongoose';
import { ICrudService } from './interfaces/crud-service.interface';
import { CourseBase } from '../shema/course.base';
import { NotFoundException } from '@nestjs/common';

export class CrudService<T> implements ICrudService<T> {
  protected constructor(protected readonly genericModel: Model<T>) {}

  create(entity: DeepPartial<T>): Promise<number> {
    try {
      return new Promise<number>((resolve, reject) => {
        this.genericModel
          .create(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async findAll(): Promise<T[]> {
    const record = await this.genericModel.find({});
    if (!record) {
      throw new NotFoundException(`The requested record was not found`);
    }
    return record;
  }

  async findOne(id: string): Promise<T> {
    const record = await this.genericModel.findById(id);
    if (!record) {
      throw new NotFoundException(`The requested record was not found`);
    }
    return record;
  }

  async delete(id: string): Promise<DeleteResult> {
    try {
      return await this.genericModel.remove({ _id: id as any });
    } catch (error) {
      throw new NotFoundException(`The record was not found`, error);
    }
  }

  update(entity: any): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.genericModel
          .findOne(entity.id)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let retrievedEntity: any = responseGet as any;
              this.genericModel
                .updateOne(retrievedEntity)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
