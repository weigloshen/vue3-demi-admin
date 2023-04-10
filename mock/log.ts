import fs from 'fs';
import path from 'path';
export default [
  {
    url: '/mock/api/monitor/login_log/list',
    method: 'get',
    response: () => {
      const data = fs
        .readFileSync(path.resolve(__dirname, './login_log.json'))
        .toString();
      return { data: JSON.parse(data) };
    },
  },
];
