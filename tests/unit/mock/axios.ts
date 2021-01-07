/*
 * @Author: vicshang
 * @Date: 2020-11-20 10:39:41
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-01-07 18:29:37
 * axois 模拟数据
 */
const mockAxios: any = jest.genMockFromModule('axios');

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.post = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.put = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.delete = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.all = jest.fn(() => Promise.resolve());
export default mockAxios;
