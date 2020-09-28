/**
 * @description 广告主充值
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.CommonOrderPaymentInfo();

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/adRecharge/recharge', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.mankeAd.CommonOrderPaymentInfo();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
