import deployToProd from './deployToProd';
import { log } from './log';

if (process.env.TRAVIS_BRANCH === 'master') {
  log('master not allowed to deploy.');
  process.exit(0);
} else if (process.env.TRAVIS_TAG) {
  log(`deploying tag ${process.env.TRAVIS_TAG}`);
  deployToProd();
} else {
  log('nothing to deploy');
}
