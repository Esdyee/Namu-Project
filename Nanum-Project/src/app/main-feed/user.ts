export class User {
  [userid: string]: {
    name: string
    credential: string;
    imgPath: string;
  };
}

export const users: User = {
  me: {
    name: '김경훈',
    credential: 'fastcampus WPS 수강생',
    imgPath: 'assets/images/me.png'
  },
  um: {
    name: '이웅모',
    credential: 'Angular 능력자',
    imgPath: 'assets/images/leewoongmo.jpg'
  },
  ch: {
    name: '박찬호',
    credential: '투머치토커',
    imgPath: 'assets/images/parkchanho.jpeg'
  },
  mz: {
    name: '주커버그',
    credential: 'Facebook Founder',
    imgPath: 'assets/images/zuckerberg.jpg'
  }
};
