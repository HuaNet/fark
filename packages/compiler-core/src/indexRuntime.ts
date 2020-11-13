import {Index} from './typeDefine';
import fnv from 'fnv-plus';


function indexMain(arg: string = '0'): Index {
  return {
    id: fnv.hash(arg, 64).dec(),
    flag: false,
    cache: false,
    count: 0
  };
}
indexMain();
