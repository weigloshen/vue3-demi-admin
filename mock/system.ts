import { faker } from '@faker-js/faker';
const DEPARTMENT = [
  '人力资源部',
  '财务部',
  '销售部',
  '市场部',
  '生产部',
  '技术部',
  '质量管理部',
  '物资管理部',
];
const PERMISSIONS = ['ADMIN', 'GUEST', 'USER'];
export default [
  {
    url: '/mock/api/system/menu/list',
    method: 'get',
    response: (options: any) => {
      const arr: any = [];
      console.log(options.query);
      for (let index = 0; index < options.query.page_size; index++) {
        const path = faker.system.filePath();
        arr.push({
          name: '@cname',
          path,
          redirect: path + '/index',
          emoji: faker.internet.emoji(),
          'attribute|1': options.query.attribute ?? ['catalog', 'menu'],
          birthdate: faker.date.birthdate({
            min: 1989,
            max: 2000,
            mode: 'year',
          }),
        });
      }
      return { data: arr };
    },
  },
  {
    url: '/mock/api/system/permissions/list',
    method: 'get',
    response: (options: any) => {
      const arr: any = [];
      console.log(options.query);
      // 描述; 创建人
      for (let index = 0; index < options.query.page_size; index++) {
        arr.push({
          name: '@cname',
          'permissions|1':
            options.query['attribute[permissions]'] !== '' &&
            options.query['attribute[permissions]']
              ? options.query['attribute[permissions]']
              : PERMISSIONS,
          avatar: faker.image.avatar(),
          'department|1':
            options.query['attribute[department]'] !== '' &&
            options.query['attribute[department]']
              ? options.query['attribute[department]']
              : DEPARTMENT,
          describe: '@csentence',
          creator: '@name',
        });
      }
      return { data: arr };
    },
  },
  {
    url: '/mock/api/system/information/list',
    method: 'get',
    response: (options: any) => {
      const arr: any = [];
      console.log();
      for (let index = 0; index < options.query.page_size; index++) {
        arr.push({
          name: faker.internet.userName(),
          emoji: faker.internet.emoji(),
          'information|1': options.query['attribute[information]'] ?? [
            '前端',
            '测试',
            '后端',
            'UI',
            '运维',
            'Rust',
            '嵌入式',
          ],
          email: faker.internet.email(),
          location: faker.address.cityName(),
          ip: faker.internet.ipv4(),
        });
      }
      return { data: arr };
    },
  },
];
