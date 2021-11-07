import { NotImplementedError } from '../../error/NotImplementedError';

class BaseRepository {
  static all() {
    throw new NotImplementedError();
  }

  static findById() {
    throw new NotImplementedError();
  }
}

export { BaseRepository };
