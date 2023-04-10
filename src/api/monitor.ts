import request from '@/utils';
const getMonitorLogin_logList = async (
  page_size: number,
  current_page: number,
  attribute?: string,
) => {
  return await request.get({
    url: 'monitor/login_log/list',
    params: {
      page_size,
      current_page,
      attribute,
    },
  });
};
export { getMonitorLogin_logList };
