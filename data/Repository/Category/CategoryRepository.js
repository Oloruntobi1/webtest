import { BaseRepository } from '../BaseRepository';
import { Categories } from './Categories.data';

class CategoryRepository extends BaseRepository {
  static all() {
    return Categories;
  }

  static findById(id) {
    return Categories[id];
  }
}

export { CategoryRepository };
