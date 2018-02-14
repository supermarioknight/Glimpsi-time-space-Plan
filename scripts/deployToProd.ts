import * as s3 from 's3';
import { log } from './log';

const bucket = 'goglimpsi.com';

// tslint:disable-next-line no-any
function getS3Params(localFile: string, _: any, callback: any) {
  // If file has a hash, cache it for one year.
  const secondsToCache = /\.\w{8}\./.exec(localFile) ? 3600 * 24 * 365 : 60;

  const s3Params = {
    CacheControl: `max-age=${secondsToCache}`,
  };

  callback(null, s3Params);
}

export default function deployToProd() {
  const client = s3.createClient({
    s3Options: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1',
    },
    // tslint:disable-next-line no-any
  }) as any;

  const upload = client.uploadDir({
    localDir: '../build',
    // We want to keep versions around just in case people are referencing an old once
    // because of PWA.
    deleteRemoved: false,
    s3Params: {
      Bucket: bucket,
    },
    getS3Params,
  });

  upload.on('error', () => {
    log('unable to sync, check your region maybe?');
    process.exit(1);
  });

  upload.on('fileUploadStart', (localFilePath, s3Key) => {
    log(`starting upload of ${localFilePath} to ${bucket} ${s3Key}`);
  });

  upload.on('fileUploadEnd', (localFilePath, s3Key) => {
    log(`finished upload of ${bucket} ${s3Key}`);
  });

  upload.on('end', () => {
    log(`finished sync of s3 bucket ${bucket}`);
  });
}
