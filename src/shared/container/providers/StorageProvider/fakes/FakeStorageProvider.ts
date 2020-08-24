import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  public storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const index = this.storage.findIndex(storageFile => storageFile === file);

    this.storage.splice(index, 1);
  }
}

export default FakeStorageProvider;
