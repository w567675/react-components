import path from 'path';
import ip from 'ip';
import { options } from './package';
const {
    dist,
} = options;
const IP = ip.address();
const ROOTPATH = path.resolve(__dirname);
const BUILDPATH = path.resolve(ROOTPATH, dist);


module.exports =  Object.assign(options, {
    ROOTPATH,
    BUILDPATH,
    HOST: ip.address(),
});