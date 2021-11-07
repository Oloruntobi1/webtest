import { Dropbox } from 'dropbox';
import { FileTooLargeError } from '../../error/FileTooLargeError';

class DropboxFileUploader {
  constructor(file, fileName, folder) {
    this.file = file;
    this.fileName = fileName;
    this.folder = folder;

    // hard limit
    this.uploadFileSizeLimit = 1024 * 1024;
  }

  async upload() {
    const dbx = new Dropbox({
      accessToken: process.env.NEXT_PUBLIC_DROPBOX_ACCESS_TOKEN,
    });

    if (this.file.size <= this.uploadFileSizeLimit) {
      try {
        const response = await dbx.filesUpload({
          path: `/${this.folder}/${this.fileName}`,
          contents: this.file,
        });

        return response;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      // File is bigger than 1 Mb
      throw new FileTooLargeError(
        `File size is above ${this.uploadFileSizeLimit}`,
      );
    }
  }
}

export { DropboxFileUploader };
