const device = new ClientJS();

export const iseIE = version => device.isIE() && parseInt(device.getBrowserVersion()) === version;
export const isLteIE = version => device.isIE() && parseInt(device.getBrowserVersion()) <= version;
export const isLtIE = version => device.isIE() && parseInt(device.getBrowserVersion()) < version;
export const isGteIE = version => device.isIE() && parseInt(device.getBrowserVersion()) >= version;
export const isGtIE = version => device.isIE() && parseInt(device.getBrowserVersion()) > version;

export default device;
