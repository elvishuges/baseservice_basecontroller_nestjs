import { DeleteResult } from 'typeorm';

export interface ICrudService<T> {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  update(entity: T): Promise<T>;
  create(entity: T): Promise<number>;
  delete(id: string): Promise<DeleteResult>;
}
