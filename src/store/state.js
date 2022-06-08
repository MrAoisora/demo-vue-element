/**
 *定义菜单存储
 */
const MENUSTATE = {
  menuHeader: {
    data: '',
    headerActivedId: ''
  },
  menuLeftAside: {
    data: '',
    leftAsideActivedId: ''
  }
}

const state = {
  MENUSTATE,
  globalRouter: {url: `/`, params: {}, go: {}, replace: false},
  editableTabs: {tabs: []},
  menuData: '',
  itemId: '',
  selectedIndex: '',
  selectedIndex2: '',
  msg: '测试vue的本地存储',
  obj: {
    name: 'test',
    age: '1111',
    info: [
      'a', 'b', 'c'
    ]
  }
}
export default state
