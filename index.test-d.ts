import {expectType} from 'tsd';
import findCacheDirectory from './index.js';

const name = 'find-cache-directory';

expectType<string | undefined>(findCacheDirectory({name}));
expectType<string | undefined>(findCacheDirectory({name, files: ['/bar']}));
expectType<string | undefined>(findCacheDirectory({name, cwd: '/fooz'}));
expectType<string | undefined>(findCacheDirectory({name, create: true}));
